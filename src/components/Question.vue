<template>
    <div>
        <div class='question-panel'>
            <img class='image-container' :src='imageSrc' />
        </div>
        <el-radio-group v-model='answer'>
            <el-radio label='1'>Bact</el-radio>
            <el-radio label='2'>Fungal</el-radio>
            <el-radio label='3'>Virus</el-radio>
            <el-radio label='4'>Other</el-radio>
        </el-radio-group>
        <div>
            <el-button @click='next()'>{{currentId === 4 ? '提交答案' : '下一题'}}<i class="el-icon-arrow-right el-icon--right" v-show="currentId!==5"></i></el-button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
const APP_VERSION = '1-0-0' 
export default {
    name: 'Question',
    data: ()=>{
        return {
            answer: 0
        }
    },
    props: ['imageSrc', 'currentId'],
    methods: {
        getBase64Image(img) {
            let canvas = document.createElement("canvas")
            canvas.width = img.width
            canvas.height = img.height
            var ctx = canvas.getContext("2d")
            ctx.drawImage(img, 0, 0, img.width, img.height)
            var dataURL = canvas.toDataURL("image/jpg")
            canvas = null
            // return dataURL 
            return dataURL.replace("data:image/png;base64,", "")
        },
        next(){
            const _this = this
            let img = new Image()
            img.src = this.imageSrc
            img.onload = () => { 
                let imgCode = _this.getBase64Image(img)
                if(_this.currentId === 4) {
                    _this.$emit('submit', _this.answer)
                } else {
                    _this.$emit('finished', _this.answer)
                }
                // axios({
                //     method: 'POST',
                //     url: 'http://www.momodel.cn:8899/pyapi/apps/run/5c7f9cbf1afd9436953b06e5',
                //     data: {
                //         app: {
                //             input: imgCode,
                //             version: APP_VERSION
                //         }
                //     },
                //     headers: {
                //         'content-type': 'application/json'
                //     }
                // }).then((res)=>{
                //     console.log(res)
                //     if(_this.currentId === 5) {
                //         _this.$emit('submit', _this.imageId, _this.answer)
                //     } else {
                //         _this.$emit('finished', _this.imageId, _this.answer)
                //     }
                // })
            }
            
        }
    }
}
</script>

<style>
    img {
        width: 300px;
    }
</style>
