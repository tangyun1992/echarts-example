$(document).ready(function() {


    var mapChart = echarts.init(document.getElementById("mapChart"));

    var symbols = {
        "red": 'image: //imgs/red.svg',
        "blue": 'image: //imgs/blue.svg',
        "yellow": 'image: //imgs/yellow.svg'
    }


    mapChart.setOption(option = {
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    areaColor: 'rgba(0,0,0,0)',
                    borderColor: 'rgba(0,0,0,0)'
                }
            }
        },
        series: [{
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                period: 4,
                scale: 2.5,
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },

            symbolSize: '40',
            data: [{
                name: '深圳分公司',
                value: [125.8154, 44.2584, 1],
                symbol: symbols["blue"]

            }]
        }]
    });

});