let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
        item: [
          ['media:content', 'media'],
          ['description', 'description']
        ]
      }
});

async function fetchRss(source) {
        let feed = await parser.parseURL(source);
        var list = []
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
                pubDate: item.pubDate
            }
            list.push(post);
        });
        return list;
}

export default fetchRss;