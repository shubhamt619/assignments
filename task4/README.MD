# Server List
This is a web application that displays a list of servers and allows users to create new servers and delete existing ones. The list of servers is loaded from an endpoint that returns a JSON response. The web application uses HTML, CSS, and JQuery to create the user interface and handle the AJAX requests.

## Getting Started
replace the endpoint URLs in the code with your own endpoint URLs.

## Prerequisites
Web Application to store server details
Endpoint URLs for loading the server list and saving new servers

## Installing
Clone the repository to your local machine.
Copy the files to your web server.
Create a database and table to store the server details.
Update the database connection details in the save_server.php file.
Replace the endpoint URLs in the script.js file with your own endpoint URLs.

### Usage
Open the web application in a web browser.
The list of servers will be loaded automatically from the endpoint.

To create a new server, click the "Create" button and fill in the details in the modal. Click "Save" to save the new server to the database.

To delete an existing server, click the "Delete" button in the corresponding row of the server list. Confirm the deletion and the server will be removed from the database.


## Built With

    - HTML  
    - CSS
    - JQuery
