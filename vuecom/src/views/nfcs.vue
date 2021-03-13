<template>
    <div style="height: 700px">
        <v-col offset="4" cols="8">
        <v-list-item
                v-for="(nfcids,index) in cards"
        >
            <v-list-item-content>
                <v-card
                        max-width="344"
                >
                    <v-card-text>
                        <div>NFCid</div>
                        <p class="display-1 text--primary">
                            {{nfcids}}
                        </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn
                                text
                                color="teal accent-4"
                                @click="deletenfc(index)"
                        >
                            Delete it
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </v-list-item-content>
        </v-list-item>
            <v-col offset="1" cols="6">
            <v-btn
                    :loading="loading5"
                    :disabled="loading5"
                    color="blue-grey"
                    class="ma-2 white--text"
                    fab
                    @click="loader = 'loading5'"
                    height="100"
                    width="100"
            >
                <v-icon dark>
                    mdi-cloud-upload
                </v-icon>
            </v-btn>
            </v-col>
        </v-col>
    </div>
</template>

<script>
    export default {
        name: "nfcs",
        data:()=>({
            juage_display :true,
            cards:['963455266','171717']
        }),
        methods:{
          deletenfc(index){
              this.cards.splice(index, 1);
          }
        },
    }
</script>

<style scoped>

</style>