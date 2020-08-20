import React from "react";


const About = () => {
    return (
        <div>
            <div className = "bg-secondary" style = {{position : "absolute", top : "75px", left : "10px", height : " 300px", width : "400px" , borderRadius : "10px", color : "white"}}>
                <h2 style = {{padding : "10px"}}>About</h2>
            </div>
            <div style = {{zIndex : "2", position : "absolute", top : "200px", left : "150px", height : "160px", width : "500px" , borderRadius : "10px", color : "black", backgroundColor : "gainsboro"}}>
                <h4 style = {{padding : "10px"}}>Born and raised in the Bay Area</h4>
                <h4 style = {{padding : "10px"}}>Graduated from Berkley Coding Bootcamp</h4>
                <h4 style = {{padding : "10px"}}>Computer science major at Colby College</h4>
            </div>
            <div style = {{position : "absolute", top : "120px", left : "580px", height : "400px", width : "500px" , borderRadius : "10px", color : "white", backgroundColor : "darkgrey"}}>
                <ul style = {{margin : "10px", position : "absolute", left : "80px"}}>
                    <h4>Languages</h4>
                    <li>Java</li>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                </ul>
                <ul style = {{margin : "10px", position : "absolute", left : "150px", top : "100px"}}>
                    <h4>Style Languages and Libraries</h4>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Bootstrap</li>
                    <li>Materialize</li>
                </ul>
                <ul style = {{margin : "10px", position : "absolute", left : "250px", top : "200px"}}>
                    <h4>Javascript Libraries</h4>
                    <li>Node.js</li>
                    <li>Sequelize</li>
                    <li>Express</li>
                    <li>React</li>
                    <li>JQuery</li>
                    <li>Mongoose</li>
                </ul>
            </div>
        </div>
    );
}

export default About;