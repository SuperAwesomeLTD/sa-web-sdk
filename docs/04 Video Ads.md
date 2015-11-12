Video ads are loaded in much the same fashion. You'll first need to load the AwesomeAds SDK in your webpage head tag:

```
<head>
	<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js?video=true"></script>
</head>

```

Notice the `video=true` parameter when loading the script.

Then, in the body tag, inside a script tag or in your document.ready() function, if you're using jQuery, you'll need to create an AwesomeVideo object, much the same way you created an AwesomeDisplay object.

```
var ad = new AwesomeVideo(5740).write();

```

This will create the object, start loading it and write the output to the window.

The AwesomeVideo object has two callbacks you might find useful:

```
ad.finished(function (){
	console.log('This function gets called when the movie has ended playing');
});

ad.setOnEmpty(function() {
	console.log('This function gets called when the movie is empty / there is no valid movie to show');
});

```

A full example webpage with all these would look like the following:

```
<html>
	<head>
		<title>
			AwesomeAds Example 4: Pre Roll
		</title>

		<!--
		- The first thing to do is to load the AwesomeAds SDK in the header of the HTML file
		- an additional step is to specify the video=true parameter
		-->
		<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js?video=true"></script>
	</head>
	<body>

		<!--
		- Inside the body of the HTML, create a new AwesomeVideo object, with a single parameter, the placement Id
		- then write the new object to the window
		- @callbacks:
			- you can assign a "finished" callback to execute an action when the pre-roll finishes execution
			- you can also assign an "onEmpty" callback in case the data received from the server is empty
		-->
		<script type="text/javascript">

			(function() {
			   
			    var ad = new AwesomeVideo(24532).write();
				ad.finished(function (){
					console.log('End of movie');
				});
				ad.setOnEmpty(function() {
					console.log('Empty movie');
				});

			})();

		</script>

	</body>
</html>

```