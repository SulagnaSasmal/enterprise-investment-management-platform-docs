(function () {
  const pages = [
    { href: 'index.html', title: 'Home' },
    { href: 'platform-overview.html', title: 'Platform Overview' },
    { href: 'system-architecture.html', title: 'System Architecture' },
    { href: 'high-availability-enhancement.html', title: 'High Availability' },
    { href: 'batch-processing-framework.html', title: 'Batch Framework' },
    { href: 'multi-time-zone-processing.html', title: 'Multi-Time Zone' },
    { href: 'failover-and-audit-design.html', title: 'Failover & Audit' },
    { href: 'database-and-configuration-updates.html', title: 'DB & Config' },
    { href: 'release-impact-summary.html', title: 'Release Impact' },
    { href: 'diagrams/index.html', title: 'Diagrams' },
  ];

  function normalizePath(pathname) {
    return (pathname || '').replace(/\\/g, '/');
  }

  function inDiagramsFolder(currentPath) {
    const cur = normalizePath(currentPath);
    return cur.includes('/diagrams/');
  }

  function toLinkHref(currentPath, pageHref) {
    if (!inDiagramsFolder(currentPath)) return pageHref;
    if (pageHref.startsWith('diagrams/')) return 'index.html';
    return '../' + pageHref;
  }

  function isActive(current, href) {
    const cur = normalizePath(current);
    if (href.startsWith('diagrams/')) {
      return cur.endsWith('/diagrams/index.html') || cur.endsWith('/diagrams/') || cur.endsWith('diagrams/index.html');
    }
    return cur.endsWith('/' + href) || cur.endsWith(href);
  }

  function renderNav() {
    const navHost = document.getElementById('site-nav');
    if (!navHost) return;

    const current = window.location.pathname;
    const links = pages
      .map((p) => {
        const href = toLinkHref(current, p.href);
        const active = isActive(current, p.href) ? 'active' : '';
        return `<a class="${active}" href="${href}">${p.title}</a>`;
      })
      .join('');

    navHost.innerHTML = `<nav class="nav" aria-label="Primary">${links}</nav>`;
  }

  function renderFooter() {
    const host = document.getElementById('site-footer');
    if (!host) return;
    const year = new Date().getFullYear();
    host.innerHTML = `
      <div class="footer">
        <div>&copy; ${year} &bull; SunGard Asset Arena Manager (FIS) &mdash; Platform Architecture &amp; Operations Documentation</div>
        <div class="small">Internal reference documentation. Not for external distribution.</div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderNav();
    renderFooter();
  });
})();
