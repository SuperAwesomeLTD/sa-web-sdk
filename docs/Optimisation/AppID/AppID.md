The SuperAwesome Web SDK tries to minimize the number of requests made from the user's browser. One way this is achieved is by specifying ```app_id=__APP_ID__``` in the ```ads.js``` script tag address. This allows the SuperAwesome Web SDK to pre-fetch the ad placement information for your app, thus reducing the time taken to load placements for the specified app id.

Specifying the app id also acts as the default app id for placements, allowing you to omit the ```app_id``` parameter from the SADisplay and SAPreRoll constructors.

If you do not specify an app_id, the first placement for each unique app id will make the request.