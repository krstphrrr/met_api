const rawMet = require('../models/rawmetdata')


exports.getRawMetData = (req, res, next) =>{
 
  
  rawMet.findAll({
    where:req.query,
    // limit:50
    
  })
  .then( r => {
    res.status(200).json(r)
  })
  .catch(err=>{console.log(err)})
}

