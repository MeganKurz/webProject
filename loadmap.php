<?php
header('Content-Type: application/json');
$results = array();
if(($_GET['arguements'][1]=='false')&&($_GET['arguements'][2]=='false')){
    $results['error'] = 'Please select food or drink or both';
}
if(!isset($results['error'])){
    $results['suc'] = getData($_GET['arguements'][0],$_GET['arguements'][1],$_GET['arguements'][2]);
}
echo json_encode($results);

function getData($prov, $food, $drink){
    $mysqli = mysqli_connect("localhost", "cs360user", "letmein", "webProject");
    if($food =="true" && $drink =="true"){
        $sql = "SELECT food.item, liquids.name FROM food INNER JOIN liquids ".
            "ON food.prov=liquids.prov WHERE food.prov='$prov'";
    }
    else if($food == "true" && $drink == "false"){
        $sql = "SELECT item FROM food WHERE prov = '$prov'";
    }
    else{
        $sql = "SELECT name FROM liquids WHERE prov = '$prov'";
    }
    $result = mysqli_query($mysqli,$sql) or die(mysqli_error($mysqli));
    $data = array();
    while ($info = mysqli_fetch_array($result)) {
        if($info['item']){
            $data[] = stripslashes($info['item']);
        }
        if($drink == "true"){
            $data[] = stripslashes($info['name']);
        }
    }
    return $data;
} 