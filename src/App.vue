<template>
  <div id="app">
    <router-view>
      <MainEnteringWindow/>
      <Feed/>
    </router-view>
  </div>
</template>

<script>
import MainEnteringWindow from "@/components/Entering/MainEnteringWindow";
import Feed from "@/components/Feed/Feed";

export default {
  name: 'App',
  components: {
    MainEnteringWindow,
    Feed
  }
}
</script>

<style>
body{
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;
  background-color: #1a1a1d;
}


</style>
