Video ads are loaded in much the same fashion. You'll first need to load the AwesomeAds SDK in your webpage head tag:

```
<head>
	<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js?video=true"></script>
</head>

```

Notice the `video=true` parameter when loading the script.

Then, in the body tag, inside a script tag or in your document.ready() function, if you're using jQuery, you'll need to create an AwesomeVideo object, much the same way you created an AwesomeDisplay object.

```
var vad = new AwesomeVideo(5740, true).write();

```

This will create the object, start loading it and write the output to the window.
The AwesomeVideo object constructor has two parameters, the placement id and whether to load the ad in test mode or not;
Also, The AwesomeVideo object has two callbacks you might find useful:

```
vad.finished(function(){
	console.log('finished');
})
vad.setOnEmpty(function(){
	console.log('empty');
});

```

Finally, you can now display a video ad inside a `div` or any other type of HTML tag.
You'll need to add a new div to your DOM:

```
<div id="movie" width="320px" height="240px"></div>

```

and then change the AwesomeVideo constructor object as follows:

```
var mov = document.getElementById("movie");
var vad = new AwesomeVideo(5740, true, mov).write();

```

A full example webpage with all these would look like the following:

```
<html>
	<head>
		<title> AwesomeAds Example 2: Pre Roll </title>
		<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js?video=true"></script>
	</head>
	<body>
		<div id="movie" width="320px" height="240px"></div>
		<script type="text/javascript">

			(function() {
			   
			    var mov = document.getElementById("movie");
			    var ad = new AwesomeVideo(5740, true, mov).write();
				vad.finished(function(){
					console.log('finished');
				})
				vad.setOnEmpty(function(){
					console.log('empty');
				});

			})();

		</script>
	</body>
</html>

```