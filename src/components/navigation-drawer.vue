<template>
  <v-navigation-drawer v-model="drawer" color="#313e54" app clipped dark>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <a href="/admin/slide">
          <v-list-item-content>
            <v-list-item-title class="white--text">圖片輪播</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-pencil</v-icon>
        </v-list-item-action>
        <a href="/admin/article">
          <v-list-item-content>
            <v-list-item-title class="white--text">文章管理</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-contacts</v-icon>
        </v-list-item-action>

        <a href="/admin/contact">
          <v-list-item-content>
            <v-list-item-title class="white--text">聯絡我們</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon> mdi-message-text </v-icon>
        </v-list-item-action>

        <a href="/admin/rule">
          <v-list-item-content>
            <v-list-item-title class="white--text">章程管理</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>

        <a href="/admin/team">
          <v-list-item-content>
            <v-list-item-title class="white--text">成員管理</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-google-photos</v-icon>
        </v-list-item-action>
        <a href="/admin/media">
          <v-list-item-content>
            <v-list-item-title class="white--text">媒體管理</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-hospital</v-icon>
        </v-list-item-action>
        <a href="/admin/hospital">
          <v-list-item-content>
            <v-list-item-title class="white--text">醫院清單</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>
        <a href="/">
          <v-list-item-content>
            <v-list-item-title class="white--text">登出</v-list-item-title>
          </v-list-item-content>
        </a>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
a {
  color: #000;
  text-decoration: none;
}
</style>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
  }),
};
</script>