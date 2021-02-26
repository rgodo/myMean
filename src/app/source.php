<?php
$file = file('https://mivacuna.salud.gob.mx/index.php');

foreach($file as $linenum => $line){
    echo "Line #{$linenum} ".htmlspecialchars($line).' ';
}
?>