To-Do List API
Project Title
To-Do List API

Project Description
This project is a RESTful API server for managing a to-do list. It provides endpoints to perform CRUD operations on to-do items, filter tasks based on their status, and handle file uploads and downloads for bulk operations. The API is built using Node.js, Express, MongoDB, and uses JWT tokens for authentication.

Table of Contents
Project Title
Project Description
Table of Contents
How to Install and Run the Project
How to Use the Project
API Documentation
Swagger Documentation
How to Install and Run the Project
Clone the repository:
git clone https://github.com/akshaycsasidharan/ToDoListAPI
cd ToDoListAPI
Install the dependencies:
npm install
Set up environment variables:
Create a .env file in the root directory and add the following environment variables:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Run the project:
npm start
How to Use the Project
Authentication
Register a new user:
POST /api/register with a JSON body containing username, password, and email.

Login:
POST /api/login with a JSON body containing username and password. This will return a JWT token for authenticated requests.

To-Do List Operations
Get all todos:
GET /api/todos - Returns a list of all to-do items.

Get a todo by ID:
GET /api/todos/:id - Returns a single to-do item by its ID.

Create a new todo:
POST /api/todos - Create a new to-do item. Requires description and status in the request body.

Update an existing todo:
PUT /api/todos/:id - Update the to-do item with the specified ID. Requires description and/or status in the request body.

Delete a todo:
DELETE /api/todos/:id - Delete the to-do item with the specified ID.

Filter todos by status:
GET /api/todos/filter - Filter to-do items by their status. Pass status as a query parameter.

File Operations
Upload todos from a CSV file:
POST /api/todos/upload - Upload a CSV file containing to-do items. The file should have description and status columns.

Download all todos as a CSV file:
GET /api/todos/download - Download all to-do items in a CSV format.

Swagger Documentation

openapi: 3.0.0
info:
  title: To-Do List API
  version: 1.0.0
  description: API documentation for the To-Do List project.
servers:
  - url: http://localhost:8080
paths:
  /api/todos:
    get:
      summary: Retrieve all to-dos
      security:
        - BearerAuth: []
      responses:
        '200':
          description: List of to-dos
          content:
            application/json:
              schema:
                type: array
                items:
                  type: object
                  properties:
                    id:
                      type: string
                    description:
                      type: string
                    status:
                      type: string

    post:
      summary: Create a new to-do
      security:
        - BearerAuth: []
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                description:
                  type: string
                status:
                  type: string
      responses:
        '201':
          description: To-do created successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  description:
                    type: string
                  status:
                    type: string

  /api/todos/{id}:
    get:
      summary: Retrieve a specific to-do by ID
      security:
        - BearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: To-do details
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  description:
                    type: string
                  status:
                    type: string
        '404':
          description: To-do not found

  put:
      summary: Update a specific to-do by ID
      security:
        - BearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                description:
                  type: string
                status:
                  type: string
      responses:
        '200':
          description: To-do updated successfully
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                  description:
                    type: string
                  status:
                    type: string
        '404':
          description: To-do not found

  delete:
      summary: Delete a specific to-do by ID
      security:
        - BearerAuth: []
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
      responses:
        '200':
          description: To-do deleted successfully
        '404':
          description: To-do not found

  /api/todos/upload:
    post:
      summary: Upload to-dos from a CSV file
      security:
        - BearerAuth: []
      requestBody:
        content:
          multipart/form-data:
            schema:
              type: object
              properties:
                file:
                  type: string
                  format: binary
      responses:
        '201':
          description: To-dos uploaded successfully
        '400':
          description: Bad request

  /api/todos/download:
    get:
      summary: Download all to-dos as a CSV file
      security:
        - BearerAuth: []
      responses:
        '200':
          description: CSV file of to-dos
          content:
            application/csv:
              schema:
                type: string
        '500':
          description: Internal server error

components:
  securitySchemes:
    BearerAuth:
      type: http
      scheme: bearer




