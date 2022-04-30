"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _aiController = require("../controller/aiController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var aiRouter = _express["default"].Router();

aiRouter.route("").get(_aiController.getAiPage).post(_aiController.postAiPage);
var _default = aiRouter;
exports["default"] = _default;