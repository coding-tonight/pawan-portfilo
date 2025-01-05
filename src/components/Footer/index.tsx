const Footer = () => {
    const year: string | number = new Date().getFullYear()
    return (
        <>
        <section className="p-3 bg-gray-200">
          <footer className="w-[95%] mx-auto">
            <p className="text-slate-500">
                © { year ?? '2024' } All rights reserved.
            </p>
            {/* <a className="text-slate-500">Blog</a> */}
          </footer>
        </section>
        </>
    ) 
}

export default Footer