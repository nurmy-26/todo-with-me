import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";

// хук для объединения рефов
const useCombinedRefs = <T = HTMLElement>(
  ...refs: Array<MutableRefObject<T> | LegacyRef<T>>
): MutableRefObject<T | null> => {
  const targetRef = useRef<T>(null);
  useEffect(() => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(targetRef.current);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);
  return targetRef;
};

export default useCombinedRefs;
