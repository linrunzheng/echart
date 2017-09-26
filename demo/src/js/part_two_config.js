/*设备在线时长统计*/
export const DEVICE_ONLINE_TIME_CONFIG = {
    title: {
        text: '设备在线时长统计',
        left: "center",
        top: "1%",
        textStyle: {
            color: "#fff",
            fontSize: 20
        }
    },
    grid: {
        top: "20%",
        left: "10%",
        right: "5%",
        bottom: "18%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        interval: 2,
        min: 0,
        max: 24,
        offset: 10,
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#50acfe']
            }
        },
        axisLabel: {
            textStyle: {
                color: '#9ea3ab',
                fontSize: '16'
            },
        },
        axisLine: {
            lineStyle: {
                color: "rgba(0,0,0,0)"
            }
        },

        data: []
    },

    yAxis: {
        boundaryGap: false,
        offset: 15,
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        splitLine: {
            lineStyle: {
                color: ['#50acfe']
            }
        },
        axisLabel: {
            textStyle: {
                color: '#9ea3ab',
                fontSize: '16'
            },
        },
    },
    series: [{
        type: 'line',
        itemStyle: {
            normal: {
                color: '#222',
                lineStyle: {
                    color: '#50acfe'
                },
                borderColor: '#50acfe',
                borderWidth: 2
            }
        },
        symbol: 'circle',
        showAllSymbol: true,
        symbolSize: 10,
        data: []
    }]
};

export const DEVICE_HEALTH_TREND_CONFIG = {
    title: {
        text: '设备健康状态趋势',
        left: "center",
        top: "1%",
        textStyle: {
            color: "#fff",
            fontSize: 20
        }
    },
    grid: {
        top: "20%",
        left: "10%",
        right: "5%",
        bottom: "18%",
    },
    xAxis: {
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", ],
        offset: 10,
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
        axisLine: {
            lineStyle: {
                color: "#0e6885"
            }
        },
    },
    yAxis: {
        axisLabel: {
            textStyle: {
                color: '#fff',
            },
        },
        axisLine: {
            lineStyle: {
                color: "#0e6885"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#0a4d65']
            }
        },
    },
    series: [{
        type: 'bar',
        barWidth: '25',
        data: [7000, 1200, 5000, 3000, 2000, 6000, 5600, 3333, 5012, 9000],
        itemStyle: {
            normal: {
                color: '#356da9',
                borderWidth: 2,
                borderColor: "#072f5b"
            }
        }
    }, ]
};

/*激活比例配置*/
export var ALARM_COUNT_CONFIG = function(chart, data) {
    const colors = ["#3a7985", "#ac484b", "#528e69"];
    let series = [];
    for (let i = 0; i < data.length; i++) {

        series.push({
            name: data[i].name,
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '38%'],
            center: [(30 * (i + 1) - 10) + "%", "55%"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            markPoint: {
                symbolOffset: ["-30%", 0],
                data: [{
                    symbolSize: 15,
                    symbolRotate: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    x: (30 * (i + 1) - 10) + "%",
                    y: "90%",
                    label: {
                        normal: {
                            position: 'center',
                            formatter: function() {
                                return data[i].rate + "%"
                            },
                            position: "center",
                            textStyle: {
                                color: "#fff",
                                fontSize:15
                            }
                        }
                    },
                }]
            },
            data: [{
                    value: data[i].rate,
                    itemStyle: {
                        normal: {
                            color: colors[i]
                        }
                    },
                },
                {
                    value: 100 - data[i].rate,
                    itemStyle: {
                        normal: {
                            color: "transparent"
                        }
                    },
                }
            ]
        });
        series.push({
            type: 'pie',
            radius: ['42%', '44%'],
            center: [(30 * (i + 1) - 10) + "%", "55%"],
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: "#2c4877"
                }
            },
            data: [
                { value: 100 },
            ]
        })
    }

    return {
        title: {
            text: '设备告警统计',
            left: "center",
            textStyle: {
                color: "#fff",
                fontSize: 20
            }
        },
        color: colors,
        legend: {
            orient: "vertical",
            left: "0%",
            top: "0%",
            textStyle: {
                color: "#fff"
            },
            data: [ "通知","轻微", "严重"],
        },
        series
    }

};