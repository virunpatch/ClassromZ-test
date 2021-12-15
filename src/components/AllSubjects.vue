<template>
  <div>
    <h3> รายวิชาทั้งหมด </h3>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(course,i) in courses"
      :key="i"
    >
    <v-card>
        <v-img
          height="100%"
          src="https://picsum.photos/400/250?image=444"
        >
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-h6 white--text pl-0">
              {{ course.title }}
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              color="white"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-title class="white--text mt-8">
            <v-avatar size="56">
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg"
              >
            </v-avatar>
            <p class="ml-3">
            {{ course.teacher.username? course.teacher.username : course.teacher.email }}
            </p>
          </v-card-title>
        </v-img>
        <v-card-text>
          <v-sheet
              color="white"
              elevation="1"
              height="80%"
              width="80%"
            >
            <v-row>
              {{ course.description }}
            </v-row>
          </v-sheet>
        </v-card-text>
      </v-card>
    </v-carousel-item>
  </v-carousel>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  name: 'AllSubjects',
  components: {
  },
  created() {
    // ค้นหาทุกรายวิชา
    db.collection("users").get().then( (snapshot) => {
      snapshot.forEach( (user) => {
        const teacher = user;
        console.log(`id = ${teacher.id}`);
        db.collection(`users/${teacher.id}/teacher`).get().then( (data) => {
          data.forEach( (course) => {
            const m = course.data();
            m['teacher'] = teacher.data();
            this.courses.push(m);
          });
        });
      });
    });
  },
  beforeDestroy() {
  },
  methods: {
  },
  data: () => ({
    model: 0,
    courses: [],
  }),
}
</script>
