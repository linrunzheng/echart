import $ from "jquery"
import echarts from 'echarts'
import '../css/reset.scss'
import '../css/index.scss'

$(function(){
	$("#device-manage").load($("#device-manage").attr("address"));
	$("#device-health").load($("#device-health").attr("address"));
	
})


