'use strict'

module.exports = token => {

    const options = {
        api: 'https://smsgateway.me/api/v4',
        key: token,
    }


    return {
        devices: require('./sms-gateway-api/devices') (options),
        messages: require('./sms-gateway-api/messages') (options),
    }
}