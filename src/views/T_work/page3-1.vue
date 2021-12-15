<template>
    <div class="ma-5">
        <v-btn class="ma-5" to="/Page3">กลับ</v-btn>
        <v-row>
            <v-col class="col-4" v-for="name in assign.students.length" :key="name">
                <v-card>
                    <v-card-title> {{assign.students[name-1]}} </v-card-title>
                    <v-card-subtitle>{{assign.score[name-1]}}</v-card-subtitle>
                    <!--v-card-subtitle>{{name.score}}</v-card-subtitle-->

                    <v-card-content>
                    <v-img class="ma-5" height="500" width="500" :src="assign.work[name-1]"/>
                    <!--v-img class="ma-5" src="https://picsum.photos/id/11/1280/720" @click="overlay = !overlay" />

                    <v-overlay :z-index="zIndex" :value="overlay">

                        <v-img class="ma-5" src="https://picsum.photos/id/11/1280/720" @click="overlay = false" />
                    
                    </v-overlay-->

                    </v-card-content>

                    <v-card-content>

                        <v-form @submit.prevent="onUpdateForm">
                             ให้คะแนน: 
                            <select v-model="selected" class="text-center">
                            <option v-for="option in assign.full" v-bind:value="option" :key="option"> 
                                {{ option }} คะแนน
                            </option>
                            </select>
                            <!--span>Selected: {{ selected }}</span>

                            <v-btn class="col-2 mr-5" @click="assign.score[name-1]=selected"> rating </v-btn-->
                            <button class="btn btn-primary btn-block" @click="assign.score[name-1]=selected" > Save </button>
                        </v-form>

                    </v-card-content>
                                        
                    <v-card-content>
                    </v-card-content>
                    <!--template>
                        <v-container id="dropdown-example-3">
                            <v-overflow-btn
                            class="my-2"
                            :items="dropdown_edit"
                            label="Overflow Btn w/ counter"
                            counter
                            item-value="text"
                            ></v-overflow-btn>
                        </v-container>
                    </template-->

                </v-card>

            </v-col>
        </v-row>
    </div>
</template>

<script>

    import { db } from '../../firebaseDb';

    export default {
        data() {
            return {
                assign: {
                    score:[],
                }
            }
        },
        created() {
            let dbRef = db.collection('assign').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.assign = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('assign').doc(this.$route.params.id)
                .update(this.assign).then(() => {
                    console.log("assign successfully updated!");
                    this.$router.push('/page3')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }


/*export default {
    data() {
        return {
            num:5,
            names : [{name:'Joe',score:5},{name:'James',score:5},{name:'Jane',score:5},{name:'Jasmine',score:5},{name:'Mei',score:5},{name:'Jim',score:5}],
            overlay: false,
            zIndex: 0,
            dialog: false,
            select: { state: 0, abbr: 0 },
            items: [
            { state: 0, abbr: 0 },
            { state: 1, abbr: 1 },
            { state: 2, abbr: 2 },
            { state: 3, abbr: 3 },
            { state: 4, abbr: 4 },
            { state: 5, abbr: 5 },
            { state: 6, abbr: 6 },
            { state: 7, abbr: 7 },
            { state: 8, abbr: 8 },
            { state: 9, abbr: 9 },
            { state: 10, abbr: 10 },
            ],
        };
    }
}*/
</script>