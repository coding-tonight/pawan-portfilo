import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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


import { menuItem } from "@/utils/data";

const Menu = () => {
  const [visible , setVisible] = useState<Boolean>(false)
  const  { scrollYProgress  } = useScroll()
  const navigate = useNavigate()
  const currentLocation: string = window.location.pathname

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if(current > 0.05) {
         setVisible(true)
      } else {
        setVisible(false)
      }
    }
  })


  const navigateToPage = (path: string): () => void => {
     return () => navigate(path)
  }

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
        className="fixed top-1 z-50 w-[100dvw]"
      >
      <section className="container mx-auto flex justify-center">
        <Tabs defaultValue={currentLocation}>
            <TabsList className='shadow-md border border-black rounded-2xl p-5'>
              {menuItem.map(menu => (    
                <TabsTrigger value={menu.path} onClick={navigateToPage(menu.path)} key={menu.id}>
                   {menu.name}
                </TabsTrigger>
              ) )}
            </TabsList>
        </Tabs>
      </section>
      </motion.div>
      </AnimatePresence>
    )
}

export default Menu