<template>
    <div class="flex">
        <div id="navList" class="flex xl:flex flex-col justify-start h-screen text-xl md:text-2xl xl:text-5xl bg-indigo-800 text-indigo-50 hidden">
            <NuxtLink @click="changeTitle('Home')" class="hover:bg-indigo-600 hover:underline p-4 md:p-6 xl:p-10" to="/">Home</NuxtLink>
            <NuxtLink @click="changeTitle('Hello')" class="hover:bg-indigo-600 hover:underline p-4 md:p-6 xl:p-10" to="/hello">Hello</NuxtLink>
            <NuxtLink @click="changeTitle('Demon')" class="hover:bg-indigo-600 hover:underline p-4 md:p-6 xl:p-10" to="/demon">Demon</NuxtLink>
            <NuxtLink @click="changeTitle('About')" class="hover:bg-indigo-600 hover:underline p-4 md:p-6 xl:p-10" to="about">About</NuxtLink>
        </div>
        <button class="bg-indigo-800 text-indigo-50 md:h-16 md:w-16 h-10 w-10 p-2 xl:hidden" @click.prevent="changeIcon">
            <svg  class="md:w-12 md:h-12 w-6 h-6 xl:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h20M4 12h20M4 18h20" />
            </svg>
        </button>
    </div>

</template>

<script>
// import { eventBus } from "~~/plugins/eventBus.vue"

export default {
    name:"SideBar",
    methods:{
        changeIcon(){
            document.getElementById("navList").classList.toggle("hidden")
        },
        changeTitle(title){
            this.$emit("change-title", title )
            // this.$bus.$emit("change-title", title)
        }
    },
    created(){
        let pathArray = this.$route.path.split("/")
        // console.log(pathArray[pathArray.length-1])
        if (pathArray[pathArray.length-1]===""){
            this.changeTitle("Home")
        }else{
            this.changeTitle(pathArray[pathArray.length-1].toUpperCase())
        }
        // changeTitle();
    }
}
</script>