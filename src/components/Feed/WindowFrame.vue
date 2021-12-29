<template>
  <div class="windowFrame">
    <div class="userFrame">
      пользователь: {{username}}
      <img id="icon" v-bind:src="photoIcon" alt="">
    </div>
    <div class="commentFrame">
      комментарий: {{comment}}
    </div>
    <div>
      <button class="commentBtn">комментарии к записи</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowFrame",
  props:{
    username: String,
    comment: String,
    photoIcon: String
  }
}
</script>

<style>
  .windowFrame{
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    border: 2px solid #c3074f;
    background-color: #1a1a1d;
    color: antiquewhite;
  }

  #icon{
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }

  .userFrame{
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .commentFrame{
    margin-bottom: 10px;
  }
  .commentBtn{
    background-color: transparent;
    border: none;
    color: antiquewhite;
    transition: all 0.7s;
  }
  .commentBtn:hover {
    background-color: #9400D3;
    border: none;
    color: antiquewhite;
    border-radius: 10px;
  }

</style>