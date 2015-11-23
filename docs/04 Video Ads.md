Video ads are loaded in much the same fashion. You'll first need to load the AwesomeAds SDK in your webpage head tag:

```
<head>
	<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js?video=true"></script>
</head>

```

Notice the `video=true` parameter when loading the script.

Then, in the body tag, inside a script tag or in your document.ready() function, if you're using jQuery, you'll need to create an AwesomeVideo object, much the same way you created an AwesomeDisplay object.

```
var mov = document.getElementById("mov");
var ad = new AwesomeVideo(5740, true, mov).write();

```

This will create the object, start loading it and write the output to the window.
The AwesomeVideo object constructor has three parameters:
 * The placement id 
 * Is the ad in test mode or not
 * The DOM element to write the video ad to 

Also, The AwesomeVideo object has three callbacks you might find useful:

```
vad.onFinished(function(){
	console.log('finished');
})
vad.onEmpty(function(){
	console.log('empty');
});
vad.onError(function(){
    console.log('Error'); 
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
        <div id="movie" style="width:320px;height:240px;"></div>
        <script type="text/javascript">

            (function() {

                var mov = document.getElementById("movie");
                var vad = new AwesomeVideo(5740, true, mov).write();
                vad.onFinished(function(){
                    console.log('finished');
                })
                vad.onEmpty(function(){
                    console.log('empty');
                });
                vad.onError(function(){
                    console.log('error');
                });

            })();

        </script>
    </body>
</html>

```