"use strict";

require("regenerator-runtime");

var _express = _interopRequireDefault(require("express"));

var _aiRouter = _interopRequireDefault(require("./routers/aiRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PORT = process.env.PORT || 8080;
var hostname = "10.178.0.5";
var app = (0, _express["default"])();
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/static", _express["default"]["static"]("assets"));
app.use("/ai", _aiRouter["default"]);
app.listen(PORT, hostname, function () {
  console.log("\uC11C\uBC84 \uC2E4\uD589 \uD3EC\uD2B8\uB294 ".concat(PORT, "\uBC88 \uC785\uB2C8\uB2E4\uD83D\uDE80"));
});