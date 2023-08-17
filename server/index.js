const express = require("express");
const app = express();
const mysql = require('mysql')
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'rushikesh',
    host: 'localhost',
    password: '',
    database: 'testingPURPOSE',
});

app.post('/create1', (req, res) => {

    const Cus_ID = req.body.Cus_ID
    const Name = req.body.Name
    const DOB = req.body.DOB
    const Address = req.body.Address
    const Age = req.body.Age

    db.query('INSERT INTO customer(ID_cus,name,DOB,age,address) VALUES (?,?,?,?,?)', 
    [Cus_ID, Name, DOB, Age, Address], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(" Values inserted"); 
        }
    }
    );

    console.log(Cus_ID,Name,DOB,Age,Address)
});

app.post('/create2', (req, res) => {

    const Connection_ID = req.body.Connection_ID
    const Connection_type = req.body.Connection_type
    const Connection_usage = req.body.Connection_usage
    const Connection_bill = (5*req.body.Connection_usage)
    db.query('INSERT INTO connection(connection_ID,connection_type,current_usage,current_bill) VALUES (?,?,?,?)', 
    [Connection_ID, Connection_type, Connection_usage, Connection_bill], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(" Values inserted"); 
        }
    }
    );
    console.log(Connection_ID,Connection_bill,Connection_type,Connection_usage)
});

app.post('/delete1', (req, res) => {

    console.log(req.body);

    const Cus_ID = req.body.Cus_ID
    db.query('DELETE from customer where ID_cus = ?', 
    [Cus_ID], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(" Values inserted"); 
        }
    }
    );
});
app.post('/delete2', (req, res) => {

    console.log(req.body);

    const Connection_ID = req.body.Connection_ID
    db.query('DELETE from connection where connection_ID = ?', 
    [Connection_ID], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(" Values inserted"); 
        }
    }
    );
});


app.post('/update1', (req, res) => {


    const Cus_ID = req.body.Cus_ID
    const Name = req.body.Name
    const DOB = req.body.DOB
    const Address = req.body.Address
    
    
    console.log(Cus_ID,Name,DOB,Address)

    db.query('UPDATE customer set name = ?, DOB = ?, Address = ? where ID_cus = ?', 
    [Name, DOB, Address, Cus_ID], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(" Values inserted"); 
        }
    }   
    );
});

app.post('/update2', (req, res) => {


    const Connection_ID = req.body.Connection_ID
    const Connection_type = req.body.Connection_type
    const Connection_usage = req.body.Connection_usage
    const Connection_bill = (5*req.body.Connection_usage)
    

    db.query('UPDATE connection set connection_ID = ?, connection_type = ?, current_usage = ?, current_bill = ? where connection_ID = ?', 
    [Connection_ID, Connection_type, Connection_usage, Connection_bill, Connection_ID], 
    (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(" Values inserted"); 
        }
    }   
    );
});

app.get('/getall', (req, res) => {
    db.query("select * from customer", (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });
});

app.get('/getcon', (req, res) => {
    
    db.query("select * from connection", (err, result) => {
        if (err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    });

});



app.listen(3001, () => {
    console.log("runing on port 3001");
});