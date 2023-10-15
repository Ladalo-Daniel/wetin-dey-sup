import { useEffect, useRef, useState } from "react";

function useCopyText() {
    const ref = useRef(null);
    const [isCopied, setIsCopied] = useState(false)
    
    const copyText = () => {
      if (ref.current) {
        const textToCopy = ref.current.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
          setIsCopied(true);
        }).catch((error) => {
          setIsCopied(false)
        });
      }
    };

    useEffect(()=> {
        setTimeout(()=>setIsCopied(false), 3000)

        return () => clearTimeout()
    }, [copyText])

    return {ref, isCopied, copyText}
}

export default useCopyText
