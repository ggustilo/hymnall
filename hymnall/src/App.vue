<template>
  <div id="app">
    <sidebar></sidebar>
    <main-content></main-content>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Hymnall',
        hymns: getHymns()
      }
    },
    methods: {
      getHymns: () => {
        return [
              { 
                  Title: "Hymn1" 
              },
              { 
                  Title: "Hymn2" 
              }
          ]
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
  line-height: 200%;
  color: #2c3e50;
  margin-left: 30px;
  margin-top: 30px;
}

h1, h2, h3 {
  font-weight: normal;
  margin: 0px;
}
</style>
