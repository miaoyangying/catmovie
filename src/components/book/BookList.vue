<template>
    <div class="book">
        <div>
            <swipe class="my-swipe">
                <swipe-item class="slide1"></swipe-item>
                <swipe-item class="slide2"></swipe-item>
                <swipe-item class="slide3"></swipe-item>
            </swipe>
            <div class="nav">
                <h3>活动</h3>
            </div>
            <div class="center" @click="goDeatil">
                <div class="content ">
                    <div class="content-img">
                        <div class="mb">
                            <div>
                                <h3>#阅无止境，一鹿相伴第二季#</h3>
                                <p>传统艺术里的中国味道</p>
                            </div>
                        </div>
                    </div>
                    <div class="content-info">
                        <div class="wz">
                            <span>来一起漫游艺术世界</span>
                            <p>117人参加 <span>已结束</span></p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
    import CommonHeader from "../common/Header.vue"
    import CommonFooter from "../common/Footer.vue"
    require('vue-swipe/dist/vue-swipe.css');
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default{
        components: {
            CommonHeader,
            CommonFooter,
            'swipe': Swipe,
            'swipe-item': SwipeItem
        },
        methods:{
            goDeatil(){
                this.$router.push('/book/bookDetail')
            }
        }
    }
</script>

<style scoped>
    .book{
        margin: 1rem 0;
    }
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }

    .slide1 {
        background-image:url('/static/img/cs.jpg');
        color: #fff;
        background-size: cover;
    }

    .slide2 {
        background-image:url('/static/img/xwzydr.jpg');
        color: #000;
        background-size: cover;
    }

    .slide3 {
        background-image:url('/static/img/ls.jpg');
        color: #fff;
        background-size: cover;
    }
    .center{
        background: rgb(247,241,237);
    }
    .content{
        height: 100%;
        width: 100%;
    }
    .content-img{
        background-image: url("/static/img/6.jpg");
        opacity: .3;
        width: auto;
        height: 2.5rem;
        padding: 0.2rem 0.2rem 0 0.2rem;
    }
    .content-img .mb{
        z-index: 1;
        /* background-color: #000; */
        /* opacity: .2; */
        width: 100%;
        height: 100%;
    }
    .content-img .mb div{
        z-index: 2;
        text-align: center;
        color: #000;
        position: relative;
    }
    .content-img .mb div h3{
        padding: 0.6rem 0 0 0;
    }
    .content-info{
        /* width: auto; */
        width:100%;
        height: 2rem;
        /* margin: 0 0.2rem 0.2rem 0.2rem; */
        padding: 0.2rem 0 0 0;
        background-color: #fff;
        border-bottom: 0.2rem solid rgb(247,241,237);
    }
    .content-info span{
        /* color: #9B9B9B; */
        color:black;
        font-size: medium;
        padding: 0.4rem;
    }
    .content-info P{
        font-size: medium;
        margin: 0.4rem;
    }
    .content-info P span {
        /* color: #fff; */
        color:#000;
        font-size: medium;
        font-weight: 500;
        padding: 2px 8px;
       /* background-color: #ccc; */
        border-radius: 3px;
        margin-left: -10px;
        margin: 0.3rem;
    }
    .content-info P:before {
        content: "\e668";
    }
    .nav{
        background-color: #fff;
    }
    .nav h3{
        text-align: center;
        border-bottom: 0.1rem solid rgb(243,240,223);
        color: #333333;
    }
</style>