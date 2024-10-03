<script>
  export let activity; // Se pasará la actividad como prop
</script>

<div class="activity">
  <p>{activity}</p>
</div>

<style>
  .activity {
    margin: 37px;
    padding: 10px;
    border: 5px solid #5bb2b0;
    border-radius: 16px;
    background-color: #5bb2b0;
    font-size: xx-large; /* Cambiaremos esto con media queries */
    font-weight: bold;
    text-align: center;
    color: white; /* Asegúrate que el texto sea visible */
}

/* Ajustes para pantallas más pequeñas */
@media (max-width: 768px) {
  .activity {
    font-size: large; /* Reduce el tamaño del texto en móviles */
    margin: 20px; /* Ajusta los márgenes si es necesario */
    padding: 8px; /* Reduce el padding para pantallas pequeñas */
  }
}

@media (max-width: 480px) {
  .activity {
    font-size: medium; /* Tamaño aún más pequeño en pantallas muy pequeñas */
    margin: 15px; /* Ajuste adicional para pantallas muy pequeñas */
    padding: 5px; /* Reduce el padding para evitar desbordamientos */
  }
}
</style>
