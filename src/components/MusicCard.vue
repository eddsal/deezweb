<template>
    <article class="music-card">
    <div class="flex">
      <img :src="music.album.cover_small" :alt="music.album.name">
       <b class="title">{{ music.title }}</b>
      <div>
  
        <br>
        <span class="name">{{ music.artist.name }}/ {{ music.album.title }}</span>
      </div>
    </div>
    <audio :src="music.preview" controls></audio>
    <br>
  </article>
</template>

<script>

export default {
name:'MusicCard',
 props: ['music'],
}
</script>

<style>

</style>
