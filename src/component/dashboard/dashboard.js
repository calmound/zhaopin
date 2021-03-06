import React from 'react'
import {connect} from 'react-redux'
import {NavBar} from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import {Switch,Router,Route} from 'react-router-dom'
import User from '../../component/user/user'

function Msg(){
    return <h2>User</h2>   
}

@connect(
    state=>state
)
class Dashboard extends React.Component{
    constructor(){
        super()
    }
    render(){
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path:'/boss',
                text:'BOSS',
                icon:'boss',
                title:'BOSS列表',
                component:Boss,
                hide:user.type == 'genius'
            },{
                path:'/genius',
                text:'牛人',
                icon:'job',
                title:'牛人列表',
                component:Genius,
                hide:user.type == 'boss'
            },{
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },{
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            }
        ]
        return <div>
                <NavBar className="fixed-header" mode='dark'>{navList.find(v=>v.path==pathname).title}</NavBar> 
                <div className='router-box' style={{marginTop:45}}>
                    <Switch>
                        {navList.map(v=>{
                            return <Route key={v.path} path={v.path} component={v.component}></Route>
                        })}
                    </Switch>
                </div>  
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
    }
}

export default Dashboard