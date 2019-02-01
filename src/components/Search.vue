
<template>
    <div class="container centered">

    <h1>Seach</h1>
    <p>Search ur music on Deezer:</p>
    <hr>

    <form class="filterform" @submit="onSearch">
      <label for="title">Title :</label>
      <input type="search" placeholder="Eminem, Angèle ..." v-model="search">

      <label for="filter">filter by :</label>
      <select name="filterBy" v-model="searchBy" class="form-control form-control-lg">
        <option value="ALBUM_DESC" >Album</option>
        <option value="ARTIST_DESC">Artist</option>
        <option value="TRACK_DESC">Music</option>
        <option value="RANKING_DESC">most popula</option>
        <option value="RATING_DESC">high ranked</option>
      </select>

    <button type="submit" class="btn btn-primary">Search</button>
    
      <MusicCard v-for="music in artist" :key="music.id" :music="music"/>
    </form>

  </div>
</template>

<script>
 import UserService from '@/services/UserService.js'
 import MusicCard from '@/components/MusicCard.vue'

export default {
    name: 'Search',
    components: {
      MusicCard
    },
    data(){
return {
    artist:null,
    searchBy: "",
    search: "",
    

        }
    },
    methods: {
         onSearch() {
            UserService.search(this.search, this.searchBy)
            .then(artist => {
                this.artist = artist
            })
        }
    }
}


</script>

