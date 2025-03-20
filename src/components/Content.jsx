import "../css/style.css";
import { Link, Outlet } from "react-router-dom";
import {SocialIcon} from 'react-social-icons'

const Content = () => {
  return (
    <div className="content">
      <div className="prof">
        <div className="pfs"></div>
        <div className="bio">
          <p id="txt">
            Hi i'm Kevin <br />
            Web developer
          </p>
          <p
            style={{ color: "black", marginLeft: "70px", marginBottom: "30px" }}
          >
            click to see my profile
          </p>

          <div className="lis">
            <ul>
              <li className="p-list">
                {" "}
                <a href="/kevres.pdf" download="GFG.pdf">
                  Resume
                </a>
              </li>
              <li className="p-list"><Link to='/Detail'>Portfolio</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="list-cont">
        <ul className="uls">
          <li className="det-list">
            {" "}
            <Link to="/">Details</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Educations">Educations</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Skills">Skills</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Certificate">Certificate</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Hobbies">Hobbies</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Internship">Internship</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Achievements">Achievements</Link>
          </li>
          <li className="det-list">
            {" "}
            <Link to="/Experience">Experience</Link>
          </li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Content;
