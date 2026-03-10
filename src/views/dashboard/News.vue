<template>
    <div class="flex justify-between items-center py-6 border-b border-[#898686]">
        <img id="news" src="@/assets/Yangiliklar.png" class="z-50" alt="">
        <el-button type="info" @click="router.push('/news')" class="!bg-transparent !rounded-none !cursor-pointer z-50 !text-xl !py-7
                        hover:scale-[1.05] !font-medium">Barchasini ko’rish</el-button>
    </div>
    <div class="w-full flex justify-between gap-20 py-20" v-loading="loading">
        <div v-for="item in news" class="w-full">
            <div class="overflow-hidden">
                <img :src="`https://api.adabiygid.uz${item.newsDetails[0].attachment.url}`" class="w-full transition-all hover:scale-125" alt="">
            </div>
            <p class="text-2xl font-semibold text-white py-2">{{ item.title }}</p>
            <p class="text-xl font-light text-[#C6C2C2] py-2">{{ item.newsDetails[0].description.slice(0, 140) }}...</p>
            <div class="w-full flex justify-between items-center py-4 border-b border-[#898686]">
                <p class="text-white text-xl">{{ dateTimeFormatter(item.newsDetails[0].localDateTime) }}</p>
                <el-button type="info" @click="router.push('/news')" :icon="TopRight"
                           class="!bg-[#4F5051] !border-none !rounded-none !text-lg !font-bold !py-5 !px-5 hover:scale-[1.08] z-50" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {TopRight} from "@element-plus/icons-vue";
import {router} from "@/router/router.js";
import moment from "moment";
import {ref} from "vue";

const props = defineProps({
    news: {
        type: Array,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})

const months = ref({
    1: 'Yanvar',
    2: 'Fevral',
    3: 'Mart',
    4: 'Aprel',
    5: 'May',
    6: 'Iyun',
    7: 'Iyul',
    8: 'Avgust',
    9: 'Sentyabr',
    10: 'Oktyabr',
    11: 'Noyabr',
    12: 'Dekabr',
})

const dateTimeFormatter = (el) => {
    return `${ moment(el).format('DD') < 10 ? moment(el).format('D') : moment(el).format('DD') }-${ moment(el).format('MM') < 10 ? months.value[moment(el).format('M')] : months.value[moment(el).format('MM')] }, ${moment(el).format('YYYY')} | ${moment(el).format('HH:mm')}`
}

</script>

<style scoped>

</style>
