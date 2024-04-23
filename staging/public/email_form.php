<?php
if(isset($_POST['submit'])){
    $workspace=$_POST['office'];
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $location=$_POST['location'];

    $to="keerthanaravichandran96@gmail.com";
    $subject="Workspace Required";
    $message="Name: ".$name."\n"."Email: ".$email."\n"."Phone: ".$phone."\n"."Interest Workspace: ".$workspace."\n"."Location: ".$location;
    $headers="From: ".$email;
    $headers = "Content-type: text/html; charset=iso-8859-1\r\n";
    'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message, $headers)){
        // echo "Thank you".$name." Successfully your details submited"."\n"."We will contact you shortly!!";
        echo json_encode(['success'=>true]);
    }else{
        // echo"Something went wrong!! Please try again";
        echo json_encode(['success'=>false]);
    }
    exit;
}
?>