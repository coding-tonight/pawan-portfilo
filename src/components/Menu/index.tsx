import { useState } from "react";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
    Tabs,
    TabsList,
    TabsTrigger,
  } from '@/components/ui/tabs' 

const Menu = () => {
  const [visible , setVisible] = useState(false)
  const  { scrollYProgress  } = useScroll()

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      // let direction = current! - scrollYProgress.getPrevious()!;

      if(current > 0.05) {
         setVisible(true)
      } else {
        setVisible(false)
      }
    }
  })

    return (
      <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed top-1 z-50"
      >
      <section className='container w-[100vw] mx-auto flex justify-center'>
        <Tabs defaultValue='projects'>
            <TabsList className='shadow-md border border-black rounded-2xl p-5'>
              <TabsTrigger value='projects'>About</TabsTrigger>
              <TabsTrigger value='stacks'>Stacks</TabsTrigger>
              <TabsTrigger value='testonimial'>Blogs</TabsTrigger>
              <TabsTrigger value='about'>Contact</TabsTrigger>
            </TabsList>
        </Tabs>
      </section>
      </motion.div>
      </AnimatePresence>
    )
}

export default Menu