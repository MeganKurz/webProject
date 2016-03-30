<?php

//check for required fields from the form
if (!filter_input(INPUT_POST, 'email')
        || !filter_input(INPUT_POST, 'password')){
	header("Location: userlogin.html");
	exit;
}
else{
//connect to server and select database
$mysqli = mysqli_connect("localhost", "root", "marbles", "webProject");

//create and issue the query

$targetemail = filter_input(INPUT_POST, 'email');
$targetpasswd = filter_input(INPUT_POST, 'password');
$sql = "SELECT fname, lname FROM members WHERE email = '".$targetemail.
        "' AND password = PASSWORD('".$targetpasswd."')";

$result = mysqli_query($mysqli, $sql) or die(mysqli_error($mysqli));

//get the number of rows in the result set; should be 1 if a match
if (mysqli_num_rows($result) == 1) {
 

	//if authorized, get the values of f_name l_name
	while ($info = mysqli_fetch_array($result)) {
		$f_name = stripslashes($info['fname']);
		$l_name = stripslashes($info['lname']);
	}

	//set authorization cookie
	setcookie("auth", "1", time()+60*30, "/", "", 0);

	//create display string
	$display_block = "<p><h1>Welcome ".$f_name." ".$l_name."!</h1></p>";
} else {
	//redirect back to login form if not authorized
	header("Location: userlogin.html");
	exit;
}
}
             ?> 
<html> 
<head> 
<title></title> 
</head>
<body>
    <?php echo "$display_block"; ?>
    
</body> 
</html> 

