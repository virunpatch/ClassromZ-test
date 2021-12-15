<template>
    <div align="center">

        <v-btn to="/page3">กลับ</v-btn>

        <v-card class="mx-auto md-auto ml-5 mr-5 mt-5" max-width="1200" >
            <v-list v-for="n in docs" :key="n">
            <v-list-group>
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title> {{n.name}} </v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item>
                <v-list-item-content>
                    <v-card class="col-1 ma-5">
                        <v-card-content>
                            <v-card-content-title>
                                คะแนนรวม {{n.score.reduce(function(a,b){return a+b})}} / {{n.full.reduce(function(a,b){return a+b})}}
                            </v-card-content-title>
                        </v-card-content>
                    </v-card>
                    <v-card class="col-1 ma-5" v-for="x in n.score.length" :key="x">
                        <v-card-content>
                            <v-card-content-title to="page3">
                                <router-link :to="{name: 'Page3-1', params: { id:'47vQDh1xk0JKB1boyigW' }}">assign</router-link>
                                 score {{n.score[x-1]}} / {{n.full[x-1]}}
                            </v-card-content-title>
                        </v-card-content>
                    </v-card>     
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
        </v-card>
    </div>
    
</template>
<script>
    import { db } from '../../firebaseDb';
    
    export default {
        data() {
            return {
                docs: []
            }
        },
        created() {
            db.collection('score').onSnapshot((snapshotChange) => {
                this.docs = [];
                snapshotChange.forEach((doc) => {
                    this.docs.push({
                        key: doc.id,
                        name: doc.data().name,
                        score: doc.data().score,
                        full: doc.data().Full,


                        /*key: doc.id,
                        name: doc.data().name,*/
                    })
                });
            })
        },
        /*methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("score").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }*/
    }
</script>
