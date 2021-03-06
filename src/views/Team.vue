<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >成員管理
        </v-title>
        <v-container class="mt-10" fluid>
          <div class="ml-9 mr-9 mt-5">
            <v-text>成員名稱</v-text>
            <v-text-field
              v-model="Name"
              :rules="jobName"
              required
            ></v-text-field>
            <v-text>職稱</v-text>
            <v-text-field v-model="jobs" required :rules="job"></v-text-field>
            <v-text>成員大頭貼</v-text>
            <v-file-input
              class="mt-5"
              v-model="Images"
              :rules="jobImage"
              show-size
            ></v-file-input>
            <v-btn
              color="#00809F"
              dark
              class="mb-5 mt-5 rounded-pill"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small class="mr-1"> mdi-plus </v-icon>新增規章
            </v-btn>
          </div>
        </v-container>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import apiTeam from "@/api/team";
import LeftSideMenu from "@/components/navigation-drawer.vue";
import TopMenuBar from "@/components/toolbar.vue";

export default {
  components: {
    LeftSideMenu,
    TopMenuBar,
  },

  data: () => ({
    jobName: [(v) => !!v || "請輸入成員名字"],
    job: [(v) => !!v || "請輸入成員職稱"],
    jobImage: [
      (v) => !!v || "請上傳成員大頭貼",
      (v) => /.jpg +.png\..+/.test(v) || "圖片僅能.jpg或.png的副檔名",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    async Team() {
      const res = await apiTeam.get();
      this.apiTeam = res.data.apiTeam;
    },
  },
};
</script>

