'use strict'

const superagent = require('superagent')

module.exports = ({ api, key }) => {


    const service = uri => `${api}/${uri}`.replace(/\/\/+/ig, '/')
    const headers = request => request.accept('application/json').type('application/json').set('Authorization', key)
    const request = {}


    request.get = uri => headers(superagent.get(
        service(uri)
    ))


    request.post = uri => headers(superagent.post(
        service(uri)
    ))


    request.service = uri => service(uri)


    return request
}