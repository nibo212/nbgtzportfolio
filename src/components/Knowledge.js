import React, { Component } from 'react'

export default class Knowledge extends Component {
  render() {

    let {name,icon,level,experience} =this.props.item;

    return (
      <div className='knowledge'>
        <div className='title'>
            {/* <h2>{name}</h2> */}
            <img src={icon}/>       
           </div>
        <div className='Progressbar'>
            <div className="progressBar" style={{width:level}}></div>

        </div>
        <div className='experience'>
            <p>{experience}</p>
        </div>
      </div>
    )
  }
}
