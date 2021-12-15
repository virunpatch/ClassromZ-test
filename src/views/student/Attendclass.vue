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
        <!-- start-->
        <div class="pa-4 mx-lg-4">
          <v-card max-width="1200">
            <v-list>
              <v-list-group v-for="attend in course" :key="attend">
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{ attend.title }} </v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item>
                  <v-list-item-content>
                    <form @submit.prevent="onFormSubmit">
                      <section>
                        <input type="radio" v-model="attend.status" value="true" /> มา
                        ครับ/ค่ะ
                        <br />
                        <input type="radio" v-model="attend.status" value="false" />
                        ไม่มา ครับ/ค่ะ
                        <br />
                        <span>Section: {{ attend.status }}</span>
                      </section>
                      <v-btn
                        color="primary"
                        dark
                        max-width="200"
                        align="center"
                        class="btn btn-primary btn-block ma-5"
                      >
                        ลงชื่อเข้าเรียน
                      </v-btn>
                    </form>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </div>
        <!-- -->
      </v-sheet>
    </v-card>
  </v-app>
</template>
<script>
import { auth, db } from "../../firebaseDb";
export default {
  name: "Viewapp",
  components: {
    // Viewapp,
  },
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(
      (user) => {
        this.user = user;
        // ค้นหารายวิชาที่ฉันลงเรียน
        //db.collection(`users/${this.user.uid}/subject`).get().then( (data) => {
        db.collection(`/users/wannasakon/student/sci/checkin/`)
          .get()
          .then((data) => {
            data.forEach((attend) => {
              const m = attend.data();
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
    onFormSubmit(event) {
      event.preventDefault();
      db.collection(`/users/wannasakon/student/sci/checkin/`)
        .add(this.attend)
        .then(() => {
          alert("successfully!");
          this.attend.title = "";
          this.attend.status = "";
          this.attend.teacher = this.docs.teacher;
        })
        .catch((error) => {
          console.log(error);
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