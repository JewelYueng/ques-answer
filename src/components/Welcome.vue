<template>
    <div class="welcome">
        <el-button @click="start">开始做题</el-button>
    </div>
</template>

<script>

export default {
    name: 'Welcome',
    data: ()=>{
        return {
        }
    },
    methods: {
        start() {
            this.$router.push('/questions')
        }
    }
}
</script>

