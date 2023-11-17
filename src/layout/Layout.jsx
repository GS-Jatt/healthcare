import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
function Layout() {
    return (
        <>
            <Navbar />
            <main id="main">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
