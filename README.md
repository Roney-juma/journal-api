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
Ensure MongoDB is running.
Start the application:
node src/app.js
The application will run on http://localhost:3306.

#### Project Structure
The project is structured as follows:
journal-app/
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
└── package.json
