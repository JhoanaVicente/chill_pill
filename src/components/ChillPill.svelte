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
      <p>¡Hola! ¿Aburrido? Toma una ChillPill y descubre algo divertido para hacer.</p>
      <button disabled>Sorpréndeme</button>
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
      color: #E09C3B;
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
      background-color: #5BB2B0;
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
      background-color: #5BB2B0;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 16px;
      padding: 20px;
      cursor: pointer;
      font-size: 25px;
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
      color: #E09C3B;
      font-size: 3em;
      font-weight: bold;
      white-space: normal; /* Permite que el texto se ajuste en varias líneas */
      text-align: center;
      text-shadow: 1px 0px 5px black,
                   0px 1px 5px black,
                   1px 0px 5px black,
                   0px 1px 5px black;
      margin: 20px 0;
    }

    button:hover {
      background-color: #E09C3B;
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
      }
  
      p {
        font-size: 1.5em;
      }
    }
  </style>
  