import Appointment from "../features/appointment/Appointment"
import About from "../ui/About"
import Contacts from "../ui/Contacts"
import Department from "../ui/Department"
import Doctors from "../ui/Doctors"
import Header from "../ui/Header"
import Navbar from "../ui/Navbar"
import Services from "../ui/Services"
import Testimonials from "../ui/Testimonials"

function Home() {
    return (
        <>
        <Header/>
        <About/>
        <Services/>
        <Appointment/>
        <Department/>
        <Doctors/>
        <Testimonials/>
        <Contacts/>
        </>
    )
}

export default Home
