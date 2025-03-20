import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div style={{justifyItems : 'end'}}>
        <ul>
            <li className="n-list"><Link to='/'>Home</Link></li>
            <li className="n-list">|</li>
            <li className="n-list"> <Link to='/About'>About</Link> </li>
            <li className="n-list">|</li>
            <li className="n-list"> <Link to='/Contact'>Contact</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar