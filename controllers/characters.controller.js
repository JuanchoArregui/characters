const mongoose = require('mongoose')
const Character = require('../models/character.model');

module.exports.index = (req, res, next) => {
    Character.find({}).then((characters) => {
    res.json(characters);
  });
};


module.exports.create = (req, res, next) => { 
  let data ={
      name: req.body.name,
      debt: req.body.debt,
      weapon: req.body.weapon,
      occupation: req.body.occupation
  }

  Character.create(data, () =>{
    res.json({status: 200, msg: 'OK'});
  })
};
