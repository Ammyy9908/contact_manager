`git clone https://github.com/Ammyy9908/contact_manager.git`<br/>
`cd /contact_manager`<br/>
`npm i`<br/>
`npm start`<br/>

~Pages
1.Home
+--> we can list out all contacts related to logined user
+--user can delete their contact by hover on list and click on bin/delete button
+--user can add a contact by clicking plus button
2.Auth
+-- Dynamic in nature based on routes
+--based on authention type the page change from login to register or vice versa

~Auth Flow >> In this application the auth is done by using jwt in server side and to save jwt
token the Cookies used which save AUTH_TOKEN field as the token we recive from server during login.

~Tracking is user logged in or not
When we refershing or redirecting to home page we just checking is AUTH_TOKEN is there
inside the cookies if not redirect the user on /auth/login
