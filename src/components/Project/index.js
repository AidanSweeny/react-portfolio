import React from "react";


function Project(props) {
    return (
        <div className = "bg-secondary text-center" style = {{marginRight : "15%",marginLeft : "15%", marginBottom : "30px", borderRadius : "20px"}}>
            <h4 style = {{color : "white"}}>{props.title}</h4>
            <img style={{ height: "300px", margin : "15px", border : "solid 3px white" }} src={props.url} alt={props.title}></img>
            <br></br>
            <a style = {{color : "white"}} href={props.deployed}>Deployed Application</a>
            <br></br>
            <a style = {{color : "white"}} href={props.repo}>Repository</a>
        </div>
    )
}
export default Project;