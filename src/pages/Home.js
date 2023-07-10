
import React, { Component } from 'react'

export default class Home extends Component {

  handleMouseMove = event => {
    
    const eye = document.querySelectorAll(".eyes");
   eye.forEach(function (eye) {
     let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
     let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

     let radian = Math.atan2(event.clientX - x, event.clientY - y);
     let rotate = radian * (180 / Math.PI) * -1 + 270;
     eye.style.transform = "rotate(" + rotate + "deg)";
   });
  }

  render() {
    return (
        <div className='section home' id='Home'>
        <div className="parent" onMouseMove={this.handleMouseMove}>
            <div className="div1">
                <h1> Welcome to Nicolas Bogenschutz portfolio</h1>
            </div>
        <div className="div2">
        <div class="eyescontainer">
            <div class="eyes"></div>
            <div class="eyes"></div>
        </div>
        </div>
        <div className="div3">
                    <ul>
                        <h3>Who I am ?</h3>
                        <br></br>
                        <li>Nicolas Bogenschutz</li>
                        <li>French and Brazilian</li>
                        <li>22 years old</li>
                        <li>Strasbourg</li>
                    </ul>
                </div>
                <div className="div4">
                <ul>
                        <h3>What I do ?</h3>
                        <br></br>
                        <li>Alternship in Computer Engineering</li>
                        <li>Student at CESI Ecole d'ingénieurs</li>
                        <li>IT developer apprentice</li>
                    </ul></div>
                <div className="div5">
                    <ul>
                        <h3>What i'm currently looking for ?</h3>
                        <br></br>
                        <li>An internship abroad in English country</li>
                        <li>Improvement of my IT skills</li>
                        <li>Improve my english</li>
                    </ul></div>
            </div>
    </div>
    )
  }
}



