<template>
<div>
    <v-img src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" margin ="auto"
        margin:auto >
<h1 align="center">ระดับชั้น</h1>
<br>
  <v-row class="roww"
    ><v-col  cols="12" sm="8" md="6"  class="pa-2"
       
        tile
        
        v-for="(n,k) in classroom"
        :key="k">
        
        <v-card >  
        <v-img  class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
             <v-card-title ><h2 class="room">{{ n }}</h2></v-card-title>
        </v-img>

        <v-card-subtitle class="pb-0" max-width="300"> ภาคเรียน 2/64 </v-card-subtitle>

        <v-card-text class="text--primary"> </v-card-text>

        <v-card-actions>
          <router-link to="/subj">
            <div class="text-center">
              <v-btn rounded color="primary" dark>เปิด</v-btn>
            </div></router-link>
        </v-card-actions>
        </v-card>
        </v-col></v-row>
        <br>
        </v-img>
        </div>
</template>


<script>
export default {
  data() {
    return {
      classroom: [
        "ประถมศึกษาปีที่ 1",
        "ประถมศึกษาปีที่ 2",
        "ประถมศึกษาปีที่ 3",
        "ประถมศึกษาปีที่ 4",
        "ประถมศึกษาปีที่ 5",
        "ประถมศึกษาปีที่ 6",
        
      ],
      term: ["2/2564"],
      room:[""],
    };
  },
};
</script>

<style>
h1 {
  margin-top: 30px;
  height: 50px;
  font-size: 35px;
}
.room{
  font-size: 25px;
}
.mx-auto {
  margin-top: 10px;
}
.roww{
padding-left: 25px;
padding-right: 25px;
}
.pa-2{
  padding-left: 10px;

}

</style>