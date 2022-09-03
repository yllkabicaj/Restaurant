import './Footer.css';
import logo from "../../../images/footer-logo-1 1.png";

function Footer(){
    return(
        <div className='footer'>
            <img src={logo}></img>
            <p className='p1footer'>Copyright &copy; 2020 Restaurant Name. All Rights Reserved.</p>
            <p className='p2footer'>Website designed by <span className='name'>YourName</span></p>
            <button className='btnfooter'>Order Online</button>
        </div>
    );
}
export default Footer;