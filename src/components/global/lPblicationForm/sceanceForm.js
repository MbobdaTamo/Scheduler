export default {
  name: 'sceanceForm',
  data () {
    return {
      Display: 'block',
      debuts: ['7','8','9','10','11','12','13','14','15','16','17','18','19','20'],
      durees: ['1','2','3','4'],
      nom: '',
      description: '',
      heure_debut: '',
      heure_fin: '',
      role: 'Ajouter',
      caller: null,
      parentData: null
    }
  },
  methods: {
    displaying (type, a, playload) {
      this.parentData = playload
      this.caller = a
      this.role= type ==="ajouter" ? "Ajouter" : "Modifier"
      this.nom = a.nom
      this.description = a.description
      this.heure_debut = a.heure_debut
      this.heure_fin = a.heure_fin
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
        axios.post(this.$store.state.baseUrl + 'addSceance.php', {
          role: this.role,
          id: this.caller.id,
          nom: this.nom,	
          period: this.parentData.period,	
          description: this.description,
          salle: this.parentData.salle,
          classe: this.parentData.classe,
          enseignant: this.parentData.enseignant,
          annee: this.parentData.annee,
          semestre: this.parentData.semestre,
          jour: this.parentData.jour,
          heure_debut: this.heure_debut,
          heure_fin: this.heure_fin
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