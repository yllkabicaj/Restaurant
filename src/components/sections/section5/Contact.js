import './Contact.css';

function Contact(){
    return(
        <div className='contact'>
            <div className='form'>
                <form>
                <h2 className='message'>Have a Message?</h2>
                    <input type="text" placeholder="Name*" required></input>
                    <input type="email" placeholder="Email*" required></input>
                    <input type="text" placeholder="Number*" required></input>
                    <textarea placeholder='Your message...'></textarea>
                    <input type="submit" value="Send Inquiry"></input>
                </form>
            </div>
            <div className='contactus'>
                <div className='div1'>
                    <h3 className='h31'>Contact us</h3>
                    <p className='p1'>2215 US Highway 1 South, North
Brunswick, NJ 08902</p>
                </div>
                <div className='div2'>
                    <h3 className='h32'>Call us at</h3>
                    <ul className='ul2'>
                        <li><span>P: </span>123.456.789</li>
                        <li><span>M: </span>123.456.789</li>
                        <li><span>M: </span>123.456.789</li>
                        <li><span>Fax: </span>123.456.789</li>
                        <li><span>Email: </span>123.456.789</li>
                    </ul>
                </div>
            </div>
            <div className='links'>
                    <h3 className='h3links'>Quick Links</h3>
                    <ul className='ullinks'>
                        <li><a>Home</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Banquet Facility</a></li>
                        <li><a>Gallery</a></li>
                        <li><a>Catering</a></li>
                        <li><a>Events</a></li>
                        <li><a>Contact us</a></li>
                    </ul>
               </div>
            <div className='operation'>
                <h3 className='h3op'>Hours of operation</h3>
                <ul className='ulop'>
                    <li id='red'>6 DAYS OPEN</li>
                    <li>Monday, Wednesday-Friday: 11:00AM to 3:00PM</li>
                    <li>Monday, Wednesday-Friday: 5:00PM to 9:30PM</li>
                    <li>Saturday-Sunday: <br/> 10:00AM to 9:30PM</li>
                    <li>Tuesday: <br/> Closed</li>
                </ul>
            </div>
        </div>
    );
}
export default Contact;