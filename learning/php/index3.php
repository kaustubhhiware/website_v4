<!doctype html>
<html>
<head>
<title>Webpage 5.3</title>

<meta charset="utf-8" />
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<style type="text/css">

</style>

</head>

<body>
<div>

  <?php

    $names=array("Rahul","Raj","Rohan");
    #Kya lagta hai tu uska ? FAN
    if ($_POST("submit"))
    {
      if($_POST["name"])
      {
        $jabra=false;
        #if form submitted
        foreach ($names as $name) {

          if ($_POST["name"]==$name) {
            echo "Kuch kuch hota hai $name, tum wahi samjhoge";
            $jabra=true;
          }
        }

        if(!$jabra){
          echo "Are you new here ,".$_POST['name'];
        }

      }
    }


  ?>

  <form method="post">
  <!-- why post ? else password displayed in url-->

    <label for="name">Name</label>
    <input name="name" type="text" />

    <input type="submit" name="submit" value="Submit your name" />


  </form>

<!--

  <php
    print_r($_GET);
    //this works when domain name followed by
    // ?name=LENAme&surname=LESurname
  ?>

-->

</div>
</body>
</html>
