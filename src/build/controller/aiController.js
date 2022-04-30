"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postAiPage = exports.getAiPage = void 0;

var _require = require('child_process'),
    spawn = _require.spawn;

var getAiPage = function getAiPage(req, res) {
  return res.render("ai");
};

exports.getAiPage = getAiPage;

var postAiPage = function postAiPage(req, res) {
  var answer = req.body.answer;
  return res.render("ai");
};

exports.postAiPage = postAiPage;