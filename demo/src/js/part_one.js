import $ from "jquery"
import echarts from 'echarts'

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
    USER_GROW_TREND_CHART.setOption({
        xAxis: {           
            data: xData
        },
        series:[
            {
                data:data
            }
        ]
    })


    ACTIVATE_DEVICE_TREND_CHART.setOption(ACTIVATE_DEVICE_TREND);
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


    WORKING_RATE_CHART.setOption(WORKING_RATE(WORKING_RATE_CHART,[
            {value:15,month:"一月",number:"100"},
            {value:30,month:"二月",number:"101"},
            {value:45,month:"三月",number:"102"},
            {value:60,month:"四月",number:"103"},
            {value:75,month:"五月",number:"104"},
            {value:90,month:"六月",number:"105"},
        ]));
    ACTIVATE_RATE_CHART.setOption(ACTIVATE_RATE);
    IMPORT_RATE_CHART.setOption(IMPORT_RATE);


})