import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from '@/components/ui/tabs' 

const Menu = () => {
    return (
      <section className='container w-[80vw] mx-auto sticky top-1 flex justify-center'>
        <Tabs defaultValue='projects'>
            <TabsList className='shadow-md border border-black rounded-2xl p-5'>
              <TabsTrigger value='projects'>Projects</TabsTrigger>
              <TabsTrigger value='stacks'>Stacks</TabsTrigger>
              <TabsTrigger value='history'>History</TabsTrigger>
              <TabsTrigger value='testonimial'>Testonimial</TabsTrigger>
              <TabsTrigger value='contact'>Contact</TabsTrigger>
            </TabsList>
            <TabsContent value='projects'>Project</TabsContent>
            <TabsContent value='stacks'>Stacks</TabsContent>
        </Tabs>
      </section>
    )
}

export default Menu