<template>
  <v-row>
    <v-col
      v-for="course in teaching_courses"
      :key="course.uid"
      cols="12"
      sm="9"
    >
      <v-hover v-slot!="{ hover }" open-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="450"
          max-width="800"
        >
          <v-card-text class="font-weight-medium mt-12 text-center text-h5">
            {{ course.title }}
          </v-card-text>
          <v-card
            class="mx-auto"
            color="#26c6da"
            dark
            max-width="950"
            max-height="400"
          >
            <v-card-title> รายละเอียดการบ้าน </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{ course.description }}
            </v-card-text>
            <v-card-actions>
              <v-list-item class="grow">
                <v-row align="center" justify="end">
                  <v-btn max-width="200" align="center" to="/Lesson">
                    ย้อนกลับ
                  </v-btn>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="2">
      <v-hover v-slot="{ hover }" close-delay="200">
        <v-card
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          class="mx-auto"
          height="350"
          max-width="350"
        >
          <v-card-text
            class="font-weight-medium mt-12 text-center text-subtitle-1"
          >
            Your Home Work
          </v-card-text>

          <v-container>
            <v-layout row>
              <v-flex class="text-center font-weight-black">
                <h1>วางไฟล์งาน</h1>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex class="text-center"> 
                <div>
                  <div>
                    <v-btn @click="click1">เลือกไฟล์งาน</v-btn>
                    <input
                      type="file"
                      ref="input1"
                      style="display: none"
                      @change="previewImage"
                      accept="image/*"
                    />
                  </div>
                  <br />
                  <div v-if="imageData != null">
                    <img class="preview" height="75" width="90" :src="img1" />
                    <br />
                  </div>
                </div>
              </v-flex>
            </v-layout>

            <v-layout row>
              <v-flex class="text-center">
                <v-bottom-sheet v-model="sheet" inset>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="pink" v-bind="attrs" v-on="on" @click="create"
                      >ยืนยัน</v-btn
                    >
                  </template>
                  <v-sheet class="text-center" height="200px">
                    <v-btn
                      class="mt-6"
                      text
                      color="error"
                      @click="sheet = !sheet"
                    >
                      close
                    </v-btn>
                    <div class="my-3">Successful Now.</div>
                  </v-sheet>
                </v-bottom-sheet>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>


<script>
import { auth, db } from "../../firebaseDb";
// import { collection } from "firebase/firestore";

export default {
  //name: 'EditTeachingCourses',
  components: {},
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(
      (user) => {
        this.user = user;
        //db.collection(`users/${this.user.uid}/teacher`).get().then( (data) => {
        db.collection(`/users/TNatt/Teacher`)
          .get()
          .then((data) => {
            data.forEach((course) => {
              const m = course.data();
              m["teacher"] = user;
              m["uid"] = course.id;
              this.teaching_courses.push(m);
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
    deleteWork(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("/users/wichit/teacher/sci/homework")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    create() {
      const post = {
        photo: this.img1,
        //caption: this.caption
      };
      db.database()
        .ref("PhotoGallery")  //ไม่รู้จะเรียกไปใส่ใน collection ยังไง 
        .push(post)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    click1() {
      this.$refs.input1.click();
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.img1 = null;
      this.imageData = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.img1 = null;
      const storageRef = db
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },
  },
  data: () => ({
    teaching_courses: [],
    user: null,
    authUnsubscribe: null,
    img1: "",
    imageData: null,
    sheet: false,
  }),
};
</script>
