'use strict'

// https://github.com/request/request-promise:
let rp = require('request-promise-native')

module.exports = ({ apiToken, host }) => {
    
    let endpoint = '/device'
    
    let config = {
        method: 'GET',
        uri: host + endpoint,
        headers: {
            'Content-Type': 'application/json',
            Authorization: apiToken,
        },
        json: true, // automatically parses the JSON string in the response
    }
    
    let device = {}

    /**
     * Get Device Information
     *
     * Getting an android device information.
     *
     * @param integer id
     * @return Request-Promised
     */
    device.getDevice = (id) => {
        config.uri = config.uri + '/' + id
        return rp(config)
    }

    /**
     * Device Search
     *
     * Valid Fields: id, type, name, phone_number, make, model, provider, country
     *
     * Filters is a object multidimensional array.
     * Each array inside of filters is a query group.
     * An 'and' is done for items within the same group. and an 'or' between groups.
     *
     * @param object filters
     * @return Request-Promised
     */
    device.searchDevices = (filters) => {
        config.method = 'POST'
        config.uri = config.uri + '/search'
        config.body = filters || {}
        return rp(config)
    }

    return device
}