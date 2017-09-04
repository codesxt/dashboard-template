# MEAN Dashboard Template + CoreUI

A basic dashboard implemented using the following technologies:
* CoreUI + Angular 4 for the Front-End
* NodeJS for the Backend
* Express for the API and Web Server
* MongoDB (through Mongoose) for the database

## Getting Started
The application consists in two main components that work together:
1. Server
2. Client
MongoDB has to be installed for the application to run properly (Ideally version 3.4+).

### Prerequisites
To use the application, it has to be cloned in the users machine. Then, dependencies have
to be installed.

For the client:
```
cd client
npm install
ng build     # This will generate the web app to be served
```

For the server:
```
cd server
npm install
# An environment variable for password encryption has to be set
# e.g.:
JWT_SECRET=ThisIsASuperSecretKey
```

### Running
To be written.
The server serves the Angular client generated in /client/dist on port 3000.

### Built With
* [CoreUI](http://coreui.io/) - The dashboard template for web applications
