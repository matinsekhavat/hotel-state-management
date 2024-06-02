import { useEffect } from "react";

function useOutsideClick(ref, cb) {
  useEffect(() => {
    const clickHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        cb();
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [ref, cb]);
}

export default useOutsideClick;
