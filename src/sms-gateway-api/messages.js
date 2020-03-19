'use strict'

const superagent = require('superagent')

module.exports = ({ api, key }) => {


    const request = r => r.set('Authorization', key).accept('application/json').type('application/json')
    const service = api + '/message'
    const messages = {}


    /**
     * Sending a SMS messages
     *
     * You can use our service to programmatically send a message
     * through your Android phone.
     *
     * @param array messages
     * @return Request-Promised
     */
    messages.sendMessages = messages => request(superagent.post(`${service}/send`)).send(messages || [])


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
    messages.cancelMessages = ids => request(superagent.post(`${service}/cancel`)).send(ids || [])


    /**
     * Getting a SMS message information
     *
     * You can check the status and other information
     * of any of your SMS messages using our API
     * 
     * @param integer id
     * @return Request-Promised
     */
    messages.getMessage = id => request(superagent.get(`${service}/${id}`))


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
    messages.searchMessages = filters => request(superagent.post(`${service}/search`)).send(filters || {})

    
    return messages
}