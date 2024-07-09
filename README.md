## Journal Application Documentation
### Overview
This documentation covers the setup and usage of a Node.js application for managing journal entries, including support for categories. The application uses Express for the web framework, Mongoose for MongoDB object modeling, and includes endpoints for creating, reading, updating, and deleting journal entries and categories.

#### Prerequisites
Node.js 
npm
MongoDB 
Setup
Installation
cd journal-app
Install dependencies:
npm install

#### Starting the Application
Start the application:

node src/app.js

The application will run on https://journal-api-8xkw.onrender.com/v1.

#### Project Structure
The project is structured as follows:

    `` \
src/
│
├── models/
│   ├── Category.js
│   └── Journal.js
│
├── controller/
│   ├── Category.js
│   └── Journal.js
│
├── routes/
│   ├── category.js
│   └── journal.js
│
├── app.js
└── package.json ``

Base URL: https://journal-api-8xkw.onrender.com/v1

### Endpoints
User Authentication
1. Signup
Endpoint: POST /v1/users/signup

Description: Register a new user.

2. Login
Endpoint: POST /v1/users/login

Description: Authenticate an existing user and generate a JWT token.

### Categories

3. Create Category

Endpoint: POST /v1/categories

Description: Create a new category. Requires authentication.
