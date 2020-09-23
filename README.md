Routes: login,users,project,list,task

/login : request type-POST

/users : (route for register) request type-POST

/project: 

    add project: 
    
        request type post
        
    delete project:
    
        request type delete
        
    update project:
    
        request type patch(takes object like project:{user:__,name:__)
        
/list: 

    add list: 
    
        request type post
        
    delete list:
    
        request type delete
        
    update list:
    
        request type patch(takes object like list:{user:__,name:__)
        
/task: 

    add task: 
    
        request type post
        
    delete task:
    
        request type delete
        
    update task:
    
        request type patch(takes object like task:{user:__,name:__)
        
    get all tasks:
    
        request type get returns object like  
        
        "tasks": [
        {
            "id": 3,
            "userId": 7,
            "name": "test",
            "colorName": "red",
            "createdAt": "2020-09-14T12:27:44.325Z",
            "updatedAt": "2020-09-14T12:27:44.325Z",
            "list": [
                "id":2
                "tasks":[
                "id":3
                ]
            ]
        },
        {
            "id": 6,
            "userId": 7,
            "name": "test",
            "colorName": "red",
            "createdAt": "2020-09-14T12:28:51.198Z",
            "updatedAt": "2020-09-14T12:28:51.198Z",
            "list": []
        }
    ]
