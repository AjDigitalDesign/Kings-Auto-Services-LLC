<template>
  <main-navigation />
  <main-header />
  <main-services />
  <main-about />
  <main-contact />

</template>

<script>
import MainServices from "../components/MainServices";
import MainAbout from "../components/MainAbout";
import MainContact from "../components/MainContact";
export default {
  name: "index",
  components: {MainContact, MainAbout, MainServices}
}
</script>

<style scoped>

</style>