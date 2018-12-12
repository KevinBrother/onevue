<template>
    <div>{{xhtml}}

        tower!!!!
        <button @click="postCall">发送</button>
    </div>
</template>
<script>
    import qs from 'qs';
    var cookies = "JSESSIONID=7DEE9E9C0E366BAE1C11ADF83CDA0C28; Hm_lvt_f6097524da69abc1b63c9f8d19f5bd5b=1544503052,1544503367,1544507250,1544604570; Hm_lpvt_f6097524da69abc1b63c9f8d19f5bd5b=1544604570"
    var cookieArr = cookies.split(";")
    
    for(let i = 0, cookie; cookie = cookieArr[i++];) {
        var thisCok = cookie.split("=");
        setCookie(thisCok[0], thisCok[1]);
    }


    function setCookie(key,value,t){
        var oDate=new Date();
        oDate.setDate(oDate.getDate()+t);
        document.cookie=key+"="+value+"; expires="+oDate.toDateString();
    }	

    export default {
        name: 'tower',
        data(){
            return {
                xhtml: ""
            }
        },
        methods: {
            postCall() {
                let opt = qs.stringify({
                    "AJAXREQUEST": "_viewRoot",
                    "setAdjustFSU_Form:selAdjustDevice": "42011440600655",
                    "setAdjustFSU_Form:selAdjustType": "0406301001",
                    "setAdjustFSU_Form:adjustValue": "54.1",
                    "setAdjustFSU_Form": "setAdjustFSU_Form",
                    "autoScroll": "",
                    "javax.faces.ViewState": "j_id13",
                    "setAdjustFSU_Form:j_id762": "setAdjustFSU_Form:j_id762",
                    "AJAX:EVENTS_COUNT": 1
                })

                this.$axios.post("/business/resMge/pwMge/fsuMge/listFsu.xhtml", opt)
                .then((result) => {
                    console.log(result)
                    this.xhtml = result.data
                })
            }
        }
    }
</script>
<style></style>