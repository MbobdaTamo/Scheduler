import SceanceForm from "@/components/global/lPblicationForm/SceanceForm"
import YAlert from "@/components/global/yAlert/YAlert"
export default {
  name: 'sceance',
  data () {
    return {
      years:['2022','2023','2024','2025','2027'],
      jours:['Lundi','Mardi','Mercredi','Jeudi','Vendredi','samedi','dimanche'],
      amphis: [],
      classes: [],
      enseignants: [],
      plageHoraire: [] /*[{id:'',nom:'',effectif:'',departemment:'',niveau:''}] */,
      annee:'2022',
      semestre:'SEMESTRE1',
      jour:'Lundi',
      classe:'Toutes',
      salle:'Toutes',
      enseignant: 'Tous',
      classeId:0,
      salleId:0,
      enseignantId:0,
      sceance: {},
      //---- trier pat
      triePars: ['classe','salle','enseignant'],
      triePar:'',
      current:'',
      currents:[],
      currentId:0
    }
  },
  components: {
    SceanceForm,
    YAlert
  },
  methods: {
    formDisplay (type,sceance,sceances) {
      if (this.validation() || type == 'modifier') {
        let playload = { annee:this.annee, semestre:this.semestre, jour:this.jour,
          classe:this.classeId, salle: this.salleId, enseignant:this.enseignantId, period: 'year'}
        this.$refs.sceanceForm.displaying(type,sceance,playload,sceances)
      }
      else this.$refs.yAlert.display("aucun paramètre ne doit etre à \"Tous\" ou  \"Toutes\" pour pouvoir ajouter")
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
    getSceance () {
      let salle = this.triePar == 'salle' ? this.currentId: '.+'
      let classe = this.triePar == 'classe' ? this.currentId: '.+'
      let enseignant = this.triePar == 'enseignant' ? this.currentId: '.+'
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getSceance.php', {
        period: 'year',	
        salle: salle,
        classe: classe,
        enseignant: enseignant,
        annee: this.annee,
        semestre: this.semestre,
        jour: this.jour
      })
        .then((response) => {
          this.sceance = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSceance1 (type,sceance) {
      let salle = '.+'
      let classe =  '.+'
      let enseignant = '.+'
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getSceance.php', {
        period: 'year',	
        salle: salle,
        classe: classe,
        enseignant: enseignant,
        annee: this.annee,
        semestre: this.semestre,
        jour: this.jour
      })
        .then((response) => {
          this.formDisplay(type,sceance,response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    deleteSceance (id) {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'addSceance.php', {
        role: 'delete',
        id: id
      })
        .then(() => {
          this.getSceance()
        })
        .catch((error) => {
          alert(error)
        })
    },
    classSelect (id,nom) {
      this.classe = nom
      this.classeId = id
      // this.getSceance()
    },
    salleSelect (id,nom) {
      this.salle = nom
      this.salleId = id
      // this.getSceance()
    },
    ensSelect (id,nom) {
      this.enseignant = nom
      this.enseignantId = id
      //this.getSceance()
    },
    trieSelect (event) {
      this.current = event.target.value
      if(this.current == 'classe') this.currents = this.classes
      else if(this.current == 'salle') this.currents = this.salles
      else this.currents = this.enseignants
    },
    currentSelect (id) {
      this.currentId = id
      this.getSceance()
    },
    validation () {
      if(this.enseignantId == 0 || this.salleId == 0 || this.classeId == 0 || this.jour == 'Tous') return false
      else return true
    },
    toHour(minutes) {
      let h = (minutes - minutes%60)/60
      let min = minutes%60
      return h.toFixed(0)+'H'+min
    }
  },
  mounted () {
   this.getAmphi()
   this.getClasse()
   this.getEnseignant()
  }
}
