import { motion } from "framer-motion"

// varients
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["0%", "100%"]
    }
}

const totalSteps = 6;
const reverseIndex = (index)=>{
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      {[...Array(totalSteps)].map((_,index)=>{
        return<motion.div key={index} variants={stairAnimation} initial='initial' animate='animate' exit='exit' transition={{
            duration: 1.0,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
        }} className="h-full w-full bg-white relative"
        />
      })}
    </>
  )
}

export default Stairs
