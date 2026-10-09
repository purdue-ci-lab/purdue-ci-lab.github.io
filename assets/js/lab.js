// Site-specific behavior. Shared component behavior remains in al_folio_core.

// Smooth "back to top" scrolling.
// al_folio_core calls vanilla-back-to-top with its default 100 ms scroll, which feels like a jump.
// The button stays as-is; this takes over its click (capture phase runs before the library's handler)
// and scrolls with an ease-in-out curve whose duration grows with the distance travelled.
(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  let frame = null;

  const stop = () => {
    if (frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  };

  const scrollToTop = () => {
    stop();
    const start = window.scrollY;
    if (start <= 0) return;
    if (reduceMotion.matches) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const duration = Math.min(1200, Math.max(700, 500 + start * 0.15));
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo({ top: Math.round(start * (1 - easeInOutCubic(progress))), behavior: "instant" });
      frame = progress < 1 ? requestAnimationFrame(step) : null;
    };
    frame = requestAnimationFrame(step);
  };

  // Let the reader take over mid-animation.
  ["wheel", "touchstart", "keydown"].forEach((type) => window.addEventListener(type, stop, { passive: true }));

  document.addEventListener(
    "click",
    (event) => {
      if (!(event.target instanceof Element) || !event.target.closest("#back-to-top")) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      scrollToTop();
    },
    true
  );
})();
