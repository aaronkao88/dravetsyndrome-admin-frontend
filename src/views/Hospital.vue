<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >醫院列表管理
        </v-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="calories"
          class="elevation-1 ml-10 mr-10 mt-5"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="#00809F"
                    dark
                    class="mb-5 mt-5 rounded-pill"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon small class="mr-1"> mdi-plus </v-icon>新增
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.name"
                            label="username"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.address"
                            label="email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.phone"
                            label="phone"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">
              mdi-pencil
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>

          <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">重設所有資料</v-btn>
          </template>
        </v-data-table>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import apiHospital from "@/api/hospital";
import LeftSideMenu from "@/components/navigation-drawer.vue";
import TopMenuBar from "@/components/toolbar.vue";

export default {
  components: {
    LeftSideMenu,
    TopMenuBar,
  },
  data: () => ({
    dialog: false,
    headers: [
      { text: "醫院姓名", value: "name" },
      { text: "醫院地址", value: "address" },
      { text: "連絡電話", value: "phone" },
      { text: "動作", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      address: "",
      phone: "",
    },
    defaultItem: {
      name: "",
      address: "",
      phone: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新增" : "編輯";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async Hspital() {
      const res = await apiHospital.get();
      this.apiHospital = res.data.apiHospital;
    },
    initialize() {
      this.desserts = [
        {
          name: "臺北榮民總醫院",
          address: "112台北市北投區石牌路二段201號",
          phone: "總機：02-2871-2121",
        },
        {
          name: "國泰醫療財團法人國泰綜合醫院",
          address: "臺北市仁愛路四段280號",
          phone: "02-27082121",
        },
        {
          name: "台灣大學醫學院附設醫院",
          address: "100226 台北市中山南路8號(兒醫大樓門診住院服務)",
          phone: "臺大醫院總機電話專線: 02-2312-3456",
        },
        {
          name: "台北醫學大學附設醫院",
          address: "110301臺北市信義區吳興街252號",
          phone: "代表號：02-27372181",
        },
        {
          name: "林口長庚紀念醫院",
          address: "333桃園市龜山區復興街5號",
          phone: "代表號：02-27372181",
        },
        {
          name: "童綜合醫療社團法人童綜合醫院",
          address: "435台中市梧棲區台灣大道八段699號",
          phone: "梧棲院區 04-26581919",
        },
        {
          name: "臺中榮民總醫院",
          address: "40705台中市西屯區台灣大道四段1650號",
          phone: "總機: (04)2359-2525",
        },
        {
          name: "高雄長庚紀念醫院",
          address: "833高雄市鳥松區大埤路123號",
          phone: "07 731 7123",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.desserts.indexOf(item);
      confirm("你確定要刪除這筆資料嗎?") && this.desserts.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>