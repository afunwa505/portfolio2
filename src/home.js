import { Link } from 'react-router-dom';
import './style.css'

const Home = () => {
    return(
        <>
        <div className='container1'>
            <div className='article'>
                <h2>Hi there,</h2>
                <h3 className='color-text1'> Edeh Uchechukwu Emmanuel</h3> 
                is a passionate and result oriented Web Developer, who loves to use his skills 
                and experience in web development to bring into existence awesome and quality websites. <br />
                I design any kind of website ranging from Landing page, blog, custom website, 
                 Business website, E-commerce website, School website and so on. <br />
                <p className='color-text2'>IF YOU CAN IMAGINE IT, I CAN BUILD IT.</p> 

                <Link to='/about'><button className='more-info'>More About Me</button></Link>

                <h3>afunwaemmanuel505@gmail.com</h3> <br />
                <h3>080-657-500-56</h3>
            </div>

            <div className='pic1'></div>
        </div>
      
        </>
    )
}
 export default Home;
