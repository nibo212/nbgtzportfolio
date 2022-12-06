import React, { Component } from 'react'
import { knwoledgesData } from '../data/data'
import Knowledge from '../components/Knowledge'

export default class Knowledges extends Component {

  state={
    knowledges:knwoledgesData
} 

  render() {

   let {knowledges} = this.state;

    return (
      <div className='knowledges'>
      <div class="parent">
      <div class="div1">
        <header>
          <h2>Software and Web Skills</h2>
        </header>
        <div class="content">
        {
            knowledges.filter(x => x.type <= 1).map(item => {
                return(
                    <Knowledge 
                    item={item} 
                    />
                )
            }) 
        }
        </div>
         </div>
      <div class="div2"> 
      <header>
          <h2>Integration / Deployement</h2>
        </header>
        <div class="content">
        {
            knowledges.filter(x => x.type === 2).map(item => {
                return(
                    <Knowledge 
                    item={item} 
                    />
                )
            }) 
        }
        </div>
       
        </div>
      <div class="div3"> 
      <header>
          <h2>Methods and Softskills</h2>
        </header>
        <div class="content">
        {
            knowledges.filter(x => x.type === 3).map(item => {
                return(
                    <Knowledge 
                    item={item} 
                    />
                )
            }) 
        }
        </div>
        </div>
      <div class="div4"><header>
          <h2>Data Management</h2>
        </header>
        <div class="content">
        {
            knowledges.filter(x => x.type === 4).map(item => {
                return(
                    <Knowledge 
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
