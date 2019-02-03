var core = require("./core");
var consts = require("./consts");

exports.Color = require("./color");
exports.Grid = require("./grid");
exports.Player = require("./player");

exports.initPlayer = core.initPlayer;
exports.updateFrame = core.updateFrame;

for (var prop in consts) {
	Object.defineProperty(exports, prop, {
		enumerable: true,
		value: consts[prop]
	});
}
