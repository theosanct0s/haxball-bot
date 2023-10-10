/* ROOM */
const roomName = "Enter the name of your room";
const botName = "Judge";
const maxPlayers = 24; // maximum number of players in the room
const roomPublic = true; // true = public room | false = players only enter via the room link (it does not appear in the room list)
const geo = [{"lat": -22.9201, "lon": -43.3307, "code": "br"}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"code": "PT", "lat": 39.3, "lon": -8.2}]; 
// place your geoloc, so as not to have a leaky room

const room = HBInit({
    roomName: roomName,
    maxPlayers: maxPlayers,
    public: roomPublic,
    playerName: botName,
});
    geo: geo[0]

const scoreLimitPractice = 3;
const timeLimitPractice = 3;

let Cor = {
    Vermelho: 0xFA5646,
    Laranja: 0xFFC12F,
    Verde: 0x7DFA89,
    Azul: 0x05C5FF,
    Amarelo: 0xFFFF17,
    Cinza: 0xCCCCCC,
    Branco: 0xFFFFFF,
    Azulclaro: 0x6ECAFF,
    Powderblue: 0xB0E0E6,
    Roxo: 0x800080,
    Platinum: 0xE5E4E2,
    Gold: 0xffd700,
    Silver: 0xd5d5d5,
    Bronze: 0x896728,
    Thistle: 0xD8BFD8,
    Khaki: 0xF0E68C,
    AliceBlue: 0xF0F8FF,
    GhostWhite: 0xF8F8FF,
    Snow: 0xFFFAFA,
    Seashell:0xFFF5EE,
    FloralWhite: 0xFFFAF0,
    WhiteSmoke: 0xF5F5F5,
    Beige: 0xF5F5DC,
    OldLace: 0xFDF5E6,
    Ivory: 0xFFFFF0,
    Linen: 0xFAF0E6,
    Cornsilk: 0xFFF8DC,
    AntiqueWhite: 0xFAEBD7,
    BlanchedAlmond: 0xFFEBCD,
    Bisque: 0xFFE4C4,
    LightYellow: 0xFFFFE0,
    LemonChiffon: 0xFFFACD,
    LightGoldenrodYellow: 0xFAFAD2,
    PapayaWhip: 0xFFEFD5,
    PeachPuff: 0xFFDAB9,
    Moccasin: 0xFFE4B5,
    PaleGoldenrod: 0xEEE8AA,
    Azulescuro: 0x426AD6,
    Warn: 0xff9966
        }
    // here you can place/edit goal messages, always respecting the " , ". Example: "Belo gooool," the player's name will always be after the comma.     
    const frasesGols = [" WHAT A GOAL IS THAT, LADIES AND GENTLEMEN! You are a legend, ",
        " GOOOOOOOOOOL! THE WORLD NEEDS MORE LIKE YOU, ",
        " Look at this goal from ",
        " IT'S GOOOOOL from ",
        " What a great goal from ",
        " GOOOOOOOOOOL! SHOWING UP WHEN WE NEED IT MOST, THANKS TO ",
        " MY GOODNESS!!!! THE IMPOSSIBLE HAPPENED MY GOD IN HEAVEN, IT’S A GOAL FOR YOU ",
        " WHAT A GOAL FROM ",
        " Impressive completion of the ",
        " Sorry for the insults, BUT HOLY SHIT, WHAT A GOAL IS THAT, ",
        " IT'S CASH, IT'S CASH, IT'S CASH, IT'S GOOOOOOOOOL FROM "
    ];
    // here you can place/edit assistance messages, always respecting the " , ". Example: "Nice pass," the player's name will always be after the comma.
    const frasesasis = [" with the beautiful of ",
        " accompanied by the beautiful pass of ",
        " with the ball in the mouth of the goal by ",
        " with the phenomenal assistance of ",
        " and we cannot forget the magnificent pass of"
    ];
    // here you can post/edit messages for mockery, for own goals, always respecting the " , ". Example: "Try to kick to the other side," the player's name will always be after the comma.
    const frasesautogol = [" I'm sure it was by accident, right, ",
        " YOU'RE PLAYING FOR THE WRONG TEAM, ",
        " CONGRATULATIONS!! THE OPPONENT TEAM THANKS YOU, ",
        " IT'S GOOOOOOOOOL... against ",
        " Return to the sea offering, "
    ];

const secondsToResetAvatar = 3;
var registro = new Map();
const css = "border:2px solid;padding:8px;background:";
room.setTeamsLock(true);
var message;
var Botdivulga;
var msg1;
var msg1Time = 1500000;
var Deus = [];
var BotdivulgaTime = 900000;
var adminPassword = 4002;

var vip1 = [];
var vip2 = [];
var vip3 = [];

/* ESTÁDIO */

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;

var practiceMap = `{
	"name": "Arena x3",
	"width": 648,
	"height": 270,
	"spawnDistance": 350,
	"bg": {
		"type": "",
		"width": 550,
		"height": 240,
		"kickOffRadius": 80,
		"cornerRadius": 0,
		"color": "1b2029"
	},
	"vertexes": [
		{
			"x": 550,
			"y": 240,
			"trait": "ballArea"
		},
		{
			"x": 550,
			"y": -240,
			"trait": "ballArea"
		},
		{
			"x": 0,
			"y": 270,
			"trait": "kickOffBarrier"
		},
		{
			"x": 0,
			"y": 80,
			"trait": "kickOffBarrier",
			"color": "F8F8F8",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -80,
			"trait": "kickOffBarrier",
			"color": "F8F8F8",
			"vis": true,
			"curve": 180
		},
		{
			"x": 0,
			"y": -270,
			"trait": "kickOffBarrier"
		},
		{
			"x": -550,
			"y": -80,
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"curve": 0,
			"color": "FF6666",
			"pos": [
				-700,
				-80
			]
		},
		{
			"x": -590,
			"y": -80,
			"cMask": [
				"ball"
			],
			"trait": "goalNet",
			"curve": -28.940588200131774,
			"color": "FF6666",
			"pos": [
				-700,
				-80
			]
		},
		{
			"x": -590,
			"y": 80,
			"cMask": [
				"ball"
			],
			"trait": "goalNet",
			"curve": -28.940588200131774,
			"color": "FF6666",
			"pos": [
				-700,
				80
			]
		},
		{
			"x": -550,
			"y": 80,
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"curve": 0,
			"color": "FF6666",
			"pos": [
				-700,
				80
			]
		},
		{
			"x": 550,
			"y": -80,
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"curve": 0,
			"color": "479BD8",
			"pos": [
				700,
				-80
			]
		},
		{
			"x": 590,
			"y": -80,
			"cMask": [
				"ball"
			],
			"trait": "goalNet",
			"curve": 0,
			"color": "479BD8",
			"pos": [
				700,
				-80
			]
		},
		{
			"x": 590,
			"y": 80,
			"cMask": [
				"ball"
			],
			"trait": "goalNet",
			"curve": 0,
			"color": "479BD8",
			"pos": [
				700,
				80
			]
		},
		{
			"x": 550,
			"y": 80,
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"curve": 0,
			"color": "479BD8",
			"pos": [
				700,
				80
			]
		},
		{
			"x": -550,
			"y": 80,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "F8F8F8",
			"pos": [
				-700,
				80
			]
		},
		{
			"x": -550,
			"y": 240,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "F8F8F8"
		},
		{
			"x": -550,
			"y": -80,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "F8F8F8",
			"pos": [
				-700,
				-80
			]
		},
		{
			"x": -550,
			"y": -240,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "F8F8F8"
		},
		{
			"x": -550,
			"y": 240,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": 550,
			"y": 240,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": 550,
			"y": 80,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"pos": [
				700,
				80
			]
		},
		{
			"x": 550,
			"y": 240,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": 550,
			"y": -240,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "F8F8F8"
		},
		{
			"x": 550,
			"y": -80,
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "F8F8F8",
			"pos": [
				700,
				-80
			]
		},
		{
			"x": 550,
			"y": -240,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": 550,
			"y": -240,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": -550,
			"y": -240,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"curve": 0
		},
		{
			"x": 550,
			"y": -240,
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"curve": 0
		},
		{
			"x": 0,
			"y": -240,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"x": 0,
			"y": -80,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"x": 0,
			"y": 80,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"x": 0,
			"y": 240,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"x": 0,
			"y": -80,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"trait": "kickOffBarrier",
			"vis": true,
			"color": "F8F8F8"
		},
		{
			"x": 0,
			"y": 80,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"trait": "kickOffBarrier",
			"vis": true,
			"color": "F8F8F8"
		},
		{
			"x": 0,
			"y": 80,
			"trait": "kickOffBarrier",
			"color": "F8F8F8",
			"vis": true,
			"curve": -180
		},
		{
			"x": 0,
			"y": -80,
			"trait": "kickOffBarrier",
			"color": "F8F8F8",
			"vis": true,
			"curve": -180
		},
		{
			"x": 0,
			"y": 80,
			"trait": "kickOffBarrier",
			"color": "F8F8F8",
			"vis": true,
			"curve": 0
		},
		{
			"x": 0,
			"y": -80,
			"trait": "kickOffBarrier",
			"color": "F8F8F8",
			"vis": true,
			"curve": 0
		},
		{
			"x": -557.5,
			"y": 80,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"curve": 0,
			"vis": false,
			"pos": [
				-700,
				80
			]
		},
		{
			"x": -557.5,
			"y": 240,
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"curve": 0,
			"vis": false
		},
		{
			"x": -557.5,
			"y": -240,
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"vis": false,
			"curve": 0
		},
		{
			"x": -557.5,
			"y": -80,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"vis": false,
			"curve": 0,
			"pos": [
				-700,
				-80
			]
		},
		{
			"x": 557.5,
			"y": -240,
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"vis": false,
			"curve": 0
		},
		{
			"x": 557.5,
			"y": -80,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"vis": false,
			"curve": 0,
			"pos": [
				700,
				-80
			]
		},
		{
			"x": 557.5,
			"y": 80,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"curve": 0,
			"vis": false,
			"pos": [
				700,
				80
			]
		},
		{
			"x": 557.5,
			"y": 240,
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"curve": 0,
			"vis": false
		},
		{
			"x": 0,
			"y": -80,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 0,
			"y": 80,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -550,
			"y": -80,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -550,
			"y": 80,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 550,
			"y": -80,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 550,
			"y": 80,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -381,
			"y": 240,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -381,
			"y": 256,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -550,
			"y": 200,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": -90
		},
		{
			"x": -390,
			"y": 70,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 0
		},
		{
			"x": -550,
			"y": 226,
			"bCoef": 0.1,
			"trait": "line",
			"curve": -90
		},
		{
			"x": -536,
			"y": 240,
			"bCoef": 0.1,
			"trait": "line",
			"curve": -90
		},
		{
			"x": -550,
			"y": -200,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 90
		},
		{
			"x": -390,
			"y": -70,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 0
		},
		{
			"x": -550,
			"y": -226,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 90
		},
		{
			"x": -536,
			"y": -240,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 90
		},
		{
			"x": -556,
			"y": 123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -575,
			"y": 123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 556,
			"y": 123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 575,
			"y": 123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -556,
			"y": -123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -575,
			"y": -123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 556,
			"y": -123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 575,
			"y": -123,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -381,
			"y": -240,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": -381,
			"y": -256,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 381,
			"y": 240,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 381,
			"y": -240,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 381,
			"y": -256,
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"x": 550,
			"y": -226,
			"bCoef": 0.1,
			"trait": "line",
			"curve": -90
		},
		{
			"x": 536,
			"y": -240,
			"bCoef": 0.1,
			"trait": "line",
			"curve": -90
		},
		{
			"x": 550,
			"y": 226,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 90
		},
		{
			"x": 536,
			"y": 240,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 90
		},
		{
			"x": 550,
			"y": 200,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 90
		},
		{
			"x": 390,
			"y": 70,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 90
		},
		{
			"x": 550,
			"y": -200,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": -90
		},
		{
			"x": 390,
			"y": -70,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": -90
		},
		{
			"x": 390,
			"y": 70,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 0
		},
		{
			"x": 390,
			"y": -70,
			"bCoef": 0.1,
			"trait": "line",
			"color": "F8F8F8",
			"curve": 0
		},
		{
			"x": -375,
			"y": 1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": -1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": 3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": -3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": -2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": 2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": -3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -375,
			"y": 3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": 1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": -1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": 3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": -3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": -2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": 2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": -3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 375,
			"y": 3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": 1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": -1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": 3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": -3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": -2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": 2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": -3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": -277.5,
			"y": 3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": 1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": -1,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": 3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": -3,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": -2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": 2,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": -3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		},
		{
			"x": 277.5,
			"y": 3.5,
			"bCoef": 0.1,
			"trait": "line",
			"curve": 180
		}
	],
	"segments": [
		{
			"v0": 6,
			"v1": 7,
			"curve": 0,
			"color": "FF6666",
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"pos": [
				-700,
				-80
			],
			"y": -80
		},
		{
			"v0": 7,
			"v1": 8,
			"curve": -28.940588200131774,
			"color": "FF6666",
			"cMask": [
				"ball"
			],
			"trait": "goalNet",
			"x": -590
		},
		{
			"v0": 8,
			"v1": 9,
			"curve": 0,
			"color": "FF6666",
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"pos": [
				-700,
				80
			],
			"y": 80
		},
		{
			"v0": 10,
			"v1": 11,
			"curve": 0,
			"color": "479BD8",
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"pos": [
				700,
				-80
			],
			"y": -80
		},
		{
			"v0": 11,
			"v1": 12,
			"curve": 28.940588200131774,
			"color": "479BD8",
			"cMask": [
				"ball"
			],
			"trait": "goalNet",
			"x": 590
		},
		{
			"v0": 12,
			"v1": 13,
			"curve": 0,
			"color": "479BD8",
			"cMask": [
				"red",
				"blue",
				"ball"
			],
			"trait": "goalNet",
			"pos": [
				700,
				80
			],
			"y": 80
		},
		{
			"v0": 2,
			"v1": 3,
			"trait": "kickOffBarrier"
		},
		{
			"v0": 3,
			"v1": 4,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"cGroup": [
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 3,
			"v1": 4,
			"curve": -180,
			"vis": true,
			"color": "F8F8F8",
			"cGroup": [
				"redKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 4,
			"v1": 5,
			"trait": "kickOffBarrier"
		},
		{
			"v0": 14,
			"v1": 15,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": -550
		},
		{
			"v0": 16,
			"v1": 17,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": -550
		},
		{
			"v0": 18,
			"v1": 19,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"y": 240
		},
		{
			"v0": 20,
			"v1": 21,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 550
		},
		{
			"v0": 22,
			"v1": 23,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 1.25,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 550
		},
		{
			"v0": 24,
			"v1": 25,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 550,
			"y": -240
		},
		{
			"v0": 26,
			"v1": 27,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 1,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"y": -240
		},
		{
			"v0": 28,
			"v1": 29,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 30,
			"v1": 31,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 38,
			"v1": 39,
			"curve": 0,
			"vis": false,
			"color": "F8F8F8",
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": -557.5
		},
		{
			"v0": 40,
			"v1": 41,
			"curve": 0,
			"vis": false,
			"color": "F8F8F8",
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": -557.5
		},
		{
			"v0": 42,
			"v1": 43,
			"curve": 0,
			"vis": false,
			"color": "F8F8F8",
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 557.5
		},
		{
			"v0": 44,
			"v1": 45,
			"curve": 0,
			"vis": false,
			"color": "F8F8F8",
			"bCoef": 2,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 557.5
		},
		{
			"v0": 46,
			"v1": 47,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 0
		},
		{
			"v0": 48,
			"v1": 49,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -550
		},
		{
			"v0": 50,
			"v1": 51,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 550
		},
		{
			"v0": 52,
			"v1": 53,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -381
		},
		{
			"v0": 54,
			"v1": 55,
			"curve": -90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 57,
			"v1": 56,
			"curve": -90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 58,
			"v1": 59,
			"curve": 90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 55,
			"v1": 59,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 61,
			"v1": 60,
			"curve": 90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 62,
			"v1": 63,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -240,
			"y": 123
		},
		{
			"v0": 64,
			"v1": 65,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -240,
			"y": 123
		},
		{
			"v0": 66,
			"v1": 67,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -240,
			"y": -123
		},
		{
			"v0": 68,
			"v1": 69,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -240,
			"y": -123
		},
		{
			"v0": 70,
			"v1": 71,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -381
		},
		{
			"v0": 73,
			"v1": 74,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 381
		},
		{
			"v0": 76,
			"v1": 75,
			"curve": -90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 78,
			"v1": 77,
			"curve": 90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 79,
			"v1": 80,
			"curve": 90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 81,
			"v1": 82,
			"curve": -90,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"v0": 83,
			"v1": 84,
			"curve": 0,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 390
		},
		{
			"v0": 86,
			"v1": 85,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 85,
			"v1": 86,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 88,
			"v1": 87,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 87,
			"v1": 88,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 90,
			"v1": 89,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 89,
			"v1": 90,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 92,
			"v1": 91,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 91,
			"v1": 92,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -375
		},
		{
			"v0": 94,
			"v1": 93,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 93,
			"v1": 94,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 96,
			"v1": 95,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 95,
			"v1": 96,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 98,
			"v1": 97,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 97,
			"v1": 98,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 100,
			"v1": 99,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 99,
			"v1": 100,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 375
		},
		{
			"v0": 102,
			"v1": 101,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 101,
			"v1": 102,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 104,
			"v1": 103,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 103,
			"v1": 104,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 106,
			"v1": 105,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 105,
			"v1": 106,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 108,
			"v1": 107,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 107,
			"v1": 108,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": -277.5
		},
		{
			"v0": 110,
			"v1": 109,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 109,
			"v1": 110,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 112,
			"v1": 111,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 111,
			"v1": 112,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 114,
			"v1": 113,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 113,
			"v1": 114,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 116,
			"v1": 115,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		},
		{
			"v0": 115,
			"v1": 116,
			"curve": 180,
			"vis": true,
			"color": "F8F8F8",
			"bCoef": 0.1,
			"trait": "line",
			"x": 277.5
		}
	],
	"goals": [
		{
			"p0": [
				-556.3,
				-80
			],
			"p1": [
				-556.3,
				80
			],
			"team": "red"
		},
		{
			"p0": [
				556.3,
				80
			],
			"p1": [
				556.3,
				-80
			],
			"team": "blue"
		}
	],
	"discs": [
		{
			"radius": 5,
			"pos": [
				-550,
				80
			],
			"color": "FF6666",
			"trait": "goalPost",
			"y": 80
		},
		{
			"radius": 5,
			"pos": [
				-550,
				-80
			],
			"color": "FF6666",
			"trait": "goalPost",
			"y": -80,
			"x": -560
		},
		{
			"radius": 5,
			"pos": [
				550,
				80
			],
			"color": "479BD8",
			"trait": "goalPost",
			"y": 80
		},
		{
			"radius": 5,
			"pos": [
				550,
				-80
			],
			"color": "479BD8",
			"trait": "goalPost",
			"y": -80
		},
		{
			"radius": 3,
			"invMass": 0,
			"pos": [
				-550,
				240
			],
			"color": "FFCC00",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"radius": 3,
			"invMass": 0,
			"pos": [
				-550,
				-240
			],
			"color": "FFCC00",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"radius": 3,
			"invMass": 0,
			"pos": [
				550,
				-240
			],
			"color": "FFCC00",
			"bCoef": 0.1,
			"trait": "line"
		},
		{
			"radius": 3,
			"invMass": 0,
			"pos": [
				550,
				240
			],
			"color": "FFCC00",
			"bCoef": 0.1,
			"trait": "line"
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -240,
			"bCoef": 1,
			"trait": "ballArea",
			"vis": false,
			"curve": 0,
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -240,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						-350.0942371572802,
						-240
					],
					"b": [
						350.0942371572802,
						-240
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -240,
			"bCoef": 1,
			"trait": "ballArea",
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -240,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						-350.0942371572802,
						240
					],
					"b": [
						350.0942371572802,
						240
					]
				}
			}
		},
		{
			"normal": [
				0,
				1
			],
			"dist": -270,
			"bCoef": 0.1,
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -270,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						-350.0942371572802,
						-270
					],
					"b": [
						350.0942371572802,
						-270
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -270,
			"bCoef": 0.1,
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -270,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						-350.0942371572802,
						270
					],
					"b": [
						350.0942371572802,
						270
					]
				}
			}
		},
		{
			"normal": [
				1,
				0
			],
			"dist": -642,
			"bCoef": 0.1,
			"_data": {
				"extremes": {
					"normal": [
						1,
						0
					],
					"dist": -642,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						-642,
						-145.87259881553342
					],
					"b": [
						-642,
						145.87259881553342
					]
				}
			}
		},
		{
			"normal": [
				-1,
				0
			],
			"dist": -644,
			"bCoef": 0.1,
			"_data": {
				"extremes": {
					"normal": [
						-1,
						0
					],
					"dist": -644,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						644,
						-145.87259881553342
					],
					"b": [
						644,
						145.87259881553342
					]
				}
			}
		},
		{
			"normal": [
				1,
				0
			],
			"dist": -642,
			"bCoef": 0.1,
			"trait": "ballArea",
			"vis": false,
			"curve": 0,
			"_data": {
				"extremes": {
					"normal": [
						1,
						0
					],
					"dist": -642,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						-642,
						-145.87259881553342
					],
					"b": [
						-642,
						145.87259881553342
					]
				}
			}
		},
		{
			"normal": [
				-1,
				0
			],
			"dist": -643,
			"bCoef": 0.1,
			"trait": "ballArea",
			"vis": false,
			"curve": 0,
			"_data": {
				"extremes": {
					"normal": [
						-1,
						0
					],
					"dist": -643,
					"canvas_rect": [
						-350.0942371572802,
						-145.87259881553342,
						350.0942371572802,
						145.87259881553342
					],
					"a": [
						643,
						-145.87259881553342
					],
					"b": [
						643,
						145.87259881553342
					]
				}
			}
		}
	],
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 1,
			"cMask": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 8,
			"invMass": 0,
			"bCoef": 0.5
		},
		"goalNet": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball"
			]
		},
		"line": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				""
			]
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		}
	},
	"playerPhysics": {
		"bCoef": 0,
		"acceleration": 0.11,
		"kickingAcceleration": 0.083,
		"kickStrength": 4.5,
		"radius": 15,
		"invMass": 0.5,
		"damping": 0.96,
		"cGroup": [
			"red",
			"blue"
		],
		"gravity": [
			0,
			0
		],
		"kickingDamping": 0.96,
		"kickback": 0
	},
	"ballPhysics": {
		"radius": 6.2,
		"bCoef": 0.4,
		"invMass": 1.6,
		"damping": 0.99,
		"color": "FF9214",
		"cMask": [
			"all"
		],
		"gravity": [
			0,
			0
		],
		"cGroup": [
			"ball"
		]
	},
	"cameraWidth": 0,
	"cameraHeight": 0,
	"maxViewWidth": 0,
	"cameraFollow": "ball",
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false,
	"kickOffReset": "partial",
	"joints": []
}`
/* OPÇÕES */

var afkLimit = 12; // limite de afk (12 segundos)
var drawTimeLimit = 1; // minutos
var maxTeamSize = 3; // máximo de jogadores num time, isso funciona para 1 (você pode querer adaptar as coisas para remover algumas estatísticas inúteis em 1v1, como assist ou cs), 2, 3 ou 4
var slowMode = 0;

/* JOGADORES */

const Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var extendedP = [];
const eP = {
    ID: 0,
    AUTH: 1,
    CONN: 2,
    AFK: 3,
    ACT: 4,
    GK: 5,
    MUTE: 6
};
const Ss = {
    GA: 0,
    WI: 1,
    DR: 2,
    LS: 3,
    WR: 4,
    GL: 5,
    AS: 6,
    GK: 7,
    CS: 8,
    CP: 9,
    RL: 10,
    NK: 11
}
var players;
var TeamR;
var TeamB;
var teamS;
var messageHistory = [0, 0, 0, 0, 0, 0];
var messageCounter = 0;

/* GAME */

let forbid = ['macaco', 'adolf hitler', 'nazismo', 'cuzao', 'cuzão', 'autista', 'cu', 'hitler', 'Macaco', 'Hitler', "Pênis"];

let link = ['https://www.haxball.com/play?c=_', 'https://www.haxball.com', 'haxball.com', '.com', 'https://', 'https:', 'https://www.'];
let regex = ["fdp", "cu", "carai", "cuzao", "porra", "arrombado", "cu preto", "lixo", "autista", "lixeira", "verme", "Horrível", "seu merda", "filho da puta", "vsfd",
"caralho", "seu gordo", "cuzão", "vadia", "sua mãe", "seu fdp", "cala a boca", "puta", "fudido", "krl", "f d p", "vtnc", "vai tomar no cu", "crl", "cadeirante", "caderante",
"nigga", "prr", "CARALHO", "PORRA", "CARAI", "CUZAO", "CUZÃO", "FDP", "FILHO DA PUTA", "Cu", "CU", "CÚ", "PORR", "porr", "PRRA", "fodido", "FODIDO", "CRALHO", "CARLHO", "poha",
"prr" , "PRR", "POHA", "bct", "BCT"];
let xingo = ["seu preto", "seu macaco", "macaco", "seu negro", "pretinho", "resto de aborto", "seu mcc", "Negrinho", "carvão", "nazista", "Nazista"];

function nameForbid(player) {
    if (forbid.includes(player.name)) { room.kickPlayer(player.id, 'nick proibido nessa sala', false) }
};

var lastTeamTouched; // records who was the last to touch the ball
var lastPlayersTouched; // allows you to receive good goal notifications (must be lastPlayersKicked, waiting for a next update to get better control of shots on target)
var countAFK = false; // created to get better control of the activity, kicks if it's AFK
var activePlay = false; // created to gain better control of ball possession
var goldenGoal = false;
var SMSet = new Set(); // set created to get slow mode which is useful in ChooseMode
var banList = []; // keep track of bans, so we can unban people if we want

/* STATS */

var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{
    "x": 0,
    "y": 0
}, {
    "x": 0,
    "y": 0
}]; // created to obtain ball speed
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; // this is to count the players who should be counted for statistics. This includes players who left after the game started.
var allReds = [];

/* BALANCE AND RECRUITMENT */

var inChooseMode = false; // this variable allows you to distinguish the 2 phases of the game and choose which ones should be treated very differently
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;

/* ASSISTANT */

var checkTimeVariable = false; // this is created so that chat doesn't get spammed when a game ends via timeLimit
var announced = false;
var statNumber = 0; // this allows the room to receive statistical information every X minutes
var endGameVariable = false; // this variable with the one below helps distinguish cases where games are stopped because they are over from those where games are stopped due to player movements or team resets
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);

/* OBJECTS */

function Goal(time, team, striker, assist) {
    this.time = time;
    this.team = team;
    this.striker = striker;
    this.assist = assist;
}

function Game(date, scores, goals) {
    this.date = date;
    this.scores = scores;
    this.goals = goals;
}

// function setRegister(player, senha) {
//    if (registro.get(player.name)) room.sendAnnouncement('Você já está registrado.', player.id);
//    else {
//        registro.set(player.name, senha);
//        localStorage.setItem("registros", JSON.stringify([...registro]));
//        room.sendAnnouncement('Registrado!', player.id, 0x2FE436);
//        room.sendAnnouncement(`Senha: ${senha}`, player.id, 0x2FE436);
//    }
//}

//function getLogin(player, senha) {
//    if (registro.get(player.name)) {
//        if (registro.get(player.name) == senha) {
//            room.sendAnnouncement(`${player.name} logou!`, null, 0x2FE436);
//        } else room.sendAnnouncement('Senha incorreta.', player.id, 0xFF0000);
//    } else room.sendAnnouncement('Você não está registrado.', player.id, 0xFF0000);
//}

/* FUNCTIONS */

function centerText(string) {
    var space = parseInt((80 - string.length) * 0.8, 10);
    if (space <= 0) {
        return '';
    }
    return ' '.repeat(space) + string + ' '.repeat(space);
};

/* CHASING */
function golcontra(goaler) {
    var messages = [
        "I'm sure it was unintentional, right, " + goaler.name + "?",
        "YOU'RE PLAYING FOR THE WRONG TEAM, " + goaler.name,
        "CONGRATULATIONS, " + goaler.name + " THE OPPONENT TEAM THANKS YOU!",
        "Pro tip " + goaler.name + ": Next time... DON'T AIM AT YOUR GOAL!!",
        goaler.name + " I tried, who am I to judge?"
    ];
    var randomIndex = Math.floor(Math.random() * messages.length);
    var announcement = messages[randomIndex];
    setTimeout(function () {
        room.sendAnnouncement(centerText(announcement), null, Cor.White, "bold");
    }, 3000);
};

/* AUXILIARY FUNCTIONS */

function getRandomInt(max) { // returns a random number from 0 to max-1
    return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current game time
    return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}

/* BUTTONS */

function download(conteudo, nomeDoArquivo, tipoDeArquivo) {
    let blob = new Blob([conteudo], {
        type: tipoDeArquivo
    });
    const link = window.document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = nomeDoArquivo;
    link.click();
    window.URL.revokeObjectURL(link.href);
}

function topBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (TeamR.length == TeamB.length) {
            if (teamS.length > 1) {
                room.setPlayerTeam(teamS[0].id, Team.RED);
                room.setPlayerTeam(teamS[1].id, Team.BLUE);
            }
            return;
        } else if (TeamR.length < TeamB.length) {
            room.setPlayerTeam(teamS[0].id, Team.RED);
        } else {
            room.setPlayerTeam(teamS[0].id, Team.BLUE);
        }
    }
}

function randomBtn() {
    if (teamS.length == 0) {
        return;
    } else {
        if (TeamR.length == TeamB.length) {
            if (teamS.length > 1) {
                var r = getRandomInt(teamS.length);
                room.setPlayerTeam(teamS[r].id, Team.RED);
                teamS = teamS.filter((spec) => spec.id != teamS[r].id);
                room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
            }
            return;
        } else if (TeamR.length < TeamB.length) {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
        } else {
            room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
        }
    }
}

function blueToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < TeamB.length; i++) {
        room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
    }
}

function redToSpecBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < TeamR.length; i++) {
        room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
    }
}

function resetBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    if (TeamR.length <= TeamB.length) {
        for (var i = 0; i < TeamR.length; i++) {
            room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = TeamR.length; i < TeamB.length; i++) {
            room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
        }
    } else {
        for (var i = 0; i < TeamB.length; i++) {
            room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
            room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
        }
        for (var i = TeamB.length; i < TeamR.length; i++) {
            room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
        }
    }
}

function blueToRedBtn() {
    resettingTeams = true;
    setTimeout(() => {
        resettingTeams = false;
    }, 100);
    for (var i = 0; i < TeamB.length; i++) {
        room.setPlayerTeam(TeamB[i].id, Team.RED);
    }
}

/* GAME FUNCTIONS */

function checkTime() {
    const scores = room.getScores();
    game.scores = scores;
    if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
        if (scores.red != scores.blue) {
            if (checkTimeVariable == false) {
                checkTimeVariable = true;
                setTimeout(() => {
                    checkTimeVariable = false;
                }, 3000);
                scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
                setTimeout(() => {
                    room.stopGame();
                }, 2000);
            }
            return;
        }
        goldenGoal = true;
       // room.sendAnnouncement("⚽ Gol de Gold!", null, 0xF1AF09);
        room.sendAnnouncement(centerText("PROLONGATION"), null, Cor.Amarelo, "bold");
        room.sendAnnouncement(centerText("I'll give " + drawTimeLimit * 60 + " seconds!"), null, Cor.White, "normal");
        room.sendAnnouncement(centerText("⚽ First goal wins! ⚽"), null, Cor.White, "normal");
    }
    if (scores.time > scores.timeLimit + drawTimeLimit * 60 - 15 && scores.time <= scores.timeLimit + drawTimeLimit * 60) {
        if (checkTimeVariable == false && announced == false) {
            checkTimeVariable = true;
            announced = true;
            setTimeout(() => {
                checkTimeVariable = false;
            }, 10);
            room.sendAnnouncement(centerText("⌛ 15 seconds to a tie!"), null, Cor.Amarelo, "bold");
        }
    }
    if (scores.time > (scores.timeLimit + drawTimeLimit * 60)) {
        if (checkTimeVariable == false) {
            checkTimeVariable = true;
            setTimeout(() => { checkTimeVariable = false; }, 10);
            endGame(Team.SPECTATORS);
            room.stopGame();
            goldenGoal = false;
        }
    }
};

function endGame(winner) { // lida com o final de um jogo: nenhuma função stopGame dentro
    players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
    const scores = room.getScores();
    game.scores = scores;
    Rposs = Rposs/(Rposs+Bposs);
    Bposs = 1 - Rposs;
    lastWinner = winner;
    endGameVariable = true;
    if (winner == Team.RED) {
        streak++;
        room.sendAnnouncement(centerText("🏆 Red team won! | Win Streak(s):") + streak + " 🏆", null, 0xFDC43A);
    }
    else if (winner == Team.BLUE) {
        streak = 1;
        room.sendAnnouncement(centerText("🏆 Blue team won! | Win streak(s):") + streak + " 🏆", null, 0xFDC43A);
    }
    else {
        streak = 0;
        room.sendAnnouncement("💤 Limit reached");
    }
    //room.sendAnnouncement("📊 Posse de Bola: 🔴 " + (Rposs*100).toPrecision(3).toString() + "% | " + (Bposs*100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
    room.sendAnnouncement(centerText("🏆 END OF MATCH 🏆"), null, Cor.White, "bold");
    room.sendAnnouncement(centerText(" " + scores.red + " - " + scores.blue), null, Cor.White, "normal");
    room.sendAnnouncement(centerText((Rposs * 100).toPrecision(3).toString() + "% | Ball possession | " + (Bposs * 100).toPrecision(3).toString() + "% "), null, Cor.White, "normal");
    scores.red == 0 ? (scores.blue == 0 ? room.sendAnnouncement("🥅 " + GKList[0].name + " it's a man? no, it's a barrier! " + GKList[1].name + " saved all goals ", null, 0xFDC43A) : room.sendAnnouncement("🥅 it's a man? no, it's a barrier! " + GKList[1].name + " saved all goals ", null, 0xFDC43A)) : scores.blue == 0 ? room.sendAnnouncement("🥅 it's a man? no, it's a barrier! " + GKList[0].name + " saved all goals ", null, 0xFDC43A) : null;
    updateStats();
    //sendDiscordWebhook(scores);
    //room.sendAnnouncement("A partida foi gravada e enviada em nosso discord. ID: " + `${getDate()}`, null, Cor.Amrelo, Negrito);
    
}

function quickRestart() {
    room.stopGame();
    setTimeout(() => {
        room.startGame();
    }, 2000);
}

function resumeGame() {
    setTimeout(() => {
        room.startGame();
    }, 2000);
    setTimeout(() => {
        room.pauseGame(false);
    }, 1000);
}

function activateChooseMode() {
    inChooseMode = true;
    slowMode = 2;
    room.sendAnnouncement("Recruitment mode activated!", null, 0x55bae2, "normal");
}

function deactivateChooseMode() {
    inChooseMode = false;
    clearTimeout(timeOutCap);
    if (slowMode != 0) {
        slowMode = 0;
        room.sendAnnouncement("Recruitment mode closed.", null, 0xf2a000, "normal");
    }
    redCaptainChoice = "";
    blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) {
    if (map != '') {
        room.setCustomStadium(map);
    } else {
        console.log("There was an error loading the stadium")
        room.setDefaultStadium("Classic");
    }
    room.setScoreLimit(scoreLim);
    room.setTimeLimit(timeLim);
}

/* PLAYER FUNCTIONS */

function updateTeams() { // updates the list of players and the list of all teams
    players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
    TeamR = players.filter(p => p.team === Team.RED);
    TeamB = players.filter(p => p.team === Team.BLUE);
    teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity: players will be kicked after afkLimit
    if (countAFK && (TeamR.length + TeamB.length) > 1) {
        for (var i = 0; i < TeamR.length; i++) {
            setActivity(TeamR[i], getActivity(TeamR[i]) + 1);
        }
        for (var i = 0; i < TeamB.length; i++) {
            setActivity(TeamB[i], getActivity(TeamB[i]) + 1);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
            room.sendAnnouncement("@" + room.getPlayer(extendedP[i][eP.ID]).name + ", if you don't move in the next " + Math.floor(afkLimit / 3) + " seconds, you will be kicked!", extendedP[i][eP.ID], 0xf4a404, "bold", 2);
        }
        if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
            extendedP[i][eP.ACT] = 0;
            if (room.getScores().time <= afkLimit - 0.5) {
                setTimeout(() => {
                    !inChooseMode ? quickRestart() : room.stopGame();
                }, 10);
            }
            room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
        }
    }
}

function getAuth(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
    return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
    extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

/* BALANCE AND RECRUITMENT FUNCTIONS */

function updateRoleOnPlayerIn() {
    updateTeams();
    if (inChooseMode) {
        if (players.length == 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitp);
        }
        getSpecList(TeamR.length <= TeamB.length ? TeamR[0] : TeamB[0]);
    }
    balanceTeams();
}

function updateRoleOnPlayerOut() {
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && TeamR.length != TeamB.length) {
            if (TeamR.length < TeamB.length) {
                if (scores.blue - scores.red == 2) {
                    endGame(Team.BLUE);
                   // room.sendChat("🤖 Ragequit 🤖");
                    room.sendAnnouncement("[Juiz] Ragequit by the red team detected, match over!", null, 0xbfff00, "normal");
                    setTimeout(() => {
                        room.stopGame();
                    }, 100);
                    return;
                }
            } else {
                if (scores.red - scores.blue == 2) {
                    endGame(Team.RED);
                   // room.sendChat("🤖 Ragequit 🤖");
                    room.sendAnnouncement("[Juiz] Ragequit by the blue team detected, match over!", null, 0xbfff00, "normal");
                    setTimeout(() => {
                        room.stopGame();
                    }, 100);
                    return;
                }
            }
        }
    }
    if (inChooseMode) {
        if (players.length < 6) {
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
        }
        if (TeamR.length == 0 || TeamB.length == 0) {
            TeamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
            return;
        }
        if (Math.abs(TeamR.length - TeamB.length) == teamS.length) {
            // room.sendChat("Sem alternativas, deixe me lidar com essa situação. ...");
            room.sendAnnouncement("[Juiz] With no possibility of recruitment, let me decide...", null, 0xc0bdb1, "normal");
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    }, 5 * i);
                }
            } else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.RED);
                    }, 5 * i);
                }
            }
            return;
        }
        if (streak == 0 && room.getScores() == null) {
            if (Math.abs(TeamR.length - TeamB.length) == 2) { // if someone leaves an already formed team, thus leaving 2 players, put the last one chosen back to the spectators so that it is fair
              // room.sendChat("🤖 Equilibrando equipes... 🤖");
                room.sendAnnouncement("Balancing teams...", null, 0xc0bdb1, "normal");
                TeamR.length > TeamB.length ? room.setPlayerTeam(TeamR[TeamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(TeamB[TeamB.length - 1].id, Team.SPECTATORS);
            }
        }
        if (TeamR.length == TeamB.length && teamS.length < 2) {
            deactivateChooseMode();
            resumeGame();
            return;
        }
        capLeft ? choosePlayer() : getSpecList(TeamR.length <= TeamB.length ? TeamR[0] : TeamB[0]);
    }
    balanceTeams();
}

function balanceTeams() {
    if (!inChooseMode) {
        if (players.length == 1 && TeamR.length == 0) { // 1 player
            quickRestart();
            loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
            room.setPlayerTeam(players[0].id, Team.RED);
        } else if (Math.abs(TeamR.length - TeamB.length) == teamS.length && teamS.length > 0) { // specific players provide necessary players
            const n = Math.abs(TeamR.length - TeamB.length);
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        } else if (Math.abs(TeamR.length - TeamB.length) > teamS.length) { // there are not enough players
            const n = Math.abs(TeamR.length - TeamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitPractice);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            } else if (players.length == 6) {
                quickRestart();
                loadMap(practiceMap, scoreLimitPractice, timeLimitp);
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(TeamR[TeamR.length - 1 - i].id, Team.SPECTATORS);
                }
            } else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(TeamB[TeamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        } else if (Math.abs(TeamR.length - TeamB.length) < teamS.length && TeamR.length != TeamB.length) { // recruitment mode
            room.pauseGame(true);
            activateChooseMode();
            choosePlayer();
        } else if (teamS.length >= 2 && TeamR.length == TeamB.length && TeamR.length < maxTeamSize) { // 2 in red, 2 in blue and 2 or more specifications
            if (TeamR.length == 2) {
                quickRestart();
                if (!teamS.length == 2) {
                    loadMap(practiceMap, scoreLimitPractice, timeLimitp);
                }
            }
            topBtn();
        }
    }
}

function choosePlayer() {
    clearTimeout(timeOutCap);
    if (TeamR.length <= TeamB.length && TeamR.length != 0) {
        room.sendAnnouncement("[Juiz] To choose a player, enter their roster number or use 'top', 'random' o 'bottom'.", TeamR[0].id, 0x5db5db, "normal");
        timeOutCap = setTimeout(function(player) {
            room.sendAnnouncement("Be quick, @" + player.name + ", only remain " + Number.parseInt(chooseTime / 2) + " seconds for you to choose!", player.id, 0xf2a000, "normal");
            timeOutCap = setTimeout(function(player) {
                room.kickPlayer(player.id, "Didn't choose in time", false);
            }, chooseTime * 500, TeamR[0]);
        }, chooseTime * 1000, TeamR[0]);
    } else if (TeamB.length < TeamR.length && TeamB.length != 0) {
        room.sendAnnouncement("[Juiz] To choose a player, enter their roster number or use 'top', 'random' o 'bottom'.", TeamB[0].id, 0x5db5db, "normal");
        timeOutCap = setTimeout(function(player) {
            room.sendAnnouncement("Be quick, @" + player.name + ", only remain " + Number.parseInt(chooseTime / 2) + " seconds for you to choose!", player.id, 0xf2a000, "normal");
            timeOutCap = setTimeout(function(player) {
                room.kickPlayer(player.id, "Didn't choose in time", false);
            }, chooseTime * 500, TeamB[0]);
        }, chooseTime * 1000, TeamB[0]);
    }
    if (TeamR.length != 0 && TeamB.length != 0) getSpecList(TeamR.length <= TeamB.length ? TeamR[0] : TeamB[0]);
}

function getSpecList(player) {
    var cstm = "[Recruitment] Players: ";
    for (var i = 0; i < teamS.length; i++) {
        if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
            room.sendChat(cstm, player.id);
            cstm = "... ";
        }
        cstm += teamS[i].name + "[" + (i + 1) + "], ";
    }
    cstm = cstm.substring(0, cstm.length - 2);
    cstm += ".";
    room.sendAnnouncement(cstm, player.id, 0xebeb09, "normal");
}

/* STATISTICS FUNCTIONS */

function getLastTouchOfTheBall() {
    const ballPosition = room.getBallPosition();
    updateTeams();
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if (distanceToBall < triggerDistance) {
                !activePlay ? activePlay = true : null;
                if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].id) {
                    lastPlayersTouched[1] = lastPlayersTouched[0];
                    lastPlayersTouched[0] = players[i];
                }
                lastTeamTouched = players[i].team;
            }
        }
    }
}

function getStats() { // gives possession, ball speed and GK of each team
    if (activePlay) {
        updateTeams();
        lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
        var ballPosition = room.getBallPosition();
        point[1] = point[0];
        point[0] = ballPosition;
        ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
        var k = [-1, Infinity];
        for (var i = 0; i < TeamR.length; i++) {
            if (TeamR[i].position.x < k[1]) {
                k[0] = TeamR[i];
                k[1] = TeamR[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        k = [-1, -Infinity];
        for (var i = 0; i < TeamB.length; i++) {
            if (TeamB[i].position.x > k[1]) {
                k[0] = TeamB[i];
                k[1] = TeamB[i].position.x;
            }
        }
        k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
        findGK();
    }
}

function updateStats() {
    if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
        var stats;
        for (var i = 0; i < allReds.length; i++) {
            localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < allBlues.length; i++) {
            localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name];
            stats[Ss.GA]++;
            lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
            stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
            localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
        }
        for (var i = 0; i < game.goals.length; i++) {
            if (game.goals[i].striker != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
                    stats[Ss.GL]++;
                    localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
                }
            }
            if (game.goals[i].assist != null) {
                if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
                    stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
                    stats[Ss.AS]++;
                    localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
                }
            }
        }
        if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
            stats[Ss.GK]++;
            game.scores.blue == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
        }
        if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
            stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
            stats[Ss.GK]++;
            game.scores.red == 0 ? stats[Ss.CS]++ : null;
            stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
            localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
        }
    }
}

function findGK() {
    var tab = [
        [-1, ""],
        [-1, ""]
    ];
    for (var i = 0; i < extendedP.length; i++) {
        if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
            if (tab[0][0] < extendedP[i][eP.GK]) {
                tab[0][0] = extendedP[i][eP.GK];
                tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        } else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
            if (tab[1][0] < extendedP[i][eP.GK]) {
                tab[1][0] = extendedP[i][eP.GK];
                tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
            }
        }
    }
    GKList = [tab[0][1], tab[1][1]];
}

setInterval(() => {
    var tableau = [];
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Matches Played> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Victories> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("Assistance> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function(key) {
            if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]);
            }
        });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    statNumber++;
}, statInterval * 60 * 1000);

/* EVENTS */

/* PLAYER MOVEMENT */

room.onPlayerJoin = function(player) {
    console.log("---------------------------------------------------");
    console.log("[📢] Nick: " + player.name);
    console.log("[📢] Conn: " + player.conn);
    console.log("[📢] Auth: " + player.auth);
    extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
    updateRoleOnPlayerIn();
    room.sendAnnouncement("👋🏼 Hi there, " + player.name + "!", null, 0x5EE7FF, "bold");
    if (room.getPlayerList().length > 1 && room.getPlayerList().length < 5) {
        room.sendAnnouncement("Loading the stadium...", player.id, 0xEDC021, "bold");
        setTimeout(() => {
            room.sendAnnouncement(" ---------------------------------------------------", player.id, 0xEDC021, "bold");
            room.sendAnnouncement("Welcome to the room\nRemember, here we play just for fun!", player.id, 0xEDC021, "bold");
            room.sendAnnouncement(" ---------------------------------------------------", player.id, 0xEDC021, "bold");
        }, 2_000);
    }
    if (localStorage.getItem(player.auth) != null) {
        var playerRole = JSON.parse(localStorage.getItem(player.auth))[Ss.RL];
        if (playerRole == "admin" || playerRole == "master") {
            room.setPlayerAdmin(player.id, true);
            room.sendAnnouncement("「Admin」" + player.name + " Came into the room!", null, 0xFF7900, "bold");
        }
    }
    if (localStorage.getItem(getAuth(player)) == null) {
        stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name]
        localStorage.setItem(getAuth(player), JSON.stringify(stats));
    }
//    setTimeout(() => {
//        if (registro.get(player.name)) room.sendAnnouncement('Login: !login senha', player.id, 0x1B9124, "bold");
//       else room.sendAnnouncement('Registrar: !register senha', player.id, 0x1B9124, "bold");
//        room.sendAnnouncement('Login: !login senha', player.id, 0x1B9124, "bold");
//    }, 2_000);
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
    if (changedPlayer.id == 0) {
        room.setPlayerTeam(0, Team.SPECTATORS);
        return;
    }
    if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
        room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
        room.sendChat(changedPlayer.name + " it's AFK!");
        return;
    }
    updateTeams();
    if (room.getScores() != null) {
        var scores = room.getScores();
        if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.red) < 2) {
            (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer): allBlues.push(changedPlayer);
        }
    }
    if (changedPlayer.team == Team.SPECTATORS) {
        setActivity(changedPlayer, 0);
    }
    if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
        if (Math.abs(TeamR.length - TeamB.length) == teamS.length) {
            deactivateChooseMode();
            resumeGame();
            var b = teamS.length;
            if (TeamR.length > TeamB.length) {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    }, 200 * i);
                }
            } else {
                for (var i = 0; i < b; i++) {
                    setTimeout(() => {
                        room.setPlayerTeam(teamS[0].id, Team.RED);
                    }, 200 * i);
                }
            }
            return;
        } else if ((TeamR.length == maxTeamSize && TeamB.length == maxTeamSize) || (TeamR.length == TeamB.length && teamS.length < 2)) {
            deactivateChooseMode();
            resumeGame();
        } else if (TeamR.length <= TeamB.length && redCaptainChoice != "") { // escolha lembrada
            redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
            return;
        } else if (TeamB.length < TeamR.length && blueCaptainChoice != "") {
            blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
            return;
        } else {
            choosePlayer();
        }
    }
}

room.onPlayerLeave = function(player) {
    if (TeamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && TeamR.length <= TeamB.length) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
    if (TeamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && TeamB.length < TeamR.length) {
        choosePlayer();
        capLeft = true;
        setTimeout(() => {
            capLeft = false;
        }, 10);
    }
    setActivity(player, 0);
    updateRoleOnPlayerOut();
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
    ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

/* PLAYER ACTIVITY */

room.onPlayerChat = function(player, message) {
    if (message.length > 1 && message[0].toLowerCase() == 't' && message[1] == ' ') {
        if (player.team != 0) {
        room.getPlayerList().forEach((element) => {if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + message.substr(2), element.id, (player.team == 1 ? 16725591 : 3261685), "bold", 0)} )
        return false
        }
        else {
        room.sendAnnouncement("You're not on a team.", player.id)
        }}

    // SOCCER TEAMS //

    if (message == "!bra") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bra";
                room.setTeamColors(Team.RED, 0, 0x3347B3, [0x018434, 0xf8de2e, 0xf8de2e]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Brazil]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!bra") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bra";
                room.setTeamColors(Team.BLUE, 0, 0x3347B3, [0x018434, 0xF8DE2E, 0xF8DE2E]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Brazil]! ", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!ger") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ale";
                room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x121003, 0xC70000, 0xF5C600]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Germany]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!ger") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ale";
                room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x121003, 0xC70000, 0xF5C600]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Germany]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!arg") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!arg";
                room.setTeamColors(Team.RED, 90, 0xE3AC42, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Argentina]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!arg") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!arg";
                room.setTeamColors(Team.BLUE, 90, 0xE3AC42, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Argentina]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!spa") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!esp";
                room.setTeamColors(Team.RED, 0, 0xDBA640, [0x7B111A, 0x7B111A, 0x7B111A]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Spain]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!spa") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!esp";
                room.setTeamColors(Team.BLUE, 0, 0xDBA640, [0x7B111A, 0x7B111A, 0x7B111A]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Spain]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!por") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!por";
                room.setTeamColors(Team.RED, 120, 0xDBA640, [0x7B111A, 0x7B111A, 0x384F43]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", escolheu o uniforme de [Portugal]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!por") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!por";
                room.setTeamColors(Team.BLUE, 120, 0xDBA640, [0x7B111A, 0x7B111A, 0x384F43]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", escolheu o uniforme de [Portugal]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!ita") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ita";
                room.setTeamColors(Team.RED, 60, 0xFFFFFF, [0x0249a8, 0x0366EB, 0x0082d3]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Italy]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!ita") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ita";
                room.setTeamColors(Team.BLUE, 60, 0xFFFFFF, [0x0249a8, 0x0366EB, 0x0082d3]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Italy]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!uru") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!uru";
                room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x0082d3, 0x0082d3, 0x0082d3]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Uruguay]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!uru") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!uru";
                room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x0082d3, 0x0082d3, 0x0082d3]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Uruguay]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!fra") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!fra";
                room.setTeamColors(Team.RED, 0, 0xD19E1F, [0x202c46, 0x202c46, 0x202c46]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [France]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!fra") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!fra";
                room.setTeamColors(Team.BLUE, 0, 0xD19E1F, [0x202c46, 0x202c46, 0x202c46]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [France]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!eng") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ing";
                room.setTeamColors(Team.RED, 90, 0x0f2544, [0x408CFF, 0xA1C6FF, 0xe0e4e9]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [England]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!eng") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!ing";
                room.setTeamColors(Team.BLUE, 90, 0x0f2544, [0x408CFF, 0xA1C6FF, 0xe0e4e9]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [England]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!bel") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bel";
                room.setTeamColors(Team.RED, 90, 0xD19E1F, [0x151619, 0x990011, 0x990011]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Belgium]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!bel") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bel";
                room.setTeamColors(Team.BLUE, 90, 0xD19E1F, [0x151619, 0x990011, 0x990011]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Belgium]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!net") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!hol";
                room.setTeamColors(Team.RED, 90, 0x2B0E09, [0xdc6024, 0xdc6024, 0xdc6024]);
                room.sendAnnouncement("The captain of the red team, "+ player.name + ", chose the uniform [Netherlands]!", null, 0x30F55F, "bold");
            }
        }
    }
    if (message == "!net") {
        if (player.team == 2) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!hol";
                room.setTeamColors(Team.RED, 90, 0x2B0E09, [0xdc6024, 0xdc6024, 0xdc6024]);
                room.sendAnnouncement("The captain of the blue team, "+ player.name + ", chose the uniform [Netherlands]!", null, 0x30F55F, "bold");
            }
        }
    }


    if (message == "!bah") {
        if (player.team == 1) {
            if (player.id == TeamR[0].id) {
                CaptainChoice = "!bah";
                room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x0A4AE8, 0xF20533, 0x0A4AE8]);
                room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform BAHIA! ", null, 0x30F55F, "bold");
            }
            if (message == "!bah") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!bah";
                        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x0A4AE8, 0xF20533, 0x0A4AE8]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform BAHIA! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vit") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!vit";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xFF1D0D, 0x000000]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform VITÓRIA! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vit") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!vit";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xFF1D0D, 0x000000]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform VITÓRIA! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!flu") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!flu";
                        room.setTeamColors(Team.RED, 0, 0xFFFFFF, [0x2A524F, 0x871F39, 0x2A524F]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform FLUMINENSE! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!flu") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!flu";
                        room.setTeamColors(Team.BLUE, 0, 0xFFFFFF, [0x2A524F, 0x871F39, 0x2A524F]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform FLUMINENSE! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!for") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!for";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x182587, 0xE32026, 0x182587]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform FORTALEZA! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!for") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!for";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x182587, 0xE32026, 0x182587]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform FORTALEZA! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cap") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!cap";
                        room.setTeamColors(Team.RED, 45, 0xFFFFFF, [0xE8153F, 0x000000, 0xE8153F]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform ATHLETICO PARANAENSE! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cap") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!cap";
                        room.setTeamColors(Team.BLUE, 45, 0xFFFFFF, [0xE8153F, 0x000000, 0xE8153F]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform ATHLETICO PARANAENSE! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!rem") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!rem";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x000000]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform REMO! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!rem") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!rem";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x000000]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform REMO! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cui") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!cui";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0x217430, 0xF4D42F]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform CUIABÁ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!cui") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!cui";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0x217430, 0xF4D42F]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform CUIABÁ! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!jvn") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!jvn";
                        room.setTeamColors(Team.RED, 0, 0x00964B, [0x00964B, 0xFFFFFF, 0x00964B]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform JUVENTUDE! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!jvn") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!jvn";
                        room.setTeamColors(Team.BLUE, 0, 0x00964B, [0x00964B, 0xFFFFFF, 0x00964B]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform JUVENTUDE! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!utd3") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!utd3";
                        room.setTeamColors(Team.RED, -37, 0xF0CF0D, [0x1E416D, 0x235287, 0x1463A4]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform MANCHESTER UNITED 3º KIT! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!utd3") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!utd3";
                        room.setTeamColors(Team.BLUE, -37, 0xF0CF0D, [0x1E416D, 0x235287, 0x1463A4]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform MANCHESTER UNITED 3º KIT! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!spo") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!spo";
                        room.setTeamColors(Team.RED, 0, 0xFFE600, [0xFF0D0D, 0x000000, 0xFF0D0D]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform SPORT! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!spo") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!spo";
                        room.setTeamColors(Team.BLUE, 0, 0xFFE600, [0xFF0D0D, 0x000000, 0xFF0D0D]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform SPORT! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!gol") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!gol";
                        room.setTeamColors(Team.RED, 90, 0x23CC4A, [0x0C4519]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform GOIÁS! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!gol") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!gol";
                        room.setTeamColors(Team.BLUE, 90, 0x23CC4A, [0x0C4519]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform GOIÁS! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vas") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!vas";
                        room.setTeamColors(Team.RED, 140, 0xFF1212, [0xFFFFFF, 0x002033, 0xFFFFFF]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform VASCO! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!vas") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!vas";
                        room.setTeamColors(Team.BLUE, 140, 0xFF1212, [0xFFFFFF, 0x002033, 0xFFFFFF]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform VASCO! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!pen") {
                if (player.team == 1) {
                    if (player.id == TeamR[0].id) {
                        CaptainChoice = "!pen";
                        room.setTeamColors(Team.RED, 90, 0xFFFFFF, [0xFAC904, 0x000000, 0xFAC904]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform PENHÃROL! ", null, 0x30F55F, "bold");
                    }
                }
            }
            if (message == "!pen") {
                if (player.team == 2) {
                    if (player.id == TeamB[0].id) {
                        CaptainChoice = "!pen";
                        room.setTeamColors(Team.BLUE, 90, 0xFFFFFF, [0xFAC904, 0x000000, 0xFAC904]);
                        room.sendAnnouncement(player.name + "The team captain, "+ player.name + ", chose the uniform PENHÃROL! ", null, 0x30F55F, "bold");
                    }
                }
            }

            if (message.toLowerCase().substr(0, 10) == '!register ') {
                setRegister(player, message.substr(10));
                return false;
            }

            // !login senha
            if (message.toLowerCase().substr(0, 7) == '!login ') {
                getLogin(player, message.substr(7));
                return false;
            }
            if (message.length > 65) {
                room.sendAnnouncement("", player.id);
                return false;
            }
            messageHistory.push(player.id);
            messageCounter++;
            if (messageCounter === 3) {
                if (messageHistory[messageHistory.length - 1] === player.id && messageHistory[messageHistory.length - 2] === player.id && messageHistory[messageHistory.length - 3] === player.id) {
                    room.sendChat("Spam alert.", player.id);
                }
            }
            if (messageCounter === 6) {
                if (messageHistory[messageHistory.length - 1] === player.id && messageHistory[messageHistory.length - 2] === player.id && messageHistory[messageHistory.length - 3] === player.id && messageHistory[messageHistory.length - 4] === player.id && messageHistory[messageHistory.length - 5] === player.id && messageHistory[messageHistory.length - 6] === player.id) {
                    room.kickPlayer(player.id, "Moderate your messages", true);
                }
            }
            if (messageHistory[messageHistory.length - 1] !== messageHistory[messageHistory.length - 2]) {
                messageCounter = 1;
            }
            if (player.name === "hitler" && player.name === "hitler") {
                messageCounter = 1;
            }
        }
    }
    messageHistory.push(player.id);
    messageCounter++;
    if (messageCounter === 1545) {
        if (messageHistory[messageHistory.length - 1] === player.id && messageHistory[messageHistory.length - 2] === player.id && messageHistory[messageHistory.length - 3] === player.id && messageHistory[messageHistory.length - 4] === player.id) {
            room.sendChat(":)", player.id);
        }
    }
    // ban player if 6 messages are typed in a row (disabled)
    msg = message;
    message = message;
    originalMessage = message;
    message = message.split(/ +/);
    player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
    if (["!help", "!ajuda"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("[📄] Commands : !me, !tc, !pv, !uni, !showme, !rankinfo, !sequencia, !msgdodia, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id, 0x309D2B, "bold");
        player.admin ? room.sendAnnouncement("[📄] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id, 0x309D2B, "bold") : null;
    } 
    
    if (["!chooseadm"].includes(message[0].toLowerCase())) {
        if (message[1] == "on") {
            room.sendAnnouncement(player.name + " Activated recruitment mode!", null, 0x55bae2, "normal");
            choose = true;
        }
        else if (message[1] == "off") {
            room.sendAnnouncement(player.name + " Disabled recruitment mode.", null, 0xf2a000, "normal")
            choose = false;
        }
    }
    
    if (["!uni", "!unis"].includes(message[0].toLowerCase())) {
            room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
            room.sendAnnouncement("Soccer teams:", player.id, Cor.Amarelo, "bold");
            room.sendAnnouncement("Brazil [!bra], Germany [!ger], Argentina [!arg], Spain [!spa], Portugal [!por]", player.id, Cor.Branco, "normal");
            room.sendAnnouncement("Italy [!ita], Uruguay [!uru], France [!fra], England [!eng], Belgium [!bel], Netherlands [!net]", player.id, Cor.Branco, "normal");
            room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
//            room.sendAnnouncement("Times Sulamericanos:", player.id, Cor.Amarelo, "bold");
//            room.sendAnnouncement("Corinthians <cor>, São Paulo <spfc>, Palmeiras <pal>, Santos <sfc>, Flamengo <fla>, Grêmio <gre>", player.id, Cor.Branco, "normal");
//           room.sendAnnouncement("Vasco <vas>, Fluminense <flu>, Internacional <int>, Cruzeiro <cru>, Boca Juniors <boc>, River Plate <riv>", player.id, Cor.Branco, "normal");
//            room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
//            room.sendAnnouncement("Times Europeus:", player.id, Cor.Amarelo, "bold");
//            room.sendAnnouncement("Manchester City <mci>, Borussia Dortmund <bor>, Paris Saint-Germain <psg>, Real Madrid <rea>, Inter de Milão <intM>", player.id, Cor.Branco, "normal");
//            room.sendAnnouncement("Barcelona <bar>, Atlético de Madrid <atm>, Liverpool <liv>, Chelsea <che>, Juventus <juv>, Bayern de Munique <bay>, Milan <mil>", player.id, Cor.Branco, "normal");
//            room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
    } if (["!ranks"].includes(message[0].toLowerCase())) {
    room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
    room.sendAnnouncement("Ranks per goal:", player.id, Cor.Amarelo, "bold");
    room.sendAnnouncement("Bronze I - [⚽:2] | Bronze II - [⚽:5] | Bronze III - [⚽:8]", player.id, 0xbc5e00, "normal");
    room.sendAnnouncement("Silver I - [⚽:10] | Silver II - [⚽:15] | Silver III - [⚽:20]", player.id, 0xA2A2A2, "normal");
    room.sendAnnouncement("Gold I - [⚽:30] | Gold II - [⚽:35] | Gold III - [⚽:40]", player.id, 0xEAC274, "normal");
    room.sendAnnouncement("Type '!ranks2' to see more", player.id, Cor.Amarelo, "bold");
    room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
    }
     if (["!ranks2"].includes(message[0].toLowerCase())) {
    room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold");
    room.sendAnnouncement("Ranks per goal (2 page):", player.id, Cor.Amarelo, "bold");
    room.sendAnnouncement("Platinum I - [⚽:50] | Platinum II - [⚽:55] | Platinum III - [⚽:60]", player.id, 0x62AEE3, "normal");
    room.sendAnnouncement("Diamond I - [⚽:80] | Diamond II - [⚽:120] | Diamond III - [⚽:150]", player.id, 0x7cd3fa, "normal");
    room.sendAnnouncement("Diamond VI - [⚽:200]", player.id, 0x7cd3fa, "normal");
    room.sendAnnouncement("Last rank: Legend of x3 - [⚽:500]", player.id, 0xf77104, "bold");
    room.sendAnnouncement("_______________________________________", player.id, Cor.Amarelo, "bold"); 
    } 
    else if (["!afk"].includes(message[0].toLowerCase())) {
        if (players.length != 1 && player.team != Team.SPECTATORS) {
            if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
                room.setPlayerTeam(player.id, Team.SPECTATORS);
            } else {
                room.sendAnnouncement("You can't go AFK while playing!", player.id, 0xFF7B08);
                return false;
            }
        } else if (players.length == 1 && !getAFK(player)) {
            room.setPlayerTeam(player.id, Team.SPECTATORS);
        }
        setAFK(player, !getAFK(player));
        room.sendAnnouncement(player.name + (getAFK(player) ? " it's AFK!" : " is no longer AFK!"), null, (getAFK(player) ? 0xFF7B08 : 0x8FFF8F));
        getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
        setTimeout(() => {
            if (getAFK(player) && stats[Ss.RL] != "vip") {
                room.kickPlayer(player.id, "AFK timeout", false)
            }
        }, 30 * 60 * 1000)
        return false;
    } else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] AFK List : ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
            }
        }
        if (cstm == "[PV] LAFK List: ") {
            room.sendChat("[PV] There is no one on the AFK list!", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    } else if (["!me"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[📄] Stats from " + player.name + ": 🎮 Matches played: " + stats[Ss.GA] + ", ✅ Victories: " + stats[Ss.WI] + ", ❌ Defeats: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assistance: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id, 0x73EC59, "bold");
        room.sendAnnouncement("「👓」 This message only you can see, if you want to show your stats, use the command '!showme'!", player.id, 0xFF7900, "bold");
    } else if (["!showme"].includes(message[0].toLowerCase())) {
        var stats;
        localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
        room.sendAnnouncement("[📄] The player " + player.name + " showed your stats! '!showme'!", null, 0xFF7900, "bold")
        room.sendAnnouncement("[📄] Stats from " + player.name + ": 🎮 Matches played: " + stats[Ss.GA] + ", ✅ Victories: " + stats[Ss.WI] + ", ❌ Defeats: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assistance: " + stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null, 0x73EC59, "bold");
    } else if (["!games"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Didn't play enough games", player.id, 0xFF0000);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] 🎮 Matches Played> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!wins"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Didn't play enough games", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] ✅ Victories> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!goats"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key) && JSON.parse(localStorage.getItem(key))[Ss.WI] > 400) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Didn't play enough games", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] ✅ GOATS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!goals"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[📄] Didn't play enough games", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] ⚽️ Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!assists"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Didn't play enough games", player.id);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] 👟 Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } else if (["!cs"].includes(message[0].toLowerCase())) {
        var tableau = [];
        try {
            Object.keys(localStorage).forEach(function(key) {
                if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) {
                    tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]);
                }
            });
        } catch {

        }
        if (tableau.length < 5) {
            room.sendAnnouncement("[PV] Didn't play enough games", player.id, 0x73EC59);
            return false;
        }
        tableau.sort(function(a, b) {
            return b[1] - a[1];
        });
        room.sendAnnouncement("[📄] 🤚 Undefeated matches> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id, 0x73EC59);

        return false;
    } 
    
    else if (["!loginadm"].includes(message[0].toLowerCase())) {
        if (message[1] == adminPassword) {
            room.setPlayerAdmin(player.id, true);
            var stats;
            localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
            if (stats[Ss.RL] != "master") {
                stats[Ss.RL] = "master";
                room.sendAnnouncement(player.name + " Logged in as Administrator!", null, 0xFF7900, 2);
                localStorage.setItem(getAuth(player), JSON.stringify(stats));
            }
        }
    }

    else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
        var cstm = "[PV] List of muteds: ";
        for (var i = 0; i < extendedP.length; i++) {
            if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
                if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
                    room.sendChat(cstm, player.id);
                    cstm = "... ";
                }
                cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
            }
        }
        if (cstm == "[PV] List of muteds: ") {
            room.sendChat("[PV] There is no one on the mutated list!", player.id);
            return false;
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    } else if (["!mute"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            updateTeams();
            var timeOut;
            if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
                if (Number.parseInt(message[1]) > 0) {
                    timeOut = Number.parseInt(message[1]) * 60 * 1000;
                } else {
                    timeOut = 3 * 60 * 1000;
                }
                if (message[2].length > 1 && message[2][0] == "#") {
                    message[2] = message[2].substring(1, message[2].length);
                    if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
                        if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
                            return false;
                        }
                        setTimeout(function(player) {
                            setMute(player, false);
                        }, timeOut, room.getPlayer(Number.parseInt(message[2])));
                        setMute(room.getPlayer(Number.parseInt(message[2])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " was mutated for " + (timeOut / 60000) + " minutes!");
                    }
                }
            } else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
                        if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
                            return false;
                        }
                        setTimeout(function(player) {
                            setMute(player, false);
                        }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
                        setMute(room.getPlayer(Number.parseInt(message[1])), true);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was mutated for 3 minutes!");
                    }
                }
            }
        }

    } else if (["!unmute"].includes(message[0].toLowerCase())) {
        if (player.admin && message.length >= 2) {
            if (message[1] == "all") {
                extendedP.forEach((ePlayer) => {
                    ePlayer[eP.MUTE] = false;
                });
                room.sendChat("All were demutated");
            } else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                setMute(room.getPlayer(Number.parseInt(message[1])), false);
                room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted!");
            } else if (Number.isNaN(Number.parseInt(message[1]))) {
                if (message[1].length > 1 && message[1][0] == "#") {
                    message[1] = message[1].substring(1, message[1].length);
                    if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
                        setMute(room.getPlayer(Number.parseInt(message[1])), false);
                        room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " has been unmuted!");
                    }
                }
            }
        }
    } else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
        if (banList.length == 0) {
            room.sendChat("[PV] There is no one on the banned list!", player.id);
            return false;
        }
        var cstm = "[PV] Banned list: ";
        for (var i = 0; i < banList.length; i++) {
            if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
                room.sendChat(cstm, player.id);
                cstm = "... ";
            }
            cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
        }
        cstm = cstm.substring(0, cstm.length - 2);
        cstm += ".";
        room.sendChat(cstm, player.id);
    } else if (["!clearbans"].includes(message[0].toLowerCase())) {
        if (player.admin) {
            if (message.length == 1) {
                room.clearBans();
                room.sendChat("Bans removed!");
                banList = [];
            }
            if (message.length == 2) {
                if (!Number.isNaN(Number.parseInt(message[1]))) {
                    if (Number.parseInt(message[1]) > 0) {
                        ID = Number.parseInt(message[1]);
                        room.clearBan(ID);
                        if (banList.length != banList.filter((array) => array[1] != ID)) {
                            room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " has been banned from the host!");
                        }
                        setTimeout(() => {
                            banList = banList.filter((array) => array[1] != ID);
                        }, 20);
                    }
                }
            }
        }
    } else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
        room.kickPlayer(player.id, "👋 Until later!", false);
    }
    else if (["!dc", "!disc", "!discord"].includes(message[0].toLowerCase())) {
        room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, 'bold')
        room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, 'bold')
        room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, 'bold');
        room.sendAnnouncement("                                        💬 Discord Link: ➡ https://discord.gg/ ⬅", null, 0xF6FF43, 'bold');
    }
 
    if (xingo.includes(message[0])) {
        room.kickPlayer(player.id, "❌ Racism is not tolerated in this room.", false);
        room.sendAnnouncement(centerText("Player " + player.name + " talked shit"), player.id, Cor.Warn, "italic");
        return false;
    }
    if (xingo.includes(message[1])) {
        room.kickPlayer(player.id, "❌ Racism is not tolerated in this room.", false);
        room.sendAnnouncement(centerText("Player " + player.name + " talked shit"), player.id, Cor.Warn, "italic");
        return false;
    }
    if (xingo.includes(message[2])) {
        room.kickPlayer(player.id, "❌ Racism is not tolerated in this room.", false);
        room.sendAnnouncement(centerText("Player " + player.name + " talked shit"), player.id, Cor.Warn, "italic");
        return false;
    }
    if (xingo.includes(message[3])) {
        room.kickPlayer(player.id, "❌ Racism is not tolerated in this room.", false);
        room.sendAnnouncement(centerText("Player " + player.name + " talked shit"), player.id, Cor.Warn, "italic");
        return false;
    }
    if (xingo.includes(message[4])) {
        room.kickPlayer(player.id, "❌ Racism is not tolerated in this room.", false);
        room.sendAnnouncement(centerText("Player " + player.name + " talked shit"), player.id, Cor.Warn, "italic");
        return false;
    }
    if (xingo.includes(message[5])) {
        room.kickPlayer(player.id, "❌ Racism is not tolerated in this room.", false);
        room.sendAnnouncement(centerText("Player " + player.name + " talked shit"), player.id, Cor.Warn, "italic");
        return false;
    }
    if (regex.includes(message[0])) {
        room.sendAnnouncement("No swearing, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[1])) {
        room.sendAnnouncement("No swearing, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[2])) {
        room.sendAnnouncement("No swearing, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[3])) {
        room.sendAnnouncement("No swearing, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[4])) {
        room.sendAnnouncement("No swearing, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }
    if (regex.includes(message[5])) {
        room.sendAnnouncement("No swearing, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[0])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[1])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[2])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[3])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[4])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[5])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[6])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (link.includes(message[7])) {
        room.sendAnnouncement("You cannot send links here, " + player.name, player.id, Cor.Warn, "italic", 2);
        return false;
    }

    if (message[0][0] == "!") { // the command used in the chat does not appear
        return false;
    }

    if (TeamR.length != 0 && TeamB.length != 0 && inChooseMode) { // to choose the team
        if (player.id == TeamR[0].id || player.id == TeamB[0].id) { // here we care if it is one of the captains choosing
            if (TeamR.length <= TeamB.length && player.id == TeamR[0].id) { // here we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.RED);
                    redCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " chose first from the list!", null, 0x55bae2, "normal");
                    return false;
                } else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    var r = getRandomInt(teamS.length);
                    room.setPlayerTeam(teamS[r].id, Team.RED);
                    redCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " chose a random team", null, 0x55bae2, "normal");
                    return false;
                } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
                    redCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " chose the last one on the list!", null, 0x55bae2, "normal");
                    return false;
                } else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendAnnouncement("[⚠️] Oops! The number you chose is invalid.", player.id, null, 0xfaca29, "normal");
                        return false;
                    } else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
                        room.sendAnnouncement(player.name + " recruited the: " + teamS[Number.parseInt(message[0]) - 1].name + " !", null, 0x55bae2, "normal");
                        return false;
                    }
                }
            }
            if (TeamR.length > TeamB.length && player.id == TeamB[0].id) { // here we care if it's red turn && red cap talking
                if (["top", "auto"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[0].id, Team.BLUE);
                    blueCaptainChoice = "top";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " chose first from the list!", null, 0x55bae2, "normal");
                    return false;
                } else if (["random", "rand"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
                    blueCaptainChoice = "random";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " chose a random team", null, 0x55bae2, "normal");
                    return false;
                } else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
                    room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
                    blueCaptainChoice = "bottom";
                    clearTimeout(timeOutCap);
                    room.sendAnnouncement(player.name + " chose the last one on the list!", null, 0x55bae2, "normal");
                    return false;
                } else if (!Number.isNaN(Number.parseInt(message[0]))) {
                    if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
                        room.sendAnnouncement("[⚠️] Oops! The number you chose is invalid.", player.id, null, 0xfaca29, "normal");
                        return false;
                    } else {
                        room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
                        room.sendAnnouncement(player.name + " recruited the: " + teamS[Number.parseInt(message[0]) - 1].name + "!", null, 0x55bae2, "normal");
                        return false;
                    }
                }
            }
        }
    }

    if (getMute(player)) {
        room.sendChat("You are muted", player.id);
        return false;
    }
    if (slowMode > 0) {
        if (!player.admin) {
            if (!SMSet.has(player.id)) {
                SMSet.add(player.id);
                setTimeout((number) => {
                    SMSet.delete(number);
                }, slowMode * 1000, player.id);
            } else {
                return false;
            }
        }
    }
        if (localStorage.getItem(getAuth(player))) {
            stats = JSON.parse(localStorage.getItem(getAuth(player)));
            var announcement = "";
            var chatColor = "";
            if (stats[Ss.GL] > 500) {
                announcement += "[👑] - [⚽: " + stats[Ss.GL] +"]  ·「The Legend of x3」"
                chatColor = "0xf77104"
            } else if (stats[Ss.GL] > 200) {
                announcement += "[💎] - [⚽: " + stats[Ss.GL] +"]  ·「Diamond IV」"
                chatColor = "0x7cd3fa"
            } else if (stats[Ss.GL] > 150) {
                announcement += "[💎] - [⚽: " + stats[Ss.GL] +"]  ·「Diamond III」"
                chatColor = "0x7cd3fa"
            } else if (stats[Ss.GL] > 120) {
                announcement += "[💎] - [⚽: " + stats[Ss.GL] +"]  ·「Diamond II」"
                chatColor = "0x7cd3fa"
            } else if (stats[Ss.GL] > 80) {
                announcement += "[💎] - [⚽: " + stats[Ss.GL] +"]  ·「Diamond I」"
                chatColor = "0x7cd3fa"
            } else if (stats[Ss.GL] > 60) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Platinum III」"
                chatColor = "0x62AEE3"
            } else if (stats[Ss.GL] > 55) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Platinum II」"
                chatColor = "0x62AEE3"
            } else if (stats[Ss.GL] > 50) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Platinum I」"
                chatColor = "0x62AEE3"
            } else if (stats[Ss.GL] > 40) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Gold III」"
                chatColor = "0xEAC274"    
            } else if (stats[Ss.GL] > 35) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Gold II」"
                chatColor = "0xEAC274"
            } else if (stats[Ss.GL] > 30) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Gold I」"
                chatColor = "0xEAC274"
            } else if (stats[Ss.GL] > 20) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Silver III」"
                chatColor = "0xA2A2A2"
            } else if (stats[Ss.GL] > 15) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Silver II」"
                chatColor = "0xA2A2A2"
            } else if (stats[Ss.GL] > 10) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Silver I」"
                chatColor = "0xA2A2A2"
            } else if (stats[Ss.GL] > 8) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Bronze III」"
                chatColor = "0xbc5e00"
            } else if (stats[Ss.GL] > 5) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Bronze II」"
                chatColor = "0xbc5e00"
            } else if (stats[Ss.GL] > 2) {
                announcement += "[⚽: " + stats[Ss.GL] +"]  ·「Bronze I」"
                chatColor = "0xbc5e00"
            } else {
                announcement += "「No rank」"
                chatColor = "0xEBEBEB"
            }
            console.log(announcement);
            console.log(chatColor);
            console.log(originalMessage)
            announcement += player.name + ": " + originalMessage;
            room.sendAnnouncement(announcement, null, chatColor);
            return false;
        }
     else {
        room.sendAnnouncement(`❌ ${player.name}: ${originalMessage}`, null, 0xABAEA7);
        return false;
    }
}

room.onPlayerActivity = function(player) {
    setActivity(player, 0);
}

room.onPlayerBallKick = function(player) {
    if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
        !activePlay ? activePlay = true : null;
        lastTeamTouched = player.team;
        lastPlayersTouched[1] = lastPlayersTouched[0];
        lastPlayersTouched[0] = player;
    }
}

/* GAME MANAGEMENT */

room.onGameStart = function(byPlayer) {
    game = new Game(Date.now(), room.getScores(), []);
    countAFK = true;
    activePlay = false;
    goldenGoal = false;
    endGameVariable = false;
    lastPlayersTouched = [null, null];
    Rposs = 0;
    Bposs = 0;
    GKList = [];
    allReds = [];
    allBlues = [];
    room.sendAnnouncement(centerText("🥅 MATCH STARTING 🥅"), null, Cor.White, "bold");
    room.sendAnnouncement(centerText("Want to change your uniform? Type '!uni'"), null, 0x2EF55D, "bold");
    room.sendAnnouncement(centerText("For exclusive uniforms, use '!uni2'"), null, 0xFFAE00, "bold");
    room.sendAnnouncement(centerText("[💬] Use 't' before the message to chat with your team!"), null, 0x5EE7FF);
    if (TeamR.length == maxTeamSize && TeamB.length == maxTeamSize) {
        for (var i = 0; i < maxTeamSize; i++) {
            allReds.push(TeamR[i]);
            allBlues.push(TeamB[i]);
        }
    }
    for (var i = 0; i < extendedP.length; i++) {
        extendedP[i][eP.GK] = 0;
        extendedP[i][eP.ACT] = 0;
        room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
    }
    deactivateChooseMode();
}

room.onGameStop = function(byPlayer) {
    if (byPlayer.id == 0 && endGameVariable) {
        updateTeams();
        if (inChooseMode) {
            if (players.length == 2 * maxTeamSize) {
                inChooseMode = false;
                resetBtn();
                for (var i = 0; i < maxTeamSize; i++) {
                    setTimeout(() => {
                        randomBtn();
                    }, 400 * i);
                }
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                } else if (lastWinner == Team.BLUE) {
                    redToSpecBtn();
                    blueToRedBtn();
                } else {
                    resetBtn();
                }
                setTimeout(() => {
                    topBtn();
                }, 500);
            }
        } else {
            if (players.length == 2) {
                if (lastWinner == Team.BLUE) {
                    room.setPlayerTeam(TeamB[0].id, Team.RED);
                    room.setPlayerTeam(TeamR[0].id, Team.BLUE);
                }
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                } else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => {
                    topBtn();
                }, 200);
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 4) {
                resetBtn();
                setTimeout(() => {
                    randomBtn();
                    setTimeout(() => {
                        randomBtn();
                    }, 500);
                }, 500);
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            } else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
                if (lastWinner == Team.RED) {
                    blueToSpecBtn();
                } else {
                    redToSpecBtn();
                    blueToRedBtn();
                }
                setTimeout(() => {
                    topBtn();
                }, 200);
                activateChooseMode();
            } else if (players.length == 6) {
                resetBtn();
                setTimeout(() => {
                    randomBtn();
                    setTimeout(() => {
                        randomBtn();
                        setTimeout(() => {
                            randomBtn();
                        }, 500);
                    }, 500);
                }, 500);
                setTimeout(() => {
                    room.startGame();
                }, 2000);
            }
        }
    }
}

room.onGamePause = function(byPlayer) {}

room.onGameUnpause = function(byPlayer) {
    if (TeamR.length == 4 && TeamB.length == 4 && inChooseMode || (TeamR.length == TeamB.length && teamS.length < 2 && inChooseMode)) {
        deactivateChooseMode();
    }
}

room.onTeamGoal = function(team) {
    teamgoaler = team;
    let assistencia = "";
    let goleador = "";
    let goalMaker = lastPlayersTouched[0].id;
    activePlay = false;
    countAFK = false;
    const scores = room.getScores();
    game.scores = scores;
    if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			var frasegol = frasesGols[(Math.random() * frasesGols.length) | 0]
			var fraseasis = frasesasis[(Math.random() * frasesasis.length) | 0]
		//	room.sendAnnouncement("⚽👥 " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + " | Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : 0x5ec0f1),'bold');
            room.sendAnnouncement(centerText("PLAY THE MUSIC, IT’S GOOOOOL!!!"), null, Cor.Verde, "bold");
            room.sendAnnouncement(centerText("         ⚽ Goal from " + lastPlayersTouched[0].name + " ⚽"), null, Cor.White, "bold");
            room.sendAnnouncement(centerText("👟 Assistance: " + lastPlayersTouched[1].name + " 👟"), null, Cor.White, "bold");
            room.sendAnnouncement(centerText("Kick speed: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, Cor.White, "normal");
            game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
			}
			else {
				var frasegol = frasesGols[(Math.random() * frasesGols.length) | 0]
			///	room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + "! | Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : 0x5ec0f1),'bold');
                room.sendAnnouncement(centerText("PLAY THE MUSIC, IT’S GOOOOOL!!!"), null, Cor.Verde, "bold");
                room.sendAnnouncement(centerText("         ⚽ Goal from " + lastPlayersTouched[0].name + " ⚽"), null, Cor.White, "bold");
                room.sendAnnouncement(centerText("Kick speed: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, Cor.White, "normal");
                game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
			}
			setTimeout(function () {
				room.setPlayerAvatar(goalMaker, "🎯")
				setTimeout(function () {
					room.setPlayerAvatar(goalMaker, "⚽")
					setTimeout(function () {
						room.setPlayerAvatar(goalMaker, null)
					}, 3000);
				}, 1200);
			}, 1);
		
			if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
				let goalAssist = lastPlayersTouched[1].id;
				assistencia = lastPlayersTouched[1];
				setTimeout(function () {
					room.setPlayerAvatar(goalAssist, "🤝")
					setTimeout(function () {
						room.setPlayerAvatar(goalAssist, "👟")
						setTimeout(function () {
							room.setPlayerAvatar(goalAssist, null)
						}, 2500);
					}, 1000);
				}, 1);
			}

		}
		else {
			var fraseautogol = frasesautogol[(Math.random() * frasesautogol.length) | 0]
		//	room.sendAnnouncement("🤡 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + "! | Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : 0x5ec0f1),'bold');
            room.sendAnnouncement(centerText("🤦‍♂️ IT'S GOOOOOL AGAINST!! 🤦‍♂️"), null, Cor.Yellow, "bold");
            room.sendAnnouncement(centerText("🤡 Goal from " + lastPlayersTouched[0].name + " 🤡"), null, Cor.White, "bold");
            room.sendAnnouncement(centerText("Kick speed: " + ballSpeed.toPrecision(4).toString() + " km/h"), null, Cor.White, "normal");
			game.goals.push(new Goal(scores.time, team, null, null));
			setTimeout(function () {
				room.setPlayerAvatar(goalMaker, "🤦‍♂️")
				setTimeout(function () {
					room.setPlayerAvatar(goalMaker, "🤡")
					setTimeout(function () {
						room.setPlayerAvatar(goalMaker, null)
					}, 3000);
				}, 1000);
			}, 1);

        golcontra(lastPlayersTouched[0]);
		}
		
		if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
			endGame(team);
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
	}

room.onPositionsReset = function() {
    countAFK = true;
    lastPlayersTouched = [null, null];
}

/* SEVERAL */

room.onRoomLink = function(url) {}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
    if (getMute(changedPlayer) && changedPlayer.admin) {
        room.sendChat(changedPlayer.name + " was unmuted.");
        setMute(changedPlayer, false);
    }
    if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
        room.sendChat("You are not allowed to appoint a player as an administrator!", byPlayer.id);
        room.setPlayerAdmin(changedPlayer.id, false);
    }
}

room.onStadiumChange = function(newStadiumName, byPlayer) {}

room.onGameTick = function() {
    checkTime();
    getLastTouchOfTheBall();
    getStats();
    handleInactivity();
}

Botdivulga = setInterval(function() {
    room.sendAnnouncement("Do you want to create a room, but don't know how to program? We have the solution ☝️🤓", null, 0x5EE7FF, "bold");
    room.sendAnnouncement("If you like it, consider leaving a ⭐ in our repository\n➡ https://github.com/theosanct0s/haxball-bot", null, 0xFFFFFF, "bold");
}, BotdivulgaTime);

msg1 = setInterval(function() {
    room.sendAnnouncement("Here we just play for fun, if you want to be competitive, go to another room!", null, 0xff8a4a, "normal");
}, msg1Time);
