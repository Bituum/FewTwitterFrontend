<template>
  <div class="padding_for_box">
    <form>
      <div class="auth_box">
        <h2>Have account?</h2>
        <div class="metadata">
          <label for="email-label">Email</label>
          <input type="text" id="email-label" v-model="email"/>
          <label for="password-label">Password</label>
          <input type="password" id="password-label" v-model="password"/>
        </div>
        <button type="submit" @click.prevent="handleSubmit">Enter</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainEnteringLogin",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      axios.post("http://localhost:8081/auth/user",
          {login: this.email, password: this.password},
          {headers:{
              'Content-Type': 'application/json'
            }}
      ).then((response) =>{
        console.log(response.data.token)
        this.$store.commit("setToken", response.data.token)
        this.$router.replace(
            {
              name:"feed"
            }
        )
      })
    }
  }
}
</script>

<style scoped>
.padding_for_box{
  padding: 25px;
}


.auth_box{
  color: #ffffff;
}

.metadata label {
  display: block;
}
</style>