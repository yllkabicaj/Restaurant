import './Story.css';
import storyimg from "../../../images/about-1 1.png"
import uber from "../../../images/uber-logo.png";
import halal from "../../../images/halal-logo.png";
function Story(){
    return(
        <div className='mainStory'>
            <div className='topStory'>
                <div className='img'><img className='imgStory' src={storyimg}></img></div>
                <div className='storyText'>
                    <h3 className='h3Story'>OUR STORY</h3>
                    <p className='hrStory'></p>
                    <p className='pStory'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur vulputate molestie. In ut luctus eros. Etiam ut est sem. Donec pellentesque condimentum mi quis 
finibus. Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. </p>
<button className='buttonStory'>KNOW MORE ABOUT US</button>
                </div>
            </div>
            <div className='bottomStory'>
                <img className='uber' src={uber}></img>
                <img className='halal' src={halal}></img>
                
            </div>
        </div>
    );
}
export default Story;