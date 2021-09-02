<html>
<head>
  <!--meta tags-->
  <meta charset="utf-8">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

    <style media="screen">
      .my-element {
        height: 100vh; /* Fallback for browsers that do not support Custom Properties */
        height: calc(var(--vh, 1vh) * 100);
      }
    </style>

    <script type="text/javascript">

    function initElement()
{
var p = document.getElementById("TeamA");
p.onclick = showAlert;
};

function showAlert()
{
alert("Evènement de click détecté");
}
    </script>
</head>

<body style="background-color : #455a64 ; position : relative" class="toast-container" onload="initElement();" >

  <nav style="background-color : #f4511e">
		<div class="nav-wrapper">
			<a href="#" class="brand-logo center">Les Puceaux passent le BAC</a>
		</div>
	</nav>

<?php

  function writeFile($value='')
  {
    $filename =  file_get_contents("database.txt");

  }
 ?>


<br>
<br>
<br>
<br>
<br>

  <div class="container valign-wrapper">
    <div class="row center">
      <a class="waves-effect waves-light btn-large purple darken-2" id="TeamA">Team A</a>
    </div>

    <br>
    <br>
    <br>
    <div class="row center">
      <a class="waves-effect waves-light btn-large light-blue darken-4" id="TeamB">Team B</a>
    </div>
  </div>

</body>
</html>
