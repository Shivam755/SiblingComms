<template>
    <div class="flex w-full">
        <SideBar @change-title="changeTitle" />
        <div class="w-full flex flex-col ">
            <Title :title="title"  />
            <slot />
        </div>
    </div>

</template>

<script>
import SideBar from '@/components/sidebar.vue'
import Title from '@/components/titleBar.vue'

export default {
    name:"BasicLayout",
    components:{
        SideBar,
        Title
    },
    data(){
        return {
            title: ""
        }
    },
    methods:{
        changeTitle(title){
            // console.log(title)
            this.title = title.toUpperCase()
            console.log(title)
            // this.$router.push(title)
        }
    }
}
</script>