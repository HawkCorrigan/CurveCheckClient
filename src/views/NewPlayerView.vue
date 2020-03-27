<template>
    <div class="about">
        <NewPlayerComponent />
    </div>
</template>


<script>
  // @ is an alias to /src
  import NewPlayerComponent from '@/components/NewPlayerComponent.vue'

  export default {
    name: 'NewPlayerView',
    components: {
      NewPlayerComponent
    }
  }
</script>
