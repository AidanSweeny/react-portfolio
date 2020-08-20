import React from "react";


function Project(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            {/* <img href = {require(props.url)}></img> */}
            <a href = {props.deloyed}>Deployed Application</a>
            <a href = {props.repo}>Repository</a>
        </div>
    )

}
export default Project;