import React, { Component } from 'react';
import './Post.css';
import {Grid} from '@material-ui/core';


class Post extends Component {

    render() {
        return (
            <Grid item md={6} className="post" >
            <img className="logo" src={this.props.logo} />
            <h4 className="times">{this.props.title}</h4>
            <img className="media" src={this.props.mediaurl} />
            <p className="date">{this.props.pubDate}</p>
            <p>{this.props.description}</p>
            </Grid>
        )
    }
}

export default Post;