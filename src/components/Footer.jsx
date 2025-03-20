import '../css/style.css'
import { SocialIcon } from 'react-social-icons'
import { FaFacebookF, FaEnvelope , FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='foot-cont'>
       <div>
       <ul>
            <li className='f-list'><FaEnvelope size={20}/>          iamkevinp11@gmail.com</li>
            <li className='f-list'><FaFacebookF size={20}/>          kevin</li>
            <li className='f-list'><FaGithub size={20}/>          0ldhands</li>
            <li className='f-list'><FaLinkedinIn size={20}/>          kevin P</li>
        </ul>
       </div>
    </div>
  )
}

export default Footer