<template>
<div id="auth">
  <MainEnteringHeader/>
  <MainEnteringContent/>
  <MainEnteringBody/>
  <MainEnteringFooter/>
</div>
</template>

<script>
import MainEnteringBody from "@/components/Entering/MainEnteringBody";
import MainEnteringFooter from "@/components/Entering/MainEnteringFooter";
import MainEnteringHeader from "@/components/Entering/MainEnteringHeader";
import MainEnteringContent from "@/components/Entering/MainEnteringContent";



export default {
  name: "MainEnteringWindow",
  components: {
    MainEnteringContent,
    MainEnteringHeader,
    MainEnteringBody,
    MainEnteringFooter
  },
  mounted() {
    this.$store.commit("clear");
  }
}
</script>

<style>

#auth{
  display: grid;
  grid-template-columns: 1fr 400px;
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    "header header"
    "content side"
    "footer footer";
}

</style>