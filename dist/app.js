"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.get('/api/v1/todos', function (req, res) {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully'
  });
});
var PORT = 5000;
app.listen(PORT, function () {
  console.log("server running on port ".concat(PORT));
});