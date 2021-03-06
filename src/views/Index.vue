<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >圖片輪播管理
        </v-title>
        <v-container class="mt-10">
          <div class="ml-9 mr-9 mt-5">
            <v-text>圖片1</v-text>
            <v-file-input
              class="mt-5"
              show-size
              label="圖片檔案"
            ></v-file-input>
            <v-text>圖片2</v-text>
            <v-file-input
              class="mt-5"
              show-size
              label="圖片檔案"
            ></v-file-input>
            <v-text>圖片3</v-text>
            <v-file-input
              class="mt-5"
              show-size
              label="圖片檔案"
            ></v-file-input>

            <v-btn
              color="#00809F"
              dark
              class="mb-5 mt-5 rounded-pill"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small class="mr-1"> mdi-upload </v-icon>
              上傳圖片
            </v-btn>
          </div>
        </v-container>
        <slider></slider>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import LeftSideMenu from "@/components/navigation-drawer.vue";
import TopMenuBar from "@/components/toolbar.vue";
import slider from "@/components/Slide/slide.vue";
import apiSlide from "@/api/slide";

export default {
  components: {
    LeftSideMenu,
    TopMenuBar,
    slider,
  },
  data() {
    return {
      apiSlide: [],
    };
  },
  methods: {
    async Slide() {
      const res = await apiSlide.get();
      this.apiSlide = res.data.apiSlide;
    },
  },
};
</script>