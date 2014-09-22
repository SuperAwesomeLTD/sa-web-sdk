The examples above show how to add a pre-roll element to a page and have it overlay other content in the same container. If you would like to receive a callback when the pre-roll has finished, use:
```
ad.finished(function(play_result){
	
})
```


The ```play_result``` parameter in the callback is an integer representing the result of the pre-roll play attempt. The possible values are:
```
0 - Nothing was shown
1 - Pre-roll played successfully
2 - A display banner was shown (only possible if the placement was configured to fallback to display)
```