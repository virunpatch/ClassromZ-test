<template>
  <div v-if="user">
    <h1> Admin Page</h1>

    <EditTeachingCourses/>

  </div>
  <div v-else>
    <SignIn/>
  </div>
</template>

<script>
import { auth } from "../firebaseDb";
// import { collection } from "firebase/firestore";
import  SignIn  from "./login/Signin_t.vue";
import  EditTeachingCourses  from "../components/EditTeachingCourses.vue";

export default {
  name: 'Admin',
  components: {
    SignIn,
    EditTeachingCourses,
  },
  created() {
    this.authUnsubscribe = auth.onAuthStateChanged(user =>{
      this.user = user;
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
    subject_courses: [],
    courses: [],
    drawer: null,
    items: [
      { title: "หน้าหลัก", icon: "mdi-home", to:'/', }, 
      { title: "สำหรับครู", icon: "mdi-home", to:'/teacher', }, 
      { title: "สำหรับนักเรียน", icon: "mdi-home",  to:'/student' }, 
      { title: "สำหรับผู้ดูแล", icon: "mdi-home",  to:'/admin' }
    ],
    user: null,
    authUnsubscribe:null,
  }),
}
</script>
