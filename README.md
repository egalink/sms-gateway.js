# sms-gateway.js

> **Important:** Please note that we are still working on the documentation and will include all the features that SMS Gateway has offered us so far.

A Node.js library to interact with SMS Gateway using their v4.0 API.

## Official Documentation
Please, see the official documentation to [get started.](https://smsgateway.me/sms-api-documentation/getting-started)

## Installation
```
npm i sms-gateway.js --save
```

## Configuration
This plugin uses the SMSGateway v4.0 API, so you will need the "API Token" key that will be automatically generated in the SMSGateway service portal llocated in: My account -> Settings

``` js
const { messages, devices } = require('sms-gateway.js')('your-api-token-here')
```

## Usage
---


#### 1. Send a message:
A list of messages to send. You can use any combination of phone numbers, messages and devices:

```js
messages.sendMessages([
	{
		"phone_number": "1234567890",
		"message": "SMS Gateway it works.",
		"device_id": 1 // your device id here 
    },
    {
        "from": "AcmeLtd",
        "phone_number": "07791064782",
        "message": "Hello World",
        "device_id": 2
    }
]).then(response  => {
	console.log('Message send successfully!')
	console.log(response.status)
	console.log(response.body)
}).catch(error  => {
	console.log('Error while send a message:')
	console.log(error.status)
	console.log(error.message)
	console.log(error.response.body)
})
```
> More details on [Sending a SMS messages.](https://smsgateway.me/sms-api-documentation/messages/sending-a-sms-message)


#### 2. Getting a message info:
You can check the status and other information of any of your SMS messages making a request with the `messageId`:

```js
let messageId = 123456

messages.getMessage(messageId).then(response => {
    console.log(response.status)
    console.log(response.body)
})
.catch(error => {
    console.log(error.status)
    console.log(error.message)
    console.log(error.response.body)
})
```
> More details on [Getting a SMS message information.](https://smsgateway.me/sms-api-documentation/messages/getting-a-sms-message-information)


#### 3. Canceling SMS messages:
Sometimes you may want to cancel messages you've requested to be sent. You can cancel outgoing messages using a list with the IDs of messages that you wish to cancel:

```js
messages.cancelMessages([
    {
        "id": 10945815
    },
    {
        "id": 59484209
    },
    {
        "id": 59484210
    },
    {
        "id": 59484211
    }
])
.then(response => {
    console.log(response.status)
    console.log(response.body)
})
.catch(error => {
    console.log(error.status)
    console.log(error.message)
    console.log(error.response.body)
})
```
> More details on [Canceling a SMS messages.](https://smsgateway.me/sms-api-documentation/messages/canceling-a-sms-messages)
