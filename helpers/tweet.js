let Twit = require('twit')

let T = new Twit({
    consumer_key: 'JAFlBJMrrKnFdlRjIeZRrQ9Cj',
    consumer_secret: 'UfT0PWaANdhz8TAvbmuSn5PhLsnItVZhwqmRqXtdwtNyHAgvO6',
    access_token: '1384519880582438913-firsu4QfaSB6ted6OUwK1YeZROavLu',
    access_token_secret: '1YMRsrWXbL88rTQOlhDIDrXmgSbICAv9vfZJ8aU5PVxer',
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: true,     // optional - requires SSL certificates to be valid.
})

const tweet = (content) => {
    let newTweet = `
    A new game has been added to Game Store PP!!!
    Name: ${content.name}
    Price: ${content.price}
    Genre: ${content.genre}
    ${content.image}
    <-LINK TO WEBSITE->
    Developed with love by: ${content.Developers[0].name}
    `

    T.post('statuses/update', { status: `${newTweet}` }, function (err, data, response) {
        if (data.created_at) {
            console.log('Sent tweet successful!');
        }
    })
}

module.exports = tweet