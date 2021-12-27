<template>
  <div class="feedWindow">
    <div class="feedContent">
      <div v-if="isLoading === true">
        идет загрузка ...
      </div>
      <div v-else v-for="user in users" :key="user.id">
        <div v-for="post in user.userPostList" :key="post.id">
          {{user.login}}
          {{post.commentSection}}
        </div>
        </div>

      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FeedBodyWindow",
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  mounted() {

    axios.get("http://localhost:8081/user")
    .then((res) =>{
      this.users = res.data;
      this.isLoading = false;
    }
    ).catch((err)=>{
      console.log(err)
    })
  }
}


</script>

<style scoped>
.feedWindow {
  grid-column: 1 / 11;

}

.feedContent {
  background-color: white;
  word-break: break-all;
}
</style>