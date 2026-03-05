<template>
    <div class="flex justify-between items-center py-6 border-b border-[#898686]">
        <img id="news" src="@/assets/Yangiliklar.png" class="z-50" alt="">
        <el-button type="info" @click="router.push('/news')" class="!bg-transparent !rounded-none !cursor-pointer z-50 !text-xl !py-7
                        hover:scale-[1.05] !font-medium">Barchasini ko’rish</el-button>
    </div>
    <div class="w-full flex justify-between gap-20 py-20">
        <div class="w-full">
            <div class="overflow-hidden">
                <img src="@/assets/Rectangle%201.png" class="w-full transition-all hover:scale-125" alt="">
            </div>
            <p class="text-2xl font-semibold text-white py-2">Kurs bitiruvchilarini sertifikatlar bilan taqdirlash</p>
            <p class="text-xl font-light text-[#C6C2C2] py-2"
            >Bugun, 2020 yil 3 dekabr kuni, Raqamli innovatsiyalar akademiyasida sertifikatlarni topshirish marosimi bo‘lib o‘tdi.</p>
            <div class="w-full flex justify-between items-center py-4 border-b border-[#898686]">
                <p class="text-white text-xl">6-Noyabr, 2023 <span class="px-3">|</span> 14:35</p>
                <el-button type="info" @click="router.push('/news')" :icon="TopRight"
                           class="!bg-[#4F5051] !border-none !rounded-none !text-lg !font-bold !py-5 !px-5 hover:scale-[1.08] z-50" />
            </div>
        </div>
        <div class="w-full">
            <div class="overflow-hidden">
                <img src="@/assets/Rectangle%202.png" class="w-full transition-all hover:scale-125" alt="">
            </div>
            <p class="text-2xl font-semibold text-white py-2">Kurs bitiruvchilarini sertifikatlar bilan taqdirlash</p>
            <p class="text-xl font-light text-[#C6C2C2] py-2"
            >Bugun, 2020 yil 3 dekabr kuni, Raqamli innovatsiyalar akademiyasida sertifikatlarni topshirish marosimi bo‘lib o‘tdi.</p>
            <div class="w-full flex justify-between items-center py-4 border-b border-[#898686]">
                <p class="text-white text-xl">6-Noyabr, 2023 <span class="px-3">|</span> 14:35</p>
                <el-button type="info" @click="router.push('/news')" :icon="TopRight"
                           class="!bg-[#4F5051] !border-none !rounded-none !text-lg !font-bold !py-5 !px-5 hover:scale-[1.08] z-50" />
            </div>
        </div>
        <div class="w-full">
            <div class="overflow-hidden">
                <img src="@/assets/Rectangle%203.png" class="w-full transition-all hover:scale-125" alt="">
            </div>
            <p class="text-2xl font-semibold text-white py-2">Kurs bitiruvchilarini sertifikatlar bilan taqdirlash</p>
            <p class="text-xl font-light text-[#C6C2C2] py-2"
            >Bugun, 2020 yil 3 dekabr kuni, Raqamli innovatsiyalar akademiyasida sertifikatlarni topshirish marosimi bo‘lib o‘tdi.</p>
            <div class="w-full flex justify-between items-center py-4 border-b border-[#898686]">
                <p class="text-white text-xl">6-Noyabr, 2023 <span class="px-3">|</span> 14:35</p>
                <el-button type="info" @click="router.push('/news')" :icon="TopRight"
                           class="!bg-[#4F5051] !border-none !rounded-none !text-lg !font-bold !py-5 !px-5 hover:scale-[1.08] z-50" />
            </div>
        </div>
    </div>
</template>

<script setup>
import {TopRight} from "@element-plus/icons-vue";
import {router} from "@/router/router.js";
import {onMounted} from "vue";
import axios from "axios";



onMounted(() => {
    axios.get('https://api.adabiygid.uz/api/news').then(data => {
        console.log(data.data)
    }).catch(err => {
        console.log(err)
    })
})

</script>

<style scoped>

</style>
