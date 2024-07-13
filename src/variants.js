export const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } }
  };
  
  export const linkVariant = {
    active: { scale: 1.1, transition: { duration: 0.5 } },
    inactive: { scale: 1 }
  };
  
  export const pVariants = {
    hidden: { opacity: 0, x: "-100%", scale: 1 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    visibleWithDelay: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.6 } },
    visibleWithDelay2nd: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 1 } }
  };
  
  export const pVariantsLeft = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    visibleWithDelay: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } },
    visibleWithDelay2nd: { opacity: 1, x: 0, transition: { duration: 0.7, delay: 1 } },
    heyThereMotionStart: { opacity: 0, x: "-100%", transition: { duration: 1 }, scale: 3 },
    heyThereMotionFinish: { opacity: 1, x: 0, transition: { duration: 0.5 }, scale: 1 },
  };
  
  export const imageVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
  };
  
  export const sideWaysVariant = {
    hidden: { y: "110vh", rotate: -90 },
    visible: {
      y: "0vh",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        durations: 0.5,
        delayChildren: 0.5,
        duration: 5,
        delay: 0.5
      },
    }
  };
  