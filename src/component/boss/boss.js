import React from 'react'
import axios from 'axios'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import {getUserList} from '../../redux/chatuser.redux'
import {connect} from 'react-redux'
import UserCard from '../usericard/usercard'

@connect(
    state=>state.chatuser,
    {getUserList}
)
class Boss extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getUserList('boss')
    }
    render() {
        console.log(this.props.userlist)
        return (
            <UserCard userlist={this.props.userlist}></UserCard>
        )
    }
}

export default Boss

