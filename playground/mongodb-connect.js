//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//destructure object 
var user ={name: 'deepak', age: 25};
var {name} = user;
var {age} = user;
console.log(`user name is ${name}`);
console.log(`user age is ${age}`);

//give url for server where hosted
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db)=>{

 if(error)
    {
       return console.log('Unable to connect to Mongo-db server');
    }
    console.log('Connected to Mongo-db server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(error,result)=>{
    //     if(error)
    //         {
    //             return console.log('Unable to insert todo',error);
    //         }
    //         console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({jiousers:[{
    //      name: 'Deepak',
    //      company: 'A-1  Technology'
    // },{
    //     name: 'Prateek',
    //     company: ''
    // }]},(error,result)=>{
    //     if(error)
    //         {
    //             return console.log('Unable to insert users',error);
    //         }
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });
    db.close();
});