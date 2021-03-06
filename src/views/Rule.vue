<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >章程管理
        </v-title>
        <v-container class="mt-10" fluid>
          <div class="ml-9 mr-9 mt-5">
            <v-text>章程標題</v-text>
            <v-text-field
              v-model="Title"
              :rules="ruleTitle"
              required
            ></v-text-field>
            <v-text>章程條例</v-text>
            <v-text-field
              v-model="Regulations"
              required
              :rules="ruleRegulations"
            ></v-text-field>
            <v-text>章程內容</v-text>
            <v-text-field
              v-model="content"
              :rules="ruleContent"
              required
            ></v-text-field>
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
import apiRule from "@/api/rule";
import LeftSideMenu from "@/components/navigation-drawer.vue";
import TopMenuBar from "@/components/toolbar.vue";

export default {
  components: {
    LeftSideMenu,
    TopMenuBar,
  },

  data: () => ({
    ruleTitle: [(v) => !!v || "請輸入章程標題"],
    ruleRegulations: [(v) => !!v || "請輸入章程條例"],
    ruleContent: [(v) => !!v || "請輸入章程內容"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    async Rule() {
      const res = await apiRule.get();
      this.apiRule = res.data.apiRule;
    },
  },
};
</script>

