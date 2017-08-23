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


    //db.collection('Todos').find().toArray() return promise
    //  db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
      
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));

    //  },(error)=>{

    //     console.log('Unable to fetch records',error);
    //  });

    //we can also find on basis of id 

    // db.collection('Todos').find({_id: new ObjectID('599c402b6942d4024197ed9a')}).toArray().then((docs)=>{
        
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs,undefined,2));
  
    //    },(error)=>{
  
    //       console.log('Unable to fetch records',error);
    //    });

    //count query

     db.collection('Todos').find().count().then((count)=>{
        
          console.log(`Todos count ${count}`);
  
       },(error)=>{
  
          console.log('Unable to fetch records',error);
       });

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