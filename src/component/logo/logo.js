import React from 'react'
// import logoImg from 
import './logo.css'
import logoImg from './logo.png'

class Logo extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="logo-container">
            <img src={logoImg} alt=""/>
        </div>           
    }
}

export default Logo