const requestURL = 'http://www.omdbapi.com/?s=titanic&apikey=4a61d92e'

function sendRequest(method, url, body = null) {
    return fetch(url).then(response => {
        return response.text()
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))