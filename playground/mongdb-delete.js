//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

//give url for server where hosted
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db)=>{

 if(error)
    {
       return console.log('Unable to connect to Mongo-db server');
    }
    console.log('Connected to Mongo-db server');
 
    //delete many
    //  db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
    //      console.log(result);
    //  },(error)=>{
    //      console.log(error);
    //  });

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // },(error)=>{
    //     console.log(error);
    // });

    //find one and delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    },(error)=>{
        console.log(error);
    });

    //db.close();
});