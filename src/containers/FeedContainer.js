import React, { Component } from 'react';
import Post from '../components/Post';
import './FeedContainer.css';
import fetchRss from '../service/Rss';

class FeedContainer extends Component {

    sources = [
        'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    ]

    constructor(props) {
        super(props);
        this.state = {
            feedList : []
        }
        for (var i = 0; i < this.sources.length; i++) {
            fetchRss(this.sources[i]).then((feed) => this.setState({feedList : feed}))
        }
    }

    render() {
        var list = this.state.feedList
        console.log(list)
        const listItems = list.map((item) => 
            <Post title={item.title} mediaurl={item.mediaurl} description={item.description} pubDate={item.pubDate}/>
        );
        
        return (
            <div className="feedList">
                {listItems}
            </div>
        )
    }
}

export default FeedContainer; 