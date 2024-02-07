import './style.css'
import { Link} from 'react-router-dom';
const Nav = () => {


    return (
        <>
        <div className='nav'>
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/works'>Works</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
        </div>
        
       <div className='mobile-nav'>
        
<Link to='/'> <i class="fa fa-home" aria-hidden="true"></i> <br /> Home
</Link> 

            <Link to='/about'><i class="fa fa-info-circle" aria-hidden="true"></i> <br />About
</Link>

            <Link to='/service'><i class="fa fa-wrench" aria-hidden="true"></i> <br /> Services
</Link>

            <Link to='/works'><i class="fa fa-briefcase" aria-hidden="true"></i> <br /> Works
</Link>

            <Link to='/contact'><i class="fa fa-address-book" aria-hidden="true"></i> <br /> Contact
</Link>
       
        </div>
    
    </>
    
    )
}
export default Nav