Finally, you can create interstitial ads now. These ads are cover the whole screen and usually display above all other HTML content.

To create an interstitial ad you need to follow roughly the same steps as before:

```
<html>
    <head>
        <title> AwesomeAds Example 3: Fullscreen Interstitial Ad </title>
        <script type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js"></script>
    </head>
    <body>
        <script type="text/javascript">

            (function() {

                var inter = new AwesomeInterstitial(5692, true);
                inter.onClose(function (){
                    console.log('close callback');
                });

            })();

        </script>
    </body>
</html>

```

The AwesomeInterstitialConstructor takes two parameters, placementId and testMode - true or false.