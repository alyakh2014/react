import React, {Component} from 'react';
import UserProfile from '../components/User';
import axios from 'axios';

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    render(){
        return(
            <div>
                { this.state.user ? <UserProfile {...this.state.user}/> : ''}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then(response=>{
                this.setState({user: response.data});
        })
    }

}
