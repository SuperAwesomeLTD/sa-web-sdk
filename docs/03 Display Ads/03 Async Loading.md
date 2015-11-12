If you want to load the AwesomeAds SDK async and start loading the ad once that's done, you can place the following code in your Body tag:

```
<script class="awesome_ad_script" type="text/javascript" src="https://ads.superawesome.tv/v2/ads.js" async>
	//This script tag will be re-run when AwesomeAds loads
	if(typeof AwesomeDisplay !== "undefined" && window.awesome_ad_script){
		var ad = new AwesomeDisplay(5687).test();
		ad.insert(window.awesome_ad_script);
	}
</script>

```

