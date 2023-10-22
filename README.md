# TrackingAPIs
This guide will help you get started with our API, providing detailed information on how to make requests, the required request format, available endpoints, and expected responses. Our API interacts with the Trackingmore API(Upstream API). 

## Table of content
- [Intro](https://github.com/msitu22/Tracking_API#trackingapis)
- [Prerequisites](https://github.com/msitu22/Tracking_API#prerequisites)
- [Environment Setup](https://github.com/msitu22/Tracking_API#environment-setup)
- [Making requests(How to use the APIs)](https://github.com/msitu22/Tracking_API#making-requestshow-to-use-the-apis)
  - [makeTrackAPI](https://github.com/msitu22/Tracking_API#maketrackapi)
  - [getTrackAPI](https://github.com/msitu22/Tracking_API#gettrackapi)
- [Error Handling - logging](https://github.com/msitu22/Tracking_API#error-handling---logging)
- [Install SSL Certificates(Optional)](https://github.com/msitu22/Tracking_API#install-ssl-certificatesoptional)

## Prerequisites
Before you start using our API, make sure you have the following prerequisites in place:
- Access Credentials: To use our API, you need to obtain API key in the TrackingMore API website:
https://www.trackingmore.com/signup.html
- Environment Setup: Configure your development environment to make HTTPS requests to our API endpoints. Also need to install required dependencies.

## Environment Setup
Start a new Node.js project with below command line below and it will create a new package.json file for our project:
```
npm init
```

Install our Node.js dependencies:
- Axios
```
npm i dotenv
```
- Express
```
npm install express
```
- Luxon
```
npm i luxon
```
- Nodemon
```
npm i nodemon
```
- Winston
```
npm i winston
```

Initialize a `.env` file to store API keys.
Install the Dotenv to store API key
```
npm i dotenv
```
Add the `.env` file on the root folder, then use the following format and fill up your API key
```
API_KEY = '<YOUR_API_KEY>'
```
</br>

## Making requests(How to use the APIs)
There are 2 APIs for this project, one is makeTrack API(post request to send data to the web server), the other one is getTrack API(get request to receive data from the web server).

### makeTrackAPI:
- Endpoint: /make_track
- Description for API: Send the data in the payload to the TrackingMore API 
- Required Request Format is Json format like below: Enter the 4 tracking items: “order_number”, “tracking_number”, “courier_code”, “order_id” in the payload
- Response: Once you click the send button to send the data to TrackingMore API, you will receive a Json format data with status code with status code 200(if you receive status code 400, that means the requested resource was not found).

#### Below is screenshot with expected response status code 200
![image](https://github.com/msitu22/Tracking_API/assets/112602900/ac2676e7-9f54-4d87-a5cc-cefc68ba4270)

#### Below is screenshot with non-expected response status code 400
![image](https://github.com/msitu22/Tracking_API/assets/112602900/7b645e3c-3da2-492e-ab1d-490ae10fb2ad)

### getTrackAPI:
- Endpoint: /get_track
- Description for API: retrieve the data from the TrackingMore API 
- Required Request Format is Json format like below: Enter “order_number”
- Response: Once you click the send button to send the data to TrackingMore API, you will receive a Json format data with status code with status code 200(if you receive status code 400, that means the requested resource was not found)

#### Below is screenshot with expected response status code 200
![image](https://github.com/msitu22/Tracking_API/assets/112602900/f2f449ce-24ca-4cc3-894f-30026a3400bd)

#### Below is screenshot with non-expected response status code 400
![image](https://github.com/msitu22/Tracking_API/assets/112602900/4629783d-3700-4070-a83c-fd8b9afad632)

## Error Handling - logging
We will use Winston logging library to log information for error handling. I have implemented it in this app so whenever you run an API, you can view the logs in your terminal or command prompt while your Node.js application is running. 
![image](https://github.com/msitu22/Tracking_API/assets/112602900/2a9e8c51-3394-46e3-8cf3-36695fdaa062)

## Install SSL Certificates(Optional)
We are using HTTPS make request and below are the steps to install SSL certificates. SSL certificates allow web servers to encrypt their traffic, and also offer a mechanism to validate server identities to their visitors. Websites using SSL are accessed via the https:// protocol.

- Generating a CSR 
```
openssl genrsa -out key.pem
```

- Generating a Private Key
```
openssl req -new -key key.pem -out csr.pem
```

- Installing a Certificate On Your Server
```
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
```









