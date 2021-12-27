<template>
  <div class="mainFeed">
    <FeedHeader/>
    <FeedNavbar/>
    <FeedBody/>
    <FeedFooter/>
    <space/>
  </div>
</template>

<script>
import axios from "axios";
import FeedHeader from "@/components/Feed/FeedHeader";
import FeedBody from "@/components/Feed/FeedBody";
import FeedNavbar from "@/components/Feed/FeedNavbar";
import FeedFooter from "@/components/Feed/FeedFooter";


export default {
  name: "Feed",
  created() {
    axios.get("http://localhost:8081/check",
        {
          params:{
            token: this.$store.state.token
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .catch(() => {
          console.log("!!!")
          this.$router.replace({
            name: "index"
          })

        })
    console.log(this.$store.state.token);
  },
  components:{
    FeedHeader,
    FeedBody,
    FeedNavbar,
    FeedFooter
  }
}
</script>

<style>
  .mainFeed{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: 60px auto;
  }
</style>