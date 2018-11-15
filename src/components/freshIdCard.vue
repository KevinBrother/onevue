<template>
    <div id="content">
        <div class="main">
            <div class="modal">
                <div class="modal-header">
                    <div class="modal-back" onclick="history.back();">&nbsp;<div></div></div>
                    <div class="modal-title" onclick="history.back();">提示&nbsp;HINT</div>
                    <div class="modal-title-tip" id="idCardTip">请将二代身份证放置身份证读卡区
                        <font class="minuteTimes" id="minuteTimes"></font>
                    </div>
                </div>
                <div class="modal-content">
                    <img class="id-card-tip" src="/new/image/photo.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'FreshIdCard',
    data(){
        return {
        }
    }
    }
</script>

<style scoped>
    #content {
        background-color: yellow;
    }
</style>