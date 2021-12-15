<template>
  <div>
    <h3> รายวิชาที่สอน </h3>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="course in teaching_courses" :key="course.uid" cols="12" sm="4">
          <v-card
              class="mx-auto my-12 mx-2 px-2"
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
                      :value="4.5"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                      ></v-rating>

                  <div class="grey--text ms-4">
                    4.5 (413)
                  </div>
              </v-row>

              <div class="my-4 text-subtitle-1">
                $ • Italian, Cafe
              </div>

              <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>{{ user.displayName }}</v-card-title>

            <v-card-text>
              <v-chip-group
                  active-class="deep-purple accent-4 white--text"
                  column
                  >
                  <v-chip>5:30PM</v-chip>

                  <v-chip>7:30PM</v-chip>

                  <v-chip>8:00PM</v-chip>

                  <v-chip>9:00PM</v-chip>
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
  name: 'EditTeachingCourses',
  components: {},
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(user =>{
      this.user = user;
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
  },
  data: () => ({
    teaching_courses: [],
    user: null,
    authUnsubscribe:null,
  }),
}
</script>
