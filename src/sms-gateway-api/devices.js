'use strict'

const superagent = require('superagent')

module.exports = ({ api, key }) => {

    
    const request = r => r.accept('application/json').type('application/json').set('Authorization', key)
    const service = api + '/device'
    const devices = {}


    /**
     * Get Device Information
     *
     * Getting an android device information.
     *
     * @param integer id
     * @return Request
     */
    devices.getDevice = id => request(superagent.get(`${service}/${id}`))


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
     * @return Request
     */
    devices.searchDevices = filters => request(superagent.post(`${service}/search`)).send(filters || {})


    return devices
}