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

## How to use?
After installation this application offers a varitey of activities. First let go over the searching. When the application first loads it will ask for permission for your location. This is to determine what locations are near you. By default the applications will return restaurants within 1000 meters of you.

#### Search
Under the navbar you will find the search area. Here you can change two parameters for you results. The left input will change the distance of restaurants that can be discovered. The right input will change whether restaurants or bars will be returned. After changing the parameters click on the search button and the result will be returned below.

#### Login
In the top right corner of the web application will find the login section. Here you can create an account or login. Once you are logged in you will have the ability to favorite and comment on locations.

#### Places
After a search in the main page the results will appear below. Here you can view the nearby restaurants and their information such as their location, rating, and if they are open. If you click on a place’s card you will be taken to a page containing more information. Here you can view even more information about the location and comment on it.

#### Comment
When viewing the page that contains all of a place’s information you will find a comment section at the bottom. Here you can view all comments let by other users about that location. If you are logged in you can write and comment of your own or edit and delete your previous comments.

## Screenshots
![playine section](screen1.png)
![browsing section](screen2.png)

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
