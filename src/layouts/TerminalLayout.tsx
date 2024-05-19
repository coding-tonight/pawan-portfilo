import { useEffect , useRef} from "react";

import { ChildrenNode } from "@/types/global";

const TerminalLayout = ({ children } : ChildrenNode) => {
   const terminalContainerRef = useRef(null)

    useEffect(() => {
      const elem = terminalContainerRef.current
      console.log(elem)
    }, [])

   return (
      <section className="text-white flex place-items-center terminal-container" ref={terminalContainerRef}>
         {children}
      </section>
   )
}

export default  TerminalLayout