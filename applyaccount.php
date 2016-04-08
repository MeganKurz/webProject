<?php

if (!isset($_POST["signup"])) { // if page is not submitted to itself echo the form
?>
<html>
<head>
<title>New Account</title>
</head>
<body style="background-color: bisque">
<!form method="post" action="<?php echo $PHP_SELF;?>">
<form method="post" action="">
    <fieldset><legend>Enter the information below to create an account</legend>
First Name:<br><input type="text" size="12" maxlength="50" name="Fname"><br />
Last Name:<br><input type="text" size="12" maxlength="50" name="Lname"><br />
Email: <br><input type='email' size='12' maxlength='150' name='email'><br>
Password: <br><input type='text' size='12' maxlength='75' name='password'><br>
Age:  <br><input type='number' size='12' name='age'><br>
<input type="submit" value="submit" name="signup"><br>
</fieldset>
</form>
<img src="pic/CA.jpg" alt="Picture of Canada" title="Canada" width="1300" height="400">
</html>
<?php
} else {
    $mysqli = mysqli_connect("localhost", "cs360user", "letmein", "webProject");
    $email = filter_input(INPUT_POST, 'email');              
        $sql = "SELECT * FROM members WHERE email = '$email'";
        $result = mysqli_query($mysqli, $sql) or die(mysqli_error($mysqli));
                    if (mysqli_num_rows($result)==1 ) {
                        echo "Your email address has already been used! ".
                                "Please use a different email address for a new account"; 
                        ?>
<html>
<head>
<title>New Account</title>
</head>
<body style='background-color:bisque'>
<!form method="post" action="<?php echo $PHP_SELF;?>">
<form method="post" action="">
<fieldset>
First Name:<input type="text" size="12" maxlength="30" name="Fname"><br />
Last Name:<input type="text" size="12" maxlength="30" name="Lname"><br />
Email:<input type='email' size='12' maxlength='50' name='email'><br>
Password:<input type='text' size='12' maxlength='100' name='password'><br>
Age:<input type='number' size='12' name='age'><br>
Gender(male or female):<input type='text' size='12' maxlength='6' name='gender'><br>
<input type="submit" value="submit" name="signup">
</fieldset>
</form>
</html>

                     <?php                       
                    }
                    
                    else {
                        $email = filter_input(INPUT_POST, 'email');
                        $Fname = filter_input(INPUT_POST, 'Fname');
                        $Lname = filter_input(INPUT_POST, 'Lname');
                        $pass = filter_input(INPUT_POST, 'password');
                        $age = filter_input(INPUT_POST, 'age');
                        $sql = "INSERT INTO members VALUES ('$Fname', '$Lname',"
                                . " '$email',PASSWORD('$pass'), '$age')";
                        mysqli_query($mysqli, $sql) or die(mysqli_error($mysqli));
                    echo '<p>Your new account has been created. Thank you for joining us!</p>';
                    echo "<A HREF='userlogin.html'>Go here to login</A>" ."</body>";
                    }
}
?> 