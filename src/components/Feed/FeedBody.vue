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
  margin-top: 13px;
}

</style>