<template>
    <div id="top" class="w-full bg-[#252525] font-[Poppins]">
        <div class="w-full fixed flex justify-between items-center bg-[#252525] border-b border-[#898686] py-7 px-40" style="z-index: 1000 !important;">
            <img src="@/assets/AdabiyGid.png" class="z-50" alt="">
            <ul class="flex justify-between items-center gap-12 text-white text-lg z-50">
                <li class="font-semibold cursor-pointer hover:text-[#898686]" @click="router.push('/')">Bosh sahifa</li>
                <li class="cursor-pointer hover:text-[#898686]" @click="scrollToSection('top')">Yangiliklar</li>
                <li class="cursor-pointer hover:text-[#898686]">Adiblar</li>
                <li class="cursor-pointer hover:text-[#898686]" @click="router.push('/')">VR tur</li>
                <li class="cursor-pointer hover:text-[#898686]" @click.prevent="scrollToSection('contact')">Aloqa</li>
                <li class="text-[#DFBA63] cursor-pointer">Uz</li>
            </ul>
        </div>

        <div class="overflow-hidden pt-36 px-40 text-white">
            <Transition name="slide-to-left" appear>
                <div class="w-full flex items-center gap-3">
                    <el-button :icon="Back" class="!text-2xl !text-white !hover:text-[#898686]"
                               @click="router.go(-1)" type="text" />
                    <p class="text-3xl font-bold my-6">Kurs bitiruvchilarini sertifikatlar bilan taqdirlash</p>
                </div>
            </Transition>
            <Transition  name="slide-fade" appear>
                <img key="1" src="@/assets/Rectangle%201.png" class="w-full" alt="">
            </Transition>
            <Transition name="slide-to-left" appear>
                <p class="text-xl mt-2 opacity-80">6-Noyabr, 2023 <span class="px-3">|</span> 14:35</p>
            </Transition>
            <p class="text-xl mt-18">
                Muzey fondida 17000 dan ortiq eksponatlar - badiiy asarlar, arxeologik obidalar, qo‘lyozmalar, hujjatlar, o‘zbek adabiyoti madaniyatining ko‘p asrlik tarixini aks ettiruvchi filmlar mavjud. Bundan tashqari, bu yerda mamlakatimiz yozuvchilarining hayoti va ijodi to‘g‘risidagi 65 mingdan ortiq hujjatlar to‘plangan.
                <br><br>
                1940-yilda Alisher Navoiy tavalludining 500 yilligi munosabati bilan Respublika koʻrgazmasi 174tariqasida tashkil topgan.
                <br><br>
                1944 — 68 yillarda Oʻzbekiston Fanlar Akademiyasi Til va adabi-yot instituti boʻlimi, 1968 — 78 yillarda Oʻzbekiston Fanlar Akademiyasi Adabiyot muzeyi, 1978 — 91 yillarda Oʻzbekiston Fanlar Akademiyasi
                H. S. Sulay-monov nomidagi Qoʻlyozmalar institutining muzey boʻlimi.
            </p>
        </div>


        <div class="w-full flex items-center justify-center mt-20">
            <el-pagination background layout="prev, pager, next" :total="50" class="mt-4" />
        </div>

        <div id="contact" class="w-full pt-16 pb-10">
            <div class="w-full px-40 border-b border-[#727272] pb-10">
                <div class="flex justify-between items-center gap-10 py-10">
                    <p class="text-[#6c6c6c]">Amir Temur 108, TATU universiteti <br> MT kafedrasi</p>
                    <div class="flex flex-col text-[#6c6c6c]">
                        <p>8 71 2386599</p>
                        <p>info@tuit.com</p>
                    </div>
                    <div class="flex justify-between items-center gap-16 px-20 text-white border-r border-l border-[#727272]">
                        <div class="flex flex-col gap-4 font-bold">
                            <p @click="router.push('/')" class="w-30 cursor-pointer">Bosh sahifa</p>
                            <p @click="router.push('/')" class="cursor-pointer">Adiblar</p>
                        </div>
                        <div class="flex flex-col gap-4">
                            <p @click="router.push('/')" class="cursor-pointer">VR tur</p>
                            <p @click="scrollToSection('contact')" class="cursor-pointer">Aloqa</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-10 text-white">
                        <div class="flex flex-col gap-4">
                            <a href="https://www.facebook.com" target="_blank">
                                <img src="@/assets/icons/facebook.png" class="w-7 cursor-pointer" alt="">
                            </a>
                            <a href="https://www.instagram.com" target="_blank">
                                <img src="@/assets/icons/Instagram.png" class="w-7 cursor-pointer" alt="">
                            </a>
                        </div>
                        <div class="flex flex-col gap-4">
                            <a href="https://www.twitter.com" target="_blank">
                                <img src="@/assets/icons/Twiiter.png" class="w-7 cursor-pointer" alt="">
                            </a>
                            <a href="https://www.youtube.com" target="_blank">
                                <img src="@/assets/icons/YouTube.png" class="w-7 cursor-pointer" alt="">
                            </a>
                        </div>
                    </div>
                    <div>
                        <img src="@/assets/AdabiyGid.png" class="mt-8" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {router} from "@/router/router.js";
import {Back} from "@element-plus/icons-vue";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import axios from "axios";

const route = useRoute()

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
        })
    }
}

onMounted(async () => {
    window.scrollTo({
        top: document.body.offsetTop - 100,
        behavior: 'instant'
    })
    await axios.get('https://api.adabiygid.uz/api/news/' + route.params.newsId)
})

</script>

<style>
.el-pagination .el-pager li, .btn-prev, .btn-next {
    background-color: #3D3D3D !important;
    color: white !important;
    font-size: 16px !important;
}
.el-pagination .el-pager .is-active {
    color: #DFBA63 !important;
}


.slide-to-left-enter-active {
    transition: all 0.9s ease-out;
}

.slide-to-left-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-to-left-enter-from,
.slide-to-left-leave-to {
    transform: translateX(40px);
    opacity: 0;
}
</style>
