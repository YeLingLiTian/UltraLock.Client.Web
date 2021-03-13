<template>
  <v-app id="inspire">
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="link in links2" :key="link">
        {{ link }}
      </v-tab>
    </v-tabs>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>管理页面</v-toolbar-title>
    </v-app-bar>
    <router-view>
    </router-view>
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" size="64"
          ><v-img
            src="https://p8.itc.cn/images01/20210201/deea5d8977864346a16374132c3d2de2.jpeg"
          ></v-img
        ></v-avatar>

        <div>963455266@qq.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="([icon, text],index) in links1"
          :key="icon"
          link
          @click="goit(index)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    word: "",
    words: ["芝麻开门", "芝麻拆门"],
    juage_display: true,
    cards: ["Today", "Yesterday"],
    drawer: null,
    links1: [
      ["mdi-door-open", "开门"],
      ["mdi-door", "doors管理"],
      ["mdi-human-child", "bot管理"],
      ["mdi-card-account-details", "nfc卡管理"],
    ],
    links2: ["door1", "door2"],
  }),
  methods: {
    goit(index) {
      switch(index+1){
        case 1:this.$router.push({path:"/opendoor"});break;
        case 2:this.$router.push({path:"/doors"});break;
        case 3:this.$router.push({path:"/bots"});break;
        case 4:this.$router.push({path:"/nfcs"});break;
      }
    },
  },
};
</script>