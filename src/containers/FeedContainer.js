import React, { Component } from 'react';
import Post from '../components/Post';
import './FeedContainer.css';
import fetchRss from '../service/Rss';

class FeedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedList : []
        }
        fetchRss().then((feed) => this.setState({feedList : feed}) )
    }

    render() {
        var list = this.state.feedList;
        var i = 0;
        const listItems = list.map((item) => 
            <Post key={i++} title={item.title} mediaurl={item.mediaurl} description={item.description} pubDate={item.pubDate} logo={item.logo}/>
        );
        
        return (
            <div className="feedList">
                {listItems}
            </div>
        )
    }
}

export default FeedContainer; 