/*用户增长趋势配置*/
export const USER_GROW_TREND = {
    title: {
        text: '用户增长趋势',
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 20
        }
    },
    grid: {
        top: "30%",
        left: "8%",
        right: "0%",
        bottom: "10%",
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

/*激活设备趋势配置*/
export const ACTIVATE_DEVICE_TREND = {
    title: {
        text: '激活设备趋势',
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 20
        }
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        top: "15%",
        left: 10,

        data: [{
                name: 'x轴',
                textStyle: {
                    color: "#12b480",

                }
            },
            {
                name: 'y轴',
                textStyle: {
                    color: '#fff'
                }
            },

        ]
    },
    grid: {
        top: "30%",
        bottom: "10%",
        left: "8%",
        right: "0%"
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        interval: 2,
        min: 0,
        max: 24,
        offset: 10,
        axisLabel: {
            textStyle: {
                color: '#9ea3ab',
                fontSize: '16'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#19b8e1'
            }
        },
        data: []
    },

    yAxis: {
        boundaryGap: false,
        offset: 15,
        type: 'value',
        axisLabel: {
            textStyle: {
                color: '#9ea3ab',
                fontSize: '16'
            },
        },
        axisLine: {
            lineStyle: {
                color: '#19b8e1'
            }
        },
        splitLine: {
            //  改变轴线颜色
            lineStyle: {
                // 使用深浅的间隔色
                color: ['#107593']
            }
        },

    },
    series: [{
            type: 'line',
            name: "x轴",
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#12b480'
                        }, {
                            offset: 1,
                            color: '#10b0b3'
                        }],
                    }

                }
            },
            symbolSize: 8,
            data: []
        },
        {
            type: 'line',
            name: "y轴",
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#567daa'
                        }, {
                            offset: 1,
                            color: '#fff'
                        }],
                    }

                }
            },
            symbolSize: 8,
            data: []
        },

    ]
};

/*最近半年开工率统计*/
export var WORKING_RATE = function(chart,data) {
    let PIE_LIST = [];
    const colorList = [
        {
            start: "rgba(250,105,105,1)",
            middle: "rgba(65,37,44,0.5)",
            end: "rgba(37,26,35,1)"
        },
        {
            start: "rgba(223,103,251,1)",
            middle: "rgba(39,53,80,0.5)",
            end: "rgba(16,35,52,1)"
        },
        {
            start: "rgba(231,246,38,1)",
            middle: "rgba(28,56,55,0.5)",
            end: "rgba(12,32,42,1)"
        },
        {
            start: "rgba(95,180,199,1)",
            middle: "rgba(28,56,68,0.5)",
            end: "rgba(13,33,44,1)"
        },
        {
            start: "rgba(249,155,33,1)",
            middle: "rgba(55,45,28,0.5)",
            end: "rgba(46,39,28,1)"
        },
        {
            start: "rgba(82,227,32,1)",
            middle: "rgba(23,71,31,0.5)",
            end: "rgba(16,50,29,1)"
        },
    ]

    for (let i = 0; i < 6; i++) {
        PIE_LIST.push({
            type: 'pie',
            startAngle: 90,
            center: [((100 / 6) * (i + 1) - 8) + "%", '45%'],
            radius: ['30%', '35%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            markPoint: {
                data: [{
                    symbolSize: 15,
                    symbolRotate: 0,
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    x: chart.getWidth() * (i + 0.5) / 6,
                    y: "75%",
                    label: {
                        normal: {
                            position: 'center',
                            formatter: function(params) {
                                return data[i].month + "\n\n" + data[i].number
                            },
                            position: "center",
                            textStyle: {
                                color: "#fff"
                            }
                        }
                    },
                }]
            },
            data: [{
                name: "一月",
                value: data[i].value,
                label: {
                    normal: {
                        formatter: '{d}%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '13',
                            color: '#fff'
                        },
                    }
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: colorList[i].start
                            }, {
                                offset: 1,
                                color: colorList[i].middle
                            }],
                        }
                    }
                }
            }, {
                value: 100-data[i].value,
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0,
                            colorStops: [{
                                    offset: 0,
                                    color: colorList[i].end
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0,0,0,0)'
                                }
                            ],
                        }
                    }
                }
            }]
        }, )
    }



    return {
        grid: {
            left: "10%",
            right: "10%"
        },
        title: {
            text: '最近半年开工率统计',
            left: "center",
            textStyle: {
                color: "#fff",
                fontSize: 20
            },
            top: "5%"
        },
        series: PIE_LIST
    }
}

/*激活比例配置*/
export const ACTIVATE_RATE = {
    title: {
        text: '激活比例',
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 20
        }
    },
    legend: {
        orient: "vertical",
        left: "8%",
        top: "15%",
        data: [{
                name: "未激活设备",
                textStyle: {
                    color: "#fff"
                },
            },
            {
                name: "已激活设备",
                textStyle: {
                    color: "#fff"
                }
            }
        ]
    },
    series: [{
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        selectedMode: 'single',
        selectedOffset: -5,
        label: {
            normal: {
                position: 'inside',
                formatter: "{d}%"
            }
        },
        data: [{
            value: 10,
            name: '未激活设备',
            selected: true,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0,
                            color: '#6c3b72'
                        }, {
                            offset: 1,
                            color: '#8c5e8d'
                        }],
                    }
                },

            }
        }, {
            value: 90,
            name: '已激活设备',
            label: {
                normal: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.4,
                        colorStops: [{
                            offset: 0,
                            color: '#af4bd5'
                        }, {
                            offset: 1,
                            color: '#8324d2'
                        }]
                    }
                }
            }
        }]
    }]
};


/*近半年设备进货率配置*/
export const IMPORT_RATE = {
    title: {
        text: '近半年设备进货率',
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 20
        }
    },

    radar: {
        name: {
            textStyle: {
                color: '#1eb9e2',
            }
        },
        splitArea: {
            areaStyle: {
                color: "transparent"

            }
        },
        splitLine: {
            lineStyle: {
                color: "#17a5ca"
            }
        },
        axisLine: {
            lineStyle: {
                color: "#17a5ca"
            }
        },
        indicator: [
            { name: '一月', max: 50000 },
            { name: '二月', max: 50000 },
            { name: '三月', max: 50000 },
            { name: '四月', max: 50000 },
            { name: '五月', max: 50000 },
            { name: '六月', max: 50000 },
            { name: '七月', max: 50000 },
        ],
        center: ['50%', '60%'],
        radius: 88
    },
    series: [{
        type: 'radar',
        itemStyle: {
            normal: {
                color: '#004ae0',
            }
        },
        areaStyle: {
            normal: {
                color: "#19bce5"
            }
        },
        lineStyle: {
            normal: {
                color: "#004ae0"
            }
        },
        symbol: "circle",
        symbolSize: 10,
        data: [{
            value: [4300, 10000, 28000, 35000, 50000, 19000],
        }]
    }]
}