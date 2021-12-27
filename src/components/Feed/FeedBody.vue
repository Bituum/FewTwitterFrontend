<template>
<div class="feedBody">
  <FeedBodyWindow/>

</div>
</template>

<script>
import FeedBodyWindow from "@/components/Feed/FeedBodyWindow";

export default {
  name: "FeedBody",
  components:{
    FeedBodyWindow
  }
}
</script>

<style>
.feedBody{
  grid-column: 3 / 13;
  display: grid;
  grid-auto-columns: auto;
  grid-auto-rows: min-content;
  margin-top: 10px;
  /*display: grid;*/
  /*grid-template-columns: repeat(20, 1fr);*/
  /*grid-auto-rows: auto;*/
}

</style>