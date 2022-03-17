import YAlert from "@/components/global/yAlert/YAlert"
export default {
  name: 'sceanceForm',
  components: {
    YAlert
  },
  data () {
    return {
      Display: 'block',
      heures: [7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      heuresF: [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
      minutes: [0,5,10,15,20,25,30,35,40,45,50,55],
      nom: '',
      description: '',
      heureD:7,
      minD:0,
      heureF:7,
      minF:0,
      transition:0,
      role: 'Ajouter',
      caller: null,
      parentData: null,
      sceance: null
    }
  },
  computed: {
    heure_debut () { return this.heureD*60 + parseInt(this.minD) },
    heure_fin () { return this.heureF*60 + parseInt(this.minF) }
  },
  methods: {
    displaying (type, a, playload,sceance) {
      this.parentData = playload
      this.role= type ==="ajouter" ? "Ajouter" : "Modifier"
      this.caller = a
      this.sceance = sceance
      if (a!=0) {
        this.nom = a.nom
        this.description = a.description
        this.minD = a.heure_debut%60
        this.heureD = (a.heure_debut-a.heure_debut%60)/60
        this.minF = a.heure_fin%60
        this.heureF = (a.heure_fin-a.heure_fin%60)/60
        this.duree = a.heure_fin - a.heure_debut
        this.transition = a.transition
      }
      this.Display = 'block'
    },
    hide () {
      this.Display = 'none'
    },
    onPublish () {
      if(this.heure_debut >= this.heure_fin) {
        this.$refs.yAlert.display('heure de fin supérieur ou égale à heure de début')
        return
      }
      if(this.timeFree() || this.role == 'Modifier') {
        this.publishing()
      }
    },
    timeFree () {
      let i, max = this.sceance.length
      for(i=0;i<max; i++) {
        let maxPoint = Math.max(this.sceance[i].heure_fin,this.heure_fin)
        let minPoint = Math.min(this.sceance[i].heure_debut,this.heure_debut)
        let w1 = this.sceance[i].heure_fin - this.sceance[i].heure_debut
        let w2 = this.heure_fin - this.heure_debut
        let overlap = (w1+w2 > maxPoint - minPoint) // time overlaping test

        let busy = (this.parentData.salle == this.sceance[i].salle || 
          this.parentData.classe == this.sceance[i].classe || 
          this.parentData.enseignant == this.sceance[i].enseignant
          )
        if(busy && overlap) {
          if (this.parentData.salle == this.sceance[i].salle) this.$refs.yAlert.display('salle occupée')
          else if (this.parentData.classe == this.sceance[i].classe) this.$refs.yAlert.display('classe occupée')
          else if (this.parentData.enseignant == this.sceance[i].enseignant) this.$refs.yAlert.display('enseignant occupée')
          else this.$refs.yAlert.display('il y\'a chevauchement')
          return false
        }
      }
      return true
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
          transition: this.transition,
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