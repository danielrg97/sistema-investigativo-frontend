import React from 'react';
import {Link, Route} from 'react-router-dom';
import {Divider, Icon} from 'semantic-ui-react'
import MyDashboardComponent from '../myDashboard';
import InvestigativeLinesComponent from '../investigativeLines';
import InvestigativeProjectsComponent from '../investigativeProjects';
import SemilleroComponent from '../semilleros';
import './main.css';

const MainMenuComponent = () => {
    return(
        <div class="MainMenuContainer">
                <div class="MainMenuBodyLateralMenu">
                    <h1>
                        Sistema Investigativo
                    </h1>
                    <div class="WelcomeMessage">
                        <div class="profileCircle">
                            <label class="initials">DR</label>
                        </div>
                        <div class="message">
                            <span><h2>Bienvenid@,</h2></span>
                            <span><h3>[INFORMACION USER]</h3></span>
                        </div>
                        <Divider/>
                    </div>
                    <div class="mainOptions">  
                        <Divider/>
                        <ul class="list">
                            <li style={{color:"white"}}><Icon name="home" color="white" style={{color:"white"}}/><Link to="/main">Mi Dashboard</Link></li>
                            <li style={{color:"white"}}><Icon name="compass" color="white" style={{color:"white"}}/><Link to="/main/lineas">Lineas de investgación</Link></li>
                            <li style={{color:"white"}}><Icon name="group" color="white" style={{color:"white"}}/><Link to="/main/semilleros">Semilleros</Link></li>
                            <li style={{color:"white"}}><Icon name="book" color="white" style={{color:"white"}}/><Link to="/main/proyectos">Proyectos de investigación</Link></li>
                        </ul>
                        <Divider/>
                    </div>
                </div>
                <div class="MainMenuContent">
                    <div class="MainMenuHeader">
                        <h1>Inicio</h1>
                        <div class="MainMenuHeaderUserInfo">
                            <div class="profileCircle2">
                                <label class="initials2">DR</label>
                            </div>
                            <span>[INFORMACION USER]</span>
                        </div>   
                    </div>
                    <div class="content">
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