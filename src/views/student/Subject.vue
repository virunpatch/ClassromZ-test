/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
<template>
  <v-app>
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
          >
          </v-img>
        </template>

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
        <!--<Viewapp /> -->
        <div align="center" class="pa-4 mx-lg-4">
          <v-card max-width="1200">
            <v-list>
              <v-list-group v-for="work in course" :key="work.uid">
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{ work.title }} </v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item>
                  <v-list-item-content>
                    <v-card-text>{{ work.description }}</v-card-text>
                    <v-btn
                      color="primary"
                      dark
                      max-width="200"
                      align="center"
                      to="/Detail"
                    >
                      ส่งงาน
                    </v-btn>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </div>
      </v-sheet>
    </v-card>
  </v-app>
</template>
<script>
// import { DocumentSnapshot } from '@firebase/firestore/dist';
// import Viewapp from "@/components/Streamstudent.vue";
import { auth, db } from "../../firebaseDb";
// import { Firestore } from '@firebase/firestore/dist';
export default {
  components: {
    // Viewapp,
  },
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(
      (user) => {
        this.user = user;
        // ค้นหารายวิชาที่ฉันลงเรียน
        //db.collection(`users/${this.user.uid}/subject`).get().then( (data) => {
        db.collection(`/users/wannasakon/student/${this.$route.params.id}/homework`)
          .get()
          .then((data) => {
            data.forEach((work) => {
              const m = work.data();
              m["teacher"] = user;
              this.course.push(m);
            });
          });
      },
      (err) => {
        console.log(err);
      }
    );
  },
  beforeDestroy() {
    this.authUnsubscribe();
  },
  methods: {
    googleLogoutHandler() {
      auth
        .signOut()
        .then(() => {
          this.$router.replace("/");
          console.log("Log out");
          alert("ออกจากระบบเรียบร้อย");
        })
        .catch((err) => {
          console.log("Login not OK" + err);
        });
    },
  },
  data: () => ({
    course: [],
    user: null,
    authUnsubscribe: null,
  }),
};
</script>