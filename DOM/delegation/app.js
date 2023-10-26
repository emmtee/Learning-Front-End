const tweetForm = document.querySelector('.tweet-form')
const list = document.querySelector('.tweet-log')

tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = tweetForm.elements.username;
    const tweet = tweetForm.elements.tweet;
    addTweet(username.value, tweet.value)
    username.value = ''
    tweet.value = ''
})
const addTweet = function (username, tweet) {
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    newTweet.append(` - ${tweet}`)
    list.append(newTweet)
}
list.addEventListener('click', (e) => {

    e.target.localName === 'li' && e.target.remove()

})