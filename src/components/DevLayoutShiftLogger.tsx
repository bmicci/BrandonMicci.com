'use client';

import { useEffect } from 'react';

export default function DevLayoutShiftLogger() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    // Observe layout shifts (CLS)
    const po = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const ls = entry as PerformanceEntry & { 
          hadRecentInput?: boolean; 
          value?: number; 
          sources?: Array<{ node?: Element }> 
        };
        if (!ls.hadRecentInput) {
          const impact = ls.value?.toFixed(4);
          // Inspect impacted nodes (top 1)
          const node = ls?.sources?.[0]?.node as Element | undefined;
          console.warn('[CLS]', impact, node ? node.tagName + (node.id ? `#${node.id}` : '') : '(no node)');
        }
      }
    });
    try {
      po.observe({ type: 'layout-shift', buffered: true });
    } catch {}
    return () => po.disconnect();
  }, []);

  return null;
}

