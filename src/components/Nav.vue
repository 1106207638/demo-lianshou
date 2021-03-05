<template>

    <nav>
<div>
    <router-link to="/statistics" class="item" active-class="selected">首页</router-link>
    <router-link to="/statistics" class="item" active-class="selected">关于我们</router-link>
    <router-link to="/statistics" class="item" active-class="selected">我们的课程</router-link>
    <router-link to="/statistics" class="item" active-class="selected">活动园地</router-link>
    <router-link to="/statistics" class="item" active-class="selected">新闻快递</router-link>
</div>
    </nav>
</template>

<script lang='ts'>
    export default {
        name:'Nav'
    }
</script>

<style lang="scss" scoped>

</style>