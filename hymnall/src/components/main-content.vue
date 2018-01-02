<template>
  <div id="main">
    <h1 id="title">{{ msg }}</h1>
    <form>
        <fieldset>
            <h2>Meta Info</h2>
            Title: <input v-model="title" type="text"><br>
            Creator: <input v-model="creator" type="text"><br>
            Date Created: <input v-model="dateCreated" type="date"><br>
            Last Updated: <input v-model="lastUpdated" type="datetime-local"><br>
            Version: {{ version }} <br>
            Notes: <textarea v-model="notes"></textarea>
        </fieldset>
        <fieldset>
            <h2>Hymn</h2>
            ID: {{id}} <br>
            User Generated Key: <input v-model="userkey" type="text"><br>
            Display Title: <input v-model="displayTitle" type="text"><br>
            Tags: <input v-model="tags" type="text"><br>
            First Line: <textarea v-model="firstLine" id="firstline"></textarea><br>
            Description: <textarea v-model="description" id="description"></textarea><br>
            Content: <textarea v-model="content" id="content"></textarea>
        </fieldset>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'main-content',
    props: ['hymns'],
    data () {
      return {
        msg: 'Hymnall',
        version: 2
      }
    }
  }
</script>

<style lang="scss">

#title {
    margin-top: .67em;
    margin-bottom: .67em;
}

#description {
    height: 50px;
}

#firstline {
    height: 20px;
}

#content {
    height: 300px;
}

#main {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-left: 22%;
  margin-top: 20px;
  margin-right: 50px;
}

h1, h2 {
  font-weight: normal;
  margin: 0px;
}

fieldset {
    margin-bottom: 30px;
    border: none;
    background-color: whitesmoke;
}

textarea {
    width:99%;
    height:150px;
}

</style>
