import Navbar from "../components/navbar"
import "../styles/resume.css";

const Resume = () => {
    return (
        <>
            <Navbar title={"Resume"} />
            <div id="resume-style">
            <div id="profile-box">
                <h1><strong>RIYA AWAL</strong></h1>
                <p>Web Developer</p>
                <br />
                <h2><strong>CONTACT</strong></h2>
                <div id="contactinfo">
                    <p><strong>Phone</strong></p>
                    <p>9841028543</p>
                    <p><strong>Email</strong></p>
                    <p>riyaawal7@gmail.com</p>
                    <p><strong>Address</strong></p>
                    <p>Madhyapur Thimi, Bhaktapur</p>
                </div>
            </div>
            <div id="sub-container"> 
            <div id="skills">
                <h2 className="topic"><strong>Skills</strong></h2>
                <ul>
                    <li>C, C++ </li>
                    <li>HTML, CSS, PHP,<br /> JAVASCRIPT, MYSQL, Python</li>
                    <li>Dart and Flutter</li>
                    <li>Machine Learning</li>
                    <li>React</li>
                </ul>
            </div>
            <div id="hobbies">
                <h2 className="topic"><strong>Hobbies</strong></h2>
                <ul>
                    <li>Reading Books</li>
                    <li>Coding</li>
                    <li>Culinary Exploration</li>
                    <li>Painting</li>
                    <li>Music Enthuasiast</li>
                </ul>
            </div>
            <div id="languages">
                <h2 className="topic"><strong>Language</strong></h2>
                <ul>
                    <li>Nepali</li>
                    <li>English</li>
                    <li>Newari</li>
                </ul>
            </div>

            </div>
            
            </div>
            


        </>
    );
}
export default Resume