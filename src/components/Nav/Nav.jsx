import {LuHome} from 'react-icons/lu';
import {FiTarget} from 'react-icons/fi';
import {AiOutlineTeam} from 'react-icons/ai';
import {BiNetworkChart} from 'react-icons/bi';

import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            
            <LuHome/>
            Home
          </a>
        </li>

        <li>
          <a href="/">
            <FiTarget />
            Destination
          </a>
        </li>

        <li>
          <a href="/">
            
            <AiOutlineTeam/>
            Crew
          </a>
        </li>

        <li>
          <a href="/">
            <BiNetworkChart />
            Technology
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;