$('#loadStats').on('click', function () {
    console.log('Loading data...');

    let userData = JSON.parse($('#userData').val());

    // Options
    let optionRemoveBot = $('#optionRemoveBot').is(':checked');
    let optionRemoveShortGame = $('#optionRemoveShortGame').is(':checked');
    //let optionOnlyLastestPatch = $('#optionOnlyLastestPatch').is(':checked');
    let optionPieOverBar = $('#optionPieChart').is(':checked');

    Chart.helpers.each(Chart.instances, function (instance) {
        instance.destroy();
    });

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

    let finalRank = [0, 0, 0, 0, 0, 0, 0, 0];
    let totalMatch = 0;
    let totalMatchLength = 0;
    let totalMatchLengthSurvived = 0;
    let totalFinalRank = 0;
    let totalMatchRound = 0;
    let totalPlayerSlot = 0;
    let totalRoundSurvived = 0;
    let top1 = 0;

    let last20finalRank = [0, 0, 0, 0, 0, 0, 0, 0];
    let last20totalMatch = 0;
    let last20totalMatchLength = 0;
    let last20totalMatchLengthSurvived = 0;
    let last20totalFinalRank = 0;
    let last20totalMatchRound = 0;
    let last20totalPlayerSlot = 0;
    let last20totalRoundSurvived = 0;
    let last20top1 = 0;

    let progressOverall = [];
    let progressLabel = [];

    userData.forEach(function (row) {
        if (optionRemoveBot) {
            if (row[1] == 2) {
                return;
            }
        }
        if (optionRemoveShortGame) {
            if (row[2] < 300) {
                return;
            }
        }

        if (parseInt(row[11]) === 0) {
            return;
        }
        totalMatch++;
        //0 => MatchID
        //1 => Mode
        modePlayed[row[1] - 1]++;
        //2 => MatchLength
        totalMatchLength += parseInt(row[2]);
        //3 => StartTime
        let matchStartDate = row[3].substring(0, row[3].length - 4);
        progressOverall.push(parseInt(row[11]));
        progressLabel.push(totalMatch);
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
            finalRank[parseInt(row[11]) - 1] += 1;
        }
        //12 => SurvivalTime
        totalMatchLengthSurvived += parseInt(row[12]);
        //13 => Party
        //14 => RoundSurvived
        totalRoundSurvived += parseInt(row[14]);
        //15 => Platform
        platformPlayed[row[15] - 1]++;


        if (totalMatch < 21) {
            //0 => MatchID
            //1 => Mode
            //last20modePlayed[row[1] -1]++;
            //2 => MatchLength
            last20totalMatchLength += parseInt(row[2]);
            //3 => StartTime
            //4 => ServerVersion
            //5 => ClusterID
            //6 => MatchRounds
            last20totalMatchRound += parseInt(row[6]);
            //7 => PlayerSlot
            last20totalPlayerSlot += parseInt(row[7]);
            //8 => Team
            //9 => Flags
            //10 => PlayerState
            //11 => FinalRank
            last20totalFinalRank += parseInt(row[11]);
            if (parseInt(row[11]) === 1) {
                last20top1++;
            }

            if (parseInt(row[11]) !== 0) {
                last20finalRank[parseInt(row[11]) - 1] += 1;
            }
            //12 => SurvivalTime
            last20totalMatchLengthSurvived += parseInt(row[12]);
            //13 => Party
            //14 => RoundSurvived
            last20totalRoundSurvived += parseInt(row[14]);
            //15 => Platform
            //platformPlayed[row[15] - 1]++;
        }
    });

    let avgGameTime = totalMatchLengthSurvived / totalMatch;
    let minutes = Math.floor(avgGameTime / 60);
    let seconds = avgGameTime - minutes * 60;

    let last20avgGameTime = last20totalMatchLengthSurvived / 20;
    let last20minutes = Math.floor(last20avgGameTime / 60);
    let last20seconds = last20avgGameTime - last20minutes * 60;


    $('#totalGames').text('Number of games: ' + totalMatch);
    $('#rankAverage').text('Average final rank: ' + (totalFinalRank / totalMatch).toFixed(2));
    $('#startRankAverage').text('Average starting rank: ' + (totalPlayerSlot / totalMatch).toFixed(2));
    $('#timeSurvived').text('Average game time: ' + minutes + 'm ' + seconds.toFixed(0) + 's');
    $('#roundAverage').text('Average survived rounds: ' + (totalRoundSurvived / totalMatch).toFixed(2));
    $('#gameWon').text('Game won: ' + top1);

    // obvious for the same height
    $('#last20totalGames').text('Number of games: ' + 20);
    $('#last20rankAverage').text('Average final rank: ' + (last20totalFinalRank / 20).toFixed(2));
    $('#last20startRankAverage').text('Average starting rank: ' + (last20totalPlayerSlot / 20).toFixed(2));
    $('#last20timeSurvived').text('Average game time: ' + last20minutes + 'm ' + last20seconds.toFixed(0) + 's');
    $('#last20roundAverage').text('Average survived rounds: ' + (last20totalRoundSurvived / 20).toFixed(2));
    $('#last20gameWon').text('Game won: ' + last20top1);

    new Chart($('#platformChart'), {
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

    new Chart($('#modeChart'), {
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

    // Yes i'm lazy
    console.log(optionPieOverBar);

    let canvaFinalRankChart = $('#finalRankChart')
    let canvaLast20finalRankChart = $('#last20finalRankChart')

    if (optionPieOverBar) {

        new Chart(canvaFinalRankChart, {
            type: 'pie',
            data: {
                datasets: [{
                    data: finalRank,
                    backgroundColor: [
                        "#3deb63",
                        "#79d07f",
                        "#8eb276",
                        "#9d9c70",
                        "#aa896a",
                        "#b77564",
                        "#c26760",
                        "#d24e59",
                        "#dd3e54",
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
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value * 100 / sum).toFixed(1) + "%";
                            return percentage;
                        },
                        color: '#000',
                        fontColor: 'white',
                        display: 'auto'
                    }
                }
            },
        });

        new Chart(canvaLast20finalRankChart, {
            type: 'pie',
            data: {
                datasets: [{
                    data: last20finalRank,
                    backgroundColor: [
                        "#3deb63",
                        "#79d07f",
                        "#8eb276",
                        "#9d9c70",
                        "#aa896a",
                        "#b77564",
                        "#c26760",
                        "#d24e59",
                        "#dd3e54",
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
                plugins: {
                    datalabels: {
                        formatter: (value, ctx) => {
                            let sum = 0;
                            let dataArr = ctx.chart.data.datasets[0].data;
                            dataArr.map(data => {
                                sum += data;
                            });
                            let percentage = (value * 100 / sum).toFixed(1) + "%";
                            return percentage;
                        },
                        color: '#000',
                        fontColor: 'white',
                        display: 'auto'
                    }
                }
            }
        });

    } else {

        new Chart(canvaFinalRankChart, {
            type: 'bar',
            data: {
                datasets: [{
                    data: finalRank,
                    backgroundColor: [
                        "#3deb63",
                        "#79d07f",
                        "#8eb276",
                        "#9d9c70",
                        "#aa896a",
                        "#b77564",
                        "#c26760",
                        "#d24e59",
                        "#dd3e54",
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

        new Chart(canvaLast20finalRankChart, {
            type: 'bar',
            data: {
                datasets: [{
                    data: last20finalRank,
                    backgroundColor: [
                        "#3deb63",
                        "#79d07f",
                        "#8eb276",
                        "#9d9c70",
                        "#aa896a",
                        "#b77564",
                        "#c26760",
                        "#d24e59",
                        "#dd3e54",
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


    }

    progressOverall = progressOverall.reverse();

    new Chart($('#finalRankOverTime'), {
        type: 'line',
        data: {
            datasets: [{
                data: progressOverall,
                backgroundColor: "#FFFFFF",
                fill: false,
                borderColor: "#a6a09f",
                radius: 9,
                lineTension: 0,
            }],
            labels: progressLabel,
        },
        options: {
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    ticks: {
                        reverse: true,
                    }
                }],
            }
        }
    });

    console.log('Done.')
});
