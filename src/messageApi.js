'use strict'

// https://github.com/request/request-promise:
let rp = require('request-promise-native')

module.exports = ({ apiToken, host }) => {

    let endpoint = '/message/'

    let config = {
        method: 'GET',
        uri: host + endpoint,
        headers: {
            'Content-Type': 'application/json',
            Authorization: apiToken,
        },
        json: true, // automatically parses the JSON string in the response
    }

    let message = {}

    /**
     * Sending a SMS messages
     *
     * You can use our service to programmatically send a message
     * through your Android phone.
     *
     * @param array messages
     * @return Request-Promised
     */
    message.sendMessages = (messages) => {
        config.method = 'POST'
        config.uri = config.uri + 'send'
        config.body = messages
        return rp(config)
    }

    /**
     * Canceling a SMS messages
     *
     * Sometimes you may want to cancel messages you've
     * requested to be sent. You can cancel outgoing messages using
     * our SMS Message API.
     *
     * @param array ids
     * @param Request-Promised
     */
    message.cancelMessages = (ids) => {
        config.method = 'POST'
        config.uri = config.uri + 'cancel'
        config.body = ids
        return rp(config)
    }

    /**
     * Getting a SMS message information
     *
     * You can check the status and other information
     * of any of your SMS messages using our API
     * 
     * @param integer id
     * @return Request-Promised
     */
    message.getMessage = (id) => {
        config.uri = config.uri + id
        return rp(config)
    }

    /**
     *   Message Search
     *
     *   Valid Fields: id, device_id, phone_number, message, status
     *
     *   Filters is a multidimensional array.
     *   Each array inside of $filters is a query group.
     *   An 'and' is done for items within the same group. and an 'or' between groups.
     *
     * @param object filters
     * @return Request-Promised
     */
    message.searchMessages = (filters) => {
        config.method = 'POST'
        config.uri = config.uri + 'search'
        config.body = filters || {}
        return rp(config)
    }

    return message
}