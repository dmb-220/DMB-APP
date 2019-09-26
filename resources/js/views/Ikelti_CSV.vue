<template>
  <div>
    <hero-bar>
      Duomenų įkėlimas
      <router-link slot="right" to="/" class="button">
        Į pradžią
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component title="Pardavimų ir likučių failų sukėlimas" icon="upload">
        <form @submit.prevent="submit">
          <b-field label="CSV failai:" horizontal>
            <b-field>
              <b-upload v-model="dropFiles"
                  multiple
                  drag-drop>
                  <section class="section is-main-section">
                      <div class="content has-text-centered">
                          <p>
                              <b-icon
                                  icon="upload"
                                  size="is-large">
                              </b-icon>
                          </p>
                          <p>Drop your files here or click to upload</p>
                      </div>
                  </section>
              </b-upload>
          </b-field>
        </b-field>
        <div class="tags">
            <span v-for="(file, index) in dropFiles"
                :key="index"
                class="tag is-primary" >
                {{file.name}}
                <button class="delete is-small"
                    type="button"
                    @click="deleteDropFile(index)">
                </button>
            </span>
        </div> 

        <b-tabs>
        <b-tab-item
                v-for="(file, index) in dropFiles"
                :key="index"
                class="is-primary"
                label="file.name" icon="google-photos">
        </b-tab-item>
        </b-tabs>
          <hr>
          <b-field horizontal>
            <b-field grouped>
              <div class="control">
                <b-button native-type="submit" type="is-primary">Submit</b-button>
              </div>
              <div class="control">
                <b-button type="is-primary is-outlined" @click="reset">Reset</b-button>
              </div>
            </b-field>
          </b-field>
        </form>
      </card-component>
    </section>
    <table class="table table-bordered">
            <thead>
            <tr>
                <th>Failas</th>
                <th>Dydis</th>
                <th>Data</th>
                <th>Veiksmai</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="book in books" :key="book.id">
                <td>{{ book.vardas }}</td>
                <td>{{ book.dydis }}</td>
                <td>{{ book.modifikuota }}</td>
                <td>
                    <div class="buttons is-right">
                        <router-link :to="{name: 'edit', params: { id: book.id }}" class="button is-small is-primary">Edit
                        </router-link>
                        <button class="button is-small is-danger" @click="deleteBook(book.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent'
import mapValues from 'lodash/mapValues'
import FilePicker from '@/components/FilePicker'
import HeroBar from '@/components/HeroBar'
export default {
  name: 'Forms',
  components: { HeroBar, FilePicker, CardComponent },
  data () {
    return {
      books: [],

      dropFiles: [],
      isLoading: false,
      form: {
        name: null,
        email: null,
        phone: null,
        department: null,
        subject: null,
        question: null
      },
      customElementsForm: {
        checkbox: [],
        radio: null,
        switch: true,
        file: null
      },
      departments: [
        'Business Development',
        'Marketing',
        'Sales'
      ]
    }
  },
  created() {
    this.getData()
    },
  computed: {
    titleStack () {
      return [
        'Admin',
        'Forms'
      ]
    }
  },
  methods: {
    submit () {

    },
    getData () {
      this.axios
      .get('http://app.test/csv')
      .then(response => {
          this.books = response.data;
          console.log(response.data);
      });
    },
    deleteDropFile(index) {
                this.dropFiles.splice(index, 1)
            },
    reset () {
      this.form = mapValues(this.form, item => {
        if (item && typeof item === 'object') {
          return []
        }
        return null
      })

      this.$buefy.snackbar.open({
        message: 'Reset successfully',
        queue: false
      })
    }
  }
}
</script>
