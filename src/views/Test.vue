<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <PlayersComponent />
    </div>
</template>

<script>
  // @ is an alias to /src
  import PlayersComponent from '@/components/PlayersComponent.vue'

  export default {
    name: 'Test',
    components: {
      PlayersComponent
    }
  }
</script>
