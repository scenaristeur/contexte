<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Pour un guide de comment utiliser le contexte QQOQCCP,<br>
      jetez un opeil à la page wikipedia
      <a href="https://fr.wikipedia.org/wiki/QQOQCCP" target="_blank" rel="noopener">QQOQCCP</a>.
    </p>
    <h3>QQOQCCP</h3>

    <div class="container">
      <!-- <form> -->


      <!-- <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div> -->




      <div class="form-group">
        <label for="qui">Qui / Who / Quién ? </label>
        <input id="qui" class="form-control" v-model="qqoqccp.qui" />
        <small class="form-text text-muted">wikidata suggestion</small>

      </div>


      <div class="form-group">
        <label for="quoi">Quoi / What / Qué ? </label>
        <input id="quoi" class="form-control" v-model="qqoqccp.quoi" />
      </div>


      <div class="form-group">
        <label for="ou">Où / Where / Donde ? </label>
        <input id="ou" class="form-control" v-model="qqoqccp.ou" />
        <small class="form-text text-muted">wikidata suggestion + openstreetmap</small>

      </div>

      <div class="form-group">
        <label for="quand">Quand / When / Cuando ? </label>
        <small class="form-text text-muted"> date & time</small>
        <input id="quand" class="form-control" v-model="qqoqccp.quand" type="datetime-local" />
        <div class="btn-group" role="group" aria-label="quand">
          <button class="btn btn-outline-secondary btn-sm" disabled>maintenant</button>
          <button class="btn btn-outline-secondary btn-sm" disabled>hier</button>
          <button class="btn btn-outline-secondary btn-sm" disabled>demain</button>
        </div>

      </div>


      <div class="form-group">
        <label for="comment">Comment / How / Como ?</label>
        <input id="comment" class="form-control" v-model="qqoqccp.comment" />
      </div>


      <div class="form-group">
        <label for="combien">Combien / How many, How much ? </label>
        <input id="combien" class="form-control" v-model="qqoqccp.combien" />
        <small class="form-text text-muted">specify unity with wikidata suggestion</small>

      </div>

      <div class="form-group">
        <label for="pourquoi">Pourquoi / Why / Por qué ? </label>
        <textarea id="pourquoi" class="form-control" v-model="qqoqccp.pourquoi" />
      </div>

      <div class="form-group">
        <label for="creator">creator email address, webid...</label>
        <input type="text" class="form-control" id="creator" aria-describedby="creatorHelp" placeholder="Enter creator">
        <small id="creatorHelp" class="form-text text-muted">Qui a créé ce contexte.</small>
      </div>

      <button @click="generate" type="button" class="btn btn-success">Generer le contexte / Generate the
        contexte</button>
      <button @click="init" type="button" class="btn btn-warning">Init formulaire</button>
      <!-- <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> -->
      <!-- <button type="submit" class="btn btn-primary">Submit</button> -->
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'QqoqcpComponent',
  props: {
    msg: String
  },
  data() {
    return {
      qqoqccp: {}
    }
  },
  methods: {
    generate() {
      this.qqoqccp.id = uuidv4()
      this.qqoqccp.created = Date.now()
      console.log(this.qqoqccp)
    },
    init() {
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
