# Instructions
Run the client and microservice separately in two different terminal windows for local testing and development.

## Purpose
This code is created add a bootstrap example on how to create new microservices and a RESTful client that utilizes gRPC microservices in that background. 

## Example HTTP Request
Send a POST request via Postman or your favorite API testing software to the client server. It should be running on port 3000.

API URL: 
http://localhost:3000/add

Body of POST request in JSON:
{
    "data": [0, 1, 2]
} 