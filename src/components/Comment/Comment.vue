<template>
  <div class="mainWindow">
    <div class="innerWindow">
      <div class="inf">
        <img id="photo" v-bind:src="img">
        <h1>{{email}}</h1>
        <div>
          <button @click="handleBack">Назад</button>
        </div>
      </div>

      <div class="cmt">
        <textarea v-model="comment" name="tetx" id="textArea" cols="100" rows="10"></textarea>
        <input type="file"/>
      </div>
      <div class="btn">
        <button @click="handleNewPost">Создать пост</button>
      </div>
    </div>
  </div>
</template>

<script>
import {handlePost} from "@/services/handlePost";

export default {
  name: "Comment",
  data(){
    return{
      comment: ""
    }
  },
  computed:{
    img(){
      return this.$store.state.photo
    },
    email(){
      return this.$store.state.email
    }

  },
  methods:{
    handleBack(){
      this.$router.replace({
        name:"feed"
      })
    },
    handleNewPost(){
      console.log("handle")
      handlePost(this.$store.state.token, this.$store, this.comment, this.$router);
    }
  }
}
</script>

<style scoped>
  .mainWindow{
    padding: 100px;
    color: antiquewhite;

  }
  .innerWindow{
    display: flex;
    flex-direction: column;
    background-color: #c3074f;
  }
  #photo{
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }

  .inf{
    display: flex;
    justify-content: space-between;
  }
  .cmt{
    display: flex;
    justify-content: center;
  }
  .btn{
    display: flex;
    justify-content: center;
  }
  .btn button{
    background-color: transparent;
    border: none;
    color: antiquewhite;
  }
  .inf button{
    background-color: transparent;
    border: none;
    color: antiquewhite;
  }
</style>