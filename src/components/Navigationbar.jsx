import { Nav, Button, Navbar } from "react-bootstrap";
import { HashRouter, Routes, Route, NavLink} from "react-router";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Registration from "./pages/registration";
import Course from "./pages/course";

export default function Navigationbar(props){
    return  <Navbar fixed="top">
                <HashRouter>
                    <Nav id="navBar" >
                        <Button className="navButton">
                            <NavLink to="/">Home</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink to="/login">Login</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink to="/course">Course</NavLink>
                        </Button>
                        <Button className="navButton">
                            <NavLink to="/registration">Registration</NavLink>
                        </Button>
                    </Nav>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/course" element={<Course/>}/>
                        <Route path="/registration" element={<Registration/>}/>
                    </Routes>
                </HashRouter> 
            </Navbar>
}