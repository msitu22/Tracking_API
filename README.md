# TrackingAPIs
This guide will help you get started with our API, providing detailed information on how to make requests, the required request format, available endpoints, and expected responses. Our API interacts with the Trackingmore API(Upstream API). 

## Table of content
- [Intro](https://github.com/msitu22/TrackingAPIs/blob/main/README.md#trackingapis)
- [Prerequisites](https://github.com/msitu22/TrackingAPIs/blob/main/README.md#prerequisites)
- [Environment Setup](https://github.com/msitu22/TrackingAPIs/blob/main/README.md#environment-setup)
- [Making requests(How to use the APIs)](https://github.com/msitu22/TrackingAPIs/blob/main/README.md#making-requestshow-to-use-the-apis)
- [Error Handling - logging](https://github.com/msitu22/TrackingAPIs/blob/main/README.md#error-handling---logging)

## Prerequisites
Before you start using our API, make sure you have the following prerequisites in place:
- Access Credentials: To use our API, you need to obtain API key in the TrackingMore API website:
https://www.trackingmore.com/signup.html
- Environment Setup: Configure your development environment to make HTTPS requests to our API endpoints.

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
![image](https://github.com/msitu22/TrackingAPIs/assets/112602900/d315c579-afba-465c-b9c9-ab167c1fc35d)

#### Below is screenshot with non-expected response status code 400
![image](https://github.com/msitu22/TrackingAPIs/assets/112602900/af9aa8d8-2a44-4b19-98ac-e503f3285761)

### getTrackAPI:
- Endpoint: /get_track
- Description for API: retrieve the data from the TrackingMore API 
- Required Request Format is Json format like below: Enter “order_number”
- Response: Once you click the send button to send the data to TrackingMore API, you will receive a Json format data with status code with status code 200(if you receive status code 400, that means the requested resource was not found)

#### Below is screenshot with expected response status code 200
![image](https://github.com/msitu22/TrackingAPIs/assets/112602900/1bf1108c-6108-4cab-9f33-8b43e2108372)

#### Below is screenshot with non-expected response status code 400
![image](https://github.com/msitu22/TrackingAPIs/assets/112602900/e65075c3-cf22-4219-8aad-34ad99abb000)

## Error Handling - logging
We will use Winston logging library to log information for error handling. I have implemented it in this app so whenever you run an API, you can view the logs in your terminal or command prompt while your Node.js application is running. 

![image](https://github.com/msitu22/TrackingAPIs/assets/112602900/05527090-d11e-4266-b7d2-104717333e5c)







