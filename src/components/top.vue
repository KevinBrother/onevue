<template>
    <div id="top">
        <div class="top-left"><img src="/static/img/logo.png"/></div>
        <div class="top-right">
            <div class="date">
                <span>{{date}}2018.11.13 16:52:14 星期二 </span>
			</div>
			<router-link  class="back-to-index" to="/">
				<img src="/static/img/index.png"/>
				<div>返回首页</div>
			</router-link>
        </div>
    </div>    
</template>

<script>
export default {
	mounted() {
		console.log(this)
		this.getNowFormatDate();
	},
	name: 'top',
		data () {
		return {
			date: ""
		}
	},
	methods: {
		addZero(time) {
			if (time < 10) {
				time = "0" + time;
			}
			return time.toString();
		},

		getNowFormatDate() {
			console.log("------------------")
			console.log(this)
			var date = new Date();
			
			var hous = this.addZero(date.getHours());
			var min = this.addZero(date.getMinutes());
			var sec = this.addZero(date.getSeconds());
			
			var cn = ["零","一","二","三","四","五","六","七","八","九"]; 
			var s = [];
			
			var YY = date.getFullYear().toString(); 
			for (var i=0; i<YY.length; i++) {
				if (cn[YY.charAt(i)]) {
					s.push(cn[YY.charAt(i)]);
				} else {
					s.push(YY.charAt(i)); 
				}
			}
			
			s.push("年");
			
			var MM = date.getMonth() + 1; 
			if (MM<10) {
				s.push(cn[MM]); 
			} else if (MM<20) {
				s.push("十" + cn[MM % 10]); 
			}
			
			MM = addZero(MM);
			s.push("月");

			var DD = date.getDate(); 
			if (DD<10) {
				s.push(cn[DD]);
			} else if (DD<20) {
				s.push("十" + cn[DD% 10]); 
			} else {
				s.push("二十" + cn[DD% 10]); 
			}
			
			DD = addZero(DD);
			s.push("日"); 
			
			var dateStr = YY+"-"+MM+"-"+DD;
			var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
			var myDate = new Date(Date.parse(dateStr.replace(/-/g, "/"))); 
			
			/*console.log(s.join('') + weekDay[myDate.getDay()]);*/
			
			var week = weekDay[myDate.getDay()];
			
			dateStr = YY + "." + MM + "." + DD + " " + hous + ":" + min + ":" + sec + " " + week;
			this.date = dateStr;
		}
	}
}
</script>

<style>
#top {
	display: flex;
	justify-content: space-between;
	font-size: 1.33rem;
}

.top-left {
	width: 18rem;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.top-left img{
	width: 174px;
	height: 32px;
}

.top-right {
	height: 100%;
	flex: auto;
	display: flex;
	justify-content: flex-end;
}

.date {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Roboto-Medium;
    font-size: 1.66rem;
    font-weight: bold;
    color: #4A4A4A;
}

.back-to-index {
	font-family: PingFangSC-Regular;
	color: #333333;
	width: 7rem;
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
}
</style>