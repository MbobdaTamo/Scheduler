export default {
  name: 'ensForm',
  data () {
    return {
      Display: 'none',
      nom: '',
      prenom: '',
      grade: '',
      departement: '',
      role: 'Ajouter',
      caller: null
    }
  },
  methods: {
    displaying (type, a) {
      this.caller = a
      this.role= type ==="ajouter" ? "Ajouter" : "Modifier"
      this.nom = a.nom
      this.prenom = a.prenom
      this.grade = a.grade
      this.departement = a.departement
      this.Display = 'block'
    },
    hide () {
      this.Display = 'none'
    },
    validation () {
      return true
    },
    publishing () {
      if (!this.validation()) alert('echec de validation')
      else {
        const axios = require('axios')
        axios.post(this.$store.state.baseUrl + 'addEnseignant.php', {
          role: this.role,
          id: this.caller.id,
          nom: this.nom,
          prenom: this.prenom,
          grade: this.grade,
          departement: this.departement
        })
          .then(() => {
            this.$emit('added')
            this.hide()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}