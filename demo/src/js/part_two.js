import $ from "jquery"
import echarts from 'echarts'

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

	var xData = [];
    var data = [];
    var now=new Date().getTime();
    for (var i = 0; i < 24; i++) {
        xData.push(i);
        data.push(Math.floor(Math.random() * 200));
    }

	DEVICE_ONLINE_TIME_CHART.setOption(DEVICE_ONLINE_TIME_CONFIG);
    DEVICE_ONLINE_TIME_CHART.setOption({
        xAxis: {           
            data: xData
        },
        series:[
            {
                data:data
            }
        ]
    });

    DEVICE_HEALTH_TREND_CHART.setOption(DEVICE_HEALTH_TREND_CONFIG);
    DEVICE_ALARM_COUNT_CHART.setOption(ALARM_COUNT_CONFIG);
})