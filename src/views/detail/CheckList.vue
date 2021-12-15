<template>
    <div class="ma-5">
        <v-btn class="ma-5" to="/CheckPoint">กลับ</v-btn>
        <v-row>
            <v-col class="col-4" v-for="name in names" :key="name">
                <v-card>
                    <v-card-title> {{name}} </v-card-title>
                    <v-card-text> 10 Point </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names : ['Lesson1', 'Lesson2', 'Lesson3','Lesson4','Lesson5','Lesson6']
        };
    }
}
</script>