An additional way of adding video ads, which might suit your needs better, is by using the AwesomeAds video wrapper, like so:

```
<html>
    <head>
        <title> AwesomeAds Example 3: Video Ad Wrapper </title>
    </head>
    <body>
    	<div id="mov">
    		<!-- place your game or video content here -->
    	</div>
        <script type="text/javascript" 
			src="http://ads.superawesome.tv/v2/adwrapper.js?placement=5740"
			data-test-enabled="true"
			data-post-ad-container="mov">
    	</script>
    </body>
</html>

``` 

The `adwrapper.js` code will look at the div element in `data-post-ad-container`, hide it, display the video placement, and at the end return the content to its original display settings.

This is a shorter way of dealing with video ads. You won't be able to controll with callbacks what happens in different scenarios (`onFinish`, `onEmpty`, `onError`), but you'll be guaranteed that when the video ad ends your own content will begin to load. 
And if the ad is empty or an error occurs along the way, you'll also be guaranteed that your content will display. 