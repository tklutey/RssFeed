import React, { Component } from 'react';
import Post from '../components/Post';
import './FeedContainer.css';
import fetchRss from '../service/Rss';
import RotateLoader from 'react-spinners/RotateLoader';

class FeedContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedList : [],
            loading: false
        }
    }

    componentWillMount() {
        this.setState({loading: true})
        fetchRss().then((feed) => this.setState({feedList : feed, loading: false}) )
    }


    render() {
        var i = 0;
        const listItems = this.state.feedList.map((item) => 
            <Post key={i++} title={item.title} mediaurl={item.mediaurl} description={item.description} pubDate={item.pubDate} logo={item.logo}/>
        );

        return (
            <div className="horizontal-center">
                <h1 > HeadLine </h1>
                <div className="container">
                    <RotateLoader loading={this.state.loading}/>
                    <div className="horizontal-center">
                        {listItems}
                    </div>
                </div>
            </div>
        )
        

    }
}

export default FeedContainer; 