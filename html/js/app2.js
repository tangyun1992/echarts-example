$(document).ready(function() {


    var myChart = echarts.init(document.getElementById("mapChart"));



    var graph = {};
    var categories = [
        { name: "管理员", icon: "image://./imgs/admin.svg" },
        { name: "业务系统", icon: "image://./imgs/app.svg" },
        { name: "DB系统", icon: "image://./imgs/db.svg" },
        { name: "互联网接入", icon: "image://./imgs/ie.svg" }
    ];

    graph["nodes"] = (function(n) {

        var arr = [],
            v,
            o;
        var index = 0;
        do {

            v = Math.round(Math.random() * 20)

            o = {
                    id: index,
                    name: "业务系统-" + index,
                    symbol: categories[1].icon,
                    symbolSize: v * 1.5 + 8,
                    value: v,
                    label: {
                        normal: {
                            show: v > 10
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#00ffff"
                        }
                    },
                    category: "业务系统"
                }
                //设置USER系统
            if (index > 6 && index < 11) {
                o.name = "Admin-" + index;
                o.symbolSize = 32;
                o.category = categories[0].name;
                o.symbol = categories[0].icon;
                o.label = {
                    normal: {
                        show: true,
                        textStyle: {
                            color: "#80ff81"
                        }
                    }
                }
            }
            //设置Internet接入
            if (index == 6) {
                o.name = categories[3].name;
                o.itemStyle = {
                    normal: {
                        color: "#ff0000"
                    }
                };
                o.label = {
                    normal: {
                        show: true
                    }
                }
                o.symbolSize = 32;
                o.category = categories[3].name;
                o.symbol = categories[3].icon;
            }
            //设置DB系统
            if (index < 6) {
                o.name = "DB-" + index;
                o.symbolSize = 32;
                o.category = categories[2].name;
                o.symbol = categories[2].icon;
            }

            arr.push(o);
            index++;


        } while (index < n)

        return arr;
    })(40);

    graph["links"] = (function(n) {
        var arr = [];
        for (var i = 0; i < n - 8; i++) {
            arr.push({
                id: i,
                source: Math.round(Math.random() * n / 2) + 6,
                target: Math.round(Math.random() * 5)
            })
        }

        for (var j = n - 8; j < n; j++) {
            arr.push({
                id: j,
                source: 6,
                target: Math.round(Math.random() * 6)
            });
        }
        return arr;

    })(200);


    option = {
        title: {
            text: '',
            subtext: '',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function(a) {
                //return a.name;
            })
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: '',
            type: 'graph',
            layout: 'circular',
            circular: {
                rotateLabel: true
            },
            data: graph.nodes,
            links: graph.links,
            categories: categories,
            roam: true,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.3
                }
            }
        }]
    };

    myChart.setOption(option);
    ///}, 'xml');
});