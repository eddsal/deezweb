
<template>
  <div class="centerx">
    <vs-navbar
      v-model="indexActive"
      :color="colorx"
      text-color="rgba(255,255,255,.6)"
      active-text-color="rgba(255,255,255,1)"
      class="myNavbar">
      
      <vs-navbar-title>Navbar Color</vs-navbar-title>

       <router-link to="/">Home</router-link>
      <router-link to="/Favorite">Favorite</router-link>
      <router-link to="/Research">Research</router-link>


      <vs-spacer></vs-spacer>

      <vs-button
        color-text="rgb(255, 255, 255)"
        color="rgba(255, 255, 255, 0.3)"
        type="flat"
        radius="50%"
        icon="more_horiz"
      ></vs-button>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    colorx: "#1db952",
    indexActive: 0
  })
};
</script>

<style >

.input-color {
  margin-bottom: 10px;
  position: relative;
  display: block;
}

.myNavbar {
  color: rgb(255, 255, 255);
}
</style>

