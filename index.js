<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/favicon.ico">

    <title>Маска для поля ввода телефона </title>

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <style>
    	form {
    		background-color: #f3f3f3;
    		padding: 20px;
    		margin: 20px;
    	}
    </style>
  </head>

  <body>
    <div class="container">

      <div class="row">
      	<div class="col-sm-4">
      		<form action="mail.php" method="POST">

            <img src="images/logo_line.png"/> 

      			<div class="form-group">
      				<label for="">Введите ваше имя</label>
      				<input type="text" class="form-control" id="" name="user_name" placeholder="Например, Нурсултан">
      			</div>
      		
      			<div class="form-group">
      				<label for="">Введите номер телефона</label>
      				<input type="text" class="form-control" id="phone" name="user_phone" placeholder="+7 (777) 77 77 777">
      			</div>
      		
      			<div class="form-group">
      				<label for="">Введите email</label>
      				<input type="text" class="form-control" id="" name="user_email" placeholder="nursultan@mail.ru">
      			</div>
      		
      			
            <a href="thank-you.html" class="btn btn-primary">Отправить форму</a>
      		</form>
      	</div><!-- .col-sm-4 -->
      </div> <!-- .row -->
      
    </div><!-- /.container -->


    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- IE10 viewport hack for Surface/desktop Windows 8 bug -->
    <script src="http://getbootstrap.com/assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src="js/jquery.maskedinput.min.js"></script>
    <script>
      $(document).ready(function() {
        $("#phone").mask("+7 (777) 77-77-777");
      });
    </script>
  </body>
</html>





	