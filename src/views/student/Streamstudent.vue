<template>
  <v-list dense nav class="mx-auto" max-width="700">
    <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
export default {
  data: () => ({
    items: [
      { title: "stream", icon: "mdi-message-text", to: "/stream" },
      { title: "stream", icon: "mdi-message-text", to: "/stream" },
      { title: "stream", icon: "mdi-message-text", to: "/stream" },
    ],
  }),
};
</script>