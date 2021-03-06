import AmphForm from "@/components/global/lPblicationForm/AmphForm"
export default {
  name: 'enseignant',
  data () {
    return {
      amphi: []
    }
  },
  components: {
    AmphForm
  },
  methods: {
    formDisplay (type,amph) {
      this.$refs.amphForm.displaying(type,amph)
    },
    getAmphi () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getAmphi.php', {
      })
        .then((response) => {
          this.amphi = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteAmph (id) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'addAmphi.php', {
        role: 'delete',
        id: id
      })
        .then(() => {
          this.getAmphi()
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted () {
    this.getAmphi()
  }
}
