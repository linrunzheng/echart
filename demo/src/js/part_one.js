import $ from "jquery"
import echarts from 'echarts'
import Mock from 'mockjs'

import '../css/reset.scss'
import '../css/part_one.scss'

import {
    USER_GROW_TREND,
    ACTIVATE_DEVICE_TREND,
    WORKING_RATE,
    ACTIVATE_RATE,
    IMPORT_RATE
} from './part_one_config.js'  

Mock.mock('/getChartData2', {
    code:"s",
    data:{
         "userTrendX|24": [
            {
                "value|+1": 0
            }
        ],
        "userTrendY|24": [
            {
                "value|1-200": 200
            }
        ],
        "workingRate":[
            {"value|1-100": 100,month:"一月","number|1-400": 400},
            {"value|1-100": 100,month:"二月","number|1-400": 400},
            {"value|1-100": 100,month:"三月","number|1-400": 400},
            {"value|1-100": 100,month:"四月","number|1-400": 400},
            {"value|1-100": 100,month:"五月","number|1-400": 400},
            {"value|1-100": 100,month:"六月","number|1-400": 400},
        ],
        "activateRate|1-100":100,
        "indicator":[            
            {"name":"一月","max|700-1000":0 },
            {"name":"二月","max|700-1000":0 },
            {"name":"三月","max|700-1000":0 },
            {"name":"四月","max|700-1000":0 },
            {"name":"五月","max|700-1000":0 },
            {"name":"六月","max|700-1000":0 },
            {"name":"七月","max|700-1000":0 },
        ], 
        "activateTrend|24": [
            {
                "value|0-400":400
            }
        ],                  
    }        
});



$(function() {
 

    const USER_GROW_TREND_CHART = echarts.init(document.querySelector("#userGrowTrend"));
    const ACTIVATE_DEVICE_TREND_CHART = echarts.init(document.querySelector("#activateDeviceTrend"));
    const WORKING_RATE_CHART = echarts.init(document.querySelector("#workingRate"));
    const ACTIVATE_RATE_CHART = echarts.init(document.querySelector("#activateRate"));
    const IMPORT_RATE_CHART = echarts.init(document.querySelector("#importRate"));


    USER_GROW_TREND_CHART.setOption(USER_GROW_TREND);
    ACTIVATE_DEVICE_TREND_CHART.setOption(ACTIVATE_DEVICE_TREND);
    IMPORT_RATE_CHART.setOption(IMPORT_RATE);




        $.ajax({
           url:'/getChartData2',
           success:function(res){
                res=JSON.parse(res);
                console.log(res)
                USER_GROW_TREND_CHART.setOption({
                    xAxis: {           
                        data: res.data.userTrendX
                    },
                    series:[
                        {
                            data:res.data.userTrendY
                        }
                    ]
                })
                WORKING_RATE_CHART.setOption(WORKING_RATE(WORKING_RATE_CHART,res.data.workingRate));
                ACTIVATE_RATE_CHART.setOption(ACTIVATE_RATE(res.data.activateRate));
                IMPORT_RATE_CHART.setOption({
                    radar:{
                        indicator:res.data.indicator
                    },
                    series:[{
                        data:[
                            {value:[355,700,500,100,378,333,448]}
                        ]
                    }]
                })       

                ACTIVATE_DEVICE_TREND_CHART.setOption({
                    xAxis:{           
                        data: res.data.userTrendX
                    },
                    series:[
                        {
                           data: res.data.userTrendY
                        },
                        {            
                            data:res.data.activateTrend
                        },
                    ]
                })      
            }
        })


})