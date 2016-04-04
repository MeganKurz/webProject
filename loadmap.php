<?php
header('Content-Type: application/json');
$results = array();
if(($_GET['arguments'][1]=='false')&&($_GET['arguments'][2]=='false')){
    $results['error'] = 'Please select food or drink or both';
}
if(!isset($results['error'])){
    $results['result'] = getData($_GET['arguments'][0],$_GET['arguments'][1],$_GET['arguments'][2]);
}
echo json_encode($results);


function getData($province, $foods, $drinks){
$mysqli = mysqli_connect("localhost", "root", "marbles", "webProject");
$prov = $province;
$food = $foods;
$drink = $drinks;
if($food =="true" && $drink =="true"){
 $sql = "SELECT food.item, liquids.item FROM food INNER JOIN liquids "
         . "ON food.prov=liquids.prov WHERE food.prov=$prov"; 
}
else if($food == "true" && $drink == "false"){
    $sql = "SELECT item FROM food WHERE prov = $prov";
}
else{
    $sql = "SELECT item FROM liquids WHERE prov = $prov";
}
$sqlResults = mysqli_query($mysqli, $sql) or die(mysqli_error($mysqli));
return $sqlResults;
}