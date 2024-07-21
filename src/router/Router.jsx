import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Router;