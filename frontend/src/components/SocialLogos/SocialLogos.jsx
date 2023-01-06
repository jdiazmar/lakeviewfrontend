import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function SocialLogos(){
    return <div>
<Container>
    <h3 className='footer-connect' >Connect with us on Social!</h3>
    <div>
        <a href='https://www.facebook.com/LCYTH' >
            <FontAwesomeIcon icon={faFacebook}  width='60' height='80' className='footer'  />
        </a>
        <a href='https://www.instagram.com/lakeviewyth/' >
            <FontAwesomeIcon icon={faInstagram} width='60' height='80' className='footer'  />
        </a>
        <a href='https://www.tiktok.com/@lakeviewyth?lang=en' >
            <FontAwesomeIcon icon={faTiktok} width='60' height='80' className='footer'  />
        </a>
        <a href='https://www.youtube.com/channel/UC6M355s3oLdiqiZBWGX6o7w' >
            <FontAwesomeIcon icon={faYoutube} width='60' height='80' className='footer'  />
        </a>
    </div>
</Container>
    </div>
}
export default SocialLogos
{/* <Link to='https://www.facebook.com/LCYTH' >
<img className='navbar-brand' width='70' height='50' src={facebook} />
</Link>
<Link to='https://www.instagram.com/lakeviewyth/' >
<img className='navbar-brand' width='70' height='50' src={ig} />
</Link>
<Link to='https://www.tiktok.com/@lakeviewyth?lang=en' >
<img className='navbar-brand' width='70' height='50' src={tiktok} />
</Link>
<Link to='https://www.youtube.com/channel/UC6M355s3oLdiqiZBWGX6o7w' >
<img className='navbar-brand' width='70' height='50' src={youtube} />
</Link> */}