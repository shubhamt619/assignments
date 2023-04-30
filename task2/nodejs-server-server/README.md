# Server API

This is a RESTful API for managing server objects. It provides endpoints for searching, creating, and deleting server objects.

## Prerequisites

- Node.js (version 10 or higher)
- MongoDB Atlas account (for database storage)

## Installation

1. Clone the repository:

git clone <repository_url_here>

2. Install dependencies:

    cd server-api

    npm install


3. Set up MongoDB Atlas:

- Create a new MongoDB Atlas cluster
- Create a new user with read/write access to the cluster
- Obtain the connection string for your cluster (replace `<username>`, `<password>`, and `<cluster-url>` with your MongoDB Atlas credentials and cluster URL)

4. Set environment variables:

- `MONGODB_URI`: MongoDB Atlas connection string
- `PORT`: port number to run the server on (default is 3000)

5. Start the server:

    npm start


## API endpoints

### GET /servers

Returns a list of all servers.

GET /servers

Returns:

    [
    {
    "name": "my centos",
    "id": "123",
    "language": "java",
    "framework": "django"
    },
    {
    "name": "my ubuntu",
    "id": "456",
    "language": "python",
    "framework": "flask"
    }
    ]

### GET /servers/:id

Returns a single server with the specified ID.

GET /servers/:id

Parameters:

- `id`: the ID of the server to retrieve

Returns:

    {
    "name": "my centos",
    "id": "123",
    "language": "java",
    "framework": "django"
    }

### PUT /servers

Creates a new server.

PUT /servers
Request body:

    {
    "name": "my centos",
    "id": "123",
    "language": "java",
    "framework": "django"
    }

Returns:

    {
    "id": "123"
    }

### DELETE /servers/:id

Deletes a server with the specified ID.

DELETE /servers/:id

Parameters:

- `id`: the ID of the server to delete

Returns:

    {}

### GET /servers/find/:name

Finds servers with the specified name.

GET /servers/find/:name

Parameters:

- `name`: the name to search for

Returns:

    [
    {
    "name": "my centos",
    "id": "123",
    "language": "java",
    "framework": "django"
    }
    ]

    
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
