<template>
    <div id="editor">
        <textarea id="content" :placeholder="input" @input="update" :form="formName"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'editor',
        props: ['formName'],
        data () {
            return {
                input: 'enter markdown'
            }
        },
        methods: {
            update: _.debounce(function (e) {
            this.input = e.target.value
            }, 300),
            compiledMarkdown: function () {
                return marked(this.input, { sanitize: true })
            }
        }
    }
</script>

<style lang="scss">

html, body, #editor {
  margin: 0;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

#editor div {
  display: inline-block;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

#content {
    min-height: 100px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
  min-height: 50px;
  width: 100%;
}

code {
  color: #f66;
}
</style>