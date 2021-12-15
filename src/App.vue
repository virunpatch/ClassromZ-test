<template>
<div id="app">
<div><SignIn :user="user" /></div>
<div v-if="user">
  <hr/>
  <v-app>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <router-link to="/">
          <div>
            <v-list dense nav>
              <v-list-item
                  v-for="item in items"
                  :key="item.title"
                  :to="item.to"
                  link
                  >
                  <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <div>
                        {{ item.title }}</div>
                    </v-list-item-title>
                  </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </router-link>
        <template v-slot:append>
          <v-footer>
            <v-switch
                v-model="$vuetify.theme.dark"
                hint="Drak Theme"
                inset
                persistent-hint
                ></v-switch> </v-footer
            ></template>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Classroom Z</v-toolbar-title>
        <v-spacer></v-spacer>
        <button v-if="user" @click="googleLogoutHandler">Logout</button>
      </v-app-bar>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
  </v-app>
</div>
  </div>

  <!--ปุ่มชั่วคราวของ detail(รอจัดสรร) >
    <v-btn to="/Lesson">Home</v-btn>
    <v-btn to="/Detail">Work</v-btn>
    <v-btn-- to="/CheckPoint">Point</v-btn-->
</template>

<script>
import { auth } from "@/firebaseDb";
import  SignIn  from "./views/login/Signin_t.vue";
export default {
  name: "App",
  props: {
    attrs: {
      type: Object,
      default: () => ({}),
    },
  },
  components:{
    SignIn
  },
  created(){
    this.authUnsubscribe = auth.onAuthStateChanged(user =>{
        this.user = user;
        
      },err =>{
        console.log(err);
      }
    )
  },
  beforeDestroy(){
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
    drawer: null,
    items: [
      { title: "สำหรับครู", icon: "mdi-home", to:'/teacher', }, 
      { title: "สำหรับนักเรียน", icon: "mdi-home",  to:'/student' }, 
      { title: "สำหรับผู้ดูแล", icon: "mdi-home",  to:'/admin' }
    ],
    user: null,
    authUnsubscribe:null
    //
  }),
  
};
</script>
