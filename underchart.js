console.log('script');
$('#loadStats').on('click', function() {
	console.log('load data');
	let userData = JSON.parse($('#userData').val());
	let removeBotGame = $('#removeBotGame').is(':checked');
	console.log(removeBotGame);

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

		// copy paste because i need to sleep
		userData.forEach(function(row) {
			console.log(row[1]);
			if (removeBotGame) {
				if (row[1] == 1) {
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
				}
			} else {
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
			}
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
