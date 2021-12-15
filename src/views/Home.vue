<template>
  <div v-if="user">
    <h1> Welcome {{ user.displayName }}</h1>

    <TeachingCourses/>

    <SubjectCourses/>

    <AllSubjects/>
    
  </div>
  <div v-else>
    <SignIn/>
  </div>
</template>

<script>
import { auth } from "../firebaseDb";
// import { collection } from "firebase/firestore";
import  SignIn  from "./login/Signin_t.vue";
import  AllSubjects  from "../components/AllSubjects.vue";
import  SubjectCourses  from "../components/SubjectCourses.vue";
import  TeachingCourses  from "../components/TeachingCourses.vue";

export default {
  name: 'Home',
  components: {
    AllSubjects,
    SignIn,
    SubjectCourses,
    TeachingCourses,
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
