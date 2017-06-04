<html>
<body>

<?php

echo "this is working";


  $database = pg_connect("host=localhost port=5432 dbname=tvatt user=niclas password=endammr8");

  if (!$database) {
      echo "failed to find the database";
      exit;
  } else {
   echo "<br>found the database!";
  }

  $besk = $_POST["email"];

  $result = pg_exec($database, "select namn " . "from stuga " . "where beskrivning='$besk'");

  if ($result) {
      if (pg_NumRows($result) == 0) {
          echo "didn't find you";
          exit;
      } else {
          echo "<br>Welcome as student ";
          for ($i = 0; $i < pg_NumRows($result); $i++) {
              echo pg_Result($result, $i, 0);
              echo "<br>";
          }
      }
  } else {
    echo "<br>no results";
  }

?>


</body>
</html>
