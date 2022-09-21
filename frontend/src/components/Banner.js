import '../styles/Banner.css';
import logo from '../assets/logo.png';

function Banner() {
    return (
    <div className='groupomania-banner'>
        <img src={logo} alt='Groupomania' className='groupomania-logo' />
    </div>
    )
};

export default Banner