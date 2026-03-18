<template>
    <div class="relative w-full h-full flex justify-between items-center px-40 pt-32 font-[Poppins]">
        <div class="flex flex-col justify-between items-start font-[Poppins] pb-30">
            <TransitionGroup name="slide-fade" appear>
                <img key="1" src="@/assets/Adabiy.png" class="w-[70%] z-50" alt="">
                <p key="2" class="text-white text-xl font-medium mt-14 z-50">O’zbekiston bo’ylab adabiy gid</p>
                <p key="3" class="text-[#B5964D] text-xl font-extrabold z-50">elektron platformasi</p>
                <p key="4" class="w-[45%] font-[100] italic text-xl text-[#ffffff76] mt-14 z-50">Adabiyot muzeyi -O‘zbekistonning eng yirik ilmiy va ta’lim muassasalaridan biri</p>
            </TransitionGroup>
        </div>
        <div class="flex flex-col justify-between items-start pb-30 z-50">
            <Transition name="slide-fade" appear>
                <img src="@/assets/gid.png" class="w-[80%] translate-x-6" alt="">
            </Transition>
        </div>

        <div class="absolute w-[90%] flex justify-center items-center pl-10 pt-30 z-50"
                    :class="selectedWriter.id === 5 || selectedWriter.id === 6 ? '-ml-16' : ''">
            <Transition name="slide-fade-person" appear>
                <img :src="selectedWriter.imageUrl" alt="">
            </Transition>
            <Transition name="slide-fade-person" appear>
                <div class="absolute flex justify-between items-center gap-4 -mt-[450px] ml-[400px]">
                    <div class="w-3 h-3 bg-[#B5964D] rounded-full"></div>
                    <p class="text-[#ffffff76] text-xl italic">{{ selectedWriter.name }}</p>
                </div>
            </Transition>
        </div>
    </div>

    <div class="w-full px-40 text-white font-[Poppins] mb-12 mt-28 relative" style="z-index: 100 !important;">
        <div class="w-full relative flex justify-between items-center bg-[#3A3C3D] opacity-90 p-1">
            <div class="w-full border-r border-gray-500 p-4">
                <div class="flex items-center justify-center gap-4">
                    <div class="flex justify-between items-center gap-10">
                        <img src="@/assets/icons/Combined-Shape.png" alt="">
                        <div class="flex flex-col justify-between gap-1">
                            <p class="text-xl font-bold">Bizning manzil</p>
                            <p class="text-[0.8rem] font-light">{{ selectedWriter.address }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full border-r border-gray-500 p-4 flex items-center justify-center">
                <div class="flex items-center justify-center gap-4">
                    <div class="flex justify-between items-center gap-10">
                        <img src="@/assets/icons/phone-call.png" alt="">
                        <div class="flex flex-col justify-between gap-1">
                            <p class="text-xl font-bold">Biz bilan aloqa</p>
                            <p class="text-[0.8rem] font-light">{{ selectedWriter.phoneNumber }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-center p-4">
                <div class="flex items-center justify-center gap-4">
                    <div class="flex justify-between items-center gap-10">
                        <img src="../../assets/icons/mail.png" alt="">
                        <div class="flex flex-col justify-between gap-1">
                            <p class="text-xl font-bold">Bizga xabar yuborish</p>
                            <p class="text-[0.8rem] font-light">Contact@HydraVTech.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    selectedWriter: {
        type: Object,
        required: true,
    }
})

const getImageUrl = (url) => {
    return new URL(`../../assets/images/${url}`, import.meta.url).href
}
</script>

<style>
.slide-fade-enter-active {
    transition: all 0.9s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(40px);
    opacity: 0;
}



.slide-fade-person-enter-active {
    transition: all 0.9s ease-out;
}

.slide-fade-person-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-person-enter-from,
.slide-fade-person-leave-to {
    transform: translateX(40px);
    opacity: 0;
}
</style>
