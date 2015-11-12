While the previous example is very simple, it does have the disadvantage that you don't have any control over where in the webpage the placement is displayed.
In order to have more control, you'll need to laod the ad in two steps.

First, load the AwesomeAds SDK in your HTML file header:

```
<head>
	<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js"></script>
</head>

```

Notice there are no more parameters. You just load the SDK from the `https://ads.superawesome.tv/v2/ads.js` URL.
You'll then need a parent HTML element to place your ad in. This might be a `Div` tag, a table row or any HTML element.

```
<body>
	<div id="ad_area" style="position:absolute; top:50px; width:320px; height:50px;"></div>
</body>

```

Then, at the end of your BODY tag, or, if you're using jQuery, in the `document.ready()` function, you need to create a `AwesomeDisplay` object.

```
var ad = new AwesomeDisplay(5687).test();
document.getElementById("ad_area").appendChild(ad.element);

```

Notice the AwesomeDisplay object constructor takes just one parameter, the placement Id. Additionally you can specify if you're in test mode or not. 

An example webpage with this type of simple ad might look like the following:

```

<html>
	<head>
		<title>
			AwesomeAds Example 2: Simple Banner
		</title>

		<!--
		- First load in the pages' hader the AwesomeAds SDK, as a Javascript file 
		-->
		<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js"></script>
	</head>
	<body>

		<!--
		- In the HTML body define a div with ID = "ad_area"
		- aditionally you may want to specify width and height 
		-->
		<div id="ad_area" style="position:absolute; top:50px; width:320px; height:50px;"></div>

		<!--
		- Finally, either at the end of the <BODY> tag or on jQuerys' document.ready() function
		you need to load the ad
		- @step1: Create an AwesomeDisplay object name ad; 
			- specify the placement Id as an integer value
			- specify whether the ad is in test mode or not
		- @step2: Add the loaded ad content to the <DIV> element we defined earlier, as a child
		-->
		<script type="text/javascript">
			(function() {
			   
				var ad = new AwesomeDisplay(5687).test();
				document.getElementById("ad_area").appendChild(ad.element);
			    
			})();
		</script>

	</body>
</html>

```
