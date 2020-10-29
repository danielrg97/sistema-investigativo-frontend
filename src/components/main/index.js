import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Divider, Icon} from 'semantic-ui-react'
import MyDashboardComponent from '../myDashboard';
import InvestigativeLinesComponent from '../investigativeLines';
import InvestigativeProjectsComponent from '../investigativeProjects';
import SemilleroComponent from '../semilleros';
import './main.css';

const MainMenuComponent = () => {
    const getInitials = () =>{ 
        let username = localStorage.getItem("UserInSession").toUpperCase();
        return username.charAt(0) + username.charAt(username.length - 1);
    }
    return(
        <div className="MainMenuContainer">
                <div className="MainMenuBodyLateralMenu">
                    <h1>
                        Sistema Investigativo
                    </h1>
                    <div className="WelcomeMessage">
                        <div className="profileCircle">
                        <label className="initials">{getInitials()}</label>
                        </div>
                        <div className="message">
                            <span><h2>Bienvenid@,</h2></span>
                        <span><h3>{localStorage.getItem("UserInSession")}</h3></span>
                        </div>
                        <Divider/>
                    </div>
                    <div className="mainOptions">  
                        <Divider/>
                        <ul className="list">
                            <li style={{color:"white"}}><Icon name="home" color="white" style={{color:"white"}}/><Link to="/main">Mi Dashboard</Link></li>
                            <li style={{color:"white"}}><Icon name="compass" color="white" style={{color:"white"}}/><Link to="/main/lineas">Lineas de investgación</Link></li>
                            <li style={{color:"white"}}><Icon name="group" color="white" style={{color:"white"}}/><Link to="/main/semilleros">Semilleros</Link></li>
                            <li style={{color:"white"}}><Icon name="book" color="white" style={{color:"white"}}/><Link to="/main/proyectos">Proyectos de investigación</Link></li>
                        </ul>
                        <Divider/>
                    </div>
                </div>
                <div className="MainMenuContent">
                    <div className="MainMenuHeader">
                        <h1>Inicio</h1>
                        <div className="MainMenuHeaderUserInfo">
                            <div className="profileCircle2">
                            <label className="initials2">{getInitials()}</label>
                            </div>
                            <span>{localStorage.getItem("UserInSession")}</span>
                        </div>   
                    </div>
                    <div className="content">
                        <Route exact path ="/main" component={MyDashboardComponent}/>
                        <Route path = "/main/lineas" component={InvestigativeLinesComponent}/>
                        <Route path = "/main/semilleros" component={SemilleroComponent}/>
                        <Route path = "/main/proyectos" component={InvestigativeProjectsComponent}/>
                    </div>
                </div>
            </div>
    );
}
export default MainMenuComponent;