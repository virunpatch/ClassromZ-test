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
        <div align="center" class="pa-4 mx-lg-4">
          <v-card max-width="1200">
            <v-list>
              <v-list-group v-for="n in works" :key="n">
                <template v-slot:activator>
                  <v-list-item-icon>
                    <v-icon>mdi-message-text</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item>
                  <v-list-item-content>
                    <v-card-text
                      >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quas vel ipsum totam adipisci doloremque. Nisi, quibusdam!
                      Labore perferendis ratione explicabo voluptatum saepe
                      delectus! Nesciunt, expedita quasi similique suscipit odio
                      distinctio.</v-card-text
                    >
                    <v-btn
                      color="primary"
                      dark
                      max-width="200"
                      align="center"
                      to="/Detail"
                    >
                      ส่งงาน
                    </v-btn>
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
export default {
  name: "Viewapp",
  data() {
    return {
      works: ["งาน1", "งาน2", "งาน3", "งาน4", "งาน5", "งาน6"],
    };
  },
  // data: () => ({
  //   items: [
  //     { title: "ชื่องาน", icon: "mdi-message-text", to: "/Lesson" },
  //     { title: "ชื่องาน", icon: "mdi-message-text", to: "/stream" },
  //     { title: "ชื่องาน", icon: "mdi-message-text", to: "/stream" },
  //   ],
  // }),
};
</script>