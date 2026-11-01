// Every public page is drawn in the portfolio design and renders its own
// header, menu and footer. Only the internal email-signature tools under /sig
// still use the old site-wide chrome.
export const isPortfolioPath = (path: string) =>
  path !== '/sig' && !path.startsWith('/sig/');
