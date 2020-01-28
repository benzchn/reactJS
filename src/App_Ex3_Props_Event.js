import React, { Component } from 'react'

export default class App_Ex3_Props_Event extends Component {
    onClickBtn2 = ()=>{
        alert("Mobile")
    }
    
    render() {
        return (
            <div>
                <button type="button" onClick={()=>{ alert("555")}}>btn1</button>
                <button type="button" onClick={this.onClickBtn2}>btn2</button>
                <MyButton onSubmit={()=>{alert("MyButton")}}/>
                <button type="button" class="btn btn-outline-primary">BBBBB</button>
                
            </div>
        )
    }
}

class MyButton extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <button 
                style={{backgroundColor:"#f00"}} 
                type="button" 
                onClick={this.props.onSubmit}>MyButton</button>
            </div>
        )
        
}
}
