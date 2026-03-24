<template>
    <div v-loading="loadingNews" class="w-full bg-[#252525]">
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
        <div v-if="news.length" id="news" class="bg-[#3A3C3D] border-t-2 border-gray-800 px-40 pt-6 !font-[Poppins] shadow-2xl">
            <News :news="news" :loading="loadingNews" />
        </div>

        <div class="w-full bg-[#232424] border-t-2 border-[#3A3C3D] px-40 font-[Poppins]">
            <div class="pt-20 border-r border-[#727272]">
                <div class="flex justify-between items-center">
                    <div class="w-1/2 border-r border-[#727272] pr-10 pb-10">
                        <img :src="selectedWriter.literatureMuseumTitle" alt="">
                        <img src="@/assets/Line%2020.png" class="mt-4" alt="">

                        <p class="py-20 text-white text-xl whitespace-pre-line">
                            {{ selectedWriter.aboutLiteratureMuseum }}
                        </p>
                    </div>
                    <div class="w-1/2 flex justify-center">
                        <div class="w-1/2 absolute pt-0.5 border-t border-[#727272] translate-y-10"></div>
                        <img :src="selectedWriter.literatureMuseumImageUrl" class="mt-20" alt="">
                    </div>
                </div>
                <div class="w-full flex justify-center">
                    <div class="w-1/2 pt-0.5 border-t border-[#727272] mt-10"></div>
                </div>
                <div id="vrtype" class="py-16">
                    <img :src="selectedWriter.vrTypeTitle" alt="">
                    <img src="@/assets/Line%2020.png" class="mt-4" alt="">
                </div>
            </div>
            <div class="pb-20 relative">
                <div class="absolute w-full h-full flex justify-center items-center" style="z-index: 100;">
                    <img @click="drawerVisible = true" src="@/assets/images/vr%20play.png" class="animate-play absolute cursor-pointer z-10" alt="">
                </div>
                <img src="@/assets/images/VR.png" class="w-full" alt="">
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
                    <MapMuseum :title="selectedWriter.locationName" :location="selectedWriter.location" />
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

        <el-drawer v-model="drawerVisible" :title="selectedWriter?.name + ' muzeyiga sayohat'" direction="ttb" size="100%" close-on-press-escape>
            <div id="vrtype" class="w-full h-full">
                <UnityPlayer />
            </div>
        </el-drawer>
    </div>
</template>

<script setup>
import Main from "@/views/dashboard/Main.vue";
import News from "@/views/dashboard/News.vue";
import MapMuseum from "@/views/helpers/MapMuseum.vue";
import {onMounted, ref} from "vue";
import Navoiy from '@/assets/images/Navoiy.png'
import Oybek from '@/assets/images/Oybek.png'
import AbdullaQahhor from '@/assets/images/AbdullaQahhor.png'
import SergeyBorodin from '@/assets/images/SergeyBorodin2.png'
import AbdullaQodiriy from '@/assets/images/AbdullaQodiriy2.png'
import SadriddinAyniy from '@/assets/images/SadriddinAyniy2.png'
import NavoiyMuseumImage from '@/assets/images/6495477188811 1.png'
import OybekMuseumImage from '@/assets/images/OybekMuseumImage.png'
import AbdullaQahhorMuseumImage from '@/assets/images/AbdullaQahhorMuseumImage.png'
import BorodinMusemumImage from '@/assets/images/BorodinMuseumImage.png'
import AbdullaQodiriyMuseumImage from '@/assets/images/AbdullaQodiriyMuseumImage.png'
import AyniyMuseumImage from '@/assets/images/AyniyMuseumImage.png'
import AyniyMuseumTitle from '@/assets/images/Sadriddin Ayniy uy muzeyi.png'
import AbdullaQodiriyMuseumTitle from '@/assets/images/Abdulla Qodiriy uy muzeyi.png'
import BorodinMuseumTitle from '@/assets/images/Sergey Borodin uy muzeyi.png'
import AbdullaQahhorMuseumTitle from '@/assets/images/Abdulla Qahhor uy muzeyi.png'
import OybekMuseumTitle from '@/assets/images/Oybek uy muzeyi.png'
import NavoiyMuseumTitle from '@/assets/images/Alisher Navoiy adabiyot muzeyi.png'
import NavoiyVrTitle from '@/assets/images/Alisher Navoiy VR turi.png'
import OybekVrTitle from '@/assets/images/Oybek VR turi.png'
import AbdullaQahhorVrTitle from '@/assets/images/Abdulla Qahhor VR turi.png'
import AbdullaQodiriyVrTitle from '@/assets/images/Abdulla Qodiriy VR turi.png'
import AyniyVrTitle from '@/assets/images/Sadriddin Ayniy VR turi.png'
import axios from "axios";
import UnityPlayer from "@/views/helpers/UnityPlayer.vue";
import {ElMessage} from "element-plus";


const writerSelect = ref(false)
const loadingNews = ref(false)
const drawerVisible = ref(false)
const writers = ref([
    {
        id: 1,
        name: 'Alisher Navoiy',
        imageUrl: Navoiy,
        address: '69 Navoiy shoh ko\'chasi, Тоshkent 100011',
        phoneNumber: '+998 71 241 02 75',
        literatureMuseumTitle: NavoiyMuseumTitle,
        aboutLiteratureMuseum: 'Muzey fondida 17000 dan ortiq eksponatlar - badiiy asarlar, arxeologik obidalar, qo‘lyozmalar,' +
            ' hujjatlar, o‘zbek adabiyoti madaniyatining ko‘p asrlik tarixini aks ettiruvchi filmlar mavjud. Bundan tashqari, bu' +
            ' yerda mamlakatimiz yozuvchilarining hayoti va ijodi to‘g‘risidagi 65 mingdan ortiq hujjatlar to‘plangan.\n' +
            '\n' +
            '1940-yilda Alisher Navoiy tavalludining 500 yilligi munosabati bilan Respublika koʻrgazmasi 174tariqasida tashkil topgan.\n' +
            '\n' +
            '1944 — 68 yillarda Oʻzbekiston Fanlar Akademiyasi Til va adabi-yot instituti boʻlimi, 1968 — 78 yillarda Oʻzbekiston' +
            ' Fanlar Akademiyasi Adabiyot muzeyi, 1978 — 91 yillarda Oʻzbekiston Fanlar Akademiyasi H. S. Sulay-monov nomidagi' +
            ' Qoʻlyozmalar institutining muzey boʻlimi.',
        literatureMuseumImageUrl: NavoiyMuseumImage,
        vrTypeTitle: NavoiyVrTitle,
        locationName: 'Alisher Navoiy Muzeyi',
        location: [41.3208, 69.2549]
    },
    {
        id: 2,
        name: 'Obyek',
        imageUrl: Oybek,
        address: 'Yunusobod tumani, 1-Iftixor tor ko‘chasi, 26',
        phoneNumber: '+998 71 248 09 00',
        literatureMuseumTitle: OybekMuseumTitle,
        aboutLiteratureMuseum: 'Oybek uy-muzeyi adib tug‘ilgan kunning 75 yilligi munosabati bilan 1980 yilda barpo etilgan. Muzey' +
            ' ikki qismdan iborat bo‘lib, 1940-1941 yillarda qurilgan 5 xonali binodan adibning hayot va ijod yo‘lini aks ettiruvchi' +
            ' ekspozitsiya o‘rin olgan. Hovlining shimoliy tarafidagi binoda esa memorial xonalar: mehmonxona, ijodxona (birinchi' +
            ' qavatda), bolalar xonasi va yotoqxona (ikkinchi qavatda) joylashgan. Ikkinchi qavatga dahlizdagi yog‘och zinalar osha,' +
            ' devorlardagi A.Siglinsev ishlagan gravyuralarni tomosha qilib, chiqiladi. Tashrifchilar katta darvozadan o‘tib, ichkariga' +
            ' kirganlaridan so‘ng, so‘l tomondagi bir zamonlar terrasa (ayvon) bo‘lib xizmat qilgan xonada Oybek uy-muzeyining' +
            ' ekspozitsiyasi bilan tanisha boshlaydilar.\n' +
            '\n' +
            '2005 yilda Oybek tavalludining 100 yilligi munosabati bilan muzey ekspozitsiyasi yangilangan. Ekspozitsiya adabiy va memorial qismdan iborat.',
        literatureMuseumImageUrl: OybekMuseumImage,
        vrTypeTitle: OybekVrTitle,
        locationName: 'Oybek Muzeyi',
        location: [41.34387, 69.27024]
    },
    {
        id: 3,
        name: 'Abdulla Qahhor',
        imageUrl: AbdullaQahhor,
        address: 'Yakkasaroy tumani, Yoshlar ko‘chasi, 26/1',
        phoneNumber: '+998 71 256 08 04',
        literatureMuseumTitle: AbdullaQahhorMuseumTitle,
        aboutLiteratureMuseum: 'O‘zbekiston xalq yozuvchisi, drammaturg, satirik, publitsist va tarjimon Abdulla Qahhorning' +
            '(1907–1968) memorial muzeyi umrining so‘nggi yillarida yashab o‘tgan uyda joylashgan.\n' +
            '\n' +
            'Muzey ekspozitsiyasi memorial va adabiy qismlardan iborat. Memorial qismi yozuvchining mehmonxonasi va ijodxonasidan' +
            ' tashkil topgan. Adabiy qismda adibning hayotligidagi ish holatiga ega bo‘lgan va yozuvchiga tegishli turli buyumlar' +
            ' bilan jihozlangan ish stoli saqlab qolingan. Abdulla Qahhor kutubxonasida ko‘plab qo‘lyozmalar, kitoblar, jurnallar,' +
            ' rus va jahon klassiklarining asarlari, ilmiy nashrlar, ensiklopediyalar va adabiy ma’lumotnomalar saqlanadi.\n' +
            '\n' +
            'Abdulla Qahhor rus tilini a’lo darajada bilgan va A.Pushkin, L.Tolstoy, A.Chexov, N.Gogol, M.Gorkiy va boshqa' +
            ' adiblarning asarlarini o‘zbek tiliga tarjima qilgan.',
        literatureMuseumImageUrl: AbdullaQahhorMuseumImage,
        vrTypeTitle: AbdullaQahhorVrTitle,
        locationName: 'Abdulla Qahhor muzeyi',
        location: [41.29976, 69.25501]
    },
    {
        id: 4,
        name: 'Sergey Borodin',
        imageUrl: SergeyBorodin,
        address: 'Toshkent shahri, Mirobod tumani',
        phoneNumber: '+998 71 237 09 82',
        literatureMuseumTitle: BorodinMuseumTitle,
        aboutLiteratureMuseum: 'Sergey Borodin uy-muzeyi 1981-yilda tashkil etilgan. Ushbu muzey XX asr oʻrtalarida yashagan va' +
            ' 1950-1974-yillarda bir qator yirik tarixiy prozaik janrlar muallifi rus yozuvchisi Sergey Borodin xotirasiga bagʻishlangan.\n' +
            '\n' +
            'Muzey adabiy ekspozitsiyasining ikkita zali adib hayoti va ijodiy faoliyatining asosiy bosqichlarini oʻz ichiga oladi.' +
            ' Birinchi xonada Sergey Borodinning bolalik va yoshlik haqidagi xotiralar mavjud. Rasmlar, xatlar, hujjatlardan anglash' +
            ' mumkinki, bu boʻlajak yozuvchining qiziqishlari erta shakllanganidan dalolat beradi.\n' +
            '\n' +
            'Ikkinchi zalda Sergey Borodinning 1930-yillardagi hayotining soʻnggi kunlarigacha boʻlgan faoliyati haqida hikoya' +
            ' qiluvchi ekspozitsiya nazardan chetda qolmaydi.',
        literatureMuseumImageUrl: BorodinMusemumImage,
        vrTypeTitle: AbdullaQahhorVrTitle,
        locationName: 'Sergey Borodin muzeyi',
        location: [41.321100, 69.294514]
    },
    {
        id: 5,
        name: 'Abdulla Qodiriy',
        imageUrl: AbdullaQodiriy,
        address: 'Toshkent shahri, Termiz ko\'chasi 35',
        phoneNumber: '+998 71 000 00 00',
        literatureMuseumTitle: AbdullaQodiriyMuseumTitle,
        aboutLiteratureMuseum: 'Abdulla Qodiriy uy-muzeyi — 2019 yil dekabr sanasida Toshkent shahri Shayxontohur tumani,' +
            ' Samarqand Darvoza koʻchasida yashagan yozuvchi Abdulla Qodiriy uyida ochilgan.\n' +
            '\n' +
            'Ayni shu muzeyda yozuvchining oʻzi ijodidan, oʻzbek va jahon adabiyoti durdonalari namunalaridan kutubxona vujudga kelgan.\n' +
            'Hovli sahni devorlariga oʻzbek va jahon yozuvchi-shoirlarning A.Qodiriy ijodi haqidagi fikrlari qayd etilgan.' +
            ' Xona devorlariga ilingan adibning asl qiyofasini aks ettiruvchi fotosuratlar Qodiriy ijodini yaqindan tanishtiradi.' +
            ' Shuningdek, bu yerda gazeta va jurnallar, A.Qodiriy ijodi namoyon ettirilgan ilk kitoblar mavjud.\n' +
            '\n' +
            'Muzey ixlosmandlarini xonalardan birida yozuvchi oʻz asarlarini yozganida, oila a’zolari bilan birga bir dasturxonda' +
            ' yigilishi e\'tiborini chetda qoldirmaydi.',
        literatureMuseumImageUrl: AbdullaQodiriyMuseumImage,
        vrTypeTitle: AbdullaQodiriyVrTitle,
        locationName: 'Abdulla Qodiriy muzeyi',
        location: [41.313691, 69.219217]
    },
    {
        id: 6,
        name: 'Sadriddin Ayniy',
        imageUrl: SadriddinAyniy,
        address: 'Registon ko\'chasi 38a, Samarqand viloyati',
        phoneNumber: '+998 93 342 99 26',
        literatureMuseumTitle: AyniyMuseumTitle,
        aboutLiteratureMuseum: 'Sadriddin Ayniy uy-muzeyi Samarqand shahrida joylashgan. Ushbu uy-muzeyi atoqli o‘zbek va tojik yozuvchisi,' +
            ' tarjimon va adabiyotshunos olim Sadriddin Ayniy hayoti va ijodiga bag‘ishlangan. Bu uyda Ayniy 1917-yildan oʻtgan asrning' +
            ' 50-yillari boshlarigacha yashagan. Uy-muzey hozirgacha faoliyat koʻrsatmoqda. Muzey har kuni soat 9:00 dan 20:00 gacha ochiq.\n' +
            '\n' +
            'Sadriddin Ayniyning sobiq uyi eski shahar markazida, Registon ko‘chasida, Registon maydoni va ansambli hamda Amir' +
            ' Temur maqbarasidan uncha uzoq bo‘lmagan joyda joylashgan.\n' +
            '\n' +
            'Yo‘l yoqasida, uy oldida "Shoirlar xiyoboni" maydoni va Mirzo Ulug‘bek nomidagi 2-umumta’lim maktabi joylashgan.',
        literatureMuseumImageUrl: AyniyMuseumImage,
        vrTypeTitle: AyniyVrTitle,
        locationName: 'Sadriddin Ayniy muzeyi',
        location: [39.652786, 66.972531]
    },
])
const selectedWriter = ref(writers.value[0])
const news = ref([])

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

onMounted(async () => {
    loadingNews.value = true;

    try {
        const { data } = await axios.get("https://api.adabiygid.uz/api/news");

        news.value = data.sort(
            (a, b) =>
                new Date(b.newsDetails[0].localDateTime) -
                new Date(a.newsDetails[0].localDateTime)
        );
    } catch (err) {
        console.log(err);
        ElMessage.warning('Yangiliklarni yuklashda xatolik!')
    } finally {
        loadingNews.value = false;
    }
})

</script>

<style>
@keyframes playPulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }
}

.animate-play {
    animation: playPulse 3s ease-out infinite;
}

.el-drawer .el-drawer__header {
    background-color: #231F20 !important;
    padding: 14px !important;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
}

.el-drawer .el-drawer__body {
    padding: 0;
}

.el-loading-mask {
    background-color: rgba(57, 57, 57, 0.5) !important;
}
</style>
