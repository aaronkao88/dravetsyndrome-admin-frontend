<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >影音管理
        </v-title>
        <v-container class="mt-10" fluid>
          <div class="ml-9 mr-9 mt-5">
            <v-text>選擇上傳圖片</v-text>
            <v-file-input
              class="mt-5"
              v-model="articleImg"
              :rules="fileCheck"
              show-size
            ></v-file-input>
            <v-btn
              color="#00809F"
              dark
              class="mb-5 mt-5 rounded-pill"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small class="mr-1"> mdi-upload </v-icon>新增圖片
            </v-btn>
          </div>
        </v-container>
      </v-app>
    </v-app>
  </div>
</template>


<script>
import LeftSideMenu from "@/components/navigation-drawer.vue";
import TopMenuBar from "@/components/toolbar.vue";

export default {
  components: {
    LeftSideMenu,
    TopMenuBar,
  },
};
</script>