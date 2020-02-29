import { useState, useEffect } from "react";

const noop = () => {};

const defaultMediaQueryList: MediaQueryList = {
  media: "",
  matches: false,
  onchange: noop,
  addListener: noop,
  removeListener: noop,
  addEventListener: noop,
  removeEventListener: noop,
  dispatchEvent: (_: Event) => true
};

const useMedia = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    let mounted = true;
    const mql = window?.matchMedia(query) || defaultMediaQueryList;

    setMatches(mql.matches);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      setMatches(mql.matches);
    };

    mql.addListener(onChange);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return matches;
};

export default useMedia;
