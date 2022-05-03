<template>
    <h1 class="text-3xl md:text-5xl xl:text-8xl w-full h-10 md:h-16 xl:h-36 xl:p-5 md:p-2 text-center bg-indigo-800 text-indigo-50">{{title}}</h1>
</template>

<script>
// import eventBus from '~~/plugins/eventBus.vue'

export default {
    name:'Title',
    props:{
        title:{
            type:String,
            default:"Page"
        }
    },
    // data(){
    //     return{
    //         title:""
    //     }
    // },
    // created:()=>{
    //     this.$bus.$on(
    //         'change-title',
    //         (title)=>{
    //             this.title = title
    //         }
    //     )
    // }
}
</script>