<template>
  <div class="header_item">
      <div class='box'>
        <div class="wrapper">
        <p>bituumTech</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "MainEnteringHeader"
}
</script>

<style>
.header_item {
  grid-area: header;
  display: flex;
  justify-content: start;
  background-color: #c3074f;
  align-items: center;
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