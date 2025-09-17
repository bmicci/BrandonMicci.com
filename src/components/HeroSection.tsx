'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const metricRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const metricElements = metricRefs.current.filter(Boolean) as HTMLSpanElement[];

    if (!metricElements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLSpanElement;
            const target = parseInt(element.getAttribute('data-target') ?? '0', 10);
            const suffix = element.getAttribute('data-suffix') ?? '';
            const format = element.getAttribute('data-format') ?? '';

            let current = 0;
            const increment = target / 100;
            const duration = 2000;
            const stepTime = duration / 100;

            const timer = window.setInterval(() => {
              current += increment;

              if (current >= target) {
                current = target;
                window.clearInterval(timer);
              }

              const displayValue = Math.floor(current);

              if (format === 'thousands' && displayValue >= 1000) {
                const thousandsValue = parseFloat((displayValue / 1000).toFixed(1));
                element.textContent = `${thousandsValue}K${suffix}`;
              } else {
                element.textContent = `${displayValue}${suffix}`;
              }
            }, stepTime);

            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 },
    );

    metricElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative pt-12">
      <style jsx>{`
        .hero-background-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            min-height: 100vh;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            overflow: hidden;
            z-index: 1;
        }

        .floating-elements-master {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .floating-circle {
            position: absolute;
            border-radius: 50%;
            background: linear-gradient(135deg, #00d4ff20 0%, #1e90ff20 100%);
            animation: float 6s ease-in-out infinite;
        }

        .hero-circle-1 {
            width: 200px;
            height: 200px;
            top: 10%;
            right: 10%;
            animation-delay: 0s;
        }

        .hero-circle-2 {
            width: 120px;
            height: 120px;
            top: 60%;
            left: 5%;
            animation-delay: 2s;
        }

        .hero-circle-3 {
            width: 80px;
            height: 80px;
            top: 35%;
            left: 20%;
            animation-delay: 4s;
        }

        .diff-circle-1 {
            width: 150px;
            height: 150px;
            top: 45%;
            right: 8%;
            animation-delay: 1s;
            background: linear-gradient(135deg, #00d4ff15 0%, #1e90ff15 100%);
        }

        .diff-circle-2 {
            width: 100px;
            height: 100px;
            top: 65%;
            left: 12%;
            animation-delay: 3s;
            background: linear-gradient(135deg, #00d4ff18 0%, #1e90ff18 100%);
        }

        .metrics-number-1,
        .metrics-number-2,
        .metrics-number-3 {
            position: absolute;
            font-weight: 900;
            color: rgba(0, 212, 255, 0.03);
            animation: floatNumber 8s ease-in-out infinite;
            font-family: 'Inter', sans-serif;
        }

        .metrics-number-1 {
            top: 75%;
            left: 5%;
            font-size: 8rem;
            animation-delay: 0s;
        }

        .metrics-number-2 {
            top: 85%;
            right: 10%;
            font-size: 6rem;
            animation-delay: 2s;
        }

        .metrics-number-3 {
            bottom: 10%;
            left: 15%;
            font-size: 5rem;
            animation-delay: 4s;
        }

        .gradient-overlay-1 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 40%;
            background: linear-gradient(180deg, rgba(10, 10, 10, 0.3) 0%, transparent 100%);
            animation: shimmer 4s ease-in-out infinite;
        }

        .gradient-overlay-2 {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30%;
            background: linear-gradient(0deg, rgba(22, 33, 62, 0.2) 0%, transparent 100%);
            animation: shimmer 5s ease-in-out infinite reverse;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-30px) rotate(180deg);
                opacity: 0.7;
            }
        }

        @keyframes floatNumber {
            0%, 100% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0.02;
            }
            50% {
                transform: translateY(-40px) rotate(5deg);
                opacity: 0.06;
            }
        }

        @keyframes shimmer {
            0%, 100% {
                opacity: 0.3;
            }
            50% {
                opacity: 0.6;
            }
        }

        @media (max-width: 768px) {
            .hero-background-wrapper {
                min-height: 100vh;
            }

            .floating-circle {
                transform: scale(0.7);
            }

            .metrics-number-1,
            .metrics-number-2,
            .metrics-number-3 {
                font-size: 4rem;
            }

            .hero-circle-1 {
                width: 140px;
                height: 140px;
            }

            .hero-circle-2 {
                width: 90px;
                height: 90px;
            }

            .hero-circle-3 {
                width: 60px;
                height: 60px;
            }
        }

        @media (max-width: 480px) {
            .metrics-number-1,
            .metrics-number-2,
            .metrics-number-3 {
                font-size: 3rem;
            }

            .floating-circle {
                transform: scale(0.5);
            }
        }
      `}</style>

      <style jsx>{`
        .title-section {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 20px 2rem 15px;
            text-align: center;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 1;
        }

        .title-content {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
        }

        .main-title {
            font-size: 2.8rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 1rem;
            letter-spacing: -0.01em;
            color: white;
            animation: titleSlideUp 1s ease-out;
        }

        .main-title .text-highlight {
            background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
        }

        @media (max-width: 768px) {
            .main-title .text-highlight::after {
                content: '✨';
                position: absolute;
                right: -25px;
                top: -8px;
                font-size: 1rem;
                animation: sparkleEffect 2s ease-in-out infinite;
            }
        }

        .main-subtitle {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.5;
            margin: 0;
            font-weight: 400;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            animation: subtitleFade 1s ease-out 0.3s both;
        }

        @keyframes titleSlideUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes subtitleFade {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes sparkleEffect {
            0%, 100% {
                opacity: 0.3;
                transform: scale(0.8);
            }
            50% {
                opacity: 1;
                transform: scale(1.1);
            }
        }

        @media (max-width: 1024px) {
            .main-title {
                font-size: 2.4rem;
            }
        }

        @media (max-width: 768px) {
            .title-section {
                padding: 15px 1rem 10px;
                order: 1;
            }

            .main-title {
                font-size: 2rem;
                margin-bottom: 0.75rem;
            }

            .main-subtitle {
                font-size: 1.1rem;
            }
        }

        @media (max-width: 480px) {
            .main-title {
                font-size: 1.7rem;
                line-height: 1.3;
            }

            .main-subtitle {
                font-size: 1rem;
            }
        }
      `}</style>

      <style jsx>{`
        .hero-paragraph-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 20px 2rem;
            text-align: center;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 2;
        }

        .hero-paragraph-container {
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
        }

        .hero-intro {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.75);
            line-height: 1.6;
            margin: 0;
            font-weight: 400;
            animation: fadeIn 1s ease-out 0.3s both;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            .hero-paragraph-wrapper {
                padding: 15px 1rem;
                order: 3;
            }

            .hero-paragraph-container {
                max-width: 100%;
            }

            .hero-intro {
                font-size: 1.1rem;
                line-height: 1.7;
                text-align: left;
                padding: 20px 15px;
                background: rgba(0, 0, 0, 0.3);
                border-radius: 16px;
                border: none;
                backdrop-filter: blur(10px);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            }
        }

        @media (max-width: 480px) {
            .hero-paragraph-wrapper {
                padding: 10px 0.75rem;
            }

            .hero-intro {
                font-size: 1.05rem;
                padding: 18px 12px;
            }
        }
      `}</style>

      <style jsx>{`
        .image-section {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 15px 2rem;
            text-align: center;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 3;
        }

        .image-content {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            height: 350px;
            animation: imageReveal 1s ease-out 0.5s both;
        }

        .professional-image {
            border-radius: 16px;
            object-fit: cover;
            border: 1px solid rgba(255, 255, 255, 0.15);
            box-shadow:
                0 0 0 1px rgba(0, 212, 255, 0.2),
                0 0 20px rgba(0, 212, 255, 0.15),
                0 8px 32px rgba(0, 0, 0, 0.4);
            transition: all 0.4s ease;
            animation: professionalPulse 3s ease-in-out infinite;
        }

        @media (min-width: 769px) {
            .professional-image:hover {
                transform: translateY(-8px);
                box-shadow:
                    0 0 0 2px rgba(0, 212, 255, 0.4),
                    0 0 30px rgba(0, 212, 255, 0.25),
                    0 12px 40px rgba(0, 0, 0, 0.5);
                animation: professionalHeartbeat 1.5s ease-in-out infinite;
            }
        }

        @keyframes imageReveal {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        @keyframes professionalPulse {
            0%, 100% {
                transform: scale(1);
                box-shadow:
                    0 0 0 1px rgba(0, 212, 255, 0.2),
                    0 0 20px rgba(0, 212, 255, 0.15),
                    0 8px 32px rgba(0, 0, 0, 0.4);
            }
            50% {
                transform: scale(1.015);
                box-shadow:
                    0 0 0 2px rgba(0, 212, 255, 0.3),
                    0 0 25px rgba(0, 212, 255, 0.2),
                    0 10px 35px rgba(0, 0, 0, 0.45);
            }
        }

        @keyframes professionalHeartbeat {
            0%, 100% {
                transform: translateY(-8px) scale(1);
            }
            50% {
                transform: translateY(-8px) scale(1.02);
            }
        }

        @media (max-width: 768px) {
            .image-section {
                padding: 20px 1rem;
                order: 2;
            }

            .image-content {
                max-width: 280px;
                height: 320px;
            }

            .professional-image {
                animation: professionalPulse 4s ease-in-out infinite;
            }
        }

        @media (max-width: 480px) {
            .image-section {
                padding: 15px 0.75rem;
            }

            .image-content {
                max-width: 240px;
                height: 280px;
            }

            .professional-image {
                border-radius: 12px;
            }
        }
      `}</style>

      <style jsx>{`
        .compact-differentiators {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 15px 2rem 20px;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 4;
        }

        .compact-container {
            max-width: 900px;
            margin: 0 auto;
            width: 100%;
        }

        .compact-box {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 16px;
            padding: 1.5rem;
            backdrop-filter: blur(20px);
            position: relative;
            overflow: hidden;
            animation: slideUp 1s ease-out;
        }

        .compact-header {
            text-align: center;
            margin-bottom: 1.25rem;
        }

        .rocket-icon {
            font-size: 1.5rem;
            display: block;
            margin-bottom: 0.5rem;
            animation: rocketBounce 2s ease-in-out infinite;
        }

        .header-text {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.6);
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 600;
            margin: 0;
        }

        .items-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
        }

        .compact-item {
            padding: 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
        }

        @media (min-width: 769px) {
            .compact-item:hover {
                background: rgba(0, 212, 255, 0.08);
                transform: translateY(-2px);
                border-left: 3px solid #00d4ff;
            }
        }

        .item-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #00d4ff;
            margin-bottom: 0.4rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .item-emoji {
            font-size: 1rem;
            animation: emojiTwinkle 1.5s ease-in-out infinite;
        }

        .item-text {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.85);
            line-height: 1.4;
            margin: 0;
        }

        .compact-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.05), transparent);
            animation: shimmerEffect 3s ease-in-out infinite;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes rocketBounce {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-8px);
            }
        }

        @keyframes emojiTwinkle {
            0%, 100% {
                opacity: 0.8;
                transform: scale(1);
            }
            50% {
                opacity: 1;
                transform: scale(1.1);
            }
        }

        @keyframes shimmerEffect {
            0% {
                left: -100%;
            }
            50% {
                left: 100%;
            }
            100% {
                left: 100%;
            }
        }

        @media (max-width: 1024px) and (min-width: 769px) {
            .compact-container {
                max-width: 750px;
            }

            .items-grid {
                gap: 1rem;
            }

            .compact-item {
                padding: 0.875rem;
            }
        }

        @media (max-width: 768px) {
            .compact-differentiators {
                padding: 10px 1rem 15px;
                order: 4;
            }

            .compact-box {
                padding: 1.25rem;
            }

            .items-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
            }

            .compact-item {
                padding: 0.875rem;
                background: rgba(255, 255, 255, 0.03);
                border-left: 3px solid transparent;
                animation: mobileSlide 0.6s ease-out;
            }

            .compact-item:nth-child(1) { animation-delay: 0.1s; }
            .compact-item:nth-child(2) { animation-delay: 0.2s; }
            .compact-item:nth-child(3) { animation-delay: 0.3s; }
            .compact-item:nth-child(4) { animation-delay: 0.4s; }

            .compact-item::before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                bottom: 0;
                width: 3px;
                background: linear-gradient(180deg, #00d4ff, #1e90ff);
                animation: progressBar 2s ease-in-out infinite;
                animation-delay: calc(var(--delay, 0) * 0.5s);
            }

            .compact-item:nth-child(1)::before { --delay: 1; }
            .compact-item:nth-child(2)::before { --delay: 2; }
            .compact-item:nth-child(3)::before { --delay: 3; }
            .compact-item:nth-child(4)::before { --delay: 4; }
        }

        @keyframes mobileSlide {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes progressBar {
            0% {
                height: 0%;
                opacity: 0.5;
            }
            50% {
                height: 100%;
                opacity: 1;
            }
            100% {
                height: 100%;
                opacity: 0.7;
            }
        }

        @media (max-width: 480px) {
            .compact-differentiators {
                padding: 12px 0.75rem;
            }

            .compact-box {
                padding: 1rem;
            }

            .compact-item {
                padding: 0.75rem;
            }

            .item-title {
                font-size: 1rem;
            }

            .item-text {
                font-size: 0.9rem;
            }
        }
      `}</style>

      <style jsx>{`
        .metrics-content-wrapper {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: white;
            padding: 40px 2rem;
            position: relative;
            background: transparent;
            z-index: 10;
            order: 5;
        }

        .metrics-container {
            max-width: 1000px;
            margin: 0 auto;
            width: 100%;
            position: relative;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1.5rem;
            animation: fadeInUp 1s ease-out;
        }

        .metric-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 212, 255, 0.2);
            border-radius: 16px;
            padding: 2rem 1.5rem;
            text-align: center;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        @media (min-width: 769px) {
            .metric-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.1), transparent);
                transition: left 0.6s ease;
            }

            .metric-card:hover::before {
                left: 100%;
            }

            .metric-card:hover {
                transform: translateY(-8px);
                border-color: rgba(0, 212, 255, 0.4);
                box-shadow: 0 15px 30px rgba(0, 212, 255, 0.2);
            }
        }

        @media (max-width: 768px) {
            .metric-card {
                animation: mobileCountUp 2s ease-out;
                animation-fill-mode: both;
            }

            .metric-card:nth-child(1) { animation-delay: 0.2s; }
            .metric-card:nth-child(2) { animation-delay: 0.4s; }
            .metric-card:nth-child(3) { animation-delay: 0.6s; }
            .metric-card:nth-child(4) { animation-delay: 0.8s; }

            .metric-card::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 3px;
                background: linear-gradient(90deg, #00d4ff, #1e90ff);
                animation: loadingBar 2s ease-in-out infinite;
                animation-delay: calc(var(--card-delay, 0) * 0.5s);
            }

            .metric-card:nth-child(1)::after { --card-delay: 0; }
            .metric-card:nth-child(2)::after { --card-delay: 1; }
            .metric-card:nth-child(3)::after { --card-delay: 2; }
            .metric-card:nth-child(4)::after { --card-delay: 3; }
        }

        .metric-number {
            font-size: 2.5rem;
            font-weight: 800;
            background: linear-gradient(135deg, #00d4ff 0%, #1e90ff 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 0.5rem;
            display: block;
            position: relative;
        }

        @media (max-width: 768px) {
            .metric-number::before {
                content: '🔥';
                position: absolute;
                top: -15px;
                right: -20px;
                font-size: 1rem;
                animation: flame 1.5s ease-in-out infinite;
                opacity: 0;
                animation-delay: 2s;
                animation-fill-mode: both;
            }

            .metric-card:nth-child(1) .metric-number::before { content: '💰'; }
            .metric-card:nth-child(2) .metric-number::before { content: '👥'; }
            .metric-card:nth-child(3) .metric-number::before { content: '📈'; }
            .metric-card:nth-child(4) .metric-number::before { content: '⭐'; }
        }

        .metric-label {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
            text-transform: uppercase;
            letter-spacing: 1px;
            font-weight: 600;
            position: relative;
        }

        @media (max-width: 768px) {
            .metric-label {
                animation: typewriter 1s ease-out;
                animation-delay: 1.5s;
                animation-fill-mode: both;
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes mobileCountUp {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(30px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }

        @keyframes loadingBar {
            0% {
                width: 0%;
                opacity: 0.8;
            }
            50% {
                width: 100%;
                opacity: 1;
            }
            100% {
                width: 100%;
                opacity: 0.6;
            }
        }

        @keyframes flame {
            0%, 100% {
                opacity: 0;
                transform: scale(0.8) rotate(-10deg);
            }
            50% {
                opacity: 1;
                transform: scale(1.2) rotate(10deg);
            }
        }

        @keyframes typewriter {
            from {
                width: 0;
                opacity: 0;
            }
            to {
                width: 100%;
                opacity: 1;
            }
        }

        @media (max-width: 1024px) {
            .metrics-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 1.25rem;
            }
        }

        @media (max-width: 768px) {
            .metrics-content-wrapper {
                padding: 15px 1rem;
                order: 5;
            }

            .metrics-grid {
                grid-template-columns: 1fr;
                gap: 1rem;
                max-width: 350px;
                margin: 0 auto;
            }

            .metric-card {
                padding: 1.5rem 1rem;
            }

            .metric-number {
                font-size: 2rem;
            }
        }

        @media (max-width: 480px) {
            .metrics-content-wrapper {
                padding: 20px 0.75rem;
            }

            .metric-card {
                padding: 1.25rem 0.75rem;
            }

            .metric-number {
                font-size: 1.8rem;
            }

            .metric-label {
                font-size: 0.8rem;
            }
        }
      `}</style>

      <div className="hero-background-wrapper">
        <div className="floating-elements-master">
          <div className="floating-circle hero-circle-1" />
          <div className="floating-circle hero-circle-2" />
          <div className="floating-circle hero-circle-3" />
          <div className="floating-circle diff-circle-1" />
          <div className="floating-circle diff-circle-2" />
          <div className="metrics-number-1">$</div>
          <div className="metrics-number-2">%</div>
          <div className="metrics-number-3">+</div>
          <div className="gradient-overlay-1" />
          <div className="gradient-overlay-2" />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col">
        <div className="title-section">
          <div className="title-content">
            <h1 className="main-title">
              Senior <span className="text-highlight">AI & Digital Transformation</span> Executive
            </h1>
            <p className="main-subtitle">
              Driving Fortune 500 digital transformation through AI, Data Strategy, and client-centric products
            </p>
          </div>
        </div>

        <div className="image-section">
          <div className="image-content">
            <Image
              src="https://static.wixstatic.com/media/0738c5_7a9c645162564209b7e7da8eb9f35ae9~mv2.jpeg"
              alt="Brandon Micci - AI & Digital Transformation Executive"
              className="professional-image"
              fill
              sizes="(max-width: 480px) 240px, (max-width: 768px) 280px, 320px"
              priority
            />
          </div>
        </div>

        <div className="hero-paragraph-wrapper">
          <div className="hero-paragraph-container">
            <p className="hero-intro">
              With 16+ years of experience architecting enterprise-wide AI solutions, I&apos;ve transformed complex technological challenges into over $400M in measurable business outcomes. From leading the largest LLM deployment in the payments industry to building evangelical data communities of 30,000+ users, I bridge the gap between cutting-edge innovation and practical enterprise implementation.
            </p>
          </div>
        </div>

        <div className="compact-differentiators">
          <div className="compact-container">
            <div className="compact-box">
              <div className="compact-header">
                <span className="rocket-icon">🚀</span>
                <h2 className="header-text">What Makes Me Different</h2>
              </div>

              <div className="items-grid">
                <div className="compact-item">
                  <h3 className="item-title">
                    <span className="item-emoji">⭐</span>
                    Scale Expertise:
                  </h3>
                  <p className="item-text">
                    Led the largest LLM deployment in payments (27,000+ users) and built global teams of 50+ professionals.
                  </p>
                </div>

                <div className="compact-item">
                  <h3 className="item-title">
                    <span className="item-emoji">💡</span>
                    Financial Impact:
                  </h3>
                  <p className="item-text">
                    Consistent, outsized ROI—250%+ returns delivering $30M in new revenue streams.
                  </p>
                </div>

                <div className="compact-item">
                  <h3 className="item-title">
                    <span className="item-emoji">🎯</span>
                    Cross-Industry Innovation:
                  </h3>
                  <p className="item-text">
                    Deep expertise across Financial Services, Insurance, Airlines, Energy, and Life Sciences.
                  </p>
                </div>

                <div className="compact-item">
                  <h3 className="item-title">
                    <span className="item-emoji">⚡</span>
                    Transformation Catalyst:
                  </h3>
                  <p className="item-text">
                    AI evangelist who builds adoption communities that drive organizational change at scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="metrics-content-wrapper">
          <div className="metrics-container">
            <div className="metrics-grid">
              <div className="metric-card">
                <span
                  className="metric-number"
                  data-target="400"
                  data-suffix="M+"
                  ref={(el) => {
                    metricRefs.current[0] = el;
                  }}
                >
                  0M+
                </span>
                <div className="metric-label">Revenue Generated</div>
              </div>
              <div className="metric-card">
                <span
                  className="metric-number"
                  data-target="27000"
                  data-suffix="+"
                  data-format="thousands"
                  ref={(el) => {
                    metricRefs.current[1] = el;
                  }}
                >
                  0+
                </span>
                <div className="metric-label">Enterprise Users</div>
              </div>
              <div className="metric-card">
                <span
                  className="metric-number"
                  data-target="250"
                  data-suffix="%"
                  ref={(el) => {
                    metricRefs.current[2] = el;
                  }}
                >
                  0%
                </span>
                <div className="metric-label">ROI Achieved</div>
              </div>
              <div className="metric-card">
                <span
                  className="metric-number"
                  data-target="16"
                  data-suffix="+"
                  ref={(el) => {
                    metricRefs.current[3] = el;
                  }}
                >
                  0+
                </span>
                <div className="metric-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
