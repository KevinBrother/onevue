<template>
    <div id="content" class="flex-center">
        <div class="modal photo-modal">
            <div class="modal-header">
                <div class="modal-back" onclick="history.back();">&nbsp;<div></div></div>
                <div class="modal-title" onclick="history.back();">提示&nbsp;HINT</div>
                <div class="modal-title-tip">拍照时请目视屏幕上方摄像头(滚动效果)</div>
            </div>
            <div class="modal-content">
                <div class="column-left imgArea">
                    <div class="photo-tip">摄像区</div>
                    <div class="photo">
                        <video style="position: absolute;" id="video" width="215" height="215" preload autoplay loop muted></video>
                        <canvas style="position: absolute;" id="canvas" width="215" height="215"></canvas>
                    </div>
                </div>
                <div class="column-right imgArea">
                    <div class="photo-tip">抓拍成像区</div>
                    <div class="photo">
                        <canvas id="videoCanvas" width="200" height="160" style="display: none;"></canvas>
                        <div id="canvasToImg" style="position: relative; left: 19px; top: 28px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        },
        name: 'headFace',
        data(){
            return {
                color: ['red', 'white']
            }
        }
    }
</script>

<style>
    @import "../assets/css/model.css";
</style>
