<template>
    <div>
        <h1>Hello</h1>
        <BasePara>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quis nulla vel quasi expedita, a impedit ex assumenda, minus facilis corrupti alias? Magnam officiis minima velit doloremque officia ex est.
        </BasePara>
        <BasePara>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iure nulla quidem amet officiis aspernatur reiciendis, sunt, laudantium odio soluta maiores neque officia esse, delectus qui deleniti non ab veritatis?
        </BasePara>
        <BasePara>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, suscipit.
        </BasePara>
    </div>
</template>

<script>
import BasePara from '@/components/basePara.vue'

definePageMeta({
    layout:"basic"
})

export default {
    name:"HelloPage",
    components:{
        BasePara
    }
}
</script>