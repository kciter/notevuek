<template>
  <div id="app">
    <div class="list">
      <list></list>
    </div>
    <div class="editor">
      <editor></editor>
    </div>
  </div>
</template>

<script>
  import List from '@/components/List'
  import Editor from '@/components/Editor'

  export default {
    name: 'app',
    components: {
      List,
      Editor
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
  }

  #app {
    width: 100vw;
    height: 100vh;
  }

  #app > div {
    height: 100vh;
    padding: 10px;
    box-sizing: border-box;
  }

  #app .list {
    float: left;
    overflow: auto;
    width: 300px;
    border-right: 1px solid #e3e3e3;
  }

  #app .editor {
    padding-left: 10px;
    overflow-wrap: break-word;
  }
</style>
