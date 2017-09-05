//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

//give url for server where hosted
MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error,db)=>{

 if(error)
    {
       return console.log('Unable to connect to Mongo-db server');
    }
    console.log('Connected to Mongo-db server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('59abe8730bc089c9e28088ad')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{

    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('599c407dcd3ef302444a044f'),
        "jiousers.name":'Prateek'
    },{
        $set:{"jiousers.$.company":"Google Company"}
    },{
        returnOriginal: false
    }).then((result)=>{
        
        console.log(result);
    });

    // db.collection('Users').update({_id : new ObjectID('599c407dcd3ef302444a044f'),
    // "jiousers.name":'Prateek'},
    // {$set:{"jiousers.$.company":"Google"}})
});