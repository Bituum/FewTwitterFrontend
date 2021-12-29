<template>
  <div class="mainFeed">
    <FeedHeader/>
    <FeedNavbar/>
    <FeedBody/>
    <FeedFooter/>
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
    console.log("XUI4342");
    console.log(this.$store.state.token);
    axios.get("http://localhost:8081/check",
        {
          params: {
            token: this.$store.state.token
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((res) =>{
          this.$store.commit("setUserId", res.data)
        })
        .catch(() => {
          console.log("!!!")
          this.$router.replace({
            name: "index"
          })

        })
    axios.get("http://localhost:8081/user/" + this.$store.state.userId)
        .then((res) => {
          console.log(res.data);
          this.$store.commit("setPhoto", res.data.imagePath.replace(/"/g, ""));
          this.$store.commit("setEmail", res.data.username);
          this.$store.commit("setName", res.data.extension.name);
          this.$store.commit("setSecondName", res.data.extension.secondName);
          this.$store.commit("setPatron", res.data.extension.patronymic);
          this.$store.commit("setHobby", res.data.extension.hobby);
          this.$store.commit("setFriends", res.data.extension.friends);
        })
        .catch((error) => {
          console.log(error)
        })
    console.log(this.$store.state.token);
  },
  components: {
    FeedHeader,
    FeedBody,
    FeedNavbar,
    FeedFooter
  }
}
</script>

<style>
.mainFeed {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 60px auto;
}
</style>