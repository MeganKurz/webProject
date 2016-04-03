<?php
$mysqli = mysqli_connect("localhost", "root", "marbles", "webProject");
$prov = $_GET['province'];
$food = $_GET['useFood'];
$drink = $_GET['useDrink'];
$centr = $_GET['loc'];
if($food =="true" && $drink =="true"){
 $sql = "SELECT food.item, liquids.item FROM food INNER JOIN liquids "
         . "ON food.prov=liquids.prov WHERE food.prov=$prov"; 
}
else if($food == "true" && $drink == "false"){
    $sql = "SELECT item FROM food WHERE prov = $prov";
}
else if($food == "false" && $drink == "true"){
    $sql = "SELECT item FROM liquids WHERE prov = $prov";
}
else{
    ?> <script> window.alert("Please check food or drink or both");
        </script>
        <?php
        header("Location:welcomePage.html");
    
}
$string = "<p>";
$results = mysqli_query($mysqli, $sql) or die(mysqli_error($mysqli));
while ($items = mysqli_fetch_array($results)) {
	if(!$string.contains($items["food.item"])){
            $string += " ".$items['food.item'];
        }
        if(!$string.contains($items["liquids.item"])){
            $string += " ".$items['liquids.item'];
        }
        if(!$string.contains($items["item"])){
            $string += " ".$items['item'];
        }
	}
?>
        <script>createPopup(<?php $string ?>,<?php $centr ?>);</script>
