// A small, bounded drift; no animation library or continuous rendering loop.
(() => {
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = matchMedia('(min-width: 701px)');
  const items = [...document.querySelectorAll('[data-drift]')];
  let pending = false;
  function render() {
    pending = false;
    const enabled = desktop.matches && !preference.matches;
    for (const item of items) {
      if (!enabled) { item.style.removeProperty('translate'); continue; }
      const rect = item.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - rect.top - rect.height / 2) / innerHeight));
      item.style.translate = `0 ${Math.round(progress * Number(item.dataset.drift))}px`;
    }
  }
  function schedule() { if (!pending) { pending = true; requestAnimationFrame(render); } }
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  preference.addEventListener('change', schedule);
  desktop.addEventListener('change', schedule);
  render();
})();
