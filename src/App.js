import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Gallery from "./Gallery";
import Navbar from "./Navbar";
import RandomSort from "./RandomSort";
import pages from "./pages.json";

function App() {
    const navBarLinks = pages.map(page => { return { "name": page.name, "title": page.title } });
    const routes = pages.map(
        (page, index) =>
            <Route key={index}
                path={"/" + page.name}
                element={< Gallery
                    words={RandomSort(page.items)}
                    color={page.color}
                    key={index} />}
            />
    );

    return (
        <Router>
            <div className="App">
                <Navbar links={navBarLinks} />
                <main className="container-lg">
                    <div className="bg-light m-1 p-1">
                        <Routes>
                            <Route strict path="/" element={<Navigate to="/golden" />} />
                            {routes}
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    );
}

export default App;
