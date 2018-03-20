# GoodEats
An application that allows users to discover new restaurants and bars based on their current location

[Click here to view the backend of Calibre](https://github.com/MarvinClerge/GoodEats-Backend)

## Motivation
The goal behind this application was to refine my web development skills in the following areas:
* Creating a React application
* Geolocation to provide users experiences based on their location 
* JWT authentication and authorization
* Becoming familiar with Google APIs
* Write custom CSS and become familiar with responsive pages

## Tech/framework used
#### React.js
Used to manage application state, user interface, DOM manipulation, and creating a fast web application.
#### Ruby on Rails
Used to create a backend JSON API queries GooglePlaces API and manage user and site information.
#### PostgreSQL
Used to store and manage user information.
#### GooglePlaces
Used to obtain and display information about restaurants and bars to users.

## Installation
In order to use this application ruby and node js must be installed
### MAC OS
1. Download both the frontend and backend of GoodEats
2. Go to the backend folder location in your terminal and run bundle install
3. After the installation is complete run rails db:migrate and rails db:seed to create the database
4. Run rails s to start the backend rails server
5. Go to the frontend folder location in your terminal
6. Run npm install to install required node packages
7. Run npm start to start the frontend server
8. Go to http://localhost:3000 in your browser

## License
MIT License

Copyright (c) 2018 Marvin Clerge

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
