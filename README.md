
````markdown
# Shopping Portal API

This is a simple RESTful API for managing tasks in a shopping portal.

## Documentation

### API Endpoints:

#### Create a Task

- **URL:** `/tasks`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "title": "Task Title",
    "description": "Task Description"
  }
  ```

#### Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`

#### Update a Task

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Params:** `id` (Task ID)
- **Body:**
  ```json
  {
    "title": "Updated Task Title",
    "description": "Updated Task Description",
    "status": "completed"
  }
  ```

#### Delete a Task

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Params:** `id` (Task ID)

### Instructions to Run:

1. Ensure you have Node.js, npm, and MongoDB installed on your system.
2. Clone the repository or create the folder structure manually.
3. Navigate to the project directory in your terminal.
4. Install dependencies by running `npm install`.
5. Start the server by running `node server.js`.
6. Your server will start running on `http://localhost:3000`.
````
