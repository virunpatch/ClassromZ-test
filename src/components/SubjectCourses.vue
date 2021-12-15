<template>
  <div>
    <h3>รายวิชาที่เรียน</h3>
    <v-container>
      <!-- <v-row no-gutters>
        <v-col
          v-for="course in subject_courses"
          :key="course.uid"
          cols="12"
          sm="4"
        >
          <v-card class="mx-auto my-12 mx-2 px-2" max-width="374">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img
              height="250"
              v-bind:src="
                course.banner
                  ? course.banner
                  : 'https://picsum.photos/500/250?image=555'
              "
            >
              <v-card-title>{{ course.title }}</v-card-title>
              <v-card-text>
                <v-avatar size="56">
                  <img alt="teacher" v-bind:src="course.teacher.photoURL" />
                </v-avatar>
              </v-card-text>
            </v-img>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>

                <div class="grey--text ms-4">4.5 (413)</div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                {{ course.teacher.displayName }}
              </div>

              <div>{{ course.description }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text to="/subject">
                เปิด
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row> -->
      <v-row dense>
        <v-col
          v-for="course in subject_courses"
          :key="course.uid"
          :to="course.to"
          :cols="12"
          sm="4"
          link
        >
          <v-card>
            <v-img
              v-bind:src="
                course.banner
                  ? course.banner
                  : 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
              "
              class="white--text"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
             <!-- <v-card-text>
                <v-avatar size="56">
                  <img alt="teacher" v-bind:src="course.teacher.photoURL" />
                </v-avatar>
              </v-card-text> -->
            </v-img>
            <v-card-title>{{ course.title }}</v-card-title>
            <v-card-subtitle>
              <v-avatar size="30">
                <img alt="teacher" v-bind:src="course.teacher.photoURL" />
              </v-avatar>
              {{ course.teacher.displayName }}
            </v-card-subtitle>
            <div>{{ course.description }}</div>
            <router-link :to="{name: 'subject', params: { id: course.uid }}" >
              <div class="text-center">
                <v-btn rounded color="primary" dark> แสดงรายวิชา </v-btn>
              </div></router-link
            >
            <br />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { auth, db } from "../firebaseDb";
// import { collection } from "firebase/firestore";

export default {
  name: "SubjectCourses",
  components: {},
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(
      (user) => {
        this.user = user;
        // ค้นหารายวิชาที่ฉันลงเรียน
        //db.collection(`users/${this.user.uid}/subject`).get().then( (data) => {
        db.collection(`/users/wannasakon/student`)
          .get()
          .then((data) => {
            data.forEach((course) => {
              const m = course.data();
              m["teacher"] = user;
              this.subject_courses.push(m);
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
    subject_courses: [],
    user: null,
    authUnsubscribe: null,
  }),
};
</script>
