import { useEffect } from "react";

function useOutsideClick(ref, cb, exceptionId) {
  useEffect(() => {
    const clickHandler = (e) => {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        ref.current.id === exceptionId
      ) {
        cb();
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [ref, cb, exceptionId]);
}

export default useOutsideClick;
