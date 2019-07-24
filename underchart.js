console.log('script');
$('#loadStats').on('click', function() {
	console.log('load data');

	let userData = [
	["10893744", "2", "2305", "2019-07-21 23:17:35 GMT", "206", "136", "32", "1", "0", "0", "1", "4", "2299", "0", "32", "4"],
	["10846975", "1", "2676", "2019-07-21 19:21:05 GMT", "206", "135", "36", "1", "0", "0", "1", "4", "2540", "1", "34", "1"],
	["10335521", "1", "2354", "2019-07-20 13:36:38 GMT", "206", "186", "34", "6", "5", "0", "1", "6", "1792", "1", "26", "1"],
	["10319899", "1", "2599", "2019-07-20 12:51:32 GMT", "206", "138", "34", "4", "3", "0", "1", "3", "2587", "1", "34", "1"],
	["10122409", "1", "2971", "2019-07-20 00:57:37 GMT", "206", "123", "42", "1", "0", "0", "1", "7", "1846", "0", "26", "1"],
	["10116387", "1", "2294", "2019-07-20 00:26:04 GMT", "203", "137", "32", "8", "7", "0", "1", "7", "1732", "0", "24", "1"],
	["10073300", "1", "2359", "2019-07-19 20:33:36 GMT", "203", "133", "32", "3", "2", "0", "1", "8", "1915", "1", "26", "1"],
	["9829709", "1", "2586", "2019-07-19 01:55:58 GMT", "201", "135", "38", "4", "3", "0", "1", "4", "2285", "0", "33", "1"],
	["9654574", "1", "2795", "2019-07-18 11:05:49 GMT", "201", "188", "36", "6", "5", "0", "1", "5", "2516", "0", "32", "3"],
	["9369199", "1", "2566", "2019-07-17 10:55:51 GMT", "201", "185", "36", "4", "3", "0", "1", "5", "2237", "0", "31", "3"],
	["9162660", "1", "2757", "2019-07-16 16:14:43 GMT", "201", "138", "38", "4", "3", "0", "1", "2", "2750", "0", "38", "1"],
	["8620783", "1", "2571", "2019-07-14 21:58:39 GMT", "201", "183", "36", "2", "1", "0", "1", "2", "2569", "0", "36", "1"],
	["8012890", "1", "2832", "2019-07-13 01:53:30 GMT", "200", "121", "41", "6", "5", "0", "1", "8", "1704", "0", "24", "1"],
	["5009442", "1", "2521", "2019-06-30 17:52:04 GMT", "176", "132", "37", "7", "6", "0", "1", "3", "2460", "2", "36", "1"],
	["4997741", "1", "2761", "2019-06-30 17:05:03 GMT", "176", "134", "39", "7", "6", "0", "1", "4", "2261", "2", "32", "1"],
	["4186724", "1", "2595", "2019-06-28 10:58:46 GMT", "174", "183", "38", "3", "2", "0", "1", "4", "2147", "0", "31", "3"],
	["3993489", "1", "2539", "2019-06-27 20:14:25 GMT", "163", "183", "37", "2", "1", "0", "1", "1", "2539", "1", "37", "1"],
	["3983463", "1", "2370", "2019-06-27 19:31:25 GMT", "163", "183", "34", "2", "1", "0", "1", "2", "2359", "1", "34", "1"],
	["3973440", "1", "2811", "2019-06-27 18:51:02 GMT", "163", "183", "41", "6", "5", "0", "1", "3", "2251", "2", "32", "1"],
	["3810052", "1", "2630", "2019-06-27 10:39:09 GMT", "163", "137", "38", "1", "0", "0", "1", "3", "2375", "1", "34", "4"],
	["3401426", "1", "3102", "2019-06-26 10:24:03 GMT", "159", "112", "44", "8", "7", "0", "1", "6", "2125", "1", "29", "4"],
	["3401238", "2", "35", "2019-06-26 10:23:28 GMT", "159", "111", "1", "2", "1", "0", "1", "8", "7", "1", "1", "4"],
	["3141681", "1", "2650", "2019-06-25 17:36:55 GMT", "150", "111", "36", "3", "2", "0", "1", "1", "2650", "1", "36", "1"],
	["2749610", "1", "2761", "2019-06-24 21:57:08 GMT", "150", "132", "38", "6", "5", "0", "1", "2", "2739", "1", "38", "1"],
	["2739394", "1", "2289", "2019-06-24 21:18:34 GMT", "150", "131", "33", "6", "5", "0", "1", "3", "2223", "1", "32", "1"],
	["2665261", "1", "2430", "2019-06-24 17:35:24 GMT", "150", "138", "34", "5", "4", "0", "1", "2", "2422", "2", "34", "1"],
	["2484566", "1", "2957", "2019-06-24 11:08:21 GMT", "150", "132", "43", "1", "0", "0", "1", "7", "2187", "0", "31", "3"],
	["1650178", "1", "2585", "2019-06-22 22:02:29 GMT", "150", "112", "38", "5", "4", "0", "1", "2", "2574", "1", "38", "4"],
	["1313423", "1", "3007", "2019-06-22 09:24:00 GMT", "150", "112", "44", "2", "1", "0", "1", "5", "2135", "0", "31", "4"],
	["814023", "1", "2807", "2019-06-21 10:53:47 GMT", "145", "137", "42", "7", "6", "0", "1", "7", "1905", "0", "28", "3"],
	["800398", "1", "2717", "2019-06-21 10:17:04 GMT", "145", "112", "41", "5", "4", "0", "1", "5", "1592", "0", "24", "4"],
	["754399", "1", "2501", "2019-06-21 08:03:17 GMT", "145", "111", "39", "6", "5", "0", "1", "5", "1896", "0", "29", "4"],
	["613439", "1", "2892", "2019-06-20 22:39:49 GMT", "138", "132", "42", "3", "2", "0", "1", "2", "2880", "0", "42", "1"],
	["532897", "1", "2259", "2019-06-20 11:13:39 GMT", "136", "188", "32", "3", "2", "0", "1", "3", "2180", "0", "31", "3"],
	["532756", "1", "2635", "2019-06-20 11:11:57 GMT", "136", "184", "39", "8", "7", "0", "0", "0", "0", "0", "0", "3"],
	["493843", "1", "2951", "2019-06-19 23:41:46 GMT", "130", "123", "42", "2", "1", "0", "1", "2", "2938", "1", "42", "1"],
	["492380", "1", "2629", "2019-06-19 23:05:03 GMT", "130", "121", "36", "1", "0", "0", "1", "6", "2128", "1", "29", "1"],
	["483112", "1", "2428", "2019-06-19 20:12:43 GMT", "121", "136", "37", "1", "0", "0", "1", "4", "2066", "1", "31", "1"],
	["479785", "2", "2842", "2019-06-19 19:24:30 GMT", "121", "138", "42", "1", "0", "0", "1", "1", "2839", "1", "42", "1"],
	["435944", "1", "2483", "2019-06-19 11:19:15 GMT", "121", "183", "38", "6", "5", "0", "1", "2", "2477", "0", "38", "3"],
	["433728", "1", "2446", "2019-06-19 10:51:34 GMT", "121", "182", "38", "3", "2", "0", "1", "8", "1415", "0", "22", "3"],
	["253921", "1", "2941", "2019-06-16 21:05:56 GMT", "117", "138", "46", "4", "3", "0", "1", "6", "1475", "0", "23", "1"],
	["113138", "1", "3237", "2019-06-15 02:20:44 GMT", "115", "188", "48", "2", "1", "0", "1", "5", "1958", "0", "29", "1"],
	["111952", "1", "3050", "2019-06-15 01:49:29 GMT", "113", "134", "46", "6", "5", "0", "1", "6", "1456", "0", "21", "1"],
	["58792", "1", "2375", "2019-06-14 10:33:52 GMT", "113", "185", "36", "3", "2", "0", "1", "6", "1822", "0", "27", "3"],
	["28611", "1", "2424", "2019-06-13 22:54:43 GMT", "112", "123", "37", "8", "7", "0", "1", "5", "1717", "0", "26", "1"]
	];

	//let userData = JSON.parse($('#userData').val());

	let modePlayed = [
		0, // Multiplayer
		0 // Bot
		];
		let platformPlayed = [
		0, // Windows
		0, // Mac
		0, // Linux
		0, // Android
		0 // iOS
		];
		let finalRank = [0,0,0,0,0,0,0,0];
		let totalMatch = 0;
		let totalMatchLength = 0;
		let totalMatchLengthSurvived = 0;
		let totalFinalRank = 0;
		let totalMatchRound = 0;
		let totalPlayerSlot = 0;
		let totalRoundSurvived = 0;
		let top1 = 0;


		userData.forEach(function(row) {
			totalMatch++;
		//0 => MatchID
		//1 => Mode
		modePlayed[row[1] -1]++;
		//2 => MatchLength
		totalMatchLength += parseInt(row[2]);
		//3 => StartTime
		//4 => ServerVersion
		//5 => ClusterID
		//6 => MatchRounds
		totalMatchRound += parseInt(row[6]);
		//7 => PlayerSlot
		totalPlayerSlot += parseInt(row[7]);
		//8 => Team
		//9 => Flags
		//10 => PlayerState
		//11 => FinalRank
		totalFinalRank += parseInt(row[11]);
		if (parseInt(row[11]) === 1) {
			top1++;
		}
		
		if (parseInt(row[11]) !== 0) {
			finalRank[parseInt(row[11])-1] += 1;
		}
		//12 => SurvivalTime
		totalMatchLengthSurvived += parseInt(row[12]);
		//13 => Party
		//14 => RoundSurvived
		totalRoundSurvived += parseInt(row[14]);
		//15 => Platform
		platformPlayed[row[15] - 1]++;
	});

		let avgGameTime = totalMatchLengthSurvived/totalMatch;
		var minutes = Math.floor(avgGameTime / 60);
		var seconds = avgGameTime - minutes * 60;
		console.log(finalRank);

		$('#totalGames').text('Number of games: ' + totalMatch);
		$('#rankAverage').text('Average final rank: ' + (totalFinalRank/totalMatch).toFixed(2));
		$('#startRankAverage').text('Average starting rank: ' + (totalPlayerSlot/totalMatch).toFixed(2));
		$('#timeSurvived').text('Average game time: ' + minutes + 'm ' + seconds.toFixed(0) + 's');
		$('#roundAverage').text('Average survived rounds: ' + (totalRoundSurvived/totalMatch).toFixed(2));
		$('#gameWon').text('Game won: ' + top1);

		let platformChart = new Chart($('#platformChart'), {
			type: 'doughnut',
			data: {
				datasets: [{
					data: platformPlayed,
					backgroundColor: [
					"#3480eb",
					"#b5bec9",
					"#a00cab",
					"#0b7a18",
					"#848d96"
					]
				}],
				labels: [
				'Windows',
				'Mac',
				'Linux',
				'Android',
				'iOS',
				]
			},
			options: {
				legend: {
					labels: {
						fontColor: 'white'
					},
					position: 'bottom',
				}
			}
		});

		let modeChart = new Chart($('#modeChart'), {
			type: 'doughnut',
			data: {
				datasets: [{
					data: modePlayed,
					backgroundColor: [
					"#0074D9",
					"#7FDBFF"
					]
				}],
				labels: [
				'Multiplayer',
				'Bot',
				]
			},
			options: {
				legend: {
					labels: {
						fontColor: 'white'
					},
					position: 'bottom',
				}
			}
		});

		console.log(finalRank);
		let finalRankChart = new Chart($('#finalRankChart'), {
			type: 'bar',
			data: {
				datasets: [{
					data: finalRank,
					backgroundColor: [
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
						"#0eeb49",
					]
				}],
				labels: [
					'First',
					'Second',
					'Third',
					'Fourth',
					'Fifth',
					'Sixth',
					'Seventh',
					'Eighth'
				]
			},
			options: {
				legend: {
					display: false,
				},
				scales: {
	                yAxes: [{
	                    ticks: {
	                        beginAtZero: true
	                    }
	                }]
            	},
			}
		});
	})