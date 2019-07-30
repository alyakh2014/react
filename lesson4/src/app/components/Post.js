import React from 'react';

export default class Post extends React.Component{
    render(){
        return(
            <div className='article-wrapper'>
                <h3 className='article-wrapper__title'>{this.props.item.title}</h3>
                <p className='article-wrapper__text'>{this.props.item.text}</p>
                <br/>
                <span className='article-wrapper__author'>{this.props.item.author}</span> / <span className='article-wrapper__date'>{this.props.item.date}</span>
            </div>
        )
    }
}