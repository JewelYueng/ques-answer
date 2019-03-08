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
            <el-button @click='next()'>{{hintText}}<i class="el-icon-arrow-right el-icon--right" v-show="currentId!==5"></i></el-button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const APP_VERSION = '1-0-0' 
export default {
    name: 'Question',
    data: ()=>{
        return {
            answer: 0
        }
    },
    props: ['imageId', 'currentId'],
    computed: {
        imageSrc: ()=>{
           return require(`./../assets/1.jpg`) 
        },
        hintText: () => {
            // return this.currentId === 5 ? '提交答案' : '下一题'
            return '下一题'
        }
    },
    methods: {
        next(){
            let img = new Image()
            img.src= `./../assets/${this.imageId}.jpg`
            axios({
                method: 'POST',
                url: 'http://www.momodel.cn:8899/pyapi/apps/run/5c7f9cbf1afd9436953b06e5',
                data: {
                    app: {
                        input: '',
                        version: APP_VERSION
                    }
                },
                headers: {
                    'content-type': 'application/json'
                }
            }).then((res)=>{
                console.log(res)
                if(this.currentId === 5) {
                    this.$emit('submit', this.imageId, this.answer)
                } else {
                    this.$emit('finished', this.imageId, this.answer)
                }
            })
        },
        image2Base64(img) {

        }
    }
}
</script>

<style>
    img {
        width: 300px;
    }
</style>
