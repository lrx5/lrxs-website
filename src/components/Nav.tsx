import { Link } from 'react-router-dom';
import '../nav.css'

function Nav() {
  return (
    <>
      <nav>
        <div>
        <Link className='lrxs' to="/">LRXS v0.5</Link>
          <ul>
            <li><Link to="/lrxs-website/" >Home</Link></li>
            <li><Link to="/lrxs-website/about">About</Link></li>
            <li><Link to="/lrxs-website/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
