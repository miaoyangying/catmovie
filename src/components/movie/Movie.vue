<template>
   <div>
       <common-header>
           <span slot="title">Movie</span>
       </common-header>
        <router-view></router-view>
       <common-footer></common-footer>
   </div>
</template>

<script>
    import CommonHeader from "../common/Header.vue"
    import CommonFooter from "../common/Footer.vue"
    export default{
        components: {
            CommonHeader,
            CommonFooter
        }
    }

</script>

<style scoped>

</style>