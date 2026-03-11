(function () {
  // Theme init (also called from inline script in <head> for FOUC prevention)
  function applyStoredTheme() {
    var t = localStorage.getItem('sb-theme');
    if (t) { document.documentElement.setAttribute('data-theme', t); }
    else if (window.matchMedia('(prefers-color-scheme:dark)').matches) { document.documentElement.setAttribute('data-theme', 'dark'); }
    else { document.documentElement.setAttribute('data-theme', 'light'); }
  }
  applyStoredTheme();
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
    { href: 'repodocs-ai/index.html', title: 'RepoDocs AI' },
  ];

  function normalizePath(pathname) {
    return (pathname || '').replace(/\\/g, '/');
  }

  const subfolders = ['diagrams', 'repodocs-ai'];

  function currentSubfolder(currentPath) {
    const cur = normalizePath(currentPath);
    return subfolders.find((s) => cur.includes('/' + s + '/')) || null;
  }

  function toLinkHref(currentPath, pageHref) {
    const subfolder = currentSubfolder(currentPath);
    if (!subfolder) return pageHref;
    if (pageHref.startsWith(subfolder + '/')) return pageHref.replace(subfolder + '/', '');
    return '../' + pageHref;
  }

  function isActive(current, href) {
    const cur = normalizePath(current);
    for (const s of subfolders) {
      if (href.startsWith(s + '/')) {
        return cur.includes('/' + s + '/');
      }
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

    const toggleIcon = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀' : '◐';
    navHost.innerHTML = `<nav class="nav" aria-label="Primary">${links}<button class="theme-toggle" id="theme-toggle" aria-label="Toggle theme">${toggleIcon}</button></nav>`;

    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.addEventListener('click', function () {
        const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sb-theme', next);
        btn.textContent = next === 'dark' ? '☀' : '◐';
      });
    }
  }

  function renderFooter() {
    const host = document.getElementById('site-footer');
    if (!host) return;
    const year = new Date().getFullYear();
    host.innerHTML = `
      <div class="footer">
        <div>&copy; ${year} &bull; SunBridge Asset Atrium Manager (FGS) &mdash; Platform Architecture &amp; Operations Documentation</div>
        <div class="small">Internal reference documentation. Not for external distribution.</div>
        <div class="small" style="margin-top:0.5rem;border-top:1px solid rgba(255,255,255,0.1);padding-top:0.5rem;font-style:italic;">&copy; ${year} Sulagna Sasmal. All rights reserved. Personal portfolio project for demonstration purposes only. Not affiliated with any organisation.</div>
      </div>
    `;
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderNav();
    renderFooter();
  });
})();
