import React, {Component} from 'react';
import Post from '../components/Post';
import axios from 'axios';

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: null
        }
    }

    render(){
        return(
            <div>
                { this.state.post ? <Post {...this.state.post}/> : ''}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response=>{
                this.setState({post: response.data});
        })
    }

}