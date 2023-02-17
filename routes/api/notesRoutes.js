const router = require('express').Router();
const fs = require('fs');
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', function(err, data){
        if(err) throw err
        res.send(data);
    });
    // console.log('hello');
});

router.post('/', (req,res) => {
    const {title, text} = req.body
    const updatedNote = {title, text, id: uid()}
    console.log(updatedNote);
    fs.readFile('./db/db.json', function(err, data){
        if(err) throw err
        let oldNotes = JSON.parse(data)
        oldNotes.push(updatedNote)
        fs.writeFile('./db/db.json', JSON.stringify(oldNotes), function(err){
            if(err) throw err
            res.json(oldNotes)
        })
    });
});

module.exports = router;
