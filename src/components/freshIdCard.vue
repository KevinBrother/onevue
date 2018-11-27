<template>
    <div id="content" class="flex-center">
        <div class="modal">
            <div class="modal-header">
                <div class="modal-back" onclick="history.back();">&nbsp;<div></div></div>
                <div class="modal-title" onclick="history.back();">提示&nbsp;HINT</div>
                <div class="modal-title-tip" id="idCardTip">请将二代身份证放置身份证读卡区
                    <font class="minuteTimes" id="minuteTimes"></font>
                </div>
            </div>
            <div class="modal-content flex-center">
                <img class="id-card-tip" src="/static/img/photo.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        this.idReadFromJZT998FRD();
    },
    name: 'FreshIdCard',
    data(){
        return {
            execTimes: 30,
            millSec: 1000,
            intervalHandler: "",
            minuteTimesStr: "",
            color: ['red', 'white']
        }
    },
    methods: {
        minuteTimes() {
            if (execTimes == 0 ) {
                clearInterval(intervalHandler);
            } else {
                idReadFromJZT998FRD();
                
                // 提示操作剩余时间
                minuteTimesStr = execTimes * millSec / 1000;
                $("#minuteTimes").text("(" + minuteTimesStr + "s)");
                
                execTimes = execTimes - 1;
            }
        },
        //读取身份证号码
        idReadFromJZT998FRD() {
            console.log("execTimes is ", this.execTimes);
            console.log("execTimes is ", new Date());
            
            // @RequestMapping(value = "/idReadFromJZT998FRD", produces = "text/plain")
            // http://recp.95mst.com:8090/client/dev/idReadFromJZT998FRD
            this.$axios.get("/client/dev/idReadFromJZT998FRD")
            .then((result) => {
                console.log(this)
                let res = result.data;
                res = JSON.parse('{"status":"succ", "result":{"idCard": {"address":"吉林省吉林市船营区仿古小区25-1-302号","age":26,"agency":"吉林市公安局船营分局","birthdate":"19921006","error":null,"fingerInfo":null,"fpData":null,"fpDataLen":0,"id":null,"idCode":"320683199401202850","idPhoto":"320683199401202850.jpg","idPhoto2":"320683199401202850head.jpg","idType":"身份证","name":"宋明阳","nation":"汉","nationCode":"1","newAddress":"","sex":"男","sexCode":"1","validBegin":"20120925","validEnd":"20220925","wltData":null,"wltDataLen":0,"wzData":null,"wzDataLen":0} }}')

                // code_23: Authenticate failed!!! 身份证没有放置在上面
                if(23 == res.result.code) {
                    $("#idCardTip").html(
                        "<span style='color:" + color[parseInt(10*Math.random())] + ";'>请将二代身份证放置身份证读卡区！</span>" + 
                        "<font class='minuteTimes' id='minuteTimes'></font>"
                    );
                    return;
                } else if (typeof(res.result.code) != 'undefined') {
                    $("#idCardTip").html(
                        "<span style='color:" + color[parseInt(10*Math.random())] + ";'>" + res.result.err + "</span>" + 
                        "<font class='minuteTimes' id='minuteTimes'></font>"
                    );
                    return;
                }

                var idReadMap = {};
                var name = res.result.idCard.name;
                name = name.replace(/\s*/g,"");
                
                idReadMap.idCard = res.result.idCard.idCode;
                idReadMap.idType = res.result.idCard.idType;
                idReadMap.name = name;
                idReadMap.idPhoto = res.result.idCard.idPhoto;
                idReadMap.gender = res.result.idCard.sex;
                idReadMap.nation = res.result.idCard.nation;
                idReadMap.country = res.result.idCard.country;
                idReadMap.age = res.result.idCard.age;
               
                this.$cookies.set({"idCard": JSON.stringify(res.result.idCard)}, {path: "/"});
                console.log(this.$cookies.keys()); 

                // this.$cookies.set("name", name, {path: "/"});
                // this.$router.replace({name:'headFace'})       
            })
        }
    }
}



</script>

<!-- <style scoped src="../assets/css/base.css"> </style> -->

<style>
    @import "../assets/css/model.css";
</style>

<style scoped>
</style>