<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >文章管理
        </v-title>
        <v-container class="mt-10" fluid>
          <div class="ml-9 mr-9 mt-5">
            <v-text>文章標題</v-text>
            <v-text-field
              v-model="Title"
              :counter="50"
              :rules="articleTitle"
              required
            ></v-text-field>
            <v-text>編輯者</v-text>
            <v-text-field
              v-model="articleEditor"
              :counter="10"
              :rules="Editor"
              required
            ></v-text-field>
            <v-text>內容</v-text>
            <v-text-field
              v-model="subTitle"
              :counter="3000"
              :rules="articleText"
              required
            ></v-text-field>
            <v-text>圖片</v-text>
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
              <v-icon small class="mr-1"> mdi-plus </v-icon>新增文章
            </v-btn>
          </div>

          <!-- 文章預覽 -->
          <v-card
            v-for="article in apiArticle"
            :key="article"
            class="mx-auto mt-10 pt-10 pb-10"
            max-width="1000"
          >
            <v-card-text>
              <p class="display-1 text--primary">{{ article.title }}</p>
              <p>編輯者：{{ article.Editor }}</p>
              <div class="text--primary">
                {{ `${article.subTitle.slice(0, 87)}...` }}
              </div>
            </v-card-text>
          </v-card>
        </v-container>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import apiArticle from "@/api/article";
import LeftSideMenu from "@/components/navigation-drawer.vue";
import TopMenuBar from "@/components/toolbar.vue";

export default {
  components: {
    LeftSideMenu,
    TopMenuBar,
  },

  data: () => ({
    valid: true,
    // apiArticle: [
    //   {
    //     id: 1,
    //     title: "卓飛症候群 (Dravet症候群)",
    //     Editor:
    //       "台中榮總 兒童醫學中心 兒童神經科 李秀芬、童綜合醫院 教學副院長 遲景上",
    //     subTitle:
    //       "卓飛症候群（Dravet症候群），以前稱為嬰兒嚴重肌陣攣癲癇 (severe myoclonic epilepsy of infancy; SMEI) 是一種基因突變而導致的嚴重癲癇性腦症，此症候群於1978年由法國小兒神經科醫師Charlotte Dravet首度描述，於1989年列入國際抗癲癇聯盟之癲癇分類中，因為有些病人不會出現肌陣攣抽搐且臨床病程非侷限於嬰兒，此症候群會由嬰幼兒期持續至兒童期甚至終其一生，2001年國際抗癲癇聯盟工作小組採以Dravet醫師為名，正式將嬰兒嚴重肌陣攣癲癇更名為同義詞卓飛症候群(Dravet症候群)。",
    //     imgLink: "https://dravetsyndrome.tw/Images/HomeSlider/slide_1.jpg",
    //   },
    //   {
    //     id: 2,
    //     title: "嚴重嬰兒肌跳躍癲癇(SMEI)",
    //     Editor: "台中榮總兒童醫學部 李秀芬 遲景上",
    //     subTitle:
    //       "嚴重嬰兒肌跳躍癲癇(SMEI)，在1978年由Dr.Dravet首次報導，又稱為Dravet症候群，這是ㄧ種少見的癲癇症後群，其發生率約為二萬分之ㄧ至四萬分之ㄧ，男性的發生率比女性來得高，約為2比1。\n隨著癲癇研究的進步及分子生物學的蓬勃發展，目前已知嚴重嬰兒肌跳躍癲癇(SMEI)乃因中樞神經系統的鈉離子通道SCN1A基因發現變異所造成。什麼是離子通道呢？人體中有很多器官含有興奮性的組織，包括中樞神經系統、肌肉系統及心臟系統等，這些組織主要是以鈉、鉀、氯、鈣等離子通道調控電流，當離子通道的基因產生變異時，就無法順利調控電流的通過；換句話說，調控電流的通道因為基因變異，使得電流通過時，通道該開的時候不開，該關的時候不關，這會造成電流量不穩進而產生短路，在中樞神經系統中這樣的短路會造成不正常放電，也就是臨床上所見癲癇的發作。嚴重嬰兒肌跳躍癲癇(SMEI)病童身上的鈉離子通道SCN1A都是不完整的或是屬於重要的高度保留性氨基酸產生變異，因此常會產生嚴重的癲癇症狀。",
    //     imgLink: "https://dravetsyndrome.tw/Images/HomeSlider/slide_1.jpg",
    //   },
    // ],
    data() {
      return {
        apiArticle: [],
      };
    },
    methods: {
      async Articles() {
        const res = await apiArticle.get();
        this.apiArticle = res.data.apiArticle;
      },
    },
    articleTitle: [
      (v) => !!v || "請輸入文章標題",
      (v) => (v && v.length <= 50) || "標題最多只能50個字",
    ],
    Editor: [
      (v) => !!v || "請輸入編輯者",
      (v) => (v && v.length <= 10) || "編輯者只能不能大於10個字",
    ],
    articleText: [
      (v) => !!v || "請輸入內容",
      (v) => (v && v.length <= 3000) || "文章內容不能大於3000個字",
    ],
    fileCheck: [
      (v) => !!v || "請檢察是否有選擇檔案",
      (v) => /.jpg +.png\..+/.test(v) || "圖片僅能.jpg或.png的副檔名",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  methods: {
    //   async getArticleList() {
    //     this.dataList = await getArticleList.get();
    //   },
    //   async newArticle() {
    //     this.newData = await newArticle.post();
    //   },
    validate() {
      this.$refs.form.validate();
    },
  },
};
</script>

