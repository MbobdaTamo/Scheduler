import ClassForm from "@/components/global/lPblicationForm/ClassForm"
export default {
  name: 'plageHoraire',
  data () {
    return {
      years:['2022','2023','2024','2025','2027'],
      plageHoraire: [] /*[{id:'',nom:'',effectif:'',departemment:'',niveau:''}] */
    }
  },
  components: {
    ClassForm
  },
  methods: {
    formDisplay (type,classe) {
      this.$refs.classForm.displaying(type,classe)
    },
    getClasse () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getClasse.php', {
      })
        .then((response) => {
          this.classe = response.data
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteClasse (id) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'addClasse.php', {
        role: 'delete',
        id: id
      })
        .then(() => {
          this.getClasse()
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted () {
    this.getClasse()
  }
}
