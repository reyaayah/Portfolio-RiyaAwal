import "../styles/navbar_style.css";
import { Link } from "react-router-dom";
const Navbar=({title})=>{
    return(
        <>
        <div id='nav'>
          <div id='heading'>
        <h1>Riya Awal</h1>
        <h2>-Web Developer-</h2>
          </div>
        
        <div id='menus'>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/resume">Resume</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
        </div>
        
        </>
    );
}
export default Navbar