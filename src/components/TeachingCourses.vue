<template>
  <div>
    <h3> รายวิชาที่สอน </h3>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="course in teaching_courses" :key="course.uid" cols="12" sm="6">
          <v-card
              class="my-12 mx-2 px-2"
              max-width="374"
              >
              <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                    ></v-progress-linear>
              </template>

            <v-img
                height="250"
                src="https://picsum.photos/800/500?image=555"
                ></v-img>

            <v-card-title>{{ course.title }}</v-card-title>

            <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
                  >
                  <v-rating
                      :value="course.rate"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                      ></v-rating>

                  <div class="grey--text ms-4">
                    {{ course.rate }} ({{ course.count }})
                  </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                {{ user.displayName }}
              </div>

              <div>{{ course.description }}</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-text>
              <v-chip-group
                  active-class="deep-purple accent-4 white--text"
                  column
                  >
                  <v-btn class="my-2 mx-2"><v-badge color="green" content="6">ลงชื่อเข้าเรียน</v-badge></v-btn>
                  <v-btn class="my-2 mx-2"><v-badge color="green" content="7">การบ้าน</v-badge></v-btn>
                  <v-btn class="my-2 mx-2"><v-badge color="green" content="3">ลิงค์</v-badge></v-btn>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn
                  color="deep-purple lighten-2"
                  text
                  >
                  เปิด
              </v-btn>
            </v-card-actions>
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
  name: 'TeachingCourses',
  components: {},
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(user =>{
      this.user = user;
      // ค้นหารายวิชาที่ฉันลงเรียน
      //db.collection(`users/${this.user.uid}/teacher`).get().then( (data) => {
      db.collection(`users/wichit/teacher`).get().then( (data) => {
        data.forEach( (course) => {
          this.teaching_courses.push(course.data());
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
    teaching_courses: [],
    user: null,
    authUnsubscribe:null,
  }),
}
</script>
