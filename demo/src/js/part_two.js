import $ from "jquery"
import echarts from 'echarts'
import Mock from 'mockjs'
import {$$,$id} from './util.js'


import '../css/reset.scss'
import '../css/part_two.scss'

import {
	DEVICE_ONLINE_TIME_CONFIG,
	DEVICE_HEALTH_TREND_CONFIG,
	ALARM_COUNT_CONFIG
} from './part_two_config.js'  

Mock.mock('/getChartData', {
    code:"s",
    data:{
        "onlineTime|24": [
            {
                "value|+1": 0
            }
        ],
        "onlineValue|24": [
            {
                "value|1-200": 200
            }
        ],
        "healthRrend|10": [10000*Math.random()],  
        "alarmTime":[
            {
                "name":"通知",
                "rate|1-100":1
            },
            {
                "name":"轻微",
                "rate|1-100":1
            },
            {
                "name":"严重",
                "rate|1-100":1
            }
        ]                          
    }        
});

$(function(){
	const DEVICE_ONLINE_TIME_CHART=echarts.init($id("device_online_time"));
	const DEVICE_HEALTH_TREND_CHART=echarts.init($id("device_health_trend"));
	const DEVICE_ALARM_COUNT_CHART=echarts.init($id("device_alarm_count"));

    DEVICE_ONLINE_TIME_CHART.setOption(DEVICE_ONLINE_TIME_CONFIG);
    DEVICE_HEALTH_TREND_CHART.setOption(DEVICE_HEALTH_TREND_CONFIG);
   

    $.ajax({
        url:'/getChartData',
        success:function(res){
           res=JSON.parse(res);
           if(res.code=="s"){
                DEVICE_ONLINE_TIME_CHART.setOption({
                    xAxis: {           
                        data:res.data.onlineTime
                    },
                    series:[
                        {
                            data:res.data.onlineValue
                        }
                    ]
                });

                DEVICE_HEALTH_TREND_CHART.setOption({                  
                    series:[
                        {
                            data:res.data.healthRrend
                        }
                    ]
                });

                DEVICE_ALARM_COUNT_CHART.setOption(ALARM_COUNT_CONFIG(DEVICE_ALARM_COUNT_CHART,res.data.alarmTime));
                
                return function(){
                     $$('.pie').forEach(function(pie) {
                        var p = parseFloat(pie.textContent);
                        var NS = "http://www.w3.org/2000/svg";
                        var svg = document.createElementNS(NS, "svg");
                        var circle = document.createElementNS(NS, "circle");
                        var title = document.createElementNS(NS, "title");
                        
                        circle.setAttribute("r", 16);
                        circle.setAttribute("cx", 16);
                        circle.setAttribute("cy", 16);
                        circle.setAttribute("stroke-dasharray", p + " 100");
                        
                        svg.setAttribute("viewBox", "0 0 32 32");
                        title.textContent = pie.textContent;
                        pie.textContent = '';
                        svg.appendChild(title);
                        svg.appendChild(circle);
                        pie.appendChild(svg);
                    }); 
                }();
            }          
        }
    })   


     
})

