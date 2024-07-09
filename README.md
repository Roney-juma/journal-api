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
        └── package.
    ``

Base URL: https://journal-api-8xkw.onrender.com/v1

## Endpoints
### User Authentication
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

### Journals
4. Create Journal
Endpoint: POST /v1/journals

Description: Create a new journal entry. Requires authentication.


5. Get All Journals
Endpoint: GET /v1/journals

Description: Retrieve all journal entries for the authenticated user. Requires authentication.

6. Get Journal by ID
Endpoint: GET /v1/journals/:id

Description: Retrieve a specific journal entry by ID. Requires authentication.

7. Update Journal
Endpoint: PUT /v1/journals/:id

Description: Update an existing journal entry by ID. Requires authentication.

8. Delete Journal
Endpoint: DELETE /v1/journals/:id

Description: Delete a specific journal entry by ID. Requires authentication.


