<template>
  <div class="homelogin1">
    <!-- <v-card class="cardhome" elevation="15" outlined shaped tile> -->
      
        <v-img
        
        src="https://sv1.picz.in.th/images/2021/11/10/uGgmHf.jpg" margin ="auto"
        height="700"
        > 
        
        <div class="text1"><h2 class="pa-2 d-flex justify-center" >เข้าสู่ระบบ</h2></div>
    <router-link to="/signin-t">
      <button class="signin1">สำหรับครู</button>
    </router-link>
    <router-link to="/signin-s">
      <button class="signin2">สำหรับนักเรียน</button></router-link
    >
    </v-img>
      <!-- </v-card
    ><br /> -->
   
  </div>
</template>

<script>
export default {};
</script>

<style>
.text1 {
 margin-top: 200px ;

  color: #fff;
  
}
.text{
  margin-top: 300px;
}
.signin1 {
  background-color: #cfa620;
  color: rgb(245, 244, 244);
  width: 160px;
  margin: auto;
  display: block;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  border: none;
  text-transform: full-width;
  font-size: 15px;
  border: 3px solid rgb(189, 202, 187);
}
.signin2 {
  background-color: #48badd;
  color: #fff;
  width: 160px;
  margin: auto;
  padding: 10px 20px;
  display: block;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;
  border: none;
  text-transform: uppercase;
  font-size: 15px;

}
.font-weight-bold {
  margin-top: 10px;
  text-align: center;
}
</style>