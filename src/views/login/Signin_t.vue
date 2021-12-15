<template>
  <div id="signin">
    <div v-if="!user">
      <h2 align="center">เข้าสู่ระบบ</h2>
      <br /><br />
      <div class="g-img">
        <img
          src="http://pngimg.com/uploads/google/google_PNG19630.png"
          height="px"
          width="150px"
        />
      </div>

      <div class="g-button">
        <v-btn
          id="button1"
          @click="googleLoginHandler"
          justify="center"
          rounded
        >
          เข้าสู่ระบบด้วย Gmail 
        </v-btn>
      </div>
      <!--
      <div class="g-buttonn">
        <v-btn
          id="button1"
          @click="googleLoginHandler"
          justify="center"
          rounded
        >
         เข้าสู่ระบบด้วย Gmail (สำหรับนักเรียน)</v-btn
        >
      </div>
      -->
      
    </div>
  </div>
</template>

<script>
import { auth, googleProvider, db } from "@/firebaseDb";

export default {
  name: "SignIn1",
  props: ["user"],
  methods: {
    async googleLoginHandler() {
      try {
        const result = await auth.signInWithPopup(googleProvider);
        if (result) {
          var uid = 'wannasakon';
          const userRef = db.collection("users").doc(uid);
          // .doc(result.user.displayName);
          userRef.get().then((doc) => {
            console.log(doc.data());
            if (!doc.data()) {
              userRef.set({
                uid: result.user.uid,
                Name: result.user.displayName,
                email: result.user.email,

                // created: new Date().valueOf(),
                // role: "user"
              });

              // userRef.collection("subject").???
              // userRef.collection("teacher").???

              console.log("เพิ่มผู้ใช้ใหม่ลงในคอลเล็กชัน user");
            } else {
              alert(
                "คุณ" +
                  " " +
                  result.user.displayName +
                  " " +
                  "เข้าสู่ระบบเรียบร้อย"
              );
            }
          });
          // const subj =
          userRef.collection("teacher").get().then((snapshot) => {
            console.log(`รายวิชาที่ ${uid} สอนทั้งหมดได้แก่`);
            snapshot.forEach(
              (doc) => {
                console.log(doc.data());
              }
            );
          });
          userRef.collection("subject").get().then((snapshot) => {
            console.log(`รายวิชาที่ ${uid} ลงชื่อเข้าเรียนได้แก่`);
            snapshot.forEach(
              (doc) => {
                console.log(doc.data());
              }
            );
          });
          // subjects.collection("students");
          // .collection("students").doc("name").set({
          // name:"jojo"})
          // const students = subj;
          // const student = students

          // });
          // const works = student.collection("work");
          // works.doc("checkin");
          // works.doc("homework");
          // works.doc("link");
          // works.doc("score");
        }
      } catch (err) {
        console.log(err);
      }
    },
    googleLogoutHandler() {
      auth
        .signOut()
        .then(() => {
          this.$router.replace("/homelogin");
          console.log("Log out");
          alert("ออกจากระบบเรียบร้อย");
        })
        .catch((err) => {
          console.log("Login not OK" + err);
        });
    },
  },
};
</script>

<style>
#signin {
  margin-top: 100px;
}
.g-button {
  position: relative;
  height: 150px;
  width: 260px;
  margin: auto;
  align-content: center;
  margin-top: 50px;
  padding: auto;
}
.g-buttonn {
  position: relative;
  height: 10px;
  width: 290px;
  margin: auto;
  align-content: center;
  margin-top: -100px;
  padding: auto;
}
.g-img {
  position: relative;
  width: 155px;
  margin-top: 550px;
  padding: auto;
  margin: auto;
}
#button1 {
  color: #fdd835;
  background-color: #e53935;
}
</style>
