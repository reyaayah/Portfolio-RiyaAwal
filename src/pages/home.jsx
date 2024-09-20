import Navbar from "../components/navbar"
import "../styles/home.css";

const Home=()=>{
    return(
        <>
        <Navbar title={"Home"}/>
        <div id="container">
        <div id="profile-photo">
            <img src="https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-minan1398-675920.jpg&fm=jpg" alt="profilephoto" width={600} height={500} />
        </div>
        <h1>About Me</h1>
        <h2>I like creating a cool design project</h2>
        <p>
            Seeking an entry-level position in the field of Information Technology(IT), Dedicated and innovative in designing and developing applications using various programming languages and frameworks. Strong problem solving skills and ability to learn new technologies quickly. 
        </p>

        </div>
       
        </>
    );
}
export default Home