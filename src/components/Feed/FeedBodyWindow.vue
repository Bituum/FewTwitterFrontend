<template>
  <div class="feedWindow">
    <div class="feedContent">
      <div class="loading" v-if="isLoading === true">
        идет загрузка ...
      </div>
      <div v-else v-for="user in users" :key="user.id">
        <div class="windowLine" v-for="post in user.userPostList" :key="post.id">
          <WindowFrame v-bind:username="user.login" v-bind:comment="post.commentSection"
                       v-bind:photo-icon="user.imagePath"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import WindowFrame from "@/components/Feed/WindowFrame";

export default {
  name: "FeedBodyWindow",
  components: {
    WindowFrame
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  mounted() {
    axios.get("http://localhost:8081/user",
        {
          headers: {
            Authorization: "Bearer_" + this.$store.state.token
          }
        })
        .then((res) => {
              this.users = res.data;
              console.log(res.data)
              this.isLoading = false
            }
        )
        .catch(() => {
          console.log("catch here")
          // this.$router.replace({
          //   name: "index"
          // })
        })
  }
}


</script>

<style scoped>
.feedWindow {
  grid-column: 1 / 11;

}

.feedContent {
  background-color: #6f2232;
  word-break: break-all;
}

.windowLine {
  margin-bottom: 30px;
}

.loading {
  color: antiquewhite;
}
</style>