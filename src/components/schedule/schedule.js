import BlueTextBox from './BlueTextBox.vue'
import html2pdf from 'html2pdf.js'
export default {
  name: 'schedule',
  components: {
    BlueTextBox
  },
  data () {
    return {
      days: ['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'],
      hours: [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
      years:['2022','2023','2024','2025','2027'],
      jourToX:{'Lundi':0,'Mardi':1,'Mercredi':2,'Jeudi':3,'Vendredi':4,'Samedi':5,'Dimanche':6},
      semestre:'SEMESTRE1',
      annee:'2022',
      amphis: [],
      classes: [],
      enseignants: [],
      sceance: [],
      triePars: ['classe','salle','enseignant'],
      triePar:'',
      current:'',
      currents:[],
      currentId:0,
    }
  },
  methods: {
    print () {
      let element = document.getElementById('toPrint')
      var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, width:1366, windowWidth:1366 },
        jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' }
      }
      html2pdf().from(element).set(opt).save()
    },
    getClasse () {
      const axios = require('axios')
      axios.post(this.$store.state.baseUrl + 'getClasse.php', {
      })
        .then((response) => {
          this.classes = response.data
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
      axios.post(this.$store.state.baseUrl + 'schedule.php', {
        period: 'year',	
        salle: salle,
        classe: classe,
        enseignant: enseignant,
        annee: this.annee,
        semestre: this.semestre
      })
        .then((response) => {
          this.sceance = response.data
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
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
