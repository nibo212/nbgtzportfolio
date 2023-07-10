import React, { Component } from 'react'

export default class Project extends Component {
  render() {

    let {name,description, Date} =this.props.item;

    return (
      <div class="project">
        <div className='top'><h2>{name}</h2></div>
        <div className='bottom'>
          {Date}
          <br></br>
          {description}
        </div>
      </div>
    )
  }
}
