<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<title>Thank you for getting in touch.</title>
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/roboto.css">
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
		<script src="js/jquery.min.js" type="text/javascript"></script>
		<script src="js/typed.min.js" type="text/javascript"></script>
		<style>
			.thankyou
			{
				font-size:30px;
				
			}
			.progress-image
			{
				position:fixed;
				top:0;
				z-index:-1;
			}
			#typed-strings
			{
				position:relative;
				z-index:999999;
				
			}
			#typed
			{
				font-weight:400;
				font-size:20px;
			}
			.home-fixed
			{
				position:fixed;
				z-index:999;
				left:20px;
				top:20px;
			}
		</style>
		<script>
			document.addEventListener('DOMContentLoaded', function() {
			  var typed = new Typed('#typed', {
				stringsElement: '#typed-strings',
				typeSpeed: 25,
				backSpeed: 30,
				startDelay: 1000,
				loop: false,
				loopCount: Infinity
			  });
			});
			

		</script>
	</head>
	<body>
		<div class="container text-center">
			<br/>
			<br/>
			<div id="typed-strings">
			  <p>
				<label>Your message has been sent!</label><br/> I will response as soon as possible.
			  </p>
			  <label class="thankyou"><strong>Thank you and have a nice day!</strong></label>
			  
			</div>
			
			<span id="typed" style="white-space:pre;"></span>
			
			
			<div class="home-fixed">
				<a class="btn btn-contact"> <i class="fa fa-arrow-left"></i> Back to home</a>
			</div>
		</div>
		<div class="progress-image">
			<img src="images/ksm.png" class="img-responsive">
		</div>
	</body>
</html>