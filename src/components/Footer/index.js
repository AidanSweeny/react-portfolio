import React from "react";


class Footer extends React.Component {
    render() {
        return (
            <div>
                <div className="triangle" style={{ width: "0", height: "0", borderLeft: "1500px solid transparent", borderBottom: "200px solid #ee8172", position: "absolute", bottom: "0", zIndex : "0" }}></div>
                <div style={{zIndex : "2", position : "absolute", bottom : "105px", width: "220px", right : "10px", height: "1px", backgroundColor: "black" }}></div>
                <h3 style = {{zIndex : "2", position : "absolute", bottom : "105px",right : "10px"}} >Contact Information</h3>
                <a style = {{zIndex : "2", position : "absolute", bottom : "85px",right : "10px"}} href="https://github.com/AidanSweeny">GitHub Profile</a>
                <a style = {{zIndex : "2", position : "absolute", bottom : "70px",right : "10px"}} href="https://www.linkedin.com/in/aidan-sweeny-81075030/">LinkedIn</a>
                <a style = {{zIndex : "2", position : "absolute", bottom : "55px",right : "10px"}} href="Aidan-Sweeny-Resume.pdf">Resume</a>
                <p style = {{zIndex : "2", position : "absolute", bottom : "20px",right : "10px"}} >Phone: (415)-300-7568</p>
                <p style = {{zIndex : "2", position : "absolute", bottom : "0px",right : "10px"}} >Email: aidansweeny@gmail.com</p>
            </div>
        )
    };
}
export default Footer;