<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Pour un guide de comment utiliser le contexte QQOQCCP,<br>
      jetez un opeil à la page wikipedia
      <a href="https://fr.wikipedia.org/wiki/QQOQCCP" target="_blank" rel="noopener">QQOQCCP</a>.
    </p>
    <h3>QQOQCCP</h3>
    <label for="qui">Qui / Who / Quién ? </label>
    <input id="qui" v-model="qqoqccp.qui" /> wikidata suggestion
    <br>
    <label for="quoi">Quoi / What / Qué ? </label>
    <input id="quoi" v-model="qqoqccp.quoi" />
    <br>
    <label for="ou">Où / Where / Donde ? </label>
    <input id="ou" v-model="qqoqccp.ou" /> wikidata suggestion + openstreetmap
    <br>
    <label for="quand">Quand / When / Cuando ? </label>
    <input id="quand" v-model="qqoqccp.quand" type="datetime-local" />
    <br>
    <label for="comment">Comment / How / Como ?</label>
    <input id="comment" v-model="qqoqccp.comment" />
    <br>
    <label for="combien">Combien / How many, How much ? </label>
    <input id="combien" v-model="qqoqccp.combien" /> specify unity with wikidata suggestion
    <br>
    <label for="pourquoi">Pourquoi / Why / Por qué ? </label>
    <textarea id="pourquoi" v-model="qqoqccp.pourquoi" />

<br>
<button @click="generate">Generer le contexte / Generate the contexte</button>
<button @click="init">Init formulaire</button>

  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'QqoqcpComponent',
  props: {
    msg: String
  },
  data(){
    return{
      qqoqccp: {}
    }
  },
  methods:{
    generate(){
      this.qqoqccp.id = uuidv4()
      this.qqoqccp.created = Date.now()
      console.log(this.qqoqccp)
    },
    init(){
      this.qqoqccp = {}
    }
    
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
