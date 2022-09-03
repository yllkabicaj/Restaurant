import './Logo.css';
import logo2 from "../../../images/footer-logo-1 1.png";

function Logo(){
    return(
        <div><button className='logo'>LOGO</button>
        <img className='logo2' src={logo2}></img>
        </div>
    );
}
export default Logo;