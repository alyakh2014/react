import React, {Component} from 'react';
import axios from 'axios';
import COneComment from './COneComment';

export default class CComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    render(){

        if(!this.state.comments){
            return null;
        }

        const comments = this.state.comments.map((comment)=>{
            return <COneComment key={comment.id} {...comment}/>
        });

        return(
            <div>
                <h1>Комменты!</h1>
                {comments}
            </div>
        )
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/comments/').then(response=>{
            this.setState({comments: response.data});
        })
    }
}