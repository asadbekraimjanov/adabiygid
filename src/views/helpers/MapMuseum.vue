<template>
    <div id="map" class="w-full h-[500px] shadow-lg"></div>
</template>

<script setup>
import {onMounted} from "vue";

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

        L.marker([41.3208, 69.2549])
            .addTo(map)
            .bindPopup("Alisher Navoiy Muzeyi")
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