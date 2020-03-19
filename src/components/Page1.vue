<template>
    <div id="page1">
        <div class="content">
            <h1>臺灣好植地</h1>
            <h2>Patch by Planting</h2>
            <p>「臺灣好植地」專案希望透過「算樹」，了解樹木分佈的概況，接著透過「找地」的過程，盤點出尚未種樹的地區，若基本條件合宜的用地，將進一步評估「種樹」的機會，鼓勵在地團體一起來關注、提出「與樹相融」的補植願景，並接洽土地管理單位，合作落實環境營造的行動。將上述歷程中各類可支援的事項與資訊彙整在「協作平台與網絡」，協助「首植族」或「植樹團體」往前推展，歡迎加入 Facebook 討論社團。</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Page1'
}
</script>
<style scoped>
#page1 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('~@/assets/img/img01.jpg');
    height: 100%;
    background-size: cover;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, .5);
}

#page1 .content {
    width: 50%;
    background-color: rgba(0, 0, 0, .5);
    color: #FFFFFF;
    padding: 50px 50px;
}
</style>