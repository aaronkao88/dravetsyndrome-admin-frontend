<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <LeftSideMenu></LeftSideMenu>

        <TopMenuBar></TopMenuBar>

        <v-title class="ml-10 mt-10" style="font-weight: 700; font-size: 30px"
          >聯絡我們管理
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
                            v-model="editedItem.username"
                            label="username"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.email"
                            label="email"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.phone"
                            label="phone"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.description"
                            label="description"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.condition"
                            label="condition"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            v-model="editedItem.remark"
                            label="remark"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close"
                      >取消
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      儲存
                    </v-btn>
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
import apiContact from "@/api/contact";
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
      { text: "姓名", value: "username" },
      { text: "電子信箱", value: "email" },
      { text: "連絡電話", value: "phone" },
      { text: "問題主旨", value: "description" },
      { text: "病況描述", value: "condition" },
      { text: "說明", value: "remark" },
      { text: "動作", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      姓名: "",
      電子信箱: "",
      連絡電話: "",
      問題主旨: "",
      病況描述: "",
      說明: "",
    },
    defaultItem: {
      姓名: "",
      電子信箱: "",
      連絡電話: "",
      問題主旨: "",
      病況描述: "",
      說明: "",
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
    async Contact() {
      const res = await apiContact.get();
      this.apiContact = res.data.apiContact;
    },

    initialize() {
      this.desserts = [
        {
          username: "高晟睿",
          email: "aaronkao88@gmail.com",
          phone: "0912345678",
          description: "這裡是問題主旨",
          condition: "這是病況描述",
          remark: "這是備註",
        },
        {
          username: "高晟睿",
          email: "aaronkao88@gmail.com",
          phone: "0912345678",
          description: "這裡是問題主旨",
          condition: "這是病況描述",
          remark: "這是備註",
        },
        {
          username: "高晟睿",
          email: "aaronkao88@gmail.com",
          phone: "0912345678",
          description: "這裡是問題主旨",
          condition: "這是病況描述",
          remark: "這是備註",
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