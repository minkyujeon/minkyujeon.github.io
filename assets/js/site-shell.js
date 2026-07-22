(() => {
  const marker = "data-global-site-shell";
  if (document.querySelector("[" + marker + "]")) return;

  const items = [
    { label: "Home", href: "/" },
    { label: "Publications", href: "/publications/" },
    { label: "CV", href: "/cv/" },
    { label: "Projects", href: "/projects/" },
  ];

  const path = window.location.pathname.replace(/index\.html$/, "").replace(/\/$/, "") || "/";
  const isCurrent = (href) => href === "/" ? path === "/" : path === href.replace(/\/$/, "") || path.startsWith(href);

  const header = document.createElement("header");
  header.className = "global-site-header";
  header.setAttribute(marker, "");
  const inner = document.createElement("div");
  inner.className = "global-site-header__inner";

  const brand = document.createElement("a");
  brand.className = "global-site-header__brand";
  brand.href = "/";
  brand.textContent = "Minkyu Jeon";
  inner.appendChild(brand);

  const nav = document.createElement("nav");
  nav.className = "global-site-header__nav";
  nav.setAttribute("aria-label", "Primary");
  for (const item of items) {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (isCurrent(item.href)) link.setAttribute("aria-current", "page");
    nav.appendChild(link);
  }
  inner.appendChild(nav);
  header.appendChild(inner);

  document.body.classList.add("site-shell-page");
  document.documentElement.classList.add("site-shell-ready");
  document.body.prepend(header);

  const footer = document.createElement("footer");
  footer.className = "global-site-footer";
  footer.setAttribute(marker, "");
  footer.innerHTML = 'Minkyu Jeon <span aria-hidden="true">|</span> <a href="/">minkyujeon.github.io</a>';
  document.body.appendChild(footer);
})();
