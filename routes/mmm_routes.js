'use strict';
var mmm = require('../lib/mmm');
module.exports = function(app) {
  app.post('/calMMM', function(req, res) {
    var mean = mmm.mean(req.body.list);
    var mode = mmm.mode(req.body.list);
    var median = mmm.median(req.body.list);
    res.send('mean: ' + mean + ' mode: ' + mode + ' median ' + median);
  });
};
