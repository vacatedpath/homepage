(() => {
  const root = document.documentElement;
  const storageKey = "hero-animation-start-time";
  const durations = {
    a: 11,
    b: 16,
    c: 9,
  };

  let startTime = 0;

  try {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      startTime = Number(saved);
    }
    if (!startTime || Number.isNaN(startTime)) {
      startTime = Date.now();
      window.localStorage.setItem(storageKey, String(startTime));
    }
  } catch (error) {
    startTime = Date.now();
  }

  const elapsedSeconds = (Date.now() - startTime) / 1000;

  Object.entries(durations).forEach(([key, duration]) => {
    const offset = -(elapsedSeconds % duration);
    root.style.setProperty(`--orbit-delay-${key}`, `${offset}s`);
  });
})();
