import sources from '../config/Sources';
let moment = require('moment');
let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
        headers: {
            'mode' : 'no-cors'
        },
        item: [
          ['media:content', 'media'],
          ['media:thumbnail', 'media'],
          ['description', 'description']
        ]
      }
});

var sortByDate = function(lhs, rhs) {
    { return lhs.rankDate < rhs.rankDate ? 1 : lhs.rankDate > rhs.rankDate ? -1 : 0; }
}

async function fetchRss() {
    var list = []
    for(var i = 0; i < sources.length; i++) {
        let feed = await parser.parseURL(sources[i].url);
        feed.items.forEach(item => {
            var url = ''
            if(item.media != null) {
                if (item.media.$ != null) {
                    url = item.media.$.url;
                }
            }
            var post = {
                title: item.title,
                mediaurl: url,
                description: item.description,
                pubDate: item.pubDate,
                rankDate: toDate(item.pubDate),
                logo: sources[i].logo
            }
            list.push(post);
    });
    }
    list.sort(sortByDate);
    return list;
}

function toDate(dateString) {
    var date = moment(dateString);
    return date;
}

export default fetchRss;