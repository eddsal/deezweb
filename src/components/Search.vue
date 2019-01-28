<template>
    <div class="search-container">
        <div class="search-inner-container">
            <label for="mInput">Title:</label>
            <input name="mInput" type="text" placeholder="Song,Artist....">
        </div>
        <div class="right-sort-container">
            <label for="sort_chooser">Sort by</label>
            <select name="sort_chooser" id="">
                <option value="Album">Album</option>
                <option value="Artiste">Artiste</option>
                <option value="Musique">Musique</option>
                <option value="Les plus populaire">Les plus populaire</option>
                <option value="Les mieu notes">les mieu notes</option>

            </select>
        </div>
        <input type="button" name="validator" value="GO" class="btnValidator">
    </div>
</template>

<script>
export default {
    name: "Search"

}
</script>

<style>
.search-container{
    display: flex;
    margin-top: 2vw;
    justify-content: space-between
}
.btnValidator{
    color: white;
    background-color: #0d68d4
}

</style>
