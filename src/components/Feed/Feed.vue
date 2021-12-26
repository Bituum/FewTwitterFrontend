<template>
  <div>
    pizda
  </div>
</template>

<script>
import axios from "axios";

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
          this.$router.replace({

            name: "index"
          })
          console.log("error is here")
          console.log(this.$store.state.token)



        })





    console.log(this.$store.state.token);
  }
}
</script>

<style scoped>

</style>