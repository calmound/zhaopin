import React from 'react'
import  {Button, NavBar, InputItem, TextareaItem } from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'

import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {update} from '../../redux/user.redux'

@connect(
    state=>state.user,
    {update}
)
class BossInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title:'',
            desc:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render() {
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo

        return <div>
            {redirect && redirect!==path?<Redirect to={this.props.redirectTo}></Redirect>:null}
            <NavBar  mode="light">牛人完善信息页面</NavBar>
            <AvatarSelector selectAvatar={(imgname =>{
                this.setState({
                    avatar:imgname
                })
            })} />
            <InputItem onChange={(v) => this.onChange('title',v)}>
            求职岗位
            </InputItem>     
            <TextareaItem rows={3} title="个人见解" autoHeight onChange={(v) => this.onChange('desc',v)}>
            
            </TextareaItem>   
            <Button
                onClick={() =>{
                    this.props.update(this.state)
                }}
            >保存</Button>
        </div>
    }
}

export default BossInfo