'use strict'

module.exports = httpclient => {


    const service = '/device'
    const devices = {}


    /**
     * Get Device Information
     *
     * Getting an android device information.
     *
     * @param integer id
     * @return Request-Promised
     */
    devices.getDevice = id => httpclient.get(`${service}/${id}`)


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
    devices.searchDevices = filters => httpclient.post(`${service}/search`).send(filters || {})


    return devices
}