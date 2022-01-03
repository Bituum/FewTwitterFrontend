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
        <button type="submit" @click.prevent="handleSubmit" id="enter">Enter</button>
      </div>
    </form>
  </div>
</template>

<script>
import {authorization} from "@/services/authorization";

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
      authorization("http://localhost:8081/auth/user", "feed", this.email, this.password, this.$store, this.$router);
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

#enter{

  background-color: transparent;
  color: white;
  border: none;
  text-decoration: underline;
}
</style>