import React from 'react';
import Post from './Post';

export default class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articles : this.props.items
        }
    }

    render(){
    const articles = this.state.articles.map((article, index)=>{
        return <Post key={index} item={article}/>
    })

        return(
            <div>{articles}</div>
        )
    }
}
