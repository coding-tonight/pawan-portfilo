import { GuestLayout } from "@/layouts"
import { projects } from "@/utils/data"

const Projects = () => {
    return (
      <GuestLayout>
         <section className="container mx-auto mt-[60px]">
            <h1 className="text-md bolder sm:text-2xl my-2">Projects.</h1>
            <p className="text-sm text-grey-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consectetur ad consequuntur aspernatur non possimus dignissimos, totam id ducimus omnis? Consectetur maiores, voluptates doloribus corporis officiis facilis vero perspiciatis delectus.
            </p>

            <div className="my-[25px]">
               {projects.map(project => (
                <div className="border-t-[1px] p-2 cursor-pointer">
                 <h1>- {project.title} -</h1>
                  <div className="ps-5">
                    <h3>Tech: {project.stack}</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci fuga mollitia dignissimos modi at magni, ducimus quaerat quam sed expedita, qui, excepturi eum atque dolore soluta. Iste, explicabo doloremque. Voluptate?</p>
                  </div>
                </div>
               ))}
            </div>
         </section>
      </GuestLayout>
    ) 
}

export default Projects