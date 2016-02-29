Display Ads usually appear embeded alongside other content in your page HTML source.

To setup display ads, you can follow a few simple steps:

The first thing to do is include the SDK in your HTML header.

```
<head>
	<script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js"></script>
</head>

```

Then, at the end of your BODY tag, or, if you're using jQuery, in the `document.ready()` function, you need to create a `AwesomeDisplay` object.

```
var ad = new AwesomeDisplay(30471).test();
document.getElementById("ad_area").appendChild(ad.element);

```

Notice the AwesomeDisplay object constructor takes just one parameter, the placement Id. Additionally you can specify if you're in test mode or not.

An example webpage with this type of simple ad might look like the following:

```

<html>
    <head>
        <title> AwesomeAds Example 1: Simple Banner </title>
        <script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js"></script>
    </head>
    <body>
        <div id="ad_area" style="position:absolute; top:50px; width:320px; height:50px;"></div>
        <script type="text/javascript">
            (function() {

                var ad = new AwesomeDisplay(30471).test();
                document.getElementById("ad_area").appendChild(ad.element);

            })();
        </script>

    </body>
</html>

```
