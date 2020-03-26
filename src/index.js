'use strict'

module.exports = token => {

    
    const options = {
        api: 'https://smsgateway.me/api/v4',
        key: token || proccess.env.SMSGATEWAY_API_TOKEN || '',
    }


    const smsgateway = {}
    const httpclient = require('./sms-gateway-api/httpclient')(options)


    smsgateway.httpclient = httpclient
    smsgateway.devices = require('./sms-gateway-api/devices')(httpclient)
    smsgateway.messages = require('./sms-gateway-api/messages')(httpclient)


    return smsgateway
}