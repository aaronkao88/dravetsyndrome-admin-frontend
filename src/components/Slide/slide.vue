<template>
  <div id="app">
    <div class="ml-9 mr-9 mt-5 mb-10">
      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://dravetsyndrome.tw/Images/HomeSlider/slide_1.jpg",
        },
        {
          src: "https://dravetsyndrome.tw/Images/HomeSlider/slide_2.jpg",
        },
        {
          src: "https://dravetsyndrome.tw/Images/HomeSlider/slide_3.jpg",
        },
      ],
    };
  },
};
</script>