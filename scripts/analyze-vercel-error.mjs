#!/usr/bin/env node
import { readFile } from 'node:fs/promises';
import path from 'node:path';

async function main() {
  const logPath = process.argv[2];
  if (!logPath) {
    console.error('No log file path provided to analyze-vercel-error.mjs.');
    return;
  }

  let logContent;
  try {
    const resolvedPath = path.resolve(logPath);
    logContent = await readFile(resolvedPath, 'utf8');
  } catch (error) {
    console.error(`Unable to read log file at ${logPath}:`, error.message);
    return;
  }

  if (!logContent.trim()) {
    console.log('Log file is empty. Skipping AI analysis.');
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.log('OPENAI_API_KEY secret not configured. Provide it to enable automatic AI remediation suggestions.');
    return;
  }

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
  const truncatedLog = logContent.slice(-6000);
  const systemPrompt = [
    'You are an expert DevOps assistant helping developers debug Vercel deployments.',
    'Summarize the most likely root cause of the failure and list concise action items to fix it.',
    'Reference specific lines from the log when possible and keep the response under 12 bullet points.'
  ].join(' ');

  const userPrompt = [
    'Vercel deployment log excerpt:',
    '```',
    truncatedLog,
    '```',
    `Return:
1. A short summary of the failure.
2. Actionable remediation steps (numbered list).
3. Any relevant documentation links when applicable.`
  ].join('\n');

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.2,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API request failed:', response.status, errorText);
      return;
    }

    const data = await response.json();
    const suggestion = data?.choices?.[0]?.message?.content?.trim();

    if (suggestion) {
      console.log('AI deployment analysis:\n');
      console.log(suggestion);
    } else {
      console.log('OpenAI API returned no suggestions.');
    }
  } catch (error) {
    console.error('Failed to analyze deployment logs with OpenAI:', error.message);
  }
}

main().catch((error) => {
  console.error('Unexpected error while running analyze-vercel-error.mjs:', error.message);
});
