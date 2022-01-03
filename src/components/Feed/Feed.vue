<template>
  <div class="mainFeed">
    <FeedHeader/>
    <FeedNavbar/>
    <FeedBody/>
    <FeedFooter/>
  </div>
</template>

<script>
import FeedHeader from "@/components/Feed/FeedHeader";
import FeedBody from "@/components/Feed/FeedBody";
import FeedNavbar from "@/components/Feed/FeedNavbar";
import FeedFooter from "@/components/Feed/FeedFooter";
import {getContent} from "@/services/getUserContent";


export default {
  name: "Feed",
  created() {
    getContent("http://localhost:8081/user/" + this.$store.state.userId, this.$store.state.token, this.$store);
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