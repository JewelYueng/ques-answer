<template>
    <div  class='question-panel'>
        <div class='image-container'>
            <img  :src='`@assets/${imageSrc}`' />
        </div>
        <el-radio-group v-model='answer' class="group">
            <el-radio label='1' border>Bact</el-radio>
            <el-radio label='2' border>Fungal</el-radio>
            <el-radio label='3' border>Virus</el-radio>
            <el-radio label='4' border>Other</el-radio>
        </el-radio-group>
        <div>
            <el-button @click='next()' type="primary" :disabled="answer===0">{{currentId === 4 ? '提交答案' : '下一题'}}<i class="el-icon-arrow-right el-icon--right" v-show="currentId!==4"></i></el-button>
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
            return dataURL 
            // return dataURL.replace("data:image/png;base64,", "")
        },
        next(){
            if(this.answer !== 0) {
                if(this.currentId === 4) {
                    this.$emit('submit', this.answer)
                } else {
                    this.$emit('finished', this.answer)
                }
                this.answer = 0
            }
            // url http://www.momodel.cn:8899/pyapi/apps/run/5c7f9cbf1afd9436953b06e5
            // const _this = this
            // let img = new Image()
            // img.src = this.imageSrc
            // img.crossOrigin = "Anonymous"
            // img.onload = () => { 
            //     let imgCode = _this.getBase64Image(img)
            //     if(_this.currentId === 4) {
            //         _this.$emit('submit', _this.answer)
            //     } else {
            //         _this.$emit('finished', _this.answer)
            //     }
            //     let payload = JSON.stringify({app: {
            //                 input: {img: imgCode}
            //             },
            //             version: APP_VERSION})
            //     axios({
            //         method: 'POST',
            //         url: 'http://www.momodel.cn:8899/pyapi/apps/run/5bcebdf41afd942c14ddd6e0',
            //         data: {
            //             payload
            //         },
            //         headers: {
            //             'content-type': 'application/json;charset=UTF-8',
            //         }
            //     }).then((res)=>{
            //         console.log(res)
            //         if(_this.currentId === 5) {
            //             _this.$emit('submit', _this.answer)
            //         } else {
            //             _this.$emit('finished', _this.answer)
            //         }
            //     })
            // }
            
        }
    }
}
</script>

<style>
    img {
        width: 100%;
        line-height: 100%;
    }
    .image-container {
        width: 400px;
        height: 350px;
        margin: 10px auto;
    }
    .group {
        margin: 30px;
    }
</style>
