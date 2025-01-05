import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { contactMe } from "@/utils/data"

const Contact = () => {
  return (
    <>
       <section className="mx-auto mt-[20px] bg-gray-200">
          <div className="container mx-auto p-[50px] flex flex-col items-center">
            <img src="./handshake.svg" width={100} className="bg-gray-100 rounded-full p-2"  alt="handshake" />
             <div className="mt-[30px]">
              <h4 className="text-2xl text-center">Let's make magic together</h4>
              <h1 className="text-[2rem] text-center font-bold">Get in touch!</h1>
             </div>
               {/* logos */}

                <TooltipProvider>
                  <div className="flex gap-4 mt-3 justify-center">
                    {contactMe.map(media => (
                      <Tooltip key={media.id}>
                          <TooltipTrigger>
                            {media.icon({ styles:'text-[2rem] cursor-pointer'})}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{media.key.toUpperCase()}</p>
                          </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </TooltipProvider>
          </div>
       </section>
    </>
  )
}

export default Contact