<template>
  <b-field :label="label" :message="fieldFileMessage" :type="fieldFileType">
    <b-field>
      <b-upload v-model="file_bankas" @input="upload">
        <a class="button is-primary">
          <b-icon :icon="uploadButtonIcon" custom-size="default"/>
          <span v-if="uploadButtonText">{{ uploadButtonText }}</span>
        </a>
      </b-upload>
      <div v-if="fileName" class="control">
        <a class="button is-static is-file-upload-label">
          <span :title="fileName">{{ fileName }}</span>
          <span class="delete" @click.prevent="dropFile"></span>
        </a>
      </div>
    </b-field>
  </b-field>
</template>

<script>
import each from 'lodash/each'

export default {
  name: 'FilePickerBankas2',
  props: {
    label: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    currentFile: {
      default: null
    }
  },
  data () {
    return {
      errors: {},
      file_bankas: null,
      uploadPercent: 0,
      isUploadSuccess: false,
    }
  },
  computed: {
    fieldFileMessage() {
      if (this.errors.file) {
        return this.errors.file[0]
      }

      if (this.isUploadSuccess) {
        return 'Failas įkeltas sėkmingai'
      }

      if (this.uploadPercent) {
        return `Įkeliama ${this.uploadPercent}%`
      }

      return this.message
    },
    uploadButtonText() {
      return (this.fileName) ? null : 'Pasirinkite failą'
    },
    uploadButtonIcon() {
      return (this.fileName) ? 'cloud-sync' : 'cloud-upload'
    },
    fieldFileType() {
      return (this.errors.file) ? 'is-danger' : null
    },
    fileName () {
      if (this.file_bankas) {
        return this.file_bankas.name
      }

      if (this.currentFile) {
        return this.currentFile
      }

      return null
    }
  },
  methods: {
    upload (file) {
      this.errors = {}
      let formData = new FormData()
      formData.append('file_bankas', this.file_bankas)
      this.isUploadSuccess = false
      //console.log(JSON.stringify(formData));

      axios
        .post('/inte/store_bankas', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: this.progressEvent
        })
        .then(r => {
          this.isUploadSuccess = true

          // Display success data & then drop it after a little while
          // setTimeout(() => {
          //   this.file = null
          //   this.isUploadSuccess = false
          //   this.uploadPercent = 0
          // }, 1500)
          //console.log(JSON.stringify(r.data.upload))
          this.$emit('file-updated', r.data.data)
          this.$emit('file-id-updated', r.data.data.id)
        })
        .catch(err => {
          this.file_bankas = null
          this.uploadPercent = 0

          if (err.response.data.errors) {
            this.errors = err.response.data.errors
          } else {
            this.errors = {
              _all: ['Upload error']
            }
          }
          each(this.errors, err => {
            this.$buefy.toast.open({
              message: err[0],
              type: 'is-danger',
              queue: false,
            })
          })
        })
    },
    dropFile () {
      this.file_bankas = null
      this.isUploadSuccess = false
      this.uploadPercent = 0

      this.$emit('file-updated', null)
      this.$emit('file-id-updated', null)
    },
    progressEvent (progressEvent) {
      this.uploadPercent = Math.round((progressEvent.loaded * 100) / progressEvent.total)
    }
  }
}
</script>
