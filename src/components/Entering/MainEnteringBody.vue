<template>
  <div class="authorization_item">
    <div class="border_for_box">
    <MainEnteringLogin/>
    <div class="choice_buttons">
      <button @click="choose">Registration</button>
    </div>
      </div>
    <div v-if="this.isRegChoosed % 2 === 0" class="validationForm">
      <MainEnteringRegistrationBlock/>
    </div>
  </div>
</template>

<script>
import MainEnteringRegistrationBlock from "@/components/Entering/MainEnteringRegistrationBlock";
import MainEnteringLogin from "@/components/Entering/MainEnteringLogin";

export default {
  name: "MainEnteringBody",
  components:{
    MainEnteringRegistrationBlock,
    MainEnteringLogin
  },
  data(){
    //choosing the registration block
    return{
      isRegChoosed: 1,
    }
  },
  methods: {
    choose() {
      this.isRegChoosed += 1;
    }
  }
}


</script>

<style scoped>
.authorization_item{
  grid-area: side;
  background-color: #1a1a1d;

}
.border_for_box{
  padding: 20px;
  border: 3px dashed #950740;
  margin: 25px;
}


.choice_buttons button{
  padding-left: 25px;
  background-color: transparent;
  color: white;
  border: none;
  text-decoration: underline;
}



</style>