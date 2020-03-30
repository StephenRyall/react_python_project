var nodeFetch = require("node-fetch");

export const callAPI = (method, route, body) => {

    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }

    if (body != null) {
        return nodeFetch(route, {
            method: method,
            headers: headers,
            body: JSON.stringify(body)
        })
            .then(response => {

            })
            .catch(error => {
                throw error
            })
    }
    else {
        return nodeFetch(route, {
            method: method,
            headers: headers,
        })
            .then(response => {

            })
            .catch(error => {
                throw error
            })
    }
}