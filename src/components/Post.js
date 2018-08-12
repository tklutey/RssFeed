import React, { Component } from 'react';
import './Post.css';
import {Grid} from '@material-ui/core';


class Post extends Component {

    render() {
        return (
            <Grid item xs={6} className="post" >
            <img src={'https://upload.wikimedia.org/wikipedia/commons/5/58/NewYorkTimes.svg'} />
            <h4 className="times">{this.props.title}</h4>
            <img src={this.props.mediaurl} />
            <p className="date">{this.props.pubDate}</p>
            <p>{this.props.description}</p>
            </Grid>
        )
    }
}

export default Post;