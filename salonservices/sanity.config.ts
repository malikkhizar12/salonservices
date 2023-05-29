import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'SalonServices',

  projectId: '5yy1cqor',
  dataset: 'services',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
