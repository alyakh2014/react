import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './app/layouts/Layout';
import PageNotFound from './app/pages/PageNotFound';
import Main from './app/pages/Main';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';
import Post from './app/pages/Post';
import Comments from './app/pages/Comments';
import OneComment from './app/pages/OneComment';

import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            <Route path="main" component={Main}/>
            <Route path="users" component={Users}>
                <Route path=":userId" component={User}/>
            </Route>
            <Route path="posts" component={Posts}>
                <Route path=":postId" component={Post}/>
            </Route>
            <Route path="comments" component={Comments}>
                <Route path=":commentId" component={OneComment}/>
            </Route>
            <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>,
    document.querySelector('#root'));
