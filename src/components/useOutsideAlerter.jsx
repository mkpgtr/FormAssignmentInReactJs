import { useEffect, useRef, useState } from "react";
import NewFormInput from "./NewFormInput";

function useOutsideAlerter(ref) {

    const [isErrorVisible,setIsErrorVisible] = useState(false)
    
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */

      function handleClickInside(event) {
        if (ref.current && ref.current.contains(event.target)) {
            setIsErrorVisible(false)
          console.log('error is not visible')
        }
      }

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsErrorVisible(true)
          console.log('error is visible')
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("mousedown", handleClickInside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousedown", handleClickInside);
      };
    }, [ref]);
  }

  export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
  

    return <div className="flex flex-col" ref={wrapperRef}>
     {props.children}
    </div>;
  }