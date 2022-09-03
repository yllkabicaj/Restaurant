import './Menu.css';

function Menu(){
    return(
        <div>
            <ul className='menu'>
                <li><a src=''>Home</a></li>
                <li><a src=''>Menu</a></li>
                <li><a src=''>Banquet Facility</a></li>
                <li><a src=''>Gallery</a></li>
                <li><a src='' id='bold'>CATERING</a></li>
                <li><a src=''>Contact us</a></li>
                <li><button><a src=''>BOOK A BANQUET</a></button></li>
            </ul>

            <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
        </div>
    );
}
export default Menu;