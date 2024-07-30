# To-Do List API

## Project Title
  To-Do List API

## Project Description
  This project is a RESTful API server for managing a to-do list. It provides endpoints to perform CRUD operations on to-do items, filter tasks based on their status, and handle file uploads and downloads for bulk operations. The API is built using Node.js, Express, MongoDB, and uses JWT tokens for authentication.

## Table of Contents
1. [Project Title](#project-title)
2. [Project Description](#project-description)
3. [Table of Contents](#table-of-contents)
4. [How to Install and Run the Project](#how-to-install-and-run-the-project)
5. [How to Use the Project](#how-to-use-the-project)
7. [Swagger Documentation](#Swagger-documentation)

## How to Install and Run the Project
 **Clone the repository:** 
  git clone https://github.com/akshaycsasidharan/ToDoListAPI
  cd ToDoListAPI
## Install the dependencies:
  npm install
## Set up environment variables:
  Create a .env file in the root directory and add the following environment variables:
  JWT_SECRET=your_jwt_secret
## Run the project:
  npm start
## How to Use the Project
  ### Authentication
 - **Register a new user:**<br>
   &nbsp;&nbsp;POST /api/register with a JSON body containing username, password, and email.<br>

- **Login as an existing user:** <br>
    &nbsp;&nbsp;POST /api/login with a JSON body containing username and password. This will <br>return a JWT token for authenticated requests.<br>

### To-Do List Operations<br>
- **Get all todos:**<br>
&nbsp;&nbsp;GET /api/todos - Returns a list of all to-do items.<br>

- **Get a todo by ID:**<br>
&nbsp;&nbsp;GET /api/todos/:id - Returns a single to-do item by its ID.<br>

- **Create a new todo:**<br>
&nbsp;&nbsp;POST /api/todos - Create a new to-do item. Requires description and status in the request body.<br>

- **Update an existing todo:**<br>
&nbsp;&nbsp;PUT /api/todos/:id - Update the to-do item with the specified ID. Requires description and/or status in the request body.<br>

- **Delete a todo:**<br>
&nbsp;&nbsp;DELETE /api/todos/:id - Delete the to-do item with the specified ID.<br>

- **Filter todos by status:**<br>
&nbsp;&nbsp;GET /api/todos/filter - Filter to-do items by their status. Pass status as a query parameter.<br>

- **File Operations**<br>
&nbsp;&nbsp;Upload todos from a CSV file:<br>
&nbsp;&nbsp;POST /api/todos/upload - Upload a CSV file containing to-do items. The file should &nbsp;&nbsp;have<br> description and status columns.

- **Download all todos as a CSV file:**<br>
GET /api/todos/download - Download all to-do items in a CSV format.<br>

## Swagger Documentation

You can view and interact with the API documentation using Swagger Editor: [Swagger Editor](https://editor.swagger.io/)



