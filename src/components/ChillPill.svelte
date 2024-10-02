<script>
  let activity = ''; // Variable reactiva para almacenar la actividad obtenida de la API

  // Función para obtener la actividad desde la API
  async function getActivity() {
    try {
        console.log('Botón clicado, llamando a la API...');
        // Usar un proxy de CORS si es necesario, pero primero prueba sin él si la API permite las solicitudes directamente.
        const response = await fetch('https://www.boredapi.com/api/activity');
        if (!response.ok) {
            throw new Error(`Error en la respuesta de la API: ${response.status}`);
        }
        const data = await response.json();
        activity = data.activity;  // Actualiza el estado
        console.log('Actividad sugerida:', activity);
    } catch (error) {
        console.error('Error al obtener la actividad:', error);
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
    <!-- Botón para obtener una nueva actividad -->

    <!-- Mostramos la actividad aquí -->
    {#if activity}
      <p class="activity">Actividad sugerida: {activity}</p>
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

  /* Asegura que los botones se alineen correctamente en fila */
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  /* Estilo de los botones */
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
    white-space: normal; /* Permite que el texto se ajuste en varias líneas */
    text-align: center; /* Alinea el texto en el centro del botón */
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
    white-space: normal; /* Permite que el texto se ajuste en varias líneas */
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
