<template>
  <b-navbar toggleable="md" type="dark" class="navB" variant="info">
    <b-navbar-brand  to="/">Home</b-navbar-brand>
    <b-navbar-nav>
      <b-nav-item  to="/Favorite">Favorite</b-nav-item>
      <b-nav-item to="/Search">Search</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'Navbar'
};
</script>

<style>
.navB{
    background-color: #0d68d4
}

</style>
