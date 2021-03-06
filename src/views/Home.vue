<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-img
                  width="400"
                  class="mx-auto"
                  src="@/assets/draveLogo_Admin.png"
                />
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title
                      >台灣卓越飛翔內容管理系統 CMS System</v-toolbar-title
                    >
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="username"
                        name="username"
                        label="管理員帳號："
                        prepend-icon="mdi-account"
                        type="text"
                        :rules="adminUser"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="username"
                        name="username"
                        label="管理員帳號："
                        prepend-icon="mdi-account"
                        type="password"
                        :rules="adminPass"
                        required
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" href="admin/slide" @click="postLogin"
                      >登入</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import apiLogin from "@/api/admin";

export default {
  data() {
    return {
      apiLogin: [],
    };
  },

  methods: {
    async Login() {
      const res = await apiLogin.get();
      this.apiLogin = res.data.apiLogin;
    },
    postLogin() {
      if (this.$refs.form.validate()) {
        this.$refs.form.$el.submit();
      }
    },
  },
};
</script>