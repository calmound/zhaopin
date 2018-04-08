import React from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import browserCookie from 'browser-cookies'
import {logoutSubmit} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
@connect(
    state => state.user,
    {logoutSubmit}
)
class User extends React.Component {
    logout() {
        const alert = Modal.alert
        
        alert('注销', '确认退出？', [
            { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
            { text: '确认', onPress: () => {
                browserCookie.erase('userid') 
                this.props.logoutSubmit()
            } },
        ])
    }
    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.user ? (
            <div>
                <Result
                    title={props.user}
                />
                <List renderHeader={() => '简介'} >
                    <Item
                        multipleLine
                    >
                        {props.title}
                        {props.desc.split('\n').map(v => <Brief key={v}>{v}</Brief>)}

                    </Item>
                    <Button onClick={this.logout.bind(this)}>退出登陆</Button>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                </List>
            </div>
        ) : <Redirect to={props.redirectTo} />
    }
}

export default User