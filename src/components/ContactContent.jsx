import { Link } from "react-router-dom"

const ContactContent = () => {
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
      <div style={{marginTop:'250px', marginLeft:"400px"}}>
        <label style={{fontSize:'5ch'}}>Page on process</label>
      </div>
    </div>
  )
}

export default ContactContent