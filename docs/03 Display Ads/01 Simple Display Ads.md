The simplest way to load a display ad (banner, floor placement, etc) in your webpage is to load an AwesomeAds script tag in your HTML body.

```
<script type="text/javascript" src="https://ads.superawesome.tv/v2/ad.js?placement=5687&test=true"></script>

```

Notice the two parameters passed:
 * `placement=5687` - which specifies one of the test placements defined earlier. It's ok to replace 5687 with whatever placement you've defined in the Dashboard
 * `test=true` - which specifies that this ad should be loaded in test mode. Again, when switching to your own placements, you'll need to delete this parameter

An example webpage with this type of simple ad might look like the following:

```

<html>
	<head>
		<title>
			AwesomeAds Example 1: Simple Banner
		</title>
	</head>
	<body>
		<!--
		- Invoke this script tag to make the simplest call to get a new ad
		- @param: placement - the ID of the placement for which you want to load an ad
		- @param: test - (can be true or false); specifies if the ad will be loaded in test mode or not 
		-->
		<script type="text/javascript" src="https://ads.superawesome.tv/v2/ad.js?placement=5687&test=true"></script>
	</body>
</html>

```