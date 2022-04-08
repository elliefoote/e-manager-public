# E-MANAGER

<img width="1434" alt="EManager screenshot" src="https://user-images.githubusercontent.com/86239914/162478912-bac4d17d-5233-4323-b856-e1fc8d22ccf5.png">

## Table of Contents
1. [Overview and goals](#overview-and-goals)
2. [Setup instructions](#setup-instructions)
3. [Technologies used](#technologies-used)
4. [Future features](#future-features)
5. [Acknowledgements](#acknowledgements)

## Overview and goals

This was a feature extension, building on the great work done by my colleague Gaby ([@girlatomic](https://github.com/girlatomic)). 

The project responded to a problem reported by Gaby's client, the owner of a repair store: keeping track of key information in a user-friendly interface. The e-Manager app allows small business owners to track their jobs and client information, as well as allowing managers to assign tasks to employees.

To Gaby's MVP version of the app, I added user authentication and authorisation using jsonwebtoken and bcrypt. I created different views for different user types (admins/managers and users/employees), and gave admins additional powers such as allocating jobs and deleting user accounts. This responded to a real-world business need identified by Gaby's client. 

## Setup instructions

1. Fork the repo into your GitHub. Copy the address and run git clone to save a local version on your computer.
2. Install dependencies by running ``yarn`` or ``npm install`` in both the client and server folders.
3. Create a .env folder with the following content (change the password if you use a different password for MySQL):
``DB_HOST=localhost
DB_USER=root
DB_PASS=root
DB_NAME=bookswap
``
4. Run ``yarn migrate`` or ``npm migrate`` to populate the database with dummy information.
5. Run ``yarn start`` or ``npm start`` in the server and client folders. 

## Technologies used
* Front end built with ReactJS and React Router and styled with Bootstrap. 
* Back end built with NodeJS and ExpressJS.
* Database built with MySQL.

## Future features
In the future, I would like to improve the responsiveness of the app on different devices, as well as adding inventory management functionality.

## Acknowledgements

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
