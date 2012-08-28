simple-share
============

Easily create customizable social share buttons without loading any external resources. Instead of dragging in iframes, this plugin uses the bare share URL for each social sharing service's API. Plus, rather than using image icons, it uses an icon font generated with [Icomoon](http://keyamoon.com/icomoon), so they're easy to style.

Supported Services
------------------

Currently, simple-share supports sharing via:
* Facebook
* Twitter
* LinkedIn
* Google+
* Pinterest
* Stumbleupon
* Reddit
* Tumblr
* More to come

How it works
------------

simple-share launches each social sharing link in a popup window, similar to the way the services' native buttons work. If desired, it will also add the appropriate icons to these links.

Here's an extremely basic usage of simple-share. Take a look at this HTML:

    <p class="simple-share">
        <a data-service="facebook">facebook</a>
        <a data-service="twitter">twitter</a>
        <a data-service="google-plus">google-plus</a>
        <a data-service="linkedin">linkedin</a>
        <a data-service="stumbleupon">stumbleupon</a>
        <a data-service="reddit">reddit</a>
        <a data-service="tumblr">tumblr</a>
    </p>
    
Any link that you want to work like a share button should have a data-service attribute containing the name of the service. `google-plus` is hyphenated; all others are just one word.

Here's the JS function call:

```javascript
    $(document).ready(function() {
         $('.simple-share a').simpleShare();
    });
```

