<?php

if (!isset($_POST["signup"])) { // if page is not submitted to itself echo the form
?>
<html>
<head>
<title>New Account</title>
</head>
<body style='background-color:bisque'>
<!form method="post" action="<?php echo $PHP_SELF;?>">
<form method="post" action="">
<fieldset>
First Name:<input type="text" size="12" maxlength="50" name="Fname"><br />
Last Name:<input type="text" size="12" maxlength="50" name="Lname"><br />
Email:<input type='email' size='12' maxlength='150' name='email'><br>
Password:<input type='text' size='12' maxlength='75' name='password'><br>
Age:<input type='number' size='12' name='age'><br>
<input type="submit" value="submit" name="signup">
</fieldset>
</form>
</html>
<?php
} else {
    $mysqli = mysqli_connect("localhost", "cs360user", "letmein", "testDB");
    $email = filter_input(INPUT_POST, 'email');
    $targetemail =  strtolower($email);               
        $sql = "SELECT * FROM members WHERE email = '".$targetemail."'";
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
                        $Fname = filter_input(INPUT_POST, 'Fname');
                        $Lname = filter_input(INPUT_POST, 'Lname');
                        $pass = filter_input(INPUT_POST, 'password');
                        $age = filter_input(INPUT_POST, 'age');
                        $gender = filter_input(INPUT_POST, 'gender');
                        $sql = 'INSERT INTO members (firstname, lastname, email, password, age, gender, startdate) VALUES ("'.
                                $Fname.'", "'.$Lname.'", "'.$email.'",PASSWORD("'.$pass.'"), '.$age.', "'.$gender.'", CURDATE())';
                        mysqli_query($mysqli, $sql) or die(mysqli_error($mysqli));
                        mkdir("/var/www/html/uploaddir/$email", 0733);
                    echo '<p>Your new account has been created. Thank you for joining us!</p>';
                    echo "<A HREF=userlogin.html'>Go here to login</A>" ."</body>";
                    }
}
?> 