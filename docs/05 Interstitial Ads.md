Finally, you can create interstitial ads now. These ads are cover the whole screen and usually display above all other HTML content.

To create an interstitial there are to main ways. The first one means you just need to add this a script tag like this
in your code:

```
<script src="https://ads.superawesome.tv/v2/ad.js?placement=30474&test=true&interstitial=true"></script>

```

This will automatically trigger an interstitial on page load - when the script is ready.

The second way is similar to how we add display or video ads in code:

```
<html>
    <head>
        <title> AwesomeAds Example 3: Fullscreen Interstitial Ad </title>
        <script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js"></script>
    </head>
    <body>
        <script type="text/javascript">

            (function() {

                var inter = new AwesomeInterstitial(30474, true);

            })();

        </script>
    </body>
</html>

```

The AwesomeInterstitial constructor takes two parameters, placementId and testMode - true or false.
