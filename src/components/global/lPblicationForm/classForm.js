export default {
  name: 'classForm',
  data () {
    return {
      Display: 'none',
      nom: '',
      effectif: '',
      departement: '',
      niveau: '',
      role: 'Ajouter',
      caller: null
    }
  },
  methods: {
    displaying (type, a) {
      this.caller = a
      this.role= type ==="ajouter" ? "Ajouter" : "Modifier"
      this.nom = a.nom
      this.effectif = a.effectif
      this.departement = a.departement
      this.niveau = a.niveau
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
        axios.post(this.$store.state.baseUrl + 'addClasse.php', {
          role: this.role,
          id: this.caller.id,
          nom: this.nom,
          effectif: this.effectif,
          departement: this.departement,
          niveau: this.niveau
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