import React, {Component} from 'react';
import PostLists from '../components/PostLists';
import {addPost, getPosts} from "../actions/actionCreators";
import PostStore from '../stores/postStore';

export default class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        };
        this.onPostChange = this.onPostChange.bind(this);
    }

    post(){
        const title = "New post";
        const userId = 1;
        const body = "Text of a post";
        addPost(title, userId, body);
    }

    onPostChange(){
      const posts = PostStore.posts;
      this.setState({posts});
    }

    componentWillUnmount() {
        PostStore.removeListener('change', this.onPostChange);
    }

    componentDidMount() {
        PostStore.on('change', this.onPostChange);
        getPosts();
    }

    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick={this.post}>
                    Добавить пост
                </button>
                {
                    (this.props.children) ?
                        this.props.children :
                        <PostLists posts={this.state.posts}/>
                }
            </div>
        )
    }
}