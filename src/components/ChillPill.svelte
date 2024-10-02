<script>
  import Activity from "./Activity.svelte"; // Asegúrate de que la ruta sea correcta

  let activity = ""; // Variable para almacenar la actividad
  let isFetching = false; // Estado para manejar si se está haciendo una solicitud
  let errorMessage = ""; // Para almacenar cualquier mensaje de error

  // Función para obtener la actividad de la API
  async function getActivity() {
    if (isFetching) return; // Evita múltiples solicitudes simultáneas
    isFetching = true; // Marca el estado de fetch
    errorMessage = ""; // Reinicia cualquier mensaje de error anterior

    try {
      const response = await fetch("http://localhost:5000/api/activity");
      if (!response.ok) throw new Error("Error de red");

      const data = await response.json(); // Obtén la actividad
      activity = data.activity; // Asigna la actividad obtenida
    } catch (error) {
      console.error("Error fetching activity:", error); // Más detalles en la consola
      // Mensajes de error personalizados
      if (error.message.includes("429")) {
        errorMessage = "Demasiadas solicitudes. Intenta más tarde.";
      } else {
        errorMessage = "Error al obtener la actividad. Intenta nuevamente.";
      }
    } finally {
      isFetching = false; // Restablece el estado de fetch
    }
  }
</script>

<section class="chillpill">
  <h1>Chill Pill</h1>

  <div class="container">
    <button disabled>Juegos Clásicos</button>
    <button disabled>Desafíos de Lógica</button>
    <button disabled>Ejercicios Creativos</button>
    <button disabled>Proyectos DIY</button>
  </div>

  <div class="container2">
    <img src="../assets/pildora-chillpill.png" alt="Chill Pill" />
    <p>
      ¡Hola! ¿Aburrido? Toma una ChillPill y descubre algo divertido para hacer.
    </p>
    <button on:click={getActivity}>Sorpréndeme</button>

    {#if isFetching}
      <p>Cargando actividad...</p>
    {:else if errorMessage}
      <p style="color: red;">Error: {errorMessage}</p> <!-- Muestra mensaje de error -->
    {:else if activity}
      <Activity {activity} /> <!-- Muestra la actividad -->
    {/if}
  </div>
</section>

<style>
  .chillpill {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    background-color: #231456;
  }

  h1 {
    font-size: 4em;
    color: #e09c3b;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .container button {
    font-family: Lato, sans-serif;
    background-color: #5bb2b0;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    font-size: 18px;
    width: 167px;
    height: 78px;
    margin: 10px;
    white-space: normal;
    text-align: center;
  }

  .container2 {
    text-align: center;
    margin-top: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .container2 button {
    font-family: Lato, sans-serif;
    background-color: #5bb2b0;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    font-size: 28px;
    width: 279px;
    height: 77px;
    margin: 10px;
  }

  img {
    width: 28%;
    max-width: 600px;
    height: auto;
    margin-bottom: 20px;
  }

  p {
    color: #e09c3b;
    font-size: 3em;
    font-weight: bold;
    white-space: normal;
    text-align: center;
    text-shadow: 1px 0px 5px black, 0px 1px 5px black, 1px 0px 5px black, 0px 1px 5px black;
    margin: 20px 0;
  }

  button:hover {
    background-color: #e09c3b;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }

    .container button {
      width: 100%;
    }

    img {
      max-width: 200px;
      width: 42%;
    }

    p {
      font-size: 2em;
    }
  }
</style>
