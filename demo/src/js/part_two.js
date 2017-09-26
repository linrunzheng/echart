import $ from "jquery"
import echarts from 'echarts'
import Mock from 'mockjs'

import '../css/reset.scss'
import '../css/part_two.scss'

import {
	DEVICE_ONLINE_TIME_CONFIG,
	DEVICE_HEALTH_TREND_CONFIG,
	ALARM_COUNT_CONFIG
} from './part_two_config.js'  

$(function(){
	const DEVICE_ONLINE_TIME_CHART=echarts.init(document.querySelector("#device_online_time"));
	const DEVICE_HEALTH_TREND_CHART=echarts.init(document.querySelector("#device_health_trend"));
	const DEVICE_ALARM_COUNT_CHART=echarts.init(document.querySelector("#device_alarm_count"));

    DEVICE_ONLINE_TIME_CHART.setOption(DEVICE_ONLINE_TIME_CONFIG);
    DEVICE_HEALTH_TREND_CHART.setOption(DEVICE_HEALTH_TREND_CONFIG);
   

    Mock.mock('/online_time', {
        code:"s",
        data:{
            "onlineTime|24": [1],
            "onlineValue|24": [
                {
                    "value|1-200": 200
                }
            ],
            "healthRrend|24": [10000*Math.random()],  
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



    $.ajax({
        url:'/online_time',
        success:function(res){
           res=JSON.parse(res);
           if(res.code=="s"){
            console.log(res)
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
            }          
        }
    })

 



   


	
   

   
    
})

