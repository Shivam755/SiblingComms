<template>
    <div>
        <h1>Index</h1>
        <BasePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sem diam, ultricies sit amet ex non, dapibus luctus ante. Integer scelerisque ante arcu, eu dictum ante fermentum a. Morbi vestibulum, arcu nec placerat bibendum, purus urna finibus velit, in commodo lectus orci non purus. Ut facilisis felis cursus feugiat condimentum. Duis sodales accumsan risus, ullamcorper vulputate enim finibus non. Mauris quis tincidunt tortor. Duis dignissim nisi ut diam scelerisque viverra. Integer odio risus, pellentesque at viverra et, luctus et dolor.
        </BasePara>
        <BasePara>
            Vivamus laoreet imperdiet maximus. Curabitur vehicula mattis egestas. Sed vel pretium sapien. Pellentesque molestie leo eget venenatis iaculis. Donec eget leo at lorem feugiat ullamcorper vel quis dolor. Pellentesque leo massa, faucibus vel leo sed, fringilla vulputate urna. Cras vitae justo erat. In placerat tortor ac sapien accumsan auctor. Morbi malesuada feugiat tellus nec egestas.
        </BasePara>
        <BasePara>
            Fusce ut ex lorem. Phasellus scelerisque metus quis elit iaculis, eu bibendum leo consectetur. Duis ut nisi arcu. In hac habitasse platea dictumst. Integer sed malesuada metus, id mattis lectus. Praesent pharetra velit a massa vestibulum, eget consectetur orci ultricies. Vivamus porttitor non justo et interdum. Etiam lacinia lectus quis nibh ultrices vehicula bibendum vitae magna.
        </BasePara>
    </div>
</template>

<script>
import BasePara from '@/components/basePara.vue'

definePageMeta({
    layout:"basic"
})

export default {
    name:"IndexPage",
    components:{
        BasePara
    }
}
</script>