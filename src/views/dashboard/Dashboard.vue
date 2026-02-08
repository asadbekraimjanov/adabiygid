<template>
    <div class="w-full bg-[#252525]">
        <div class="w-full fixed flex justify-between items-center bg-[#252525] border-b border-[#898686] py-7 px-28" style="z-index: 1000 !important;">
            <img src="@/assets/AdabiyGid.png" class="z-50" alt="">
            <ul class="flex justify-between items-center gap-12 text-white text-lg font-[Poppins] z-50">
                <li class="font-semibold cursor-pointer hover:text-[#898686]">Bosh sahifa</li>
                <li class="cursor-pointer hover:text-[#898686]">Yangiliklar</li>
                <li class="cursor-pointer hover:text-[#898686]">Adiblar</li>
                <li class="cursor-pointer hover:text-[#898686]">VR tur</li>
                <li class="cursor-pointer hover:text-[#898686]">Aloqa</li>
                <li class="text-[#DFBA63] cursor-pointer">Uz</li>
            </ul>
        </div>

        <div class="overflow-hidden pt-28">
            <div class="w-full h-full absolute flex items-center justify-center pt-[700px]">
                <img src="@/assets/images/Layer%203.png" class="absolute -mt-80" alt="">
                <img src="@/assets/Ellipse%204.png" class="absolute -mt-96" alt="">
            </div>
            <Main />
        </div>
        <div class="bg-[#3A3C3D] border-t-2 border-gray-800 px-28 pt-6 font-[Poppins]">
            <div class="flex justify-between items-center py-6 border-b border-[#898686]">
                <img src="@/assets/Yangiliklar.png" class="z-50" alt="">
                <el-button type="info" class="!bg-transparent !rounded-none !cursor-pointer z-50 !text-xl !py-7
                                hover:scale-[1.05] !font-medium">Barchasini ko’rish</el-button>
            </div>
            <div class="w-full flex justify-between items-center gap-20 py-20">
                <div class="w-full">
                    <img src="@/assets/Rectangle%201.png" class="w-full" alt="">
                </div>
                <div class="w-full">
                    <img src="@/assets/Rectangle%202.png" class="w-full" alt="">
                </div>
                <div class="w-full">
                    <img src="@/assets/Rectangle%203.png" class="w-full" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Main from "@/views/dashboard/Main.vue";

</script>

<style scoped>

</style>
