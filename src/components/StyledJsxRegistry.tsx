'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { StyleRegistry, createStyleRegistry } from 'styled-jsx';

// App Router requires an explicit style registry for styled-jsx: without it,
// component styles are only injected client-side after hydration, so every
// page ships unstyled HTML and reflows once JS lands (the CLS the Speed
// Insights dashboard attributes to layout shift on first paint). This wraps
// the tree so styled-jsx CSS is emitted into the server-rendered HTML.
// Pattern from the Next.js CSS-in-JS docs.
export default function StyledJsxRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [jsxStyleRegistry] = useState(() => createStyleRegistry());

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles();
    jsxStyleRegistry.flush();
    return <>{styles}</>;
  });

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>;
}
