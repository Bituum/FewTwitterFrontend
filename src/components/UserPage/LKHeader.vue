<template>
  <header class="header_item">
    <div class="box">
      <div class="wrapper">
        <p>bituumTech</p>
      </div>
    </div>
    <div class="back">
      <button @click="backToFeed">Назад</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "LKHeader",
  methods: {
    backToFeed() {
      this.$router.replace({
        name: "feed"
      })
    }
  }
}
</script>

<style scoped>
.header_item {
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: #c3074f;
  align-items: center;

}

.back {
  margin-right: 20px;
}

.back button {
  background-color: transparent;
  border: none;
  color: antiquewhite;
}

.box {
  margin-left: 30px;
  font-size: 20pt;
  color: antiquewhite;
}

.wrapper {
  background-color: #1a1a1d;
  padding: 5px;
}
</style>