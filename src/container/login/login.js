import React from 'react'
import Logo from '../../component/logo/logo'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {login} from '../../redux/user.redux'
import {connect} from 'react-redux'

function hello(){
    
}

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user:'',
            pwd:''
        }        
    }
    register(){
        this.props.history.push('/register')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    render(){
        return <div>
            {this.props.redirectTo && this.props.redirectTo!='/login'?<Redirect to={this.props.redirectTo} />:null}
            <Logo />
            <h2>登陆页面</h2>
            <WingBlank>
                <List>
                    <InputItem onChange={v=>this.handleChange('user',v)}>用户</InputItem>
                    <WhiteSpace />
                    <InputItem onChange={v=>this.handleChange('pwd',v)}>密码</InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleLogin.bind(this)}>登陆</Button>
                <WhiteSpace />
                <Button onClick={this.register.bind(this)} type="primary">注册</Button>      
            </WingBlank>
        </div>
    }
}

export default Login