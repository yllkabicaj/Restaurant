import './Packages.css';
import one from "../../../images/cat3.png";
import two from "../../../images/cat2.png";
import three from "../../../images/cat1.png";


function Packages(){
    return(
        <div className='bgpackages'>
            <h2>CATERING FOR ALL OCCASIONS 
GURU CATERS</h2>
<div className='imgs'>
    <img src={one}></img>
    <img src={two}></img>
    <img src={three}></img>
</div>
<button className='seepackages'>See all packages</button>
        </div>
    );
}
export default Packages;