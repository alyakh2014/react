import React, {Component} from 'react';
import COneComment from '../components/COneComment';
import axios from "axios";

export default class OneComment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comment: null
        }
    }


    render(){
        return(
            <div>
                {
                    (this.state.comment) ?
                        <COneComment {...this.state.comment}/>:
                        ''
                }
            </div>
        )
    }

    componentDidMount(){
        axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`).then(response=>{
            this.setState({comment: response.data})
        })
    }
}