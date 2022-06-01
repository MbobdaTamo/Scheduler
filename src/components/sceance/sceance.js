import SceanceForm from "@/components/global/lPblicationForm/SceanceForm"
export default {
  name: 'sceance',
  data () {
    return {
      years:['2022','2023','2024','2025','2027'],
      jours:['Tous','Lundi','Mardi','Mercredi','jeudi','vendredi','samedi','dimanche'],
      amphis: {},
      classes: {},
      enseignants: {},
      plageHoraire: [] /*[{id:'',nom:'',effectif:'',departemment:'',niveau:''}] */,
      annee:'2022',
      semestre:'SEMESTRE1',
      jour:'Tous',
      classe:'Toutes',
      salle:'Toutes',
      enseignant: 'Tous'
    }
  },
  components: {
    SceanceForm
  },
  methods: {
    formDisplay (type,sceance) {
      let playload = { annee:this.annee, semestre:this.semestre, jour:this.jour,
        classe:this.classe, salle: this.salle, enseignant:this.enseignant, period: 'year'}
      this.$refs.sceanceForm.displaying(type,sceance,playload)
    },
    getClasse () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getClasse.php', {
      })
        .then((response) => {
          this.classes = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getEnseignant () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getEnseignant.php', {
      })
        .then((response) => {
          this.enseignants = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAmphi () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getAmphi.php', {
      })
        .then((response) => {
          this.salles = response.data
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
   this.getAmphi()
   this.getClasse()
   this.getEnseignant()
  }
}
