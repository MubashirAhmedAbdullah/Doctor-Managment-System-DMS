import Footer from "@/components/Footer";
import Navigationbar from "@/components/NavigationBar";




export default function AppointmentLayout({ children}){
    return(
        <section>
            <Navigationbar />
            {children}
            <Footer />
        </section>
    )
}