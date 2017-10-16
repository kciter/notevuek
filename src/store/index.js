import Vue from 'vue'
import Vuex from 'vuex'
import firebaseConfig from '@/config/firebase'
import { firebaseMutations, firebaseAction } from 'vuexfire'

Vue.use(Vuex)

// 저장소의 상태를 저장합니다.
const state = {
  notes: [],
  currentNote: {}
}

// 저장소 상태에 대한 변이를 정의합니다.
const mutations = {
  ...firebaseMutations,
  selectNote (state, payload) {
    state.currentNote = state.notes.find(
      note => (note['.key'] == payload)
    )
  },

  updateNote (state, payload) {
    state.currentNote = payload
  }
}

// 저장소의 액션을 실행합니다.
const actions = {
  // firebase database의 notes를 참조하도록 세팅합니다.
  setNotesReference: firebaseAction(({ bindFirebaseRef }) => {
    return new Promise((resolve, reject) => {
      bindFirebaseRef('notes', firebaseConfig.notesRef, {
        readyCallback: () => {
          resolve()
        }
      })
    })
  }),

  // 데이터를 저장하는 액션입니다.
  commitCurrentNote: ({ state }) => {
    // const current = state.currentNote
    const current = Object.assign({}, state.currentNote)
    const key = current['.key']

    delete current['.key']

    if (key === undefined) {
      // 키가 없다면
      let res = firebaseConfig.notesRef.push(current)
      state.currentNote['.key'] = res.getKey()
    } else {
      // 키가 있다면
      firebaseConfig.notesRef.child(key).set(current)
    }
  },

  // 노트를 삭제하는 액션입니다.
  removeCurrentNote: ({ state }) => {
    const key = state.currentNote['.key']
    firebaseConfig.notesRef.child(key).remove()
    state.currentNote = state.notes[0] || {}
  }
}

// 상태들을 참조할 때 호출될 getter 함수를 정의합니다.
const getters = {
  notes: state => {
    return state.notes.sort((a, b) => b.updated_at - a.updated_at)
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

