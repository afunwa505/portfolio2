import './style.css';
import { Link } from 'react-router-dom';
const About = () =>{
    return(
        <>
       <div className="container2">
        <div className="pic2">
        
        </div>
        <div className="article2">
            <p>I am a native of Akpugo in Nkanu-West Local Government Area of Enugu State, Nigeria.</p> <br />
            <p>I am a graduate of Computer Science from the Institute of Management and Technology (IMT), Enugu State, Nigeria.</p> <br />
            <p>Edeh Uchechukwu Emmanuel is a professional Website Developer that enjoys doing his job efficiently and confidently.</p> <br />
            <p>With the knowledge and skill that I posses in web development, I have designed awesome websites for business owners which in turn helped to sky-rocket their businesses up to 80%.</p> <br /><br />
            <Link to='/cv'><button className="view-cv">View CV</button></Link>
        </div>
       </div>
        </>
    )
}
export default About;