If you are starting or revealing your content upon receiving a callback from ```SAPreRoll.finished()```, then you may want to detect whether ```SAPreRoll``` was loaded successfully and if it was not, immediately show your content.

In the example to the right, the ```div``` with id ```my_content``` is initially hidden using ```style="display:none;"```.

The ```show_content``` function changes the ```display``` css property to ```block``` to reveal the content.

If ```SAPreRoll``` is undefined (the SDK failed to load) then ```show_content``` is called immediately, showing the content.

If ```SAPreRoll``` was loaded successfully then the pre-roll element is created and show_content is passed as the parameter to ```ad.finished()``` and will be called after the pre-roll has ended.

To test the case where the SDK fails to load, use an invalid URL for the SDK script tag.