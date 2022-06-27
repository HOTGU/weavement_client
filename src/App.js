import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import Portfolio from "./Pages/Portfolio";
import Navbar from "./Components/Navbar";
import { GlobalStyles, myTheme } from "./styled";

function App() {
    return (
        <Router>
            <ThemeProvider theme={myTheme}>
                <GlobalStyles />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                </Routes>
            </ThemeProvider>
        </Router>
    );
}

export default App;
