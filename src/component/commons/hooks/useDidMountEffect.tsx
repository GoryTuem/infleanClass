import { useEffect, useRef } from "react";
import type { DependencyList, EffectCallback } from "react";

const useDidMountEffect = (func: EffectCallback, deps: DependencyList) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;
