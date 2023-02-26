<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <QqoqcpComponent msg="Bienvenue sur Qqoqcp, l'appli de gestion de contexte pour l'interopérabilité"/>
  </div>
</template>

<script>
// @ is an alias to /src
import QqoqcpComponent from '@/components/QqoqcpComponent.vue'

export default {
  name: 'HomeView',
  components: {
    QqoqcpComponent
  }
}
</script>
