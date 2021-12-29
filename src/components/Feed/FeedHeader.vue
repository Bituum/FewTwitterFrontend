<template>
  <header class="header_item">
      <div class="box">
        <div class="wrapper">
          <p>bituumTech</p>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name: "FeedHeader"
}
</script>

<style>
.header_item {
  grid-column: 1 / 13;
  grid-row: 1 / 2;
  display: flex;
  background-color: #c3074f;
}

.box {
  margin-left: 30px;
    color: antiquewhite;
}
.wrapper {
  background-color: #1a1a1d;
  padding: 5px;
}
</style>