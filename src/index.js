'use strict'

module.exports = (key) => {

    let options = {
        host: 'https://smsgateway.me/api/v4',
        apiToken: key,
    }

    let clients = {
        deviceApi: require('./deviceApi') (options),
        messageApi: require('./messageApi') (options),
    }

    return clients
}