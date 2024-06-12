import { ChildrenNode } from "@/types/global";

const TerminalLayout = ({ children } : ChildrenNode) => {
   return (
      <section className="text-white flex place-items-center terminal-container">
         {children}
      </section>
   )
}

export default  TerminalLayout