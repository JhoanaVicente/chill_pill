<!-- src/components/Activity.svelte -->
<script>
    export let activity; // Se pasará la actividad como prop
  </script>
  
  <style>
    .activity {
      margin: 10px;
      padding: 10px;
      border: 1px solid #3498db;
      border-radius: 5px;
      background-color: #ecf0f1;
    }
  </style>
  
  <div class="activity">
    <p>{activity}</p>
  </div>
  