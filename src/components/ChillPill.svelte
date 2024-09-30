<!-- src/components/ChillPill.svelte -->
<script>
    // Aquí puedes agregar cualquier lógica relacionada con el componente ChillPill
  </script>
<section>
    <h1>Chill Pill</h1>
    <div class="container">
        <button disabled>Juegos Clásicos</button> <!-- Botón deshabilitado por ahora -->
        <button disabled>Desafíos de Lógica</button> <!-- Botón deshabilitado por ahora -->
        <button disabled>Ejercicios Creativos</button> <!-- Botón deshabilitado por ahora -->
        <button disabled>Proyectos DIY</button> <!-- Botón deshabilitado por ahora -->
    </div>

    <div class="container2">
        <img src="../assets/pildora-chillpill.png" alt="Chill Pill">
        <p>¡Hola! ¿Aburrido? Toma una ChillPill y descubre algo divertido para hacer."</p>
        <button disabled>Sorpréndeme</button> <!-- Botón deshabilitado por ahora -->
    </div>
      
</section>

  
  <style>

    body {
        font-family: Lato;
    }
  
    h1 {
      font-size: 2em;
      color: #E09C3B;
    }

    h2 {
      font-size: 2em;
      color: #E09C3B;
    }
  
    button {
      font-family: Lato;
      background-color: #5BB2B0;
      color: white;
      border: none;
      border-radius: 16px;
      padding: 10px 20px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 10px;
    }

    p {
        color: #E09C3B;
        font-weight: bold;
        text-shadow: 1px  0px 5px black,
               0px  1px 5px black,
               1px  0px 5px black,
               0px 1px 5px black;
    }
  
    button:hover {
      background-color: #2980b9;
    }
  </style>
  

  