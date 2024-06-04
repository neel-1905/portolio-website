import GoToTop from "./components/GoToTop";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./components/ThemeWrapper";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <header className="w-full">
            <Navbar />
          </header>
          <main>
            <div className="max-w-6xl px-7 mx-auto ">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

            <ScrollProgress />
            <GoToTop />
          </main>
          <footer>
            <Footer />
          </footer>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
