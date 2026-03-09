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

// Pages Mobile
import IndexMobile from "./pages-mobile/index/index";
import { LoginMobile } from "./pages-mobile/LoginMobile/LoginMobile";

function AppContent() {
    const location = useLocation();
    
    // Correction de la syntaxe avec les ||
    const isLoginPage =
        location.pathname === "/login" || 
        location.pathname === "/inscription" || 
        location.pathname === "/vote";

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
            {/* La Navbar et le Footer ne s'afficheront pas sur /vote, /login et /inscription */}
            {!isLoginPage && !isMobile && <Navbar />}
            <Routes>
                {isMobile ? (
                    <>
                        <Route path="/" element={<IndexMobile />} />
                        <Route path="/login" element={<LoginMobile />} />
                        {/* Ajoute ici la route mobile pour le vote si nécessaire */}
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Index />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/inscription" element={<Inscription />} />
                        {/* AJOUT DE LA ROUTE VOTE ICI */}
                        <Route path="/vote" element={<Vote />} /> 
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