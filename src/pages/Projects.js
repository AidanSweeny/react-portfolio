import React, { useState, useEffect } from "react";
import Project from "../components/Project"
import financhill from "../images/financhill.jpg"
import clicky from "../images/clicky-game.jpg"
import dogs from "../images/express-dogs.jpg"
import life from "../images/life.jpg"
import notes from "../images/note-taker.jpg"
import weather from "../images/weather.jpg"

const Projects = () => {
    return (
        <div>
            <div style = {{marginTop : "100px"}}></div>
            <Project title = "Financhill Application" url = {financhill} deployed = "https://desolate-sierra-38032.herokuapp.com/" repo = "https://github.com/GabeSucich/BudgetingApp"></Project>
            <Project title = "Weather Application" url = {weather} deployed = "https://aidansweeny.github.io/weather-dashboard/" repo = "https://github.com/AidanSweeny/weather-dashboard/"></Project>
            <Project title = "Note Taking Application" url = {notes} deployed = "https://mysterious-sands-92673.herokuapp.com/" repo = "https://github.com/AidanSweeny/express-note-taker"></Project>
            <Project title = "Clicky Game" url = {clicky} deployed = "https://aidansweeny.github.io/clicky-game/" repo = "https://github.com/AidanSweeny/clicky-game/"></Project>
            <Project title = "Express Dog Petter" url = {dogs} deployed = "https://vast-headland-15630.herokuapp.com/" repo = "https://github.com/AidanSweeny/dog-petter"></Project>
            <Project title = "L.I.F.E. Application" url = {life} deployed = "https://aidansweeny.github.io/life/" repo = "https://github.com/AidanSweeny/life/"></Project>
            <div style = {{height : "100px"}}></div>
        </div>
    );
}

export default Projects;