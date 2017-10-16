<template>
  <div class="note">
    <p class="title">{{ note.title }}</p>
    <p class="update">{{ note.updated_at }}</p>
    <p class="body">{{ note.body }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Note',
    props: ['note']
  }
</script>

<style scoped>
  .note {
    padding: 10px;
    border-top: 1px solid #e3e3e3;
  }

  .note.active {
    background-color: #e3ffea;
  }

  .note .title {
    color: #737373;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: 4px;
  }
  .note .update {
    color: #a3a3a3;
    font-size: 12px;
    font-weight: 200;
    margin-bottom: 8px;
  }
  .note .body {
    color: #939393;
    font-size: 13px;
    font-weight: 300;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
</style>














