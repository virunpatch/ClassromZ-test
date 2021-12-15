<template>
  
  <v-card>
    <div align="center">
        <v-card class="mx-auto md-auto ml-5 mr-5 mt-5" max-width="1200" >

            <v-list>
            <v-list-group v-for="n in works" :key="n">
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title> {{n}} </v-list-item-title>
                </v-list-item-content>
                </template>

                <v-list-item>
                <v-list-item-content>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas vel ipsum totam adipisci doloremque. Nisi, quibusdam! Labore perferendis ratione explicabo voluptatum saepe delectus! Nesciunt, expedita quasi similique suscipit odio distinctio.</v-card-text>
                    <v-btn max-width="200" align="center" to="/Detail" > ส่งงาน </v-btn>       
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            </v-list>
        </v-card>
    </div>
  </v-card>

</template>
<script>
export default {
    data() {
        return {
            works : ['Lesson1', 'Lesson2', 'Lesson3','Lesson4','Lesson5','Lesson6']
        };
    }
}
</script>
