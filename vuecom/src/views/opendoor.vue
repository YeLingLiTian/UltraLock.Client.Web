<template>
  <v-app>
    <v-alert dense outlined type="error" v-if="alert_empty">
      不能输入空口令
    </v-alert>
    <v-alert dense outlined type="error" v-if="alert_repeat">
      不能输入重复口令
    </v-alert>
  <v-col offset="4" cols="8">
    <v-btn x-large color="success" dark height="100" width="400"> 开门 </v-btn>
  </v-col>
  <v-card class="mx-auto" max-width="344" v-if="juage_display">
    <v-card-text>
      <div>NFCid</div>
      <p class="display-1 text--primary">963455266</p>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4" @click="juage_display = false">
        Close it
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-banner elevation="4" style="display: inline">
    <v-text-field
      v-model="word"
      :counter="10"
      label="单次口令添加"
      required
      @keyup.enter="pushword(word)"
    ></v-text-field>
    <v-btn class="mx-2" fab dark color="indigo" v-on:click="pushword(word)">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </v-banner>
  <v-list>
    <v-list-item v-for="(item, i) in words">
      <v-list-item-icon>
        <v-icon v-if="item.icon" color="pink"> mdi-star </v-icon>
      </v-list-item-icon>

      <v-list-item-content style="display: inline">
        <v-chip class="ma-2" color="green" text-color="white">
          {{ i + 1 + "  :  " + item + "" }}
        </v-chip>
        <v-btn depressed color="error" @click="delate(i)"> Delete </v-btn>
      </v-list-item-content>

      <v-list-item-avatar>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-list>
  </v-app>
</template>
<script>
    export default {
        name: "opendoor",
        data:()=>({
                word: "",
                words: ["芝麻开门", "芝麻拆门"],
          alert_empty: false,
          alert_repeat: false,

        }),
        methods:{
    delate(index){
      this.words.splice(index, 1);
    },
          pushword(word) {
            for (let i = 1; i < this.words.length; i++) {
              if (this.word == this.words[i]) {
                this.alert_repeat = true;
                break;
              } else {
                this.alert_repeat = false;
              }
            }
            if (word == "") {
              this.alert_empty = true;
            } else {
              this.alert_empty = false;
            }
            if (!this.alert_repeat && word != "") {
              this.alert_empty = false;
              this.alert_repeat = false;
              this.words.push(this.word);
              this.word = "";
            }
          },
        },
    }
    
</script>

<style scoped>
</style>