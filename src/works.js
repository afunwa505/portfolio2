import './style.css';
import { Link } from 'react-router-dom';
const Works = () => {
    return(
        <>
        <br />
        <p><h2 className='h2-for-work'>RECENTLY COMPLETED WORKS</h2>  <br />
        <hr />
        <br /><br />
        <Link to="http://nkfootwear.netlify.app">Nk-footwear</Link> <br />
        <Link to="https://felixtechglobal.netlify.app">FelixTech Global</Link> <br />
        <Link to="https://x-file.netlify.app">X-File</Link> <br />
        </p>
       <div className='works'>
        
        <div className='img1'></div>
        <div className='img2'></div>
        <div className='img3'></div>
        
       </div>

       <div className='works'>
        
        <div className='img4'></div>
        <div className='img5'></div>
        <div className='img6'></div>
        
       </div>

       <div className='works'>
        
        <div className='img7'></div>
        <div className='img8'></div>
        <div className='img9'></div>
        
       </div>
        </>
    )
}
export default Works