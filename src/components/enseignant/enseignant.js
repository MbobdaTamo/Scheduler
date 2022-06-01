import EnsForm from "@/components/global/lPblicationForm/EnsForm"
export default {
  name: 'enseignant',
  data () {
    return {
      enseignant: [] /* [{id:'',nom:'',prenom:'',grade:'',departemment:''}] */
    }
  },
  components: {
    EnsForm
  },
  methods: {
    formDisplay (type,ens) {
      this.$refs.ensForm.displaying(type,ens)
    },
    getEnseignant () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getEnseignant.php', {
      })
        .then((response) => {
          this.enseignant = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteEnseignant (id) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'addEnseignant.php', {
        role: 'delete',
        id: id
      })
        .then(() => {
          this.getEnseignant()
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted () {
    this.getEnseignant()
  }
}
