var processUtterance = require('./processUtterance')

module.exports = {
	"ResetStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reset skill" )
	},
	"RestoreStateIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "resume skill" )
	},
	"RepeatOptionsIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat options" )
	},
	"RepeatSceneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "repeat scene" )
	},
	"GoBackIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go back" )
	},
	"AMAZON.HelpIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "help" )
	},
	"AMAZON.StopIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"AMAZON.CancelIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "exit skill" )
	},
	"BeginIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "begin" )
	},
	"FireIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire" )
	},
	"WaterIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water" )
	},
	"GoForwardIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "go forward" )
	},
	"CandleIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "candle" )
	},
	"FireMissionIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire mission" )
	},
	"LavaIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "lava" )
	},
	"TorchIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "torch" )
	},
	"FireBridgeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire bridge" )
	},
	"PondIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "pond" )
	},
	"FountainIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fountain" )
	},
	"WaterBridgeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water bridge" )
	},
	"IceIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "ice" )
	},
	"WaterMissionIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water mission" )
	},
	"FireCliffOneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire cliff 1" )
	},
	"FireTrailOneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire trail 1" )
	},
	"WaterCliffOneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water cliff 1" )
	},
	"WaterTrailOneIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water trail 1" )
	},
	"WaterTrailTwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water trail 2" )
	},
	"WaterCliffTwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water cliff 2" )
	},
	"WaterTrailThreeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "water trail 3" )
	},
	"MagicIslandIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "magic island" )
	},
	"RewardNowIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reward now" )
	},
	"RewardLaterIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "reward later" )
	},
	"FireTrailTwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire trail 2" )
	},
	"FireCliffTwoIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire cliff 2" )
	},
	"FireTrailThreeIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire trail 3" )
	},
	"FireLandIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fire land" )
	},
	"FightWaterBeastIntent": function ( intent, session, request, response ) {
		processUtterance( intent, session, request, response, "fight water beast" )
	},
}