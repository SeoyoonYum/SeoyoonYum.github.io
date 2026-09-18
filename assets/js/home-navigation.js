document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("research-experience");
  const links = Array.from(document.querySelectorAll("#navbar .nav-link"));
  const experience = links.find((link) => new URL(link.href).hash === "#research-experience");
  const home = links.find((link) => {
    const url = new URL(link.href);
    return url.pathname === window.location.pathname && !url.hash;
  });
  if (!section || !experience || !home) return;

  const updateActive = () => {
    const rect = section.getBoundingClientRect();
    const active = rect.top <= 140 && rect.bottom > 80;
    experience.closest(".nav-item").classList.toggle("active", active);
    home.closest(".nav-item").classList.toggle("active", !active);
    experience.toggleAttribute("aria-current", active);
    if (active) experience.setAttribute("aria-current", "location");
    home.toggleAttribute("aria-current", !active);
    if (!active) home.setAttribute("aria-current", "page");
    const currentLabel = home.querySelector(".sr-only");
    if (currentLabel) currentLabel.hidden = active;
  };

  // Close the mobile menu before a same-page anchor scroll is performed.
  experience.addEventListener("click", () => {
    const toggle = document.querySelector('[data-nav-toggle="navbarNav"]');
    if (toggle?.getAttribute("aria-expanded") === "true") toggle.click();
  });
  let queued = false;
  window.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => { updateActive(); queued = false; });
  }, { passive: true });
  window.addEventListener("resize", updateActive);
  window.addEventListener("hashchange", updateActive);
  window.addEventListener("load", updateActive);
  updateActive();
});
