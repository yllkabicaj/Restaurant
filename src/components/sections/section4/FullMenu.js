import './FullMenu.css';

function FullMenu(){
    return(
        <div className='foodmenu'>
            <div className='m30'></div>
            <div className='m70'>
                <h3 className='h3menu'>OUR MENU</h3>
                <p className='menuhr'></p>
                <p className='menup'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur vulputate molestie. In ut luctus eros. Etiam ut est sem. Donec pellentesque condimentum mi quis  finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur vulputate molestie. In ut luctus eros. Etiam ut est sem. Donec pellentesque condimentum mi quis  finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <button className='menubtn'>Check out full menu</button>
            </div>
        </div>
    );
}
export default FullMenu;