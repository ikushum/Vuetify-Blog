import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { mdi } from 'vuetify/iconsets/mdi-svg'
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    sets: { mdi },
  },
})
