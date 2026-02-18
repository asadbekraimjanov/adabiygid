<template>
    <div id="map" class="w-full h-[500px] shadow-lg"></div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    location: {
        type: Array,
        required: true
    }
})
const marker = ref(null)

watch(
    () => props.title,
    (newTitle) => {
        if (marker.value) {
            marker.value.setPopupContent(newTitle);
        }
    }
);

watch(
    () => props.location,
    (newLocation) => {
        if (marker.value) {
            marker.value.setLatLng(newLocation);
        }
    },
    { deep: true }
);

onMounted(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.onload = () => {
        const map = L.map("map").setView([41.3208, 69.2549], 14);

        const satellite = L.tileLayer(
            "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            { attribution: "", maxZoom: 100 }
        ).addTo(map);

        const labels = L.tileLayer(
            "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
            {
                subdomains: "abcd",
                maxZoom: 20,
            }
        ).addTo(map);

        marker.value = L.marker(props.location)
            .addTo(map)
            .bindPopup(props.title)
            .openPopup();
    };
    document.body.appendChild(script);
});
</script>

<style scoped>
::v-deep .leaflet-control-container {
    display: none;
}
</style>