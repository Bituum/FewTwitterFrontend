<template>
  <div class="main">
    <div class="aboutImg">
      <img v-bind:src="photo" alt="" id="image">
    </div>
    <div class="aboutMain">
       <p>Ваша почта: {{email}}</p>
    </div>
    <div>
      Изменить почту
      <br/>
      Изменить пароль
      <br/>
      Изменить фотографию
    </div>
  </div>
</template>

<script>
export default {
  name: "LKMain",
  computed:{
    photo(){
      return this.$store.state.photo
    },
    email(){
      return this.$store.state.email
    }
  }
}
</script>

<style scoped>
  .main{
    grid-area: main;
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 10px;
    background-color: #6f2232;
    color: antiquewhite;
  }
  .aboutImg{
  }
  .aboutMain{

  }

  #image{
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
</style>