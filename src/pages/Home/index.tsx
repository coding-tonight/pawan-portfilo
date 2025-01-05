import GuestLayout from "@/layouts/GuestLayout"
import { HeroSection, Contact } from "@/components"


import { Timeline } from "@/components/ui/timeline"

import { timelineData } from "@/utils/data"

const About = () => {
    return (
        <GuestLayout>
            <HeroSection />
                <Timeline data={timelineData} />
                {/* <Tools /> */}
                <Contact />
        </GuestLayout>
    )
}

export default About    