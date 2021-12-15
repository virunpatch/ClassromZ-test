<template>
    <div align="center">
    

        <!--v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on"> new </v-btn>
            </template>

            <v-card>
                <v-card-title>
                <span class="text-h5">New Assign</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col>
                                <v-text> Assign: </v-text>
                                <v-text-field>
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <v-text> Description: </v-text>
                                <v-textarea>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-action class="md-20">
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="dialog = false"
                    >
                        Save
                    </v-btn>
                </v-card-action>
            </v-card>
        </v-dialog-->
        
        <v-btn to="/add2">เพิ่มงาน</v-btn>
        <v-btn to="/page4">เช็คชื่อ</v-btn>
        <v-btn to="/page4">คะแนน</v-btn>


        <v-card class="mx-auto md-auto ml-5 mr-5 mt-5" max-width="1200" >
            <v-list>
            <v-list-group v-for="n in Users" :key="n.key">
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title> {{n.name}} </v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item>
                <v-list-item-content>
                    <v-card-text>{{n.des}}</v-card-text>
                    <v-card-text>คะแนนเต็ม: {{n.full}} คะแนน</v-card-text>
                    <v-btn max-width="200"  :to="{name: 'Page3-1', params: { id: n.key }}" > ตรวจสอบงาน </v-btn>
                    <v-btn max-width="200" :to="{name: 'edit2', params: { id: n.key }}">แก้ไข</v-btn>
                    <v-btn max-width="200" @click.prevent="deleteUser(n.key)"> ลบ </v-btn>    
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
                Users: []
            }
        },
        created() {
            db.collection('assign').onSnapshot((snapshotChange) => {
                this.Users = [];
                snapshotChange.forEach((doc) => {
                    this.Users.push({
                        key: doc.id,
                        name: doc.data().name,
                        des: doc.data().des,
                        full: doc.data().full,
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Do you really want to delete?")) {
                db.collection("assign").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>
