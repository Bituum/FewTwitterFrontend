<template>
  <div class="login_flex">
      <div class="login_container">
        <div class="authLine">
          <h2>Registration</h2>
          <div class="authContent">
            <p>Enter email</p>
            <input type="text"  name="email" v-model="email"
            />
          </div>
          <div class="authContent">
            <p>Enter password</p>
            <input  type="password" v-model="password"/>
          </div>
        </div>
          <div class="btnvalidation">
            <button type="submit" @click="handleRegistration"  class='btnval'>Continue</button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MainEnteringRegistrationBlock",
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleRegistration(){
      console.log('Your input username is: ' + this.email);
      console.log('Your input password is: ' + this.password);
      axios.post('http://127.0.0.1:8081/user',
          {login: this.email, password: this.password},
          {headers: {
              'Content-Type': 'application/json'
            }}

      )
          .then((response) =>{
            console.log(response.data);
            window.location.href='/feed';
          })
          .catch((error) => {
            console.log(error);
            console.log("popavsia");
          })
    }
  }
}
</script>

<style scoped>
.login_flex{
  margin-top: 5px;
  padding: 24px;
  color: #ffffff;
}

.login_container{
  border: 3px dashed #950740;
  padding-left: 25px;
}

.btnvalidation{
  padding-top: 10px;
}

.btnvalidation button{
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #ffffff;
}
</style>