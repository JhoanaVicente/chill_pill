<script>
    import { onMount } from 'svelte';
    let activities = [];
    let loading = true;
  
    async function fetchActivities() {
      const response = await fetch('https://bored-api.appbrewery.com/api/activity');
      const data = await response.json();
      activities = data;
      loading = false;
    }
  
    onMount(() => {
      fetchActivities();
    });
  </script>
  
  <style>
    /* Estilos simples para la aplicación */
    .container {
      text-align: center;
      padding: 20px;
    }
  </style>
  
  <div class="container">
    <h1>ChillPill</h1>
    {#if loading}
      <p>Cargando actividades...</p>
    {:else}
      <p>¿No sabes qué hacer? Aquí tienes una actividad:</p>
      <h2>{activities.activity}</h2>
      <button on:click={fetchActivities}>Sorpresa</button>
    {/if}
  </div>
  