'use strict';

var utils = require('../utils/writer.js');
var Server = require('../service/ServerService');

module.exports.serversDELETE = function serversDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Server.serversDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversFindGET = function serversFindGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  Server.serversFindGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversGET = function serversGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Server.serversGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversPUT = function serversPUT (req, res, next) {
  var server = req.swagger.params['server'].value;
  Server.serversPUT(server)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
