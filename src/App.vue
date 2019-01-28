<template>
  <b-container id="app">
    <b-row>
      <b-col>
        <navbar/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-view/>
      </b-col>
    </b-row>
  </b-container>
</template>
 
<script>
import Navbar from '@/components/Navbar';
import Home from '@/components/Home';
import Search from '@/components/Search';

 
export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Search
  }
};
</script>