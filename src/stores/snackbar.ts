import { defineStore } from 'pinia'
import type { SnackbarStoreState, SnackbarState  } from '@/interfaces/snackbar'

export const useSnackbarStore = defineStore('snackbar', {
  state: (): SnackbarStoreState => {
    return {
      snackbar: {
        color: '',
        message: '',
        isOpen: false
      }
    }
  },
  getters: {
    color: state => state.snackbar.color,
    isOpen: state => state.snackbar.isOpen,
    message: state => state.snackbar.message
  },
  actions: {
    show (payload: SnackbarState) {
      this.snackbar = {
        isOpen: true,
        color: payload.color,
        message: payload.message
      }
    },
    hide () {
      this.snackbar = { ...this.snackbar, isOpen: false }
    }
  }
})
