<template>
  <div id="main">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'app',
    props: ['hymns'],
    data () {
      return {
        hymns: hymns,
        msg: 'Hymnall'
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-left: 25%;
  margin-top: 20px;
}

h1, h2 {
  font-weight: normal;
}

</style>
