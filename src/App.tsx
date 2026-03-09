import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

// Pages Desktop
import Index from "./pages/index/index";
import Login from "./pages/login/login";
import Inscription from "./pages/inscription/inscription";
import Vote from "./pages/vote/vote";
import Vote1 from "./pages/vote/vote1";
import Vote3 from "./pages/vote/vote3";
import Vote4 from "./pages/vote/vote4";
import Vote5 from "./pages/vote/vote5";
import Vote6 from "./pages/vote/vote6";
import Vote7 from "./pages/vote/vote7";



// Pages Mobile
import IndexMobile from "./pages-mobile/index/index";
import { LoginMobile } from "./pages-mobile/LoginMobile/LoginMobile";

function AppContent() {
    const location = useLocation();
    
    // Correction de la syntaxe avec les ||
    const isLoginPage =
        location.pathname === "/login" || 
        location.pathname === "/inscription" || 
        location.pathname === "/vote" ||
        location.pathname === "/vote1"||
        location.pathname === "/vote3"||
        location.pathname === "/vote4"||
        location.pathname === "/vote5"||
        location.pathname === "/vote6"||
        location.pathname === "/vote7";

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {!isLoginPage && !isMobile && <Navbar />}
            <Routes>
                {isMobile ? (
                    <>
                        <Route path="/" element={<IndexMobile />} />
                        <Route path="/login" element={<LoginMobile />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/inscription" element={<Inscription />} />
                        <Route path="/vote" element={<Vote />} /> 
                        <Route path="/vote1" element={<Vote1 />} />
                        <Route path="/vote3" element={<Vote3 />} />
                        <Route path="/vote4" element={<Vote4 />} />
                        <Route path="/vote5" element={<Vote5 />} />
                        <Route path="/vote6" element={<Vote6 />} />
                        <Route path="/vote7" element={<Vote7 />} />
                        
                    </>
                )}
            </Routes>
            {!isLoginPage && <Footer />}
        </>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;