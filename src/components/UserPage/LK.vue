<template>
  <div class="lk">
    <LKHeader/>
    <LKExt/>
    <LKMain v-bind:userid="$store.state.userId"/>
    <LKFooter/>
  </div>
</template>

<script>
//import axios from "axios";
import LKExt from "@/components/UserPage/LKExt";
import LKFooter from "@/components/UserPage/LKFooter";
import LKMain from "@/components/UserPage/LKMain";
import LKHeader from "@/components/UserPage/LKHeader";

export default {
  name: "LK",
  components:{
    LKExt,
    LKFooter,
    LKMain,
    LKHeader
  },
  created() {
    //     console.log(this.$store.state.userId);
    //     axios.get("http://localhost:8081/user/" + this.$store.state.userId)
    //     .then((res) =>{
    //       console.log("XUI");
    //       console.log(res.data);
    //       this.$store.commit("setPhoto", res.data.imagePath.replace(/"/g, ""));
    //       this.$store.commit("setEmail", res.data.username);
    //     })
    //     .catch((error) =>{
    //       console.log(error)
    //     })
    // console.log(this.$store.state.token);
  }
}
</script>
<style scoped>
  .lk{
    display: grid;
    grid-template-columns: 400px 2fr;
    grid-template-rows: 60px 1fr 60px;
    grid-template-areas:
    "header header"
    "main ext"
    "footer footer";
  }
</style>