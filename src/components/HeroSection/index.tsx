import { Button } from "../ui/button"

import { ArrowRightIcon } from "@radix-ui/react-icons"

const HeroSection: React.FC = () => {
  return (
      <section className="container mx-auto text-center p-5 leading-6 mb-[10px]">
        <Button className="my-2 text-[0.7rem] rounded-xl" variant="link" size="sm">
          Switch to developer mode
          <div className="rounded-xl bg-slate-300  border ms-2">
            <ArrowRightIcon fontSize="sm" />
          </div>
        </Button>


        <h1 className="text-md bolder sm:text-2xl my-2">Turning Vision into Interactive Reality</h1>
        <p className="text-slate-500 text-sm text-beauty w-[75%] mx-auto leading-6">
          Hi, I am <span className="p-1 text-white bg-black rounded">Pawan Pulami Magar</span>. 
          With experience in  <span className="p-1 text-white bg-black rounded">Django</span> (Python),  
          <span className="p-1 text-white bg-black rounded">Postgres</span>, Mysql (database)
           and <span className="p-1 text-white bg-black rounded">React</span>, 
           I craft seamless, high-performance web applications from the ground up.
          Specializing in both back-end and front-end development
            I bring your vision to life with clean, efficient code and user-centric design.
        </p>

        <Button className="rounded-2xl bg-black hover:bg-black text-white mt-4">
          Let&#39;s Talk
            <ArrowRightIcon fontSize="sm" className="ms-1" />
        </Button>
      </section> 
  )
}

export default HeroSection