import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion';

// interface Props {
//     children: JSX.Element;
//     width?: "fit-content" | "100%";
// }

export default function Reveal({ children, width = "fit-content" }) {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        if(isInview){
            //Fire the animation
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInview]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
        <motion.div
           variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0},
           }}
           initial="hidden"
           animate={mainControls}
           transition={{ duration: 0.2, delay:0}}
        >
            { children }
        </motion.div>
        <motion.div 
          variants={{
            hidden: { left: 0},
            visible: { left: "100%"},
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.3, ease: "easeIn", delay:0.1}}
          style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            backgroundColor:"gray",
            zIndex:20,
            borderRadius:9
          }}
        >
        </motion.div>
    </div>
  )
}



export  function InViewAnimation({ children, width = "fit-content" }) {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });

    const mainControls = useAnimation();
    // const slideControls = useAnimation();

    useEffect(()=>{
        if(isInview){
            //Fire the animation
            mainControls.start("visible");
            // slideControls.start("visible");
        }
    }, [isInview]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden"}}>
        <motion.div
           variants={{
            hidden: { opacity: 0, y: 75},
            visible: { opacity: 1, y: 0},
           }}
           initial="hidden"
           animate={mainControls}
           transition={{ duration: 0.5, delay:0.9}}
        >
            { children }
        </motion.div>
        {/* <motion.div 
          variants={{
            hidden: { left: 0},
            visible: { left: "100%"},
          }}
          initial="hidden"
          animate={slideControls}
          transition={{ duration: 0.5, ease: "easeIn", delay:0.9}}
          style={{
            position:"absolute",
            top:4,
            bottom:4,
            left:0,
            right:0,
            backgroundColor:"gray",
            zIndex:20,
            borderRadius:9
          }}
        >
        </motion.div> */}
    </div>
  )
}
