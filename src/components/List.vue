<template>
  <div>
    <div class="toolbar">
      <button @click="newNote">새 메모</button>
    </div>
    <div class="notes">
      <note v-for="note in notes" :key="note['.key']" :note="note"
        :class="{ active: currentNote['.key'] == note['.key'] }"
        @click.native="selectNote(note['.key'])"></note>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  import Note from '@/components/Note'

  export default {
    name: 'List',
    computed: {
      ...mapGetters(['notes']),
      ...mapState(['currentNote'])
    },
    methods: {
      newNote () {
        this.$store.commit('updateNote', {})
      },
      selectNote (key) {
        this.$store.commit("selectNote", key)
        this.$router.push({ path: '/', query: { key: key }})
      }
    },
    created () {
      this.$store.dispatch('setNotesReference')
        .then(() => {
          if (this.$route.query.key) {
            this.selectNote(this.$route.query.key)
          }
        })
    },
    components: {
      Note
    }
  }
</script>

<style scoped>
  .toolbar {
    text-align: right;
    margin-bottom: 30px;
  }

  .toolbar button {
    background-color: #dddddd;
    padding: 6px 10px;
    border: 0;
    border-radius: 5px;
  }
</style>












