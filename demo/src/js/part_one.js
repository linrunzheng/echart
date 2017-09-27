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



$(function() {

    var xData = [];
    var data = [];
    var now=new Date().getTime();
    for (var i = 0; i < 24; i++) {
        xData.push(i);
        data.push(Math.floor(Math.random() * 200));
    }

    const USER_GROW_TREND_CHART = echarts.init(document.querySelector("#userGrowTrend"));
    const ACTIVATE_DEVICE_TREND_CHART = echarts.init(document.querySelector("#activateDeviceTrend"));
    const WORKING_RATE_CHART = echarts.init(document.querySelector("#workingRate"));
    const ACTIVATE_RATE_CHART = echarts.init(document.querySelector("#activateRate"));
    const IMPORT_RATE_CHART = echarts.init(document.querySelector("#importRate"));


    USER_GROW_TREND_CHART.setOption(USER_GROW_TREND);
    ACTIVATE_DEVICE_TREND_CHART.setOption(ACTIVATE_DEVICE_TREND);
    IMPORT_RATE_CHART.setOption(IMPORT_RATE);


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
            
            
                {"name:"一月",max|700-1000":0 },
                {"name:"二月",max|700-1000":0 },
                {"name:"三月",max|700-1000":0 },
                {"name:"四月",max|700-1000":0 },
                {"name:"五月",max|700-1000":0 },
                {"name:"六月",max|700-1000":0 },
                {"name:"七月",max|700-1000":0 },
            ],                     
        }        
    });

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
            }
        })


   


   
    ACTIVATE_DEVICE_TREND_CHART.setOption({
        xAxis: {           
           data: data.map((item)=>{
               return ((item+Math.floor(Math.random()*50))*(Math.random()-0.5)).toFixed(2)
          })
        },
        series:[
            {
                data: data.map((item)=>{
                     return ((item+Math.floor(Math.random()*50))*(Math.random()-0.5)).toFixed(2)
                })
            },
            {            
                data: data.map((item)=>{
                     return ((item+Math.floor(Math.random()*50))*(Math.random()-0.5)).toFixed(2)
                })
            },
        ]
    })


        


})