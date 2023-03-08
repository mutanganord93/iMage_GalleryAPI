references:

1.  req.params vs req.query
    req.params is used to get the parameters where we use :
    For example /:id
    In the above route, I would get id by using req.params
    req.query is used with additional params that comes after ?
    For example /current?id=xxx
    id=xxx will be accessed using req.query

    Reference: https://stackabuse.com/get-query-strings-and-parameters-in-express-js/

2.  Adding and deleting from an array value in mongoose
    references: 
    2.1. https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose
    2.2. https://www.youtube.com/watch?v=gtUPPO8Re98
    2.3. https://www.mongodb.com/docs/manual/reference/operator/update/push/
    