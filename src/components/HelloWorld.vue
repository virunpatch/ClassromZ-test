<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :to="card.to"
        :cols="card.flex"
        link
      >
        <v-card>
          <v-img
            :src="card.src"
            class="white--text"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          ></v-img>
          <v-card-title v-text="card.title"></v-card-title>
          <!-- <v-card-subtitle v-text="card.subtitle"> </v-card-subtitle> -->
          <router-link to="/subject">
            <div class="text-center">
              <v-btn rounded color="primary" dark> แสดงรายวิชา </v-btn>
            </div></router-link
          >
          <br>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    cards: [
      {
        title: "Subject Name 1",
        subtitle: "description",
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        flex: 3,
      },
      {
        title: "Subject Name 2",
        subtitle: "description",
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        flex: 3,
      },
      {
        title: "Subject Name 3",
        subtitle: "description",
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        flex: 3,
      },
      {
        title: "Subject Name 4",
        subtitle: "description",
        src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        flex: 3,
      },
    ],
  }),
};
</script>