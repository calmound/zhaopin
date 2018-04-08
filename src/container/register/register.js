import React from 'react'
import Logo from '../../component/logo/logo'
import { List,Radio, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from  '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
    state => state.user,
    {register}
)
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
    }

    register(){
        this.props.register(this.state)
    }
    handleChange(key,v){
        console.log(123)
        this.setState({
            [key]:v
        })
    }
    render(){
        const RadioItem = Radio.RadioItem
        return <div>
            {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
            <Logo />
            <h2>注册页面</h2>
            <WingBlank>
                <List>
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户名</InputItem>
                    <InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                    <InputItem onChange={v=>this.handleChange('repeatpwd',v)}>确认密码</InputItem>
                    <RadioItem onChange={v=>this.handleChange('type','genius')}  checked={this.state.type == 'genius'}>
                        牛人
                    </RadioItem>
                    <RadioItem onChange={v=>this.handleChange('type','boss')} checked={this.state.type == 'boss'}>
                        Boss
                    </RadioItem>
                </List>
                <Button onClick={this.register.bind(this)} type="primary">注册</Button>      
            </WingBlank>
        </div>
    }
}

export default Register