import './Navigation.css';
import Logo from './navcomponents/Logo';
import Menu from './navcomponents/Menu';

function Navigation(){
    return(
       
        <div className='navigation'>
        <Logo></Logo>
        <Menu></Menu>
        </div>
      
    );
        
}

export default Navigation;