import './style.css';
import { SocialIcon } from 'react-social-icons';
const Contact = () => {
   
    return(
        <>
        
     
        <div className='contact'>
        <SocialIcon url="https://web.facebook.com/Afunwa505" className='icon'></SocialIcon> <br />
        <SocialIcon url="https://twitter.com/Afunwa_official" className='icon'></SocialIcon> <br />
        <SocialIcon url='https://www.instagram.com/edeh_uche/' className='icon'></SocialIcon> <br />
        <SocialIcon url='https://wa.me/2348065750056' className='icon'></SocialIcon> <br />
        <SocialIcon url='https://github.com/afunwa505?tab=repositories' className='icon'></SocialIcon> 
        <br />
        E-MAIL : <h3> afunwaemmanuel505@gmail.com </h3>
        <br /><br />
        <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i>
        <br />
        16 Soretire Street, Ogba Ikeja, Lagos State.
        <br /><br />
        <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
        <br />
        <h3>080-657-500-56</h3>
        <br />
        
        </div>
      
        </>
    )
}
export default Contact;