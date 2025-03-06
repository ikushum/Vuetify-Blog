export interface SnackbarState {
  color: string,
  message: string,
  isOpen: boolean
}

export interface SnackbarStoreState {
  snackbar: SnackbarState
}
