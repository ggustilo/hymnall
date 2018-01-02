<template>
  <div id="sidebar">
    <ul>
        <li v-for="hymn in hymns">
            {{ hymn.Title }}
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: '#sidebar',
    props: ['hymns'],
    data () {
    }
  }
</script>

<style lang="scss">
#sidebar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: whitesmoke;
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 75px;
  padding-left: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
  font-weight: normal;
}

a {
  color: #42b983;
}
</style>
