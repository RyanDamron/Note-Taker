const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', function(err, data){
        if(err) throw err
        res.send(data);
    });
    // console.log('hello');
});

router.post('/', (req,res) => {
    res.json('hello')
    let note = req.body
    console.log(note);
});

module.exports = router;