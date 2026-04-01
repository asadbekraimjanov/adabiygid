<template>
    <div v-loading="loading" id="unity-container">
        <canvas id="unity-canvas"></canvas>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {ElMessage} from "element-plus";


const loading = ref(false)

onMounted(() => {
    const canvas = document.getElementById("unity-canvas");
    if (!canvas) return;

    let unityInstance = null;
    let isMouseDown = false;
    const sensitivity = 1.3;

    const loader = document.createElement("script");
    loader.src = "/unity/Build/Veb new.loader.js";

    loading.value = true
    loader.onload = () => {
        createUnityInstance(canvas, {
            dataUrl: "/unity/Build/Veb new.data.unityweb",
            frameworkUrl: "/unity/Build/Veb new.framework.js.unityweb",
            codeUrl: "/unity/Build/Veb new.wasm.unityweb",
            companyName: "MyCompany",
            productName: "Veb",
            productVersion: "1.0",
            backgroundColor: "#252525"
        })
            .then((instance) => {
                unityInstance = instance;
                console.log("Unity yuklandi");

                canvas.addEventListener("mousedown", () => {
                    isMouseDown = true;
                    canvas.style.cursor = "grabbing";
                });

                document.addEventListener("mouseup", () => {
                    isMouseDown = false;
                    canvas.style.cursor = "grab";
                });

                canvas.addEventListener("mouseleave", () => {
                    isMouseDown = false;
                    canvas.style.cursor = "grab";
                });

                canvas.addEventListener("mousemove", (e) => {
                    if (!isMouseDown) return;

                    const rect = canvas.getBoundingClientRect();
                    const x = (e.clientX - rect.left) * sensitivity;
                    const y = (e.clientY - rect.top) * sensitivity;


                    console.log("Drag with sensitivity:", x, y);
                });

            })
            .catch((err) => {
                ElMessage.warning('Xatolik yuz berdi!')
                console.error("Unity yuklashda xato:", err);
            }).finally(() => {
                loading.value = false
        })
    };

    document.body.appendChild(loader);
});
</script>

<style scoped>
#unity-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #252525;
}

#unity-canvas {
    width: 100%;
    height: 100%;
    cursor: grab;
}

#unity-canvas:active {
    cursor: grabbing;
}

</style>
