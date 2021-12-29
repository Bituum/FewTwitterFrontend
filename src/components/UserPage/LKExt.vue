<template>
  <div class="ext">
    <div class="detailWrapper">
      <div class="detail">
        <p>Имя: {{name}}</p>
      </div>
    </div>
    <div class="detailWrapper">
      <div class="detail">
        <p>Фамилия: {{secondName}}</p>
      </div>
    </div>
    <div class="detailWrapper">
      <div class="detail">
        <p>Отчество: {{patron}}</p>
      </div>
    </div>
    <div class="detailWrapper">
      <div class="detail">
        <p>Хобби: {{hobby}}</p>
      </div>
    </div>
    <div class="detailWrapper">
      <div class="detail">
        <p>Друзья: {{friends}}</p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "LKExt",
  computed:{
    name(){
      return this.$store.state.name;
    },
    secondName(){
      return this.$store.state.secondName;
    },
    patron(){
      return this.$store.state.patronymic;
    },
    hobby(){
      return this.$store.state.hobby;
    },
    friends(){
      return this.$store.state.friends;
    }
  }
}
</script>

<style scoped>
  .ext{
    grid-area: ext;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .detailWrapper{
    background-color: #6f2232;
    color: antiquewhite;
    padding: 10px;
  }
  .detail{
    word-break: break-all;
  }
</style>