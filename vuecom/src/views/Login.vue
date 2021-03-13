<template>
  <v-app>
    <v-container>
      <v-alert type="error" v-if="juage_inputerror">
        用户名/密码输入错误。
      </v-alert>
      <v-alert type="error" v-if="juage_none"> 未输入用户名/密码。 </v-alert>
      <div class="background">
        <v-img src="../assets/lg.png" height="250px"></v-img>
        <v-content>
          <v-col offset="2" cols="8">
            <v-card elevation="7" outlined shaped color="dark">
              <v-col offset="2" cols="8">
                <v-text-field
                  v-model="users_name"
                  :counter="10"
                  label="请输入您的用户名"
                  required
                  autofocus
                  maxlength="10"
                ></v-text-field>
                <div>
                  <v-text-field
                    maxlength="12"
                    :type="!eyeon ? 'password' : 'text'"
                    v-model="users_passord"
                    label="请输入您的密码"
                    required
                    :append-outer-icon="eyeon ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append-outer="changeeye()"
                    clearable
                    hide-details
                    @keyup.enter="login"
                  >
                  </v-text-field>
                </div>
                <v-col offset="4" cols="8">
                  <v-btn color="primary" x-large @click="login">登录 </v-btn>
                </v-col>
              </v-col>
            </v-card>
          </v-col>
        </v-content>
      </div>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Login",
  data: () => ({
    users_name_true: "yeling",
    users_passord_true: "123456",
    juage_eye: true,
    users_name: "",
    users_passord: "",
    eyeon: false,
    juage_inputerror: false,
    juage_none: false,
  }),
  components: {
    HelloWorld,
  },
  methods: {
    clearit() {},
    changeeye() {
      this.eyeon = !this.eyeon;
    },
    login() {
      if (
        this.users_name == this.users_name_true &&
        this.users_passord == this.users_passord_true
      ) {
        this.$router.push({ path: "/opendoor" });
      } else {
        this.juage_inputerror = true;
        this.juage_none = false;
      }
      if (this.users_name == "" || this.users_passord == "") {
        this.juage_none = true;
        this.juage_inputerror = false;
      }
    },
  },
};
</script>
<style>
</style>