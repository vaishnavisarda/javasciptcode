let express = require('express');
let router = express.Router();
let path = require('path');

router.get('/Register.html', (req, res) => {
    res.sendFile(path.join(__dirname + '/Register.html'))
  });

  module.exports = router;