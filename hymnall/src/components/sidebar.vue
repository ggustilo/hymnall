<template>
  <div id="sidebar">
    <h1 id="title">{{ msg }}</h1>
    <ul>
        <li v-for="hymn in hymns">
            <a>{{ hymn.Title }}</a>
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        msg: 'Hymnall',
        hymns: this.getHymns()
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

#title {
    padding-left: 10px;
    margin-top: 1em;
    margin-bottom: 1em;
}

#sidebar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background-color: #F5FFFA;
  width: 20%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
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
  color: #2c3e50;
}
</style>
