const debounce = (
  fn: Function,
  wait: number = 100,
  immediate: boolean = false
) =>
  function(...args: any[]) {
    const obj = this;
    let timeout;

    const delayed = () => {
      if (!immediate) fn.apply(obj, args);
      timeout = null;
    };

    if (timeout) clearTimeout(timeout);
    else if (immediate) fn.apply(obj, args);

    timeout = setTimeout(delayed, wait);
  };

export default debounce;
