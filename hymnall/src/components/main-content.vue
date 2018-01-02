<template>
  <div id="main">
    <form>
        <fieldset>
            <h2>Document Info</h2>
            Version: {{ version }} <br>
            <span class="floater-left">Title: <input v-model="title" type="text"><br>
            Creator: <input v-model="creator" type="text"></span>
            <span class="floater-right">Date Created: {{ dateCreated }}<br>
            Last Updated: {{ lastUpdated }} </span><br><br>
            Notes: <textarea v-model="notes" id="notes"></textarea>
        </fieldset>
        <fieldset>
            <h2>Hymn</h2>
            <span class="floater-left">ID: {{id}}<br>
            User Generated Key: <input v-model="userkey" type="text"></span>
            <span class="floater-right">Display Title: <input v-model="displayTitle" type="text"><br>
            Tags: <input v-model="tags" type="text"></span><br><br>
            First Line: <textarea v-model="firstLine" id="firstline"></textarea><br>
            Description: <textarea v-model="description" id="description"></textarea><br>
            Content: <textarea v-model="content" id="content"></textarea>
        </fieldset>
        <input v-on:submit.prevent="onSubmit" id="submit-button" type=submit></input>
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
        version: 2,
        lastUpdated: '12/21/17',
        dateCreated: '12/18/17',
        id: 12314
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">

#notes {
    height: 50px;
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

#submit-button {
  -webkit-border-radius: 11;
  -moz-border-radius: 11;
  border-radius: 11px;
  color: #ffffff;
  font-size: 15px;
  background: #53e69c;
  padding: 10px 10px 10px 10px;
  text-decoration: none;
  margin-left:10px;
}

#submit-button:hover {
  background: #34d9a2;
  text-decoration: none;
}

.floater-left {
    float: left;
}

.floater-right {
    float: right;
}

fieldset {
    margin-bottom: 30px;
    border: none;
}

textarea {
    width:99%;
    height:150px;
}

</style>
