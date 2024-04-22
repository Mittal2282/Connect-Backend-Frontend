// importing
import express from 'express';

// creating an app
const app=express();

// creating a server
app.get('/',(req,res)=>{
    res.send('Server is Ready');
});

// sending array as a response
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'First Joke',
            content:'This is first joke'
        },
        {
            id:2,
            title:'Second Joke',
            content:'This is second joke'
        },
        {
            id:3,
            title:'Third Joke',
            content:'This is third joke'
        }
    ]

    res.send(jokes);
});

// taking port from environment var
const port=process.env.PORT || 3000;

// saying app to listen on given port
app.listen(port,()=>{
    console.log(`Serve at https://localhost:${port}`);
    }
);