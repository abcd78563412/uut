let tunnel_position =[-745, -740, -735, -730, -725, -720, -715, -710, -705, -700, -695, -690, -685, -680, -675, -670, -665, -660, -655, -650, -645, -640, -635, -630, -625, -620, -615, -610, -605, -600, -595, -590, -585, -580, -575, -570, -565, -560, -555, -550, -545, -540, -535, -530, -525, -520, -515, -510, -505, -500, -495, -490, -485, -480, -475, -470, -465, -460, -455, -450, -445, -440, -435, -430, -425, -420, -415, -410, -405, -400, -395, -390, -385, -380, -375, -370, -365, -360, -355, -350, -345, -340, -335, -330, -325, -320, -315, -310, -305, -300, -295, -290, -285, -280, -275, -270, -265, -260, -255, -250, -245, -240, -235, -230, -225, -220, -215, -210, -205, -200, -195, -190, -185, -180, -175, -170, -165, -160, -155, -150, -145, -140, -135, -130, -125, -120, -115, -110, -105, -100, -95, -90, -85, -80, -75, -70, -65, -60, -55, -50, -45, -40, -35, -30, -25, -20, -15, -10, -5, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530, 535, 540, 545, 550, 555, 560, 565, 570, 575, 580, 585, 590, 595, 600, 605, 610, 615, 620, 625, 630, 635, 640, 645, 650]
let tunnel_bottom = [32.820422, 32.820422, 32.820422, 32.820422, 32.639643, 32.484253, 32.303454, 32.111542, 31.921217, 31.755179, 31.583011, 31.407192, 31.23248, 31.057783999999998, 30.883068, 30.708364, 30.498711999999998, 30.324008999999997, 30.149307, 29.974590999999997, 29.79665, 29.615484, 29.434314999999998, 29.253143, 29.108193999999997, 28.892094999999998, 28.712113, 28.532114, 28.388122, 28.172206, 27.992134999999998, 27.819046, 27.819046, 27.655765, 27.633266, 27.441589, 27.25625, 27.101357999999998, 26.896625, 26.713256, 26.56624, 26.382468, 26.198707, 26.014907, 25.831122999999998, 25.647334999999998, 25.4635149, 25.2818275, 25.105125, 24.926189899999997, 24.7463251, 24.566463, 24.386605799999998, 24.206752299999998, 24.0268875, 23.8470245, 23.7031427, 23.5491109, 23.5703679, 23.5976358, 23.624872699999997, 23.6494756, 23.6779237, 23.6983495, 23.723551299999997, 23.748750299999998, 23.7773567, 23.804984599999997, 23.831656, 23.858660299999997, 23.880405, 23.9131341, 23.9405179, 23.967979999999997, 23.9955097, 24.0230642, 24.0507074, 24.0784469, 24.1062704, 24.134172999999997, 24.1621566, 24.1902071, 24.218330899999998, 24.246515799999997, 24.274757, 24.3030601, 24.3313566, 24.3597379, 24.3882204, 24.4167486, 24.4452796, 24.4737735, 24.5011478, 24.5249715, 24.5532022, 24.587009000000002, 24.6151586, 24.6433216, 24.6715332, 24.699761, 24.7279373, 24.7560935, 24.784234599999998, 24.8123498, 24.8404394, 24.8741022, 24.9021087, 24.930079, 24.958001699999997, 24.985869, 25.0136838, 25.041441499999998, 25.0691362, 25.0967594, 25.124313899999997, 25.1517883, 25.1793561, 25.2075744, 25.2362886, 25.2654996, 25.2914205, 25.2914205, 25.3213354, 25.3463684, 25.3737274, 25.3737274, 25.3737274, 25.3737274, 25.402217399999998, 25.4148775, 25.4105134, 25.367219499999997, 25.323929399999997, 25.2806373, 25.2373453, 25.1940551, 25.1507621, 25.107470999999997, 25.0407339, 24.9192844, 24.797834899999998, 24.676389299999997, 24.5549388, 24.4334903, 24.2877527, 24.1663042, 24.044854700000002, 23.8964067, 23.7209583, 23.5455137, 23.3700648, 23.2297078, 23.054260799999998, 22.8788171, 22.7033711, 22.494144499999997, 22.3072138, 22.0993681, 21.894733, 21.7019873, 21.5097857, 21.3324647, 21.106096299999997, 20.929884, 20.7155505, 20.548701299999998, 20.3457609, 20.1480194, 19.9504571, 19.752893, 19.5553332, 19.3577681, 19.1602052, 18.9626437, 18.7650807, 18.5675173, 18.3699561, 18.1723931, 17.974598699999998, 17.7714975, 17.6044484, 17.389773299999998, 17.2132116, 17.0030635, 16.7987556, 16.6138145, 16.4168502, 16.32631557, 16.141419929999998, 15.93909834, 15.77724275, 15.574921324, 15.36025471, 15.174734099999998, 14.97870998, 14.7795019, 14.585034199999999, 13.7059623, 11.455238399999999, 11.455238399999999, 11.4552398, 12.448923599999999, 13.4254108, 13.2811199, 13.1379474, 12.998585499999999, 12.8754969, 12.7391718, 12.603747899999998, 12.453696299999999, 12.343829, 12.196488899999999, 12.081785, 11.9228337, 11.7993908, 11.6485098, 11.5146313, 11.3929787, 11.2491417, 11.1253114, 10.9948421, 10.829082999999999, 10.6990705, 10.5779901, 10.4296465, 10.294997299999999, 10.1727815, 10.032911299999999, 9.90693, 9.757387699999999, 9.6387353, 9.5046487, 9.367319599999998, 9.228716899999998, 9.0888138, 8.949410499999999, 8.8150726, 8.6802941, 8.537285399999998, 8.4046698, 8.268696799999999, 8.1338335, 8.003450399999998, 7.878254899999999, 7.734597699999999, 7.6014308999999995, 7.471318799999999, 7.334097399999999, 7.194829499999999, 7.0566410999999984, 5.323281999999999, 2.952185, 1.155911999999999, 0.0011759999999991777, 0.000990999999999076, 0.0008049999999997226, 0.0, 0.19364500000000007, 0.19364500000000007, 0.022225999999999857, 0.09620999999999924, 0.1775859999999998, 0.25789499999999954, 0.3376899999999985, 0.4149779999999996, 0.4917289999999994, 0.5690619999999988, 0.6476249999999997, 0.7245460000000001, 0.8016959999999997, 0.8814089999999997, 0.9611219999999996, 1.0408349999999995, 1.1205479999999994, 1.3867969999999996, 1.2710549999999987, 1.687498999999999, 2.1312169999999995, 2.597847999999999, 4.648135999999999]

let vent_xposition = [-715, -580, -435, -285, -130, 35, 185, 340, 490, 575]
let vent_xposition_str = ['Vent-15', 'Vent-14', 'Vent-13', 'Vent-12', 'Vent-11', 'Vent-10', 'Vent-9', 'Vent-8','Vent-7', 'Vent-6'];
console.log(tunnel_position.length);
console.log(tunnel_bottom.length);
document.addEventListener('DOMContentLoaded', function() {
    // CSV 파일을 읽어오는 함수
    function loadCSV(filename, callback) {
        Papa.parse(filename, {
            download: true,
            header: true,
            dynamicTyping: true,
            complete: function(results) {
                callback(results.data);
            }
        });
    }

    // 데이터 파싱 함수
    function parseData(data) {
        const labels = Object.keys(data[0]); // 열의 이름? 갯수?
//        const points = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] //행의 이름? 갯수?
        const parsedData = labels.map(label => data.map(row => row[label]));
        console.log(labels);

        return { labels: tunnel_position, data: parsedData };
    }
    function createLegendLoc(loc) {
        const positions = {
            'top-left': {x: 0, y: 1, xanchor: 'left', yanchor: 'top'},
            'top-center': {x: 0.1, y: 1.1, xanchor: 'center', yanchor: 'top'},
            'top-right': {x: 1, y: 1.1, xanchor: 'right', yanchor: 'top'},
            'bottom-left': {x: 0, y: 0, xanchor: 'left', yanchor: 'bottom'},
            'bottom-center': {x: 0.1, y: 0, xanchor: 'center', yanchor: 'bottom'},
            'bottom-right': {x: 0.1, y: 0, xanchor: 'right', yanchor: 'bottom'},
            'right': {x: 0.1, y: 0.1, xanchor: 'left', yanchor: 'middle'},
            'left': {x: 0, y: 0.1, xanchor: 'right', yanchor: 'middle'},
            'top': {x: 0.1, y: 0.5, xanchor: 'center', yanchor: 'bottom'}, // 위쪽 중앙
            'bottom': {x: 0.1, y: -0.2, xanchor: 'center', yanchor: 'top'}  // 아래쪽 중앙
        };
        return positions[loc] || positions['top-right']; // 기본값을 'top-right'로 설정
    }
    var currentIndex = 0;
    var numFrames = 2401; //10 -> 5
    var intervalId;
    var isPlaying = false;
    var data1, data2, data3;

    // 초기 차트 그리기
    var layout1 = {
        title: '화재 시뮬레이션 공동구 측면도',
        xaxis: { title: 'Tunnel Horizontal Position(m)', range: [-745, 650] , tickvals: vent_xposition, ticktext: vent_xposition_str}, //수정
        yaxis: { title: 'Tunnel Vertical Position(m)', range: [0, 40], tickvals: [0, 10, 20, 30, 40, 50], ticktext: ['0', '10', '20', '30', '40', '50'] },
        legend : createLegendLoc('top-right'),// 범례 배치
        showlegend: true, // 범례를 항상 표시하도록 설정
        font: {
            family: 'Arial, sans-serif',
            size: 11,
            color: '#000'
        },
    };

    var layout2 = {
        title: '화재 시뮬레이션 가시거리 및 온도 데이터',
        xaxis: { title: 'Tunnel Horizontal Position(m)',  range: [-750, 655] , tickvals: vent_xposition, ticktext: vent_xposition_str}, //수정
        yaxis: { title: 'Visibility(m),Temperature(c)', range: [0, 700], tickvals: [0, 30, 60, 100, 200, 300, 400, 500, 600, 700], ticktext: ['0', '30', '60', '100', '200', '300', '400', '500', '600', '700'] },
        legend : createLegendLoc('top-right'),// 범례 배치
        font: {
            family: 'Arial, sans-serif',
            size: 11,
            color: '#000'
        },
    };

    function createTrace1(dataset, index, name) {
        return {
            x: dataset.labels,
            y: tunnel_bottom,
            z: dataset.data[index],
            mode: 'lines+markers',
            type: 'scatter',
            name: name,
            marker: {
                color: '#408BBF',
                colorscale : 'Light24',
                size: 2
            }
        };
    }
    function createTrace2(dataset, index, name) {
        return {
            x: dataset.labels,
            y: dataset.data[index],
            mode: 'lines+markers',
            type: 'scatter',
            name: name,
            marker: {
                color: name === 'Visibility(m)' ? 'mediumvioletred' : 'darkorange',
                size: 2
            }
        };
    }

    function updateCharts(index) {
        Plotly.restyle('scatterPlot1', {'line.color': '#408BBF',
                                        'marker.size': [data1.data[index]],
                                        'marker.color': [data1.data[index]],
                                        'marker.line.width':0,
                                        'marker.colorscale':'Reds'
                                        } );
        Plotly.restyle('scatterPlot2', { y: [data2.data[index], data3.data[index]]}, [0, 1]);
    }
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = seconds % 60;

        // 분과 초를 두 자리로 표시하기 위해 문자열로 변환
        var formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        var formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

        return formattedMinutes + ':' + formattedSeconds;
    }
    function playAnimation() {
        isPlaying = true;
        playButton.textContent = 'Pause';
        intervalId = setInterval(function() {
            currentIndex++;
            if (currentIndex >= numFrames) {
                currentIndex = 0;
            }
            slider.value = currentIndex;
            sliderValue.textContent = 'Current Frame: ' + (currentIndex + 1) + ' Elapsed time(mm:ss)  '+ formatTime(currentIndex);
            updateCharts(currentIndex);
        }, 60);
    }

    function pauseAnimation() {
        isPlaying = false;
        playButton.textContent = 'Play';
        clearInterval(intervalId);
    }

    function stopAnimation() {
        isPlaying = false;
        playButton.textContent = 'Play';
        clearInterval(intervalId);
        currentIndex = 0;
        slider.value = currentIndex;
        sliderValue.textContent = 'Current Frame: ' + (currentIndex + 1);
        updateCharts(currentIndex);
    }

    var slider = document.getElementById('slider');
    var sliderValue = document.getElementById('sliderValue');
    var playButton = document.getElementById('playButton');
    var stopButton = document.getElementById('stopButton');

    playButton.addEventListener('click', function() {
        if (isPlaying) {
            pauseAnimation();
        } else {
            playAnimation();
        }
    });

    stopButton.addEventListener('click', function() {
        stopAnimation();
    });

    slider.oninput = function() {
        currentIndex = parseInt(this.value);
        sliderValue.textContent = 'Current Frame: ' + (currentIndex + 1);
        updateCharts(currentIndex);
    };

    // 초기 슬라이더 값 표시
    sliderValue.textContent = 'Current Frame: ' + (slider.valueAsNumber + 1);

    // CSV 파일 로드 및 차트 생성
    loadCSV('case24_taged_smo_fp.csv', function(results) {
        data1 = parseData(results);
        Plotly.newPlot('scatterPlot1', [createTrace1(data1, 0, 'Tunnel Floor Side View & Visibility')], layout1);

        loadCSV('case24_org_smo_fp.csv', function(results2) {
            data2 = parseData(results2);
            loadCSV('case24_org_tmp_fp.csv', function(results3) {
                data3 = parseData(results3);
                Plotly.newPlot('scatterPlot2', [createTrace2(data2, 0, 'Visibility(m)'), createTrace2(data3, 0, 'Temperature(c)')], layout2);
            });
        });
    });
});
