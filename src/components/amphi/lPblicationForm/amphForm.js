export default {
  name: 'amphForm',
  data () {
    return {
      Display: 'block',
      publiTitle: '',
      publiContent: '',
      role: 'Ajouter',
      caller: null
    }
  },
  methods: {
    displaying (type, a) {
      this.caller = a
      this.role= type ==="ajouter" ? "Ajouter" : "Modifier"
      this.publiTitle = a.nom
      this.publiContent = a.capacite
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
        axios.post(this.$store.state.baseUrl + 'addAmphi.php', {
          role: this.role,
          id: this.caller.id,
          nom: this.publiTitle,
          capacite: this.publiContent,
        })
          .then(() => {
            this.$emit('added')
            this.hide()
          })
          .catch((error) => {
            alert(error)
          })
      }
    }
  }
}