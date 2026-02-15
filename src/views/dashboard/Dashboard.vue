<template>
    <div class="w-full bg-[#252525]">
        <div class="w-full fixed flex justify-between items-center bg-[#252525] border-b border-[#898686] py-7 px-40" style="z-index: 1000 !important;">
            <img src="@/assets/AdabiyGid.png" class="z-50" alt="">
            <ul class="flex justify-between items-center gap-12 text-white text-lg font-[Poppins] z-50">
                <li class="font-semibold cursor-pointer hover:text-[#898686]" @click.prevent="scrollToSection('main')">Bosh sahifa</li>
                <li class="cursor-pointer hover:text-[#898686]" @click.prevent="scrollToSection('news')">Yangiliklar</li>
                <li class="cursor-pointer hover:text-[#898686] relative" @click="writerSelect = !writerSelect">
                    Adiblar
                    <div v-if="writerSelect" class="absolute w-max text-white bg-[#252525] transition-all -ml-4 mt-2 border border-gray-700 shadow-lg">
                        <p v-for="(item, idx) in writers" @click="onWriterSelected(idx)" class="px-3 py-0.5 text-base hover:bg-[#3A3C3D]">{{ item.name }}</p>
                    </div>
                </li>
                <li class="cursor-pointer hover:text-[#898686]" @click.prevent="scrollToSection('vrtype')">VR tur</li>
                <li class="cursor-pointer hover:text-[#898686]" @click.prevent="scrollToSection('contact')">Aloqa</li>
                <li class="text-[#DFBA63] cursor-pointer">Uz</li>
            </ul>
        </div>

        <div class="overflow-hidden pt-28">
            <div class="w-full h-full absolute flex items-center justify-center pt-[700px]">
                <img src="@/assets/images/Layer%203.png" class="absolute -mt-80 pointer-events-none" alt="">
                <img src="@/assets/images/Layer%203.png" class="absolute mt-[2550px] pointer-events-none" alt="">
                <img src="@/assets/Ellipse%204.png" class="absolute -mt-96  pointer-events-none" alt="">
            </div>

            <div id="main">
                <Main :selected-writer="selectedWriter" />
            </div>
        </div>
        <div id="news" class="bg-[#3A3C3D] border-t-2 border-gray-800 px-40 pt-6 !font-[Poppins] shadow-2xl">
            <News />
        </div>

        <div id="" class="w-full bg-[#232424] px-40 font-[Poppins]">
            <div class="pt-20 border-r border-[#727272]">
                <div class="flex justify-between items-center">
                    <div class="w-1/2 border-r border-[#727272] pr-10 pb-10">
                        <img src="@/assets/Alisher%20Navoiy%20adabiyot%20muzeyi.png" alt="">
                        <img src="@/assets/Line%2020.png" class="mt-4" alt="">

                        <p class="py-20 text-white text-xl">
                            Muzey fondida 17000 dan ortiq eksponatlar - badiiy asarlar, arxeologik obidalar, qo‘lyozmalar, hujjatlar, o‘zbek
                            adabiyoti madaniyatining ko‘p asrlik tarixini aks ettiruvchi filmlar mavjud. Bundan tashqari, bu yerda
                            mamlakatimiz yozuvchilarining hayoti va ijodi to‘g‘risidagi 65 mingdan ortiq hujjatlar to‘plangan.
                            <br><br>
                            1940-yilda Alisher Navoiy tavalludining 500 yilligi munosabati bilan Respublika koʻrgazmasi 174tariqasida tashkil topgan.
                            <br><br>
                            1944 — 68 yillarda Oʻzbekiston Fanlar Akademiyasi Til va adabi-yot instituti boʻlimi, 1968 — 78 yillarda
                            Oʻzbekiston Fanlar Akademiyasi Adabiyot muzeyi, 1978 — 91 yillarda Oʻzbekiston Fanlar Akademiyasi
                            H. S. Sulay-monov nomidagi Qoʻlyozmalar institutining muzey boʻlimi.
                        </p>
                    </div>
                    <div class="w-1/2 flex justify-center">
                        <div class="w-1/2 absolute pt-0.5 border-t border-[#727272] translate-y-10"></div>
                        <img src="@/assets/6495477188811%201.png" class="mt-20" alt="">
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <div class="w-1/2 pt-0.5 border-t border-[#727272] mt-10"></div>
                </div>
                <div id="vrtype" class="py-16">
                    <img src="@/assets/Alisher%20Navoiy%20VR%20turi.png" alt="">
                    <img src="@/assets/Line%2020.png" class="mt-4" alt="">
                </div>
            </div>
            <div class="pb-20">
                <img src="@/assets/A.png" class="w-full cursor-pointer" alt="">
            </div>
        </div>

        <div class="w-full bg-[#3A3C3D] pt-20 pb-10 px-40 font-[Poppins]">
            <img src="@/assets/Muzey%20xaritasi.png" alt="">
            <img src="@/assets/Line%2020.png" class="mt-4" alt="">

            <div class="w-full flex justify-between items-center gap-10">
                <div class="w-2/5 my-8 border-r border-[#727272]">
                    <p class="text-2xl text-white mt-10">Ochiq</p>
                    <p class="text-2xl text-[#C2C2C2] mt-4">Dushanba - Shanba 8:00 - 18:00</p>
                    <p class="text-2xl text-[#C2C2C2] mt-4">Yakshanba 8:00 - 19:00</p>
                    <img src="@/assets/Chipta%20narxlari.png" class="mt-16" alt="">
                    <div class="flex justify-between text-white pr-10 gap-10 mt-10">
                        <div class="w-full">
                            <p class="text-2xl">Turistlar</p>
                            <p class="mt-4">Bilet - <span class="text-[#DFBA63]">50.000 so’m</span></p>
                        </div>
                        <div class="w-full">
                            <p class="text-2xl">Discount</p>
                        </div>
                    </div>
                    <div class="flex justify-between items-center text-white pr-10 gap-10 mt-8">
                        <div class="w-full">
                            <p class="text-2xl">Talabalar va bolalar</p>
                            <p class="mt-4">Bilet - <span class="text-[#DFBA63]">20.000 so’m</span></p>
                        </div>
                        <div class="w-full">
                            <p class="text-sm">5% for 10 < 50 people in Group</p>
                            <p class="text-sm">10% for 50 < 100 people in Group</p>
                            <p class="text-sm">15% for > 100 people in Group</p>
                        </div>
                    </div>
                </div>
                <div class="w-3/5 h-full">
                    <MapMuseum />
                </div>
            </div>
        </div>
        <div id="contact" class="w-full pt-16 pb-10 font-[Poppins]">
            <div class="w-full px-40 border-b border-[#727272] pb-10">
                <img src="@/assets/Biz%20bilan%20aloqa.png" alt="">
                <img src="@/assets/Line%2020.png" class="mt-4" alt="">
                <div class="flex justify-between items-center gap-10 py-10">
                    <p class="text-[#6c6c6c]">Amir Temur 108, TATU universiteti <br> MT kafedrasi</p>
                    <div class="flex flex-col text-[#6c6c6c]">
                        <p>8 71 2386599</p>
                        <p>info@tuit.com</p>
                    </div>
                    <div class="flex justify-between items-center gap-16 px-20 text-white border-r border-l border-[#727272]">
                        <div class="flex flex-col gap-4 font-bold">
                            <p @click.prevent="scrollToSection('main')" class="w-30 cursor-pointer">Bosh sahifa</p>
                            <p class="cursor-pointer">Adiblar</p>
                        </div>
                        <div class="flex flex-col gap-4">
                            <p @click.prevent="scrollToSection('vrtype')" class="cursor-pointer">VR tur</p>
                            <p @click.prevent="scrollToSection('contact')" class="cursor-pointer">Aloqa</p>
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
import Main from "@/views/dashboard/Main.vue";
import News from "@/views/dashboard/News.vue";
import MapMuseum from "@/views/helpers/MapMuseum.vue";
import {ref} from "vue";
import Navoiy from '@/assets/images/Navoiy.png'
import Oybek from '@/assets/images/Oybek.png'
import AbdullaQahhor from '@/assets/images/AbdullaQahhor.png'
import SergeyBorodin from '@/assets/images/SergeyBorodin2.png'
import AbdullaQodiriy from '@/assets/images/AbdullaQodiriy2.png'
import SadriddinAyniy from '@/assets/images/SadriddinAyniy2.png'


const writerSelect = ref(false)
const writers = ref([
    {
        id: 1,
        name: 'Alisher Navoiy',
        imageUrl: Navoiy,
        literatureMuseumTitle: '',
        aboutLiteratureMuseum: '',
        literatureMuseumImageUrl: '',
        vrTypeTitle: '',
    },
    {
        id: 2,
        name: 'Obyek',
        imageUrl: Oybek,
        literatureMuseumTitle: '',
        aboutLiteratureMuseum: '',
        literatureMuseumImageUrl: '',
        vrTypeTitle: '',
    },
    {
        id: 3,
        name: 'Abdulla Qahhor',
        imageUrl: AbdullaQahhor,
        literatureMuseumTitle: '',
        aboutLiteratureMuseum: '',
        literatureMuseumImageUrl: '',
        vrTypeTitle: '',
    },
    {
        id: 4,
        name: 'Sergey Borodin',
        imageUrl: SergeyBorodin,
        literatureMuseumTitle: '',
        aboutLiteratureMuseum: '',
        literatureMuseumImageUrl: '',
        vrTypeTitle: '',
    },
    {
        id: 5,
        name: 'Abdulla Qodiriy',
        imageUrl: AbdullaQodiriy,
        literatureMuseumTitle: '',
        aboutLiteratureMuseum: '',
        literatureMuseumImageUrl: '',
        vrTypeTitle: '',
    },
    {
        id: 6,
        name: 'Sadriddin Ayniy',
        imageUrl: SadriddinAyniy,
        literatureMuseumTitle: '',
        aboutLiteratureMuseum: '',
        literatureMuseumImageUrl: '',
        vrTypeTitle: '',
    },
])
const selectedWriter = ref(writers.value[0])

const onWriterSelected = (idx) => {
    selectedWriter.value = writers.value[idx]
}

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
        })
    }
}

</script>

<style scoped>

</style>
