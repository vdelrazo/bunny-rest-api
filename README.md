# Bunny-REST-API

Backend services to manage users and tasks. 
*API is deployed on Heraku.
*Full decoupling of all functions
*Integration with Mongoose within DAO
*Connected to remote Mongo server

## API Endpoints 🚀
### Tasks
GET-all tasks         https://api-rest-bunny.herokuapp.com/api/tasks


POST-task             https://api-rest-bunny.herokuapp.com/api/tasks
```
           Content-Type: application/json                  
           Payload example: {"description": "Test", "user_id": "6016315936a00500152d6078", "state": false}
```
                      
                      
GET-task by id        https://api-rest-bunny.herokuapp.com/api/tasks/{taskId}


DELETE-task           https://api-rest-bunny.herokuapp.com/api/tasks/{taskId}


PUT-task              https://api-rest-bunny.herokuapp.com/api/tasks/{taskId}
```
            Content-Type: application/json
            Payload example: {"description": "Delivery task form 1", "state": true}
```


### Users
GET-all users         https://api-rest-bunny.herokuapp.com/api/users


POST-user             https://api-rest-bunny.herokuapp.com/api/users
```
            Content-Type: application/json
            Payload example: {"name": "Raymond Lopez"}
```
                      
                      
DELETE-user           https://api-rest-bunny.herokuapp.com/api/users/{userId}


POST-user             https://api-rest-bunny.herokuapp.com/api/users
```
             Content-Type: application/json
             Payload example: {"name": "James Sorensen"}
```
                      
                      
PUT-user              https://api-rest-bunny.herokuapp.com/api/users/{userId}
```
             Content-Type: application/json
             Payload example: {"name": "Joe Montana"}
```

