<template>
  <v-app id="Viewapp">
    <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        color="#6A76AB"
        dark
        shrink-on-scroll
        prominent
        src="https://picsum.photos/1920/1080?random"
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>

        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-app-bar-title>Subject name</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab to="/subject">งานทั้งหมด</v-tab>
            <v-tab to="/submitwork">งานที่ส่งแล้ว</v-tab>
            <v-tab to="/unsubmitwork">งานที่ไม่ได้ส่งได้</v-tab>
            <v-tab to="/attendclass">ลงชื่อเข้าเรียน</v-tab>
            <v-tab to="/CheckPoint">คะแนน</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-3" class="overflow-y-auto">
        <!-- max-height="900"-->
        <v-container style="height: 200px"> </v-container>
        <br />
        <div align="center" class="pa-4 mx-lg-4">
        <v-card max-width="1200">
          <v-expansion-panels>
            <v-card class="mx-auto md-auto ml-5 mr-5 mt-5" max-width="1200" >
            <v-list>
            <v-list-group v-for="course in teaching_courses" :key="course.uid">
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title> <!--{{n.name}}--> {{ course.title2 }}</v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item>
                <v-list-item-content>
                    <v-card-text> <!--{{n.des}}--> {{course.uid}} </v-card-text>
                    <v-card-text>คะแนนเต็ม: <!--{{n.full}}--> {{course.score}} คะแนน</v-card-text>
                    <v-card-text>คะแนนที่ได้: <!--{{n.full}}--> {{course.score2}} คะแนน</v-card-text>
                    <v-card-text>{{course.id}}</v-card-text>
                    <!--<v-btn max-width="200"  :to="{name: 'Page3-1', params: { id: course.uid }}" > ตรวจสอบงาน </v-btn-->
                    <v-btn max-width="200" :to="{name: 'subject', params: { id: course.uid }}">แก้ไข</v-btn>
                    <v-btn max-width="200" @click.prevent="deleteWork(course.uid)"> ลบ </v-btn>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
        </v-card>
          </v-expansion-panels>
        </v-card>
        </div>
        <!-- -->
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>

import { auth, db } from "../../firebaseDb";
// import { collection } from "firebase/firestore";

export default {
  //name: 'EditTeachingCourses',
  components: {},
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(user =>{
      this.user = user;
      //db.collection(`users/${this.user.uid}/teacher`).get().then( (data) => {
      db.collection(`/users/Virunpatch/student/thai/score`).get().then( (data) => {
        data.forEach( (course) => {
            const m = course.data();
            m["teacher"] = user;
            m["uid"] = course.id;
            this.teaching_courses.push(m);
        });
      });
    },err =>{
      console.log(err);
    }
    );
  },
  beforeDestroy() {
    this.authUnsubscribe();
  },
  methods: {
        deleteWork(id){
            if (window.confirm("Do you really want to delete?")) {
                db.collection("/users/wichit/teacher/sci/homework").doc(id).delete().then(() => {
                    console.log("Document deleted!");
                })
                .catch((error) => {
                    console.error(error);
                })
            }
        }
  },
  data: () => ({
    teaching_courses: [],
    user: null,
    authUnsubscribe:null,
  }),
}
    /*import { db } from '../../firebaseDb';

    /*export default {
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
    }*/
</script>

