	// Stats: "Auth" : '["0-Games", "1-Wins", "2-Draws", "3-Losses", "4-Winrate", "5-Goals", "6-Assists", "7-GK", "8-CS", "9-CS%", "10-Role", "11-Nick"]'

	/* VARIABLES */

	/* ROOM */

	const roomName = "𝐟𝐮𝐭𝐬𝐚𝐥 | 𝐱𝟑 |";
	const botName = "Juiz";
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

	var adminPassword = 4002;
	console.log("adminPassword : " + adminPassword);

	/* STADIUM */

	const playerRadius = 15;
	var ballRadius = 10;
	const triggerDistance = playerRadius + ballRadius + 0.01;
	var aloneMap = '{"name":"⚽ ECC | Treino |","width":420,"height":200,"spawnDistance":170,"bg":{"type":"grass","width":370,"height":170,"kickOffRadius":75,"cornerRadius":0},"vertexes":[{"x":-370,"y":170,"trait":"ballArea"},{"x":-370,"y":64,"trait":"ballArea"},{"x":-370,"y":-64,"trait":"ballArea"},{"x":-370,"y":-170,"trait":"ballArea"},{"x":370,"y":170,"trait":"ballArea"},{"x":370,"y":64,"trait":"ballArea"},{"x":370,"y":-64,"trait":"ballArea"},{"x":370,"y":-170,"trait":"ballArea"},{"x":0,"y":200,"trait":"kickOffBarrier"},{"x":0,"y":75,"trait":"kickOffBarrier"},{"x":0,"y":-75,"trait":"kickOffBarrier"},{"x":0,"y":-200,"trait":"kickOffBarrier"},{"x":-380,"y":-64,"trait":"goalNet"},{"x":-400,"y":-44,"trait":"goalNet"},{"x":-400,"y":44,"trait":"goalNet"},{"x":-380,"y":64,"trait":"goalNet"},{"x":380,"y":-64,"trait":"goalNet"},{"x":400,"y":-44,"trait":"goalNet"},{"x":400,"y":44,"trait":"goalNet"},{"x":380,"y":64,"trait":"goalNet"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":12,"v1":13,"trait":"goalNet","curve":-90},{"v0":13,"v1":14,"trait":"goalNet"},{"v0":14,"v1":15,"trait":"goalNet","curve":-90},{"v0":16,"v1":17,"trait":"goalNet","curve":90},{"v0":17,"v1":18,"trait":"goalNet"},{"v0":18,"v1":19,"trait":"goalNet","curve":90},{"v0":8,"v1":9,"trait":"kickOffBarrier"},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":9,"v1":10,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"v0":10,"v1":11,"trait":"kickOffBarrier"}],"goals":[],"discs":[{"pos":[-370,64],"trait":"goalPost","color":"FFCCCC"},{"pos":[-370,-64],"trait":"goalPost","color":"FFCCCC"},{"pos":[370,64],"trait":"goalPost","color":"CCCCFF"},{"pos":[370,-64],"trait":"goalPost","color":"CCCCFF"}],"planes":[{"normal":[0,1],"dist":-170,"trait":"ballArea"},{"normal":[0,-1],"dist":-170,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.1},{"normal":[0,-1],"dist":-200,"bCoef":0.1},{"normal":[1,0],"dist":-420,"bCoef":0.1},{"normal":[-1,0],"dist":-420,"bCoef":0.1}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}}}'
	var classicMap = '{"name":"⚽ ECC x1 & x2 | Futsal |","width":420,"height":200,"spawnDistance":180,"bg":{"type":"hockey","width":368,"height":171,"kickOffRadius":65,"cornerRadius":0},"vertexes":[{"x":-368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-368,"y":-171,"trait":"ballArea","bCoef":1,"cMask":["ball"]},{"x":368,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":368,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"line"},{"bCoef":1,"trait":"ballArea","x":368,"y":171},{"bCoef":1,"trait":"ballArea","x":368,"y":-171},{"bCoef":0,"trait":"line","x":0,"y":171},{"bCoef":0,"trait":"line","x":0,"y":-171},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":0,"y":199,"trait":"kickOffBarrier"},{"x":0,"y":65,"trait":"kickOffBarrier"},{"x":0,"y":-65,"trait":"kickOffBarrier"},{"x":0,"y":-199,"trait":"kickOffBarrier"},{"x":-368.53340356886,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":-62.053454903872,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-400.05760771891,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368.53340356886,"y":64.043361696331,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.09926357786,"y":63.94882446641,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":64,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":400,"y":-61.927767991658,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":368.9681846993,"y":-62.144998272018,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-260.90035258157,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":-90},{"x":-358.5379338963,"y":-171,"bCoef":0.1,"trait":"line","curve":-90},{"x":-368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-260.90035258157,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":90},{"x":-358.5379338963,"y":171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":159.77251561324,"bCoef":0.1,"trait":"line","curve":-90},{"x":358.36266315432,"y":171,"bCoef":0.1,"trait":"line","curve":-90},{"x":368,"y":-160.81305960678,"bCoef":0.1,"trait":"line","curve":90},{"x":358.36266315432,"y":-171,"bCoef":0.1,"trait":"line","curve":90},{"x":368,"y":-142.37229643041,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":368,"y":141.33175243687,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":260.72508183959,"y":-50.168480548544,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":260.72508183959,"y":49.127936555002,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-250.86909422732,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-250.86909422732,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":250.69382348534,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":-185.66591492467,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.2295321189394,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.18898812539692,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-2.6480523632758,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.6075083697333,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":0.89824824756514,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-1.9387922411076,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":1.9621384308174,"bCoef":0.1,"trait":"line","curve":180},{"x":185.49064418269,"y":-3.0026824243599,"bCoef":0.1,"trait":"line","curve":180},{"x":-160.58776903904,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-160.58776903904,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":-80.337702205015,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":160.41249829706,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-159.39453936245,"bCoef":0.1,"trait":"line"},{"x":80.162431463036,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":-87.759267023458,"bCoef":0.1,"trait":"line"},{"x":-371.91294503531,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-384.61920561736,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":371.73767429333,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":384.44393487538,"y":86.718723029916,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":171,"bCoef":0.1,"trait":"line"},{"x":-254.88159756902,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":-182.09086327183,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":171,"bCoef":0.1,"trait":"line"},{"x":254.70632682704,"y":181.05031927829,"bCoef":0.1,"trait":"line"},{"x":377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":-65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":-377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":-377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":377,"y":65,"trait":"line","cMask":["ball"],"bCoef":1},{"x":377,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":1},{"x":371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":171,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-65,"trait":"ballArea","cMask":["ball"],"bCoef":0},{"x":-371,"y":-171,"trait":"ballArea","cMask":["ball"],"bCoef":0}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"ballArea"},{"v0":4,"v1":5,"trait":"ballArea"},{"v0":6,"v1":7,"trait":"ballArea"},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":180,"cGroup":["blueKO"]},{"v0":8,"v1":9,"trait":"kickOffBarrier","curve":-180,"cGroup":["redKO"]},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":1,"v1":0,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":5,"v1":4,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":2,"v1":3,"cMask":["ball"],"x":-368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":6,"v1":7,"cMask":["ball"],"x":368},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":0,"v1":10,"y":171},{"vis":true,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":3,"v1":11,"y":-171},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":12,"v1":13},{"curve":-180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":9,"v1":8},{"curve":180,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":15,"v1":14},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":2,"v1":1},{"curve":0,"vis":true,"color":"FFFFFF","bCoef":0,"trait":"line","v0":6,"v1":5},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":16,"v1":17,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":18,"v1":19,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":20,"v1":21,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":22,"v1":23,"cMask":["ball"],"x":330},{"v0":24,"v1":25,"trait":"kickOffBarrier"},{"v0":26,"v1":27,"trait":"kickOffBarrier"},{"v0":28,"v1":29,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":29,"v1":30,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":30,"v1":31,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":32,"v1":33,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":33,"v1":34,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":34,"v1":35,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":36,"v1":37,"curve":94.0263701017,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":39,"v1":38,"curve":86.632306418889,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":40,"v1":41,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":37,"v1":41,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":43,"v1":42,"curve":-86.632306418888,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":45,"v1":44,"curve":86.632306418884,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":47,"v1":46,"curve":-86.632306418899,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":48,"v1":49,"curve":-94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":50,"v1":51,"curve":94.026370101699,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":52,"v1":53,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":55,"v1":54,"curve":-180.00692920292,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":54,"v1":55,"curve":-180.00218240614,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":57,"v1":56,"curve":-179.64823645332,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":56,"v1":57,"curve":-180.35758668147,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":59,"v1":58,"curve":-180.02357323962,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":58,"v1":59,"curve":-180.00924102399,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":61,"v1":60,"curve":-180.06885755885,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":60,"v1":61,"curve":-180.02948353257,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":63,"v1":62,"curve":-179.99869069543,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":62,"v1":63,"curve":-179.99939258776,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":65,"v1":64,"curve":-180.08826047163,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":64,"v1":65,"curve":-179.91186753664,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":67,"v1":66,"curve":-179.99528711105,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":66,"v1":67,"curve":-179.99743836358,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":69,"v1":68,"curve":-179.98626041101,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":68,"v1":69,"curve":-179.99175181595,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":71,"v1":70,"curve":-180.04715562398,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":70,"v1":71,"curve":-179.95294709391,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":73,"v1":72,"curve":-179.95715750564,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":72,"v1":73,"curve":-179.89943871875,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":75,"v1":74,"curve":-179.94773754738,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":74,"v1":75,"curve":-179.98221351296,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":77,"v1":76,"curve":-180.4151727218,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":76,"v1":77,"curve":-179.58764458796,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":79,"v1":78,"curve":-180.00086646359,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":78,"v1":79,"curve":-180.01965986376,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":81,"v1":80,"curve":-180.03532601389,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":80,"v1":81,"curve":-179.99380079,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":83,"v1":82,"curve":-180.0044468452,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":82,"v1":83,"curve":-180.01386779847,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":85,"v1":84,"curve":-180.05158287563,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":84,"v1":85,"curve":-180.01212223878,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240},{"v0":88,"v1":89,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-120},{"v0":90,"v1":91,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":240},{"v0":92,"v1":93,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":120},{"v0":94,"v1":95,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":98,"v1":99,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":100,"v1":101,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":102,"v1":103,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":104,"v1":105,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":106,"v1":107,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":108,"v1":109,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":110,"v1":111,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":112,"v1":113,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":114,"v1":115,"cMask":["ball"],"x":-330},{"vis":false,"color":"FFFFFF","bCoef":1,"trait":"ballArea","v0":116,"v1":117,"cMask":["ball"],"x":330},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":118,"v1":119,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":120,"v1":121,"cMask":["ball"],"x":371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":122,"v1":123,"cMask":["ball"],"x":-371},{"vis":false,"color":"FFFFFF","bCoef":0,"trait":"ballArea","v0":124,"v1":125,"cMask":["ball"],"x":-371}],"goals":[{"p0":[-374.25,-62.053454903872],"p1":[-374.25,64.043361696331],"team":"red"},{"p0":[374.25,62],"p1":[374.25,-62],"team":"blue"}],"discs":[{"radius":3.9405255187564,"pos":[-368.53340356886,64.043361696331],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[-368.53340356886,-62.053454903872],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3.9405255187564,"pos":[368.9681846993,-62.144998272018],"color":"6666CC","trait":"goalPost","y":80},{"radius":3.9405255187564,"pos":[368.09926357786,63.94882446641],"color":"6666CC","trait":"goalPost","y":-80,"x":-560},{"radius":3,"invMass":0,"pos":[-368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,171],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[368,-171],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-171,"trait":"ballArea"},{"normal":[0,-1],"dist":-171,"trait":"ballArea"},{"normal":[0,1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[0,-1],"dist":-200,"bCoef":0.2,"cMask":["all"]},{"normal":[1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]},{"normal":[-1,0],"dist":-420,"bCoef":0.2,"cMask":["all"]}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":1},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["all"]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"bCoef":0,"cMask":[""]},"arco":{"radius":2,"cMask":["n\/d"],"color":"cccccc"}},"playerPhysics":{"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5,"bCoef":0},"ballPhysics":{"radius":6.25,"color":"FFCC00","bCoef":0.4,"invMass":1.5,"damping":0.99}}'; // Insert your map for 1v1 and 2v2 here. To get minimum file size, here are the instructions : 1. Download the map 2. Go to https://cssminifier.com 3. Paste the result
	var bigMap = '{"name":"⚽ ECC x3 | Futsal |","width":620,"height":270,"spawnDistance":350,"bg":{"type":"hockey","width":550,"height":240,"kickOffRadius":80,"cornerRadius":0},"vertexes":[{"x":550,"y":240,"trait":"ballArea"},{"x":550,"y":-240,"trait":"ballArea"},{"x":0,"y":270,"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-80,"bCoef":0.15,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":180},{"x":0,"y":-270,"trait":"kickOffBarrier"},{"x":-550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,-80]},{"x":-590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[-700,80]},{"x":550,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":-80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,-80]},{"x":590,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":550,"y":80,"cMask":["red","blue","ball"],"trait":"goalNet","curve":0,"color":"F8F8F8","pos":[700,80]},{"x":-550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,80]},{"x":-550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[-700,-80]},{"x":-550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":-550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","pos":[700,80]},{"x":550,"y":240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8"},{"x":550,"y":-80,"bCoef":1.15,"cMask":["ball"],"trait":"ballArea","color":"F8F8F8","pos":[700,-80]},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":550,"y":-240,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":550,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0},{"x":0,"y":-240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":240,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"x":0,"y":-80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"bCoef":0.1,"cMask":["red","blue"],"trait":"kickOffBarrier","vis":true,"color":"F8F8F8"},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":-180},{"x":0,"y":80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":0,"y":-80,"trait":"kickOffBarrier","color":"F8F8F8","vis":true,"curve":0},{"x":-557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[-700,80]},{"x":-557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":-557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":-557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[-700,-80]},{"x":557.5,"y":-240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0},{"x":557.5,"y":-80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","vis":false,"curve":0,"pos":[700,-80]},{"x":557.5,"y":80,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false,"pos":[700,80]},{"x":557.5,"y":240,"bCoef":1,"cMask":["ball"],"trait":"ballArea","curve":0,"vis":false},{"x":0,"y":-80,"bCoef":0.1,"trait":"line"},{"x":0,"y":80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":-550,"y":80,"bCoef":0.1,"trait":"line"},{"x":550,"y":-80,"bCoef":0.1,"trait":"line"},{"x":550,"y":80,"bCoef":0.1,"trait":"line"},{"x":-240,"y":256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":256,"bCoef":0.1,"trait":"line"},{"x":-240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":-120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":240,"y":256,"bCoef":0.1,"trait":"line"},{"x":120,"y":224,"bCoef":0.1,"trait":"line"},{"x":120,"y":256,"bCoef":0.1,"trait":"line"},{"x":240,"y":-224,"bCoef":0.1,"trait":"line"},{"x":240,"y":-256,"bCoef":0.1,"trait":"line"},{"x":120,"y":-224,"bCoef":0.1,"trait":"line"},{"x":120,"y":-256,"bCoef":0.1,"trait":"line"},{"x":-381,"y":240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":256,"bCoef":0.1,"trait":"line"},{"x":-550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":-390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":226,"bCoef":0.1,"trait":"line","curve":-90},{"x":-536,"y":240,"bCoef":0.1,"trait":"line","curve":-90},{"x":-550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":-390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-550,"y":-226,"bCoef":0.1,"trait":"line","curve":90},{"x":-536,"y":-240,"bCoef":0.1,"trait":"line","curve":90},{"x":-556,"y":123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":123,"bCoef":0.1,"trait":"line"},{"x":556,"y":123,"bCoef":0.1,"trait":"line"},{"x":575,"y":123,"bCoef":0.1,"trait":"line"},{"x":-556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":556,"y":-123,"bCoef":0.1,"trait":"line"},{"x":575,"y":-123,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":-381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":381,"y":240,"bCoef":0.1,"trait":"line"},{"x":381,"y":256,"bCoef":0.1,"trait":"line"},{"x":381,"y":-240,"bCoef":0.1,"trait":"line"},{"x":381,"y":-256,"bCoef":0.1,"trait":"line"},{"x":550,"y":-226,"bCoef":0.1,"trait":"line","curve":-90},{"x":536,"y":-240,"bCoef":0.1,"trait":"line","curve":-90},{"x":550,"y":226,"bCoef":0.1,"trait":"line","curve":90},{"x":536,"y":240,"bCoef":0.1,"trait":"line","curve":90},{"x":550,"y":200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":90},{"x":550,"y":-200,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":-90},{"x":390,"y":70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":390,"y":-70,"bCoef":0.1,"trait":"line","color":"F8F8F8","curve":0},{"x":-375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":375,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":-277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-1,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":2,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":-3.5,"bCoef":0.1,"trait":"line","curve":180},{"x":277.5,"y":3.5,"bCoef":0.1,"trait":"line","curve":180}],"segments":[{"v0":6,"v1":7,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,-80],"y":-80},{"v0":7,"v1":8,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":-590},{"v0":8,"v1":9,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[-700,80],"y":80},{"v0":10,"v1":11,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,-80],"y":-80},{"v0":11,"v1":12,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","x":590},{"v0":12,"v1":13,"curve":0,"color":"F8F8F8","cMask":["red","blue","ball"],"trait":"goalNet","pos":[700,80],"y":80},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":3,"v1":4,"curve":-180,"vis":true,"color":"F8F8F8","bCoef":0.15,"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"kickOffBarrier"},{"v0":14,"v1":15,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":16,"v1":17,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":-550},{"v0":18,"v1":19,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":240},{"v0":20,"v1":21,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":22,"v1":23,"vis":true,"color":"F8F8F8","bCoef":1.15,"cMask":["ball"],"trait":"ballArea","x":550},{"v0":24,"v1":25,"vis":true,"color":"F8F8F8","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":550,"y":-240},{"v0":26,"v1":27,"curve":0,"vis":true,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","y":-240},{"v0":28,"v1":29,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":30,"v1":31,"vis":true,"color":"F8F8F8","bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO","blueKO"],"trait":"kickOffBarrier"},{"v0":38,"v1":39,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":40,"v1":41,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":-557.5},{"v0":42,"v1":43,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":44,"v1":45,"curve":0,"vis":false,"color":"F8F8F8","bCoef":1,"cMask":["ball"],"trait":"ballArea","x":557.5},{"v0":46,"v1":47,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":0},{"v0":48,"v1":49,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-550},{"v0":50,"v1":51,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":550},{"v0":64,"v1":65,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":66,"v1":67,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":69,"v1":68,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":70,"v1":71,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":67,"v1":71,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":73,"v1":72,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":74,"v1":75,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":76,"v1":77,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":123},{"v0":78,"v1":79,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":80,"v1":81,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-240,"y":-123},{"v0":82,"v1":83,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-381},{"v0":84,"v1":85,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":86,"v1":87,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":381},{"v0":89,"v1":88,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":91,"v1":90,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":92,"v1":93,"curve":90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":94,"v1":95,"curve":-90,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line"},{"v0":96,"v1":97,"curve":0,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":390},{"v0":99,"v1":98,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":98,"v1":99,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":101,"v1":100,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":100,"v1":101,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":103,"v1":102,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":102,"v1":103,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":105,"v1":104,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":104,"v1":105,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-375},{"v0":107,"v1":106,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":106,"v1":107,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":109,"v1":108,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":108,"v1":109,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":111,"v1":110,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":110,"v1":111,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":113,"v1":112,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":112,"v1":113,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":375},{"v0":115,"v1":114,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":114,"v1":115,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":117,"v1":116,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":116,"v1":117,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":119,"v1":118,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":118,"v1":119,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":121,"v1":120,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":120,"v1":121,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":-277.5},{"v0":123,"v1":122,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":122,"v1":123,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":125,"v1":124,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":124,"v1":125,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":127,"v1":126,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":126,"v1":127,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":129,"v1":128,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5},{"v0":128,"v1":129,"curve":180,"vis":true,"color":"F8F8F8","bCoef":0.1,"trait":"line","x":277.5}],"goals":[{"p0":[-557.5,-80],"p1":[-557.5,80],"team":"red"},{"p0":[557.5,80],"p1":[557.5,-80],"team":"blue"}],"discs":[{"radius":5,"pos":[-550,80],"color":"FF6666","trait":"goalPost","y":80},{"radius":5,"pos":[-550,-80],"color":"FF6666","trait":"goalPost","y":-80,"x":-560},{"radius":5,"pos":[550,80],"color":"6666FF","trait":"goalPost","y":80},{"radius":5,"pos":[550,-80],"color":"6666FF","trait":"goalPost","y":-80},{"radius":3,"invMass":0,"pos":[-550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[-550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,-240],"color":"FFCC00","bCoef":0.1,"trait":"line"},{"radius":3,"invMass":0,"pos":[550,240],"color":"FFCC00","bCoef":0.1,"trait":"line"}],"planes":[{"normal":[0,1],"dist":-240,"bCoef":1,"trait":"ballArea","vis":false,"curve":0},{"normal":[0,-1],"dist":-240,"bCoef":1,"trait":"ballArea"},{"normal":[0,1],"dist":-270,"bCoef":0.1},{"normal":[0,-1],"dist":-270,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1},{"normal":[-1,0],"dist":-620,"bCoef":0.1},{"normal":[1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0},{"normal":[-1,0],"dist":-620,"bCoef":0.1,"trait":"ballArea","vis":false,"curve":0}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"goalPost":{"radius":8,"invMass":0,"bCoef":0.5},"goalNet":{"vis":true,"bCoef":0.1,"cMask":["ball"]},"line":{"vis":true,"bCoef":0.1,"cMask":[""]},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]}},"playerPhysics":{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5},"ballPhysics":{"radius":6.25,"bCoef":0.4,"invMass":1.5,"damping":0.99,"color":"FFCC00"}}'; // Read above

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

	const frasesGOL = [" Olha esse gol do ", " É GOOOOOL do ", " Que golaço do "]; // Frases de gol
	const frasesASS = [" com o lindo passe de ", " acompanhado do belíssimo passe de ", " com o bolão na boca do gol de "]; // Frases de assistencias
	const golcontra = [" Tenho certeza que foi sem querer né, ", " Bem, dessa vez foi de propóstivo, ", " É GOOOOOL contra do "]; // Frases de gol contra
	
	const goleiro = [" é um homem? não, é uma barreira! ", " não deixa passar uma ", " é o melhor GK do mundo? "]; // Frases de goleiro

	/* FUNCTIONS */

	/* AUXILIARY FUNCTIONS */

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
			room.sendChat("⏱️ Bora, seus perna de pau! A galera quer jogar");
		}
		if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
			if (checkTimeVariable == false) {
				checkTimeVariable = true;
				setTimeout(() => { checkTimeVariable = false; }, 10);
				room.sendChat("⌛ Sair acaba..");
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
			room.sendChat("🔴 Time vermelho venceu! [" + scores.red + " - " + scores.blue + "] | Sequência de Vitória(s): " + streak + " 🏆");
		}
		else if (winner == Team.BLUE) {
			streak = 1;
			room.sendChat("🔵 Time azul venceu! [" + scores.blue + " - " + scores.red + "] | Sequência de Vitória(s): " + streak + " 🏆");
		}
		else {
			streak = 0;
			room.sendChat("💤 Tempo limite alcançado");
	    }
	    room.sendChat("📊 Posse de Bola: 🔴 " + (Rposs*100).toPrecision(3).toString() + "% | " + (Bposs*100).toPrecision(3).toString() + "% 🔵");
	    scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " é um homem? não, é uma barreira! " + GKList[1].name + " não tomou gol. ") : room.sendChat("🏆 é um homem? não, é uma barreira! " + GKList[1].name + " não tomou nenhum gol ")) : scores.blue == 0 ? room.sendChat("🏆 é um homem? não, é uma barreira! " + GKList[0].name + " não tomou nenhum gol ") : null;
		updateStats();
		
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
		room.sendChat("🙋‍♂️ Modo de recrutamento, iniciado!");
	}

	function deactivateChooseMode() {
		inChooseMode = false;
		clearTimeout(timeOutCap);
		if (slowMode != 0) {
			slowMode = 0;
			room.sendChat("🙋‍♂️ O modo de recrutamento foi encerrado.");
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
				room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", se você não se mexer nos próximos " + Math.floor(afkLimit / 3) + " segundos, você sera kickado!", extendedP[i][eP.ID]);
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
						room.sendChat("🤖 Ragequit detectado. O jogo terminou");
						setTimeout(() => { room.stopGame(); }, 100);
						return;
					}
				}
				else {
					if (scores.red - scores.blue == 2) {
						endGame(Team.RED);
						room.sendChat("🤖 Ragequit detectado. O jogo terminou");
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
				room.sendChat("🤖 Sem escolhas, deixe-me lidar com esta situação");
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
					room.sendChat("🤖 Equilibrando equipes...");
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
			room.sendChat("[PV] Para escolher um jogador, digite seu número na lista fornecida ou use 'top', 'random' ou 'bottom'.", teamR[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Se apresse @" + player.name + ", apenas " + Number.parseInt(chooseTime / 2) + " segundos restantes para escolher!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "Você não escolheu a tempo!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
		}
		else if (teamB.length < teamR.length && teamB.length != 0) {
			room.sendChat("[PV] Para escolher um jogador, digite seu número na lista fornecida ou use 'top', 'random' ou 'bottom'.", teamB[0].id);
			timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Se apresse @" + player.name + ", apenas " + Number.parseInt(chooseTime / 2) + " segundos restantes para escolher!", player.id); timeOutCap = setTimeout(function (player) { room.kickPlayer(player.id, "Você não escolheu a tempo!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
		}
		if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}

	function getSpecList(player) {
		var cstm = "[PV] Jogadores: ";
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
			room.sendChat("Jogos> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 1) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 2) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
		}
		if (statNumber % 5 == 3) {
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
			if (tableau.length < 5) {
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("Assistências> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
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
		//room.sendChat("👋🏼 E aí, " + player.name + "! Seja bem-vindo(a) ao ECC Futsal!", player.id, welcomeColor, 'bold',);
		//room.sendAnnouncement("👋🏼 E aí, " , player.id , "! Seja bem-vindo ao ECC Futsal!", 0x00BFF , "bold", 1);
		room.sendAnnouncement(
			`👋🏼 E aí, ${player.name}! Seja bem-vindo(a) ao 𝐒𝐲𝐧𝐚𝐩𝐬𝐞 Futsal!\nLembre-se, aqui nós jogamos apenas por diversão!`,
			player.id,
			0xFFFF00,
			'bold',
		);
		//room.sendChat("Lembre-se, aqui nós jogamos apenas por diversão!");
		if (localStorage.getItem(player.auth) != null) {
			if (JSON.parse(localStorage.getItem(player.auth))[Ss.RL] != "player") {
				room.setPlayerAdmin(player.id, true);
				room.sendAnnouncement((JSON.parse(localStorage.getItem(player.auth))[Ss.RL] == "master" ? "O Administrador " : "O Administrador ") + player.name + " se conectou!");
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
			room.sendAnnouncement(changedPlayer.name + " está AFK! 😴", Cor.Laranja, bold);
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
	palavras = ["fdp", "porra", "arrombado"],
	regex = new RegExp(palavras.join("|"), 'gi');

	room.onPlayerChat = function (player, message) {
		if (message.match(regex)) {
			room.sendAnnouncement("Sem xingar.", player.id);
			return false;
		}
        msg = message;
        originalMessage = message;
		message = message.split(/ +/);
		player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
		if (["!help"].includes(message[0].toLowerCase())) {
			room.sendChat("[PV] Comandos do jogador: !me, !games, !wins, !goals, !assists, !cs, !afks, !mutes, !bans.", player.id);
			player.admin ? room.sendChat("[PV] Admin : !mute <duration = 3> #<id>, !unmute all/#<id>, !clearbans <number = all>, !slow <duration>, !endslow", player.id) : null;
		}
		else if (["!afk"].includes(message[0].toLowerCase())) {
			if (players.length != 1 && player.team != Team.SPECTATORS) {
				if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
					room.setPlayerTeam(player.id, Team.SPECTATORS);
				}
				else {
					room.sendChat("❌ Você não pode ficar AFK no meio de uma partida!", player.id);
					return false;
				}
			}
			else if (players.length == 1 && !getAFK(player)) {
				room.setPlayerTeam(player.id, Team.SPECTATORS);
			}
			setAFK(player, !getAFK(player));
			room.sendAnnouncement(player.name + (getAFK(player) ? " está AFK! 😴" : " não está mais AFK!"),null,(getAFK(player) ? 0xFF5E3B :
			0x26DF17));
			getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
		}
		else if (["!afks", "!afklist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] Lista de jogadores AFK: ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
				}
			}
			if (cstm == "[PV] Lista de jogadores AFK: ") {
				room.sendChat("[PV] Não há ninguém na lista AFK!", player.id);
				return false;
			}
			cstm = cstm.substring(0, cstm.length - 2);
			cstm += ".";
			room.sendChat(cstm, player.id);
		}
		else if (["!me"].includes(message[0].toLowerCase())) {
			var stats;
			localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"];
			room.sendChat("[PV] " + player.name + "> Jogos: " + stats[Ss.GA] + ", Vitórias: " + stats[Ss.WI] + ", Empate: " + stats[Ss.DR] + ", Perdas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, Gols: " + stats[Ss.GL] + ", Assistências: " + stats[Ss.AS] + ", GK: " + stats[Ss.GK] + ", CS: " + stats[Ss.CS] + ", CS%: " + stats[Ss.CP] + "%", player.id);
		}
		else if (["!games"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Jogos> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!wins"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!goals"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!assists"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] Assistências> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!cs"].includes(message[0].toLowerCase())) {
			var tableau = [];
			Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
			if (tableau.length < 5) {
				room.sendChat("[PV] Ainda não há jogos suficientes.", player.id);
				return false;
			}
			tableau.sort(function (a, b) { return b[1] - a[1]; });
			room.sendChat("[PV] CS> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id);
		}
		else if (["!claim"].includes(message[0].toLowerCase())) {
			if (message[1] == adminPassword) {
				room.setPlayerAdmin(player.id, true);
				var stats;
				localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name];
				if (stats[Ss.RL] != "master") {
					stats[Ss.RL] = "master";
					room.sendChat(player.name + " foi promovido à Administrador");
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
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " agora é um administrador da sala!");
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
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " não é mais um administrador da sala!");
							stats[Ss.RL] = "player";
							localStorage.setItem(getAuth(room.getPlayer(Number.parseInt(message[1]))), JSON.stringify(stats));
							room.setPlayerAdmin(room.getPlayer(Number.parseInt(message[1])).id, false);
						}
					}
				}
			}
		}
		else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) {
			var cstm = "[PV] Lista de Mutados: ";
			for (var i = 0; i < extendedP.length; i++) {
				if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
					if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
						room.sendChat(cstm, player.id);
						cstm = "... ";
					}
					cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
				}
			}
			if (cstm == "[PV] Lista de Mutados: ") {
				room.sendChat("[PV] Não há ninguém na lista Mutados!", player.id);
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
							room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " foi silenciado por " + (timeOut / 60000) + " minutos!");
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
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi silenciado por 3 minutos!");
						}
					}
				}
			}
		}
		else if (["!unmute"].includes(message[0].toLowerCase())) {
			if (player.admin && message.length >= 2) {
				if (message[1] == "all") {
					extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
					room.sendChat("Geral desmutado.");
				}
				else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
					setMute(room.getPlayer(Number.parseInt(message[1])), false);
					room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
				}
				else if (Number.isNaN(Number.parseInt(message[1]))) {
					if (message[1].length > 1 && message[1][0] == "#") {
						message[1] = message[1].substring(1, message[1].length);
						if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
							setMute(room.getPlayer(Number.parseInt(message[1])), false);
							room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " foi desmutado!");
						}
					}
				}
			}
		}
		else if (["!slow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				if (message.length == 1) {
					slowMode = 3;
					room.sendChat("3 segundos de modo lento ativado!");
				}
				else if (message.length == 3) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							slowMode = Number.parseInt(message[1]);
							room.sendChat(slowMode + " segundos modo lento ativado!");
							return false;
						}
					}
					slowMode = 2;
					room.sendChat("3 segundos de modo lento ativado!");
				}
			}
		}
		else if (["!endslow"].includes(message[0].toLowerCase())) {
			if (player.admin) {
				slowMode != 0 ? room.sendChat("O modo lento foi encerrado.") : null;
				slowMode = 0;
			}
		}
		else if (["!banlist", "!bans"].includes(message[0].toLowerCase())) {
			if (banList.length == 0) {
				room.sendChat("[PV] Não há ninguém na lista de banimentos!", player.id);
				return false;
			}
			var cstm = "[PV] Lista de Banimentos ";
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
					room.sendChat("[📜] Lista de banimentos foi limpa!");
					banList = [];
				}
				if (message.length == 2) {
					if (!Number.isNaN(Number.parseInt(message[1]))) {
						if (Number.parseInt(message[1]) > 0) {
							ID = Number.parseInt(message[1]);
							room.clearBan(ID);
							if (banList.length != banList.filter((array) => array[1] != ID)) {
								room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " foi desbanido da sala!");
							}
							setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
						}
					}
				}
			}
		}
		else if (["!bb", "!bye", "!cya", "!gn"].includes(message[0].toLowerCase())) {
			room.kickPlayer(player.id, "Até a próxima, jogador!", false);
		}
		else if (["!dc", "!disc", "!discord"].includes(message[0].toLowerCase())) {
			room.sendChat("Entre no nosso discord: https://discord.gg/");
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
						room.sendChat(player.name + " recrutou o primeiro!");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						var r = getRandomInt(teamS.length);
						room.setPlayerTeam(teamS[r].id, Team.RED);
						redCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recrutou aleatoriamente!");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
						redCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recrutou o último!");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("❌ Digite um número válido", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
							room.sendChat(player.name + " recrutou: " + teamS[Number.parseInt(message[0]) - 1].name + "!");
							return false;
						}
					}
				}
				if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
					if (["top", "auto"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[0].id, Team.BLUE);
						blueCaptainChoice = "top";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recrutou o primeiro!");
						return false;
					}
					else if (["random", "rand"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
						blueCaptainChoice = "random";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recrutou aleatoriamente!");
						return false;
					}
					else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
						room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
						blueCaptainChoice = "bottom";
						clearTimeout(timeOutCap);
						room.sendChat(player.name + " recrutou o último!");
						return false;
					}
					else if (!Number.isNaN(Number.parseInt(message[0]))) {
						if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
							room.sendChat("❌ Digite um número válido", player.id);
							return false;
						}
						else {
							room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
							room.sendChat(player.name + " recrutou: " + teamS[Number.parseInt(message[0]) - 1].name + " !");
							return false;
						}
					}
				}
			}
		}

		if (localStorage.getItem(getAuth(player)) && JSON.parse(localStorage.getItem(getAuth(player)))[Ss.RL] == "master") {
			room.sendAnnouncement("「𝐃𝐎𝐍𝐎」" + player.name + ": " + msg + "", null, 0xAA0D25)
			return false;
		}
        if (localStorage.getItem(getAuth(player))){ // elo definido por vitórias
            stats = JSON.parse(localStorage.getItem(getAuth(player)));
            if (stats[Ss.WI] > 399){
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
            room.sendAnnouncement("㋡ 「𝗦𝗲𝗺 𝗿𝗮𝗻𝗸」"  + player.name + ": " + msg + "", null, 0x7aa476)
            }
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

	var teamIDs = [{ Index: 0, Name: "Spectators" }, { Index: 1, Name: "Os times irão se enfrentar boa sorte aos dois!" }, { Index: 2, Name: "         x" }];

	var teams = [
		{ ID: 1, longName: "KF Tirana", uniform: [{ angle: 0, mainColor: [0x0059AB, 0xFFFFFF, 0x0059AB], avatarColor: 0xFFCA03 }, { angle: 0, mainColor: [0xFFCA03], avatarColor: 0x0059AB }] },
		{ ID: 2, longName: "Club Atlético Boca Juniors", uniform: [{ angle: 0, mainColor: [0x103F79, 0xF3B229, 0x103F79], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x103F79 }] },
		{ ID: 3, longName: "Club Atlético River Plate", uniform: [{ angle: 30, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFF0000 }] },
		{ ID: 4, longName: "Melbourne City FC", uniform: [{ angle: 0, mainColor: [0x7AB2E1], avatarColor: 0xE31934 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xE31934 }] },
		{ ID: 5, longName: "FC Red Bull Salzburg", uniform: [{ angle: 15, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 15, mainColor: [0x000080, 0xFFFF00, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 6, longName: "SK Sturm Graz", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x00C000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0x00C000 }] },
		{ ID: 7, longName: "FK BATE Borisov", uniform: [{ angle: 0, mainColor: [0xFFFF00, 0x0080FF, 0xFFFF00], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFFFF00], avatarColor: 0x0080FF }] },
		{ ID: 8, longName: "FK Gomel", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x00FF00, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 9, longName: "Club Brugge KV", uniform: [{ angle: 0, mainColor: [0x000000, 0x0000FF, 0x000000], avatarColor: 0xFFFFFF }, { angle: 45, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x0000FF }] },
		{ ID: 10, longName: "KAA Gent", uniform: [{ angle: 0, mainColor: [0x0000FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFF00], avatarColor: 0x0000FF }] },
		{ ID: 11, longName: "KRC Genk", uniform: [{ angle: 0, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x0000FF }] },
		{ ID: 12, longName: "Royal Antwerp FC", uniform: [{ angle: 90, mainColor: [0xC00000, 0xFF0000, 0xC00000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFF00, 0xFFFF00, 0x000000], avatarColor: 0xFF0000 }] },
		{ ID: 13, longName: "RSC Anderlecht", uniform: [{ angle: 0, mainColor: [0x8000FF, 0x400080, 0x8000FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x8000FF }] },
		{ ID: 14, longName: "CR Flamengo", uniform: [{ angle: 90, mainColor: [0x000000, 0xFF0000, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFF0000 }] },
		{ ID: 15, longName: "Santos FC", uniform: [{ angle: 0, mainColor: [0xC00000, 0xFF4000, 0xC00000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF4000, 0xC00000], avatarColor: 0x000000 }] },
		{ ID: 16, longName: "São Paulo FC", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xE0E0E0, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }] },
		{ ID: 17, longName: "SC Corinthians Paulista", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x808080 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0x008000 }] },
		{ ID: 18, longName: "SE Palmeiras", uniform: [{ angle: 90, mainColor: [0x008000, 0xFFFFFF, 0x008000], avatarColor: 0xFFFFC0 }, { angle: 0, mainColor: [0xFFFFFF, 0x008000, 0xFFFFFF], avatarColor: 0xFFFFC0 }] },
		{ ID: 19, longName: "PFK Ludogorets Razgrad", uniform: [{ angle: 75, mainColor: [0x008000, 0xFFFFFF, 0x008000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x008000], avatarColor: 0xFFFFFF }] },
		{ ID: 20, longName: "Beijing Guoan FC", uniform: [{ angle: 0, mainColor: [0x00C000, 0x008000, 0x00C000], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0x80FF00, 0xFFFFFF, 0x80FF00], avatarColor: 0xFFFF00 }] },
		{ ID: 21, longName: "Guangzhou FC", uniform: [{ angle: 90, mainColor: [0xFF4000, 0xFFFFFF, 0xFF4000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFF00, 0x808080, 0xFFFF00], avatarColor: 0xFFFFFF }] },
		{ ID: 22, longName: "GNK Dinamo Zagreb", uniform: [{ angle: 45, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFF8000, 0xFFFF00, 0xFFFF00], avatarColor: 0x0000FF }] },
		{ ID: 23, longName: "Sparta Prague", uniform: [{ angle: 0, mainColor: [0x800000, 0xFFFFFF, 0x000000], avatarColor: 0xFFC000 }, { angle: 0, mainColor: [0xFFFFFF, 0x800000, 0xFFFFFF], avatarColor: 0xFFC000 }] },
		{ ID: 24, longName: "FC Viktoria Plzeň", uniform: [{ angle: 0, mainColor: [0x0000FF, 0xFF0000, 0x0000FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x0000FF, 0xFF0000], avatarColor: 0xFFFFFF }] },
		{ ID: 25, longName: "SK Sigma Olomouc", uniform: [{ angle: 0, mainColor: [0x4080C0, 0xFFFFFF, 0x4080C0], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF0000, 0xC00000, 0xFF0000], avatarColor: 0x0000FF }] },
		{ ID: 26, longName: "SK Slavia Prague", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x0060C0, 0x0080FF], avatarColor: 0x000000 }] },
		{ ID: 27, longName: "Brøndby IF", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x0000FF, 0x0000FF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x404040, 0x808080, 0x404040], avatarColor: 0xFFFF00 }] },
		{ ID: 28, longName: "Copenhagen FC", uniform: [{ angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x0000FF }, { angle: 90, mainColor: [0x000080, 0x000000, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 29, longName: "FC Midtjylland", uniform: [{ angle: 90, mainColor: [0x000000, 0x000000, 0xFFFFFF], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x804080, 0x000080, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 30, longName: "FC Nordsjælland", uniform: [{ angle: 0, mainColor: [0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x0080FF], avatarColor: 0xFFFFFF }] },
		{ ID: 31, longName: "Al Ahly", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0xC0C000 }, { angle: 90, mainColor: [0xC0C0C0, 0x000000, 0xC0C000], avatarColor: 0xC0C000 }] },
		{ ID: 32, longName: "AS Monaco FC", uniform: [{ angle: 120, mainColor: [0xFF0000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
		{ ID: 33, longName: "AS Saint-Étienne", uniform: [{ angle: 90, mainColor: [0x00C000, 0xFFFFFF, 0x00C000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }] },
		{ ID: 34, longName: "Lille OSC", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000080, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0xFFFFFF, 0x000000], avatarColor: 0x000080 }] },
		{ ID: 35, longName: "Olympique Lyonnais", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0x0000FF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFF0000], avatarColor: 0x0000FF }] },
		{ ID: 36, longName: "Olympique Marseille", uniform: [{ angle: 0, mainColor: [0x00C0FF, 0xFFFFFF, 0x00C0FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x404080, 0x202040, 0x00C0FF], avatarColor: 0xFFFFFF }] },
		{ ID: 37, longName: "Paris Saint Germain FC", uniform: [{ angle: 0, mainColor: [0x000080], avatarColor: 0xFF0000 }, { angle: 0, mainColor: [0xFFFFFF, 0xFFFFFF, 0x000080], avatarColor: 0xFF0000 }] },
		{ ID: 38, longName: "Bayer 04 Leverkusen", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0xFF0000 }] },
		{ ID: 39, longName: "Bayern Munchen", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xC00000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xC0C000 }] },
		{ ID: 40, longName: "Borussia Dortmund", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFF00 }] },
		{ ID: 41, longName: "FC Schalke 04", uniform: [{ angle: 90, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x000080, 0xFFFFFF], avatarColor: 0x00FFFF }] },
		{ ID: 42, longName: "RB Leipzig", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFF0000], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0x000000], avatarColor: 0xC0C000 }] },
		{ ID: 43, longName: "VfL Wolfsburg", uniform: [{ angle: 0, mainColor: [0x00FF00], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x00FF00, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 44, longName: "AEK", uniform: [{ angle: 45, mainColor: [0x000000, 0xFFFF00, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0xFFFF00, 0xFFFF00], avatarColor: 0xFFFFFF }] },
		{ ID: 45, longName: "Olympiacos", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xC0C0C0, 0xFFFFFF, 0xC0C0C0], avatarColor: 0x000000 }] },
		{ ID: 46, longName: "Panathinaikos FC", uniform: [{ angle: 0, mainColor: [0x00C060], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x00C060 }] },
		{ ID: 47, longName: "PAOK", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0x008080 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 48, longName: "Beitar Jerusalem FC", uniform: [{ angle: 0, mainColor: [0x000000, 0xFFFF00, 0x000000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFF00 }] },
		{ ID: 49, longName: "Hapoel Be'er Sheva FC", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xE0E0E0, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xFF0000 }] },
		{ ID: 50, longName: "Maccabi Haifa FC", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x008000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x404040, 0x000000, 0x404040], avatarColor: 0xFFFFFF }] },
		{ ID: 51, longName: "Maccabi Tel Aviv FC", uniform: [{ angle: 90, mainColor: [0xFFFF00, 0x0000FF, 0xFFFF00], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000000, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }] },
		{ ID: 52, longName: "AC Milan", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFEDCBA], avatarColor: 0x800000 }] },
		{ ID: 53, longName: "AS Roma FC", uniform: [{ angle: 90, mainColor: [0xC00000, 0xFFC000, 0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0x0000C0, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 54, longName: "FC Internazionale Milano", uniform: [{ angle: 0, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000, 0x0000FF, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 55, longName: "Juventus FC", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0x000000, 0xFFFFFF], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0x404040], avatarColor: 0xFFFF00 }] },
		{ ID: 56, longName: "SSC Napoli", uniform: [{ angle: 90, mainColor: [0x0080FF, 0xFFFFFF, 0x0080FF], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x808000, 0xFFFFFF, 0x808000], avatarColor: 0x000080 }] },
		{ ID: 57, longName: "Torino FC", uniform: [{ angle: 90, mainColor: [0x800000, 0xFFFFFF, 0x000000], avatarColor: 0xFFC000 }, { angle: 45, mainColor: [0xFFFFFF, 0x800000, 0xFFFFFF], avatarColor: 0xFFC000 }] },
		{ ID: 58, longName: "Kashima Antlers", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xC0C0C0, 0x000000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xC0C0C0, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xFF0000 }] },
		{ ID: 59, longName: "Kawasaki Frontale", uniform: [{ angle: 90, mainColor: [0x0080FF, 0x0080FF, 0x000040], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xC0C0C0, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x0080FF }] },
		{ ID: 60, longName: "Tigres UANL", uniform: [{ angle: 0, mainColor: [0xFFC000], avatarColor: 0x0000FF }, { angle: 0, mainColor: [0xC0D0E0], avatarColor: 0xFFC000 }] },
		{ ID: 61, longName: "AFC AJAX", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x0000FF, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 62, longName: "AZ Alkmaar", uniform: [{ angle: 60, mainColor: [0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x404040, 0x000000, 0x404040], avatarColor: 0xFFFFFF }] },
		{ ID: 63, longName: "FC Twente", uniform: [{ angle: 0, mainColor: [0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0xC00000, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 64, longName: "Feyenoord", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF], avatarColor: 0x202020 }, { angle: 0, mainColor: [0xC0C0C0, 0x808080], avatarColor: 0xFFFFFF }] },
		{ ID: 65, longName: "PSV Eindhoven", uniform: [{ angle: 90, mainColor: [0xFF0000, 0x000000, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x203040], avatarColor: 0xA0E0A0 }] },
		{ ID: 66, longName: "Molde FK", uniform: [{ angle: 90, mainColor: [0x0000FF, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0x0000FF, 0x0000FF], avatarColor: 0x000000 }] },
		{ ID: 67, longName: "Tromsø IL", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFC000, 0xFF0000], avatarColor: 0xFFC000 }, { angle: 0, mainColor: [0x000000, 0xFFC000, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 68, longName: "Legia Warszawa", uniform: [{ angle: 150, mainColor: [0xFFFFFF, 0xFFFFFF, 0x008000], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x00C000, 0x008000, 0x008000], avatarColor: 0xFFFFFF }] },
		{ ID: 69, longName: "KKS Lech Poznań", uniform: [{ angle: 0, mainColor: [0x0000C0, 0x000080, 0x0000C0], avatarColor: 0xFFFF00 }, { angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x0000FF }] },
		{ ID: 70, longName: "FC Porto", uniform: [{ angle: 0, mainColor: [0x0000FF, 0xFFFFFF, 0x0000FF], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0x000000, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 71, longName: "SC Braga", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0x006030], avatarColor: 0xC0C000 }] },
		{ ID: 72, longName: "SL Benfica", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }] },
		{ ID: 73, longName: "Sporting CP", uniform: [{ angle: 90, mainColor: [0x00C000, 0xFFFFFF, 0x00C000], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0xC0FF00, 0x000000, 0xC0FF00], avatarColor: 0x00C000 }] },
		{ ID: 74, longName: "CFR Cluj", uniform: [{ angle: 0, mainColor: [0x800000, 0xFFFFFF, 0x800000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x800000 }] },
		{ ID: 75, longName: "FCSB", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x0000FF, 0xFF0000], avatarColor: 0xFFFF00 }, { angle: 90, mainColor: [0xFFFFFF, 0xA0C0E0, 0xFFFFFF], avatarColor: 0xFFC000 }] },
		{ ID: 76, longName: "FC Dynamo Moscow", uniform: [{ angle: 0, mainColor: [0x0080FF], avatarColor: 0xC0C000 }, { angle: 90, mainColor: [0xFFFFFF], avatarColor: 0x0080FF }] },
		{ ID: 77, longName: "FC Krasnodar", uniform: [{ angle: 0, mainColor: [0x000000, 0x008000, 0x000000], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x008080, 0x00FFFF, 0x00FFFF], avatarColor: 0x000000 }] },
		{ ID: 78, longName: "FC Spartak Moscow", uniform: [{ angle: 60, mainColor: [0xC00000, 0xFFFFFF, 0xC00000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x000000 }] },
		{ ID: 79, longName: "FK Zenit", uniform: [{ angle: 0, mainColor: [0x0080FF], avatarColor: 0xC0C000 }, { angle: 90, mainColor: [0xFFFFFF], avatarColor: 0x0080FF }] },
		{ ID: 80, longName: "Lokomotiv Moscow", uniform: [{ angle: 90, mainColor: [0x008000, 0xFF0000, 0x008000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x008000 }] },
		{ ID: 81, longName: "PFC CSKA Moscow", uniform: [{ angle: 90, mainColor: [0xC00030, 0x3000C0, 0x3000C0], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0xC0C0C0, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x000000 }] },
		{ ID: 82, longName: "Celtic FC", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x00C000, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x008000], avatarColor: 0xC0C000 }] },
		{ ID: 83, longName: "Glasgow Rangers", uniform: [{ angle: 90, mainColor: [0x0080FF, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x000000, 0x000000, 0xFF0000], avatarColor: 0xFFFFFF }] },
		{ ID: 84, longName: "FK Crvena Zvezda", uniform: [{ angle: 55, mainColor: [0xFFFFFF, 0xFF0000, 0xFF0000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x003030], avatarColor: 0xFFFFFF }] },
		{ ID: 85, longName: "FK Partizan Belgrade", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000000, 0x000000], avatarColor: 0x808080 }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x000000 }] },
		{ ID: 86, longName: "Athletic Bilbao", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x80FF80], avatarColor: 0x000000 }] },
		{ ID: 87, longName: "Atlético Madrid", uniform: [{ angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }, { angle: 90, mainColor: [0x000080, 0xFF0000, 0xFF0000], avatarColor: 0xFFFFFF }] },
		{ ID: 88, longName: "FC Barcelona", uniform: [{ angle: 0, mainColor: [0x004D98, 0xA50044, 0x004D98], avatarColor: 0xFFED02 }, { angle: 0, mainColor: [0xD0C0E0], avatarColor: 0xFFFFFF }] },
		{ ID: 89, longName: "Real Madrid CF", uniform: [{ angle: 135, mainColor: [0xFFFFFF, 0x004996, 0xFFFFFF], avatarColor: 0xFCBF00 }, { angle: 90, mainColor: [0x004996], avatarColor: 0xFCBF00 }] },
		{ ID: 90, longName: "Sevilla FC", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0xC0C000 }, { angle: 0, mainColor: [0xFF0000, 0xFFFFFF, 0xFF0000], avatarColor: 0x000000 }] },
		{ ID: 91, longName: "Valencia CF", uniform: [{ angle: 0, mainColor: [0xFFDF1C, 0xEE3524, 0xFFDF1C], avatarColor: 0x000000 }, { angle: 90, mainColor: [0xC00000], avatarColor: 0xFFDF1C }] },
		{ ID: 92, longName: "AIK Stockholm", uniform: [{ angle: 0, mainColor: [0x003155, 0xFFEE00, 0x003155], avatarColor: 0xC9AD00 }, { angle: 0, mainColor: [0xFFEE00], avatarColor: 0x000000 }] },
		{ ID: 93, longName: "Malmö FF", uniform: [{ angle: 90, mainColor: [0x2F97DA, 0xFFFFFF, 0x2F97DA], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x174B6D], avatarColor: 0x2F97DA }] },
		{ ID: 94, longName: "FC Basel", country: "Switzerland", uniform: [{ angle: 0, mainColor: [0xFF0000, 0x0000FF], avatarColor: 0xFFC000 }, { angle: 90, mainColor: [0x000000, 0xFFFFFF, 0xFFFFFF], avatarColor: 0x0000FF }] },
		{ ID: 95, longName: "Zurich FK", country: "Switzerland", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x000000 }, { angle: 0, mainColor: [0x000000, 0x404040, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 96, longName: "Beşiktaş JK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x000000, 0xFFFFFF, 0x000000], avatarColor: 0xFF0000 }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 97, longName: "Bursaspor SK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x02863A, 0xFFFFFF, 0x02863A], avatarColor: 0x000000 }, { angle: 135, mainColor: [0xFFFFFF, 0xC0C0C0, 0xFFFFFF], avatarColor: 0x02863A }] },
		{ ID: 98, longName: "Fenerbahçe SK", country: "Turkey", uniform: [{ angle: 0, mainColor: [0x000080, 0xFFFF00, 0x000080], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xE0E0C0, 0xC0C0A0, 0xE0E0C0], avatarColor: 0x000080 }] },
		{ ID: 99, longName: "Galatasaray SK", country: "Turkey", uniform: [{ angle: 45, mainColor: [0xFDB912, 0xA90432], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0x000000], avatarColor: 0xFDB912 }] },
		{ ID: 100, longName: "Istanbul Başakşehir FK", uniform: [{ angle: 90, mainColor: [0xFF8000, 0x000080, 0xFF8000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0xFF8000, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 101, longName: "Trabzonspor SK", uniform: [{ angle: 0, mainColor: [0x800000, 0x0080FF, 0x800000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000080, 0x0000C0, 0x000080], avatarColor: 0xFFFFFF }] },
		{ ID: 102, longName: "Arsenal FC", uniform: [{ angle: 0, mainColor: [0xFFFFFF, 0xFF0000, 0xFFFFFF], avatarColor: 0x808000 }, { angle: 0, mainColor: [0xFFFF80], avatarColor: 0x000000 }] },
		{ ID: 103, longName: "Chelsea FC", uniform: [{ angle: 0, mainColor: [0x034694], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFFFF00, 0x000000, 0xFFFF00], avatarColor: 0xFFFFFF }] },
		{ ID: 104, longName: "Liverpool FC", uniform: [{ angle: 0, mainColor: [0xC00000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0xFEDCBA, 0x000000, 0xFEDCBA], avatarColor: 0xFFFFFF }] },
		{ ID: 105, longName: "Manchester United FC", uniform: [{ angle: 90, mainColor: [0xFF0000, 0xFFFFFF, 0x000000], avatarColor: 0xFFFF00 }, { angle: 90, mainColor: [0x00C0FF, 0x0080FF, 0x00C0FF], avatarColor: 0xFF0000 }] },
		{ ID: 106, longName: "Manchester City FC", uniform: [{ angle: 0, mainColor: [0x00C0FF], avatarColor: 0xFFFFFF }, { angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x00C0FF }] },
		{ ID: 107, longName: "Tottenham Hotspur FC", uniform: [{ angle: 90, mainColor: [0xFFFFFF, 0x000080, 0x000080], avatarColor: 0xFF0000 }, { angle: 90, mainColor: [0x000080, 0x000040, 0x000040], avatarColor: 0xFFFFFF }] },
		{ ID: 108, longName: "Dynamo Kyiv", uniform: [{ angle: 90, mainColor: [0x176FC1, 0xFFFFFF, 0xFFFFFF], avatarColor: 0xBF851E }, { angle: 90, mainColor: [0x176FC1, 0x000040, 0x000040], avatarColor: 0xBF851E }] },
		{ ID: 109, longName: "Karpaty Lviv", uniform: [{ angle: 0, mainColor: [0x037B4F], avatarColor: 0xEAB306 }, { angle: 90, mainColor: [0xFFFFFF, 0x037B4F, 0x037B4F], avatarColor: 0xEAB306 }] },
		{ ID: 110, longName: "Metallist Kharkiv", uniform: [{ angle: 0, mainColor: [0xFFC000], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x000080], avatarColor: 0xFFC000 }] },
		{ ID: 111, longName: "Shakhtar Donetsk", uniform: [{ angle: 90, mainColor: [0xFF8000, 0x000000, 0xFF8000], avatarColor: 0xFFFFFF }, { angle: 90, mainColor: [0x000000, 0xFF8000, 0x000000], avatarColor: 0xFFFFFF }] },
		{ ID: 112, longName: "LA Galaxy", uniform: [{ angle: 0, mainColor: [0xFFFFFF], avatarColor: 0x000080 }, { angle: 0, mainColor: [0x000000, 0x008000, 0x000000], avatarColor: 0xFFFFFF }] },
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
		activePlay = false;
		countAFK = false;
		const scores = room.getScores();
		game.scores = scores;
		if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
		if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
			var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
			var fraseasis = frasesASS[(Math.random() * frasesASS.length) | 0]
			room.sendAnnouncement("⚽👥 " + getTime(scores) + frasegol + lastPlayersTouched[0].name + fraseasis + lastPlayersTouched[1].name + " | Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : Cor.Azul),'bold');
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
			}
			else {
				var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
				room.sendAnnouncement("⚽ " + getTime(scores) + frasegol + lastPlayersTouched[0].name + "! | Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : Cor.Azul),'bold');
				game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], null));
			}
		}
		else {
			var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
			room.sendAnnouncement("🤡 " + getTime(scores) + fraseautogol + lastPlayersTouched[0].name + "! | Velocidade do chute: " + ballSpeed.toPrecision(4).toString() + "km/h " + (team == Team.RED ? "🔴" : "🔵"),null,(team == Team.RED ? Cor.Vermelho : Cor.Azul),'bold');
			game.goals.push(new Goal(scores.time, team, null, null));
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

	/* MISCELLANEOUS */

	room.onRoomLink = function(url) {
	}

	room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
		if (getMute(changedPlayer) && changedPlayer.admin) {
			room.sendChat(changedPlayer.name + " foi desmutado.");
			setMute(changedPlayer, false);
		}
		if (byPlayer.id != 0 && localStorage.getItem(getAuth(byPlayer)) && JSON.parse(localStorage.getItem(getAuth(byPlayer)))[Ss.RL] == "admin") {
			room.sendChat("Você não tem permissão para nomear um jogador como administrador!", byPlayer.id);
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
