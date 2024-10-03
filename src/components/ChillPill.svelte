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


  let buttonDescriptions = {
    juegosClasicos: "Tetris, Snake",
    desafiosLogica: "Sudokus, Crucigramas",
    ejerciciosCreativos: "Dibujar, Colorear",
    proyectosDIY: "Manualidades, Recetas sencillas",
  };

  let hoveredDescription = ""; // Para almacenar la descripción al pasar el ratón


let showDescription = {
    juegosClasicos: false,
    desafiosLogica: false,
    ejerciciosCreativos: false,
    proyectosDIY: false,
  };

  // Función para manejar el clic en cada botón
  function toggleDescription(buttonName) {
    showDescription[buttonName] = !showDescription[buttonName];
  }
</script>

<section class="chillpill">
  <h1>Chill Pill</h1>

    <div class="container">
    <div class="button-container">
      <button on:click={() => toggleDescription('juegosClasicos')}>
        Juegos Clásicos
      </button>
      {#if showDescription.juegosClasicos}
        <p class="description-slides">Tetris, Snake</p>
      {/if}
    </div>

    <div class="button-container">
      <button on:click={() => toggleDescription('desafiosLogica')}>
        Desafíos de Lógica
      </button>
      {#if showDescription.desafiosLogica}
        <p class="description-slides">Sudokus, Crucigramas</p>
      {/if}
    </div>

    <div class="button-container">
      <button on:click={() => toggleDescription('ejerciciosCreativos')}>
        Ejercicios Creativos
      </button>
      {#if showDescription.ejerciciosCreativos}
        <p class="description-slides">Dibujar, Colorear</p>
      {/if}
    </div>

    <div class="button-container">
      <button on:click={() => toggleDescription('proyectosDIY')}>
        Proyectos DIY
      </button>
      {#if showDescription.proyectosDIY}
        <p class="description-slides">Manualidades, Recetas sencillas</p>
      {/if}
    </div>
  </div>
    
    {#if hoveredDescription}
      <div class="description-popup">
        <p class="description-slides">{hoveredDescription}</p>
      </div>
    {/if}
    

  <div class="container2">
    <img src="../assets/pildora-chillpill.png" alt="Chill Pill" />
    <p>
      ¡Hola! ¿Aburrido? Toma una ChillPill y descubre algo divertido para hacer.
    </p>
    <button class="btn-surprise" on:click={getActivity}>Sorpréndeme</button>

    {#if isFetching}
      <p>Cargando actividad...</p>
    {:else if errorMessage}
      <p style="color: red;">Error: {errorMessage}</p>
      <!-- Muestra mensaje de error -->
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
    white-space: normal;
    text-align: center;
  }
  
  .button-container {
    text-align: center;
    width: 167px; /* Ajusta el ancho de cada botón */
    margin: 10px;
  }
  .container2 {
    text-align: center;
    margin-top: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .btn-surprise {
    font-size: 1.5em; /* Aumenta el tamaño de la palabra "Sorpréndeme" */
    font-weight: bold; /* Puedes hacer el texto más grueso si lo deseas */
    color: white; /* Color del texto */
    background-color: #5bb2b0; /* Color del fondo del botón */
    padding: 20px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    text-align: center;
  }

  .btn-surprise:hover {
    background-color: #e09c3b; /* Cambia el color de fondo cuando se pasa el ratón */
    color: #fff; /* Cambia el color del texto al pasar el ratón si lo deseas */
  }

  button {
    font-family: Lato, sans-serif;
    background-color: #5bb2b0;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    font-size: 18px;
    width: 100%; /* Ancho del botón igual al contenedor */
    height: 78px;
    margin: 10px 0;
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
    text-shadow:
      1px 0px 5px black,
      0px 1px 5px black,
      1px 0px 5px black,
      0px 1px 5px black;
    margin: 20px 0;
  }

  button:hover {
    background-color: #e09c3b;
  }

  .description-popup {
  position: absolute; /* Posición absoluta para desplazar la descripción */
  background-color: #5bb2b0;
  color: #e09c3b;
  padding: 10px;
  border-radius: 5px;
  z-index: 10; /* Asegúrate de que esté sobre otros elementos */
  margin-top: 10px; /* Espacio entre el botón y la descripción */
}

.description-slides {
    color: #5bb2b0;
    font-size: 1.5em;
    font-weight: bold;
    white-space: normal;
    text-align: center;
    margin: 10px 0;
    padding: 5px;
    border-radius: 8px;
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
