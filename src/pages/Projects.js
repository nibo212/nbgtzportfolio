import React, { Component } from 'react'
import Project from '../components/Project'
import {projectsData} from '../data/projectsdata'

export default class Projects extends Component {

    state={
        projects:projectsData
    }
  render() {

    let {projects} = this.state;

    return (
        <div className='section projects' id='Project'>
            <div class="parent">
                <div className='exptop'><h1>Projects</h1></div>
                <br></br>
                <br></br>
            <div class="div1">
            <div className='logo'><img src="https://file.diplomeo-static.com/file/00/00/02/16/21624.svg"></img>&nbsp;&nbsp;<h3>School Projects</h3></div>
            <div className='projectlist'>
                {
                            projects.filter(x => x.type <= 1)
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map(item => {
                        return(
                            <Project 
                            item={item} 
                            />
                )
            }) 
        }
            </div>
            </div>
            <br></br>
            <div class="div2">
            <div className='logo'><img src="http://cdn.onlinewebfonts.com/svg/img_311588.png"></img>&nbsp;&nbsp;<h3>Works Projects</h3></div>
            <div className='projectlist'>
                {
                            projects.filter(x => x.type == 2)
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map(item => {
                        return(
                            <Project 
                            item={item} 
                            />
                )
            }) 
        }
            </div>
            </div>
            <br></br>
            <div class="div3">
                    <div className='logo'><img src="https://www.svgrepo.com/show/85068/job.svg"></img>&nbsp;&nbsp;<h3>Personnal Projects</h3></div>
                    <div className='projectlist'>
                {
                    projects.filter(x => x.type == 3).map(item => {
                        return(
                            <Project 
                            item={item} 
                            />
                )
            }) 
        }
            </div>
            </div>
        </div>
               
               
    </div>
    )
  }
}
