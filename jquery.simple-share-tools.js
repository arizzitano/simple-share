(function($) {
    $.fn.simpleShare = function(args) {        
        var svcData = {
            'facebook': {
                        codes: ['&#x21;', '&#x22;', '&#x23;'],
                        base: 'http://www.facebook.com/share.php?', 
                        urlkey: 'u='
                        },
            'twitter': {
                        codes: ['&#x24;', '&#x25;', '&#x26;'],
                        base: 'http://twitter.com/intent/tweet?', 
                        urlkey: 'url='
                        },
            'linkedin': {
                        codes: ['&#x27;'],
                        base: 'http://www.linkedin.com/shareArticle?', 
                        urlkey: 'url='
                        },
            'google-plus': {
                        codes: ['&#x2e;', '&#x2f;', '&#x30;'],
                        base: 'https://plus.google.com/share?', 
                        urlkey: 'url='
                        },
            'reddit':   {
                        codes: [],
                        base: 'http://www.reddit.com/submit?',
                        urlkey: 'url='
                        },
            'tumblr':   {
                        codes: [],
                        base: 'http://www.tumblr.com/share?v=3&',
                        urlkey: 'u=',
                        titlekey: 't='
                        },
            'stumbleupon': {
                        codes: [],
                        base: 'http://www.stumbleupon.com/submit?',
                        urlkey: 'url=',
                        titlekey: 'title='
                        }
        },
        settings = $.extend({
            'iconfill': true,
            'color':    false,
            'shape':    0
        }, args),
        url = escape(window.location.href),
        $sslinks = $(this),
        popup = function(e) {
            var nw = window.open(e.data.url, e.data.title,'height=400,width=600');
            if (window.focus) {
                nw.focus()
            }
            return false;
        },
        iconNum = '',
        service, s, href;
        
        if (settings.shape == 'circle') {
            iconNum = '-3';
        } else if (settings.shape == 'square') {
            iconNum = '-2';
        }
        
        $sslinks.each(function() {
            service = $(this).data('service');
            s = svcData[service];
            if (s !== undefined) {
                href = s.base + s.urlkey + url;
                if (settings.iconfill) {
                    $(this).addClass('icon-'+service+iconNum);
                    if (settings.color) {
                        $(this).addClass('sst-color');
                    }
                }
                $(this).attr('href', href);
                $(this).bind('click', {'url':href, 'title':'Share on '+service}, popup);
            }
        });
        
        // icomoon's code to support ie6 & 7
        if ($.browser.msie && parseFloat($.browser.version) < 8) {
            window.onload=function(){function a(a,b){var c=a.innerHTML;a.innerHTML="<span style=\"font-family: 'simple-social-icons'\">"+b+"</span>"+c}var b={"icon-facebook":"&#x21;","icon-facebook-2":"&#x22;","icon-facebook-3":"&#x23;","icon-twitter":"&#x24;","icon-twitter-2":"&#x25;","icon-twitter-3":"&#x26;","icon-linkedin":"&#x27;","icon-youtube":"&#x28;","icon-youtube-2":"&#x29;","icon-stumbleupon":"&#x2a;","icon-stumbleupon-2":"&#x2b;","icon-pinterest":"&#x2c;","icon-pinterest-2":"&#x2d;","icon-google-plus":"&#x2e;","icon-google-plus-2":"&#x2f;","icon-gplus":"&#x30;","icon-github":"&#x31;","icon-github-2":"&#x32;","icon-github-3":"&#x33;","icon-github-4":"&#x34;","icon-tumblr":"&#x35;","icon-tumblr-2":"&#x36;","icon-yahoo":"&#x37;","icon-yahoo-2":"&#x38;","icon-amazon":"&#x39;","icon-amazon-2":"&#x3a;","icon-blogger":"&#x3b;","icon-blogger-2":"&#x3c;","icon-wordpress":"&#x3d;","icon-wordpress-2":"&#x3e;","icon-dribbble":"&#x3f;","icon-dribbble-2":"&#x40;","icon-dribbble-3":"&#x41;","icon-picassa":"&#x42;","icon-picassa-2":"&#x43;","icon-facebook-4":"&#x44;","icon-feed":"&#x45;","icon-feed-2":"&#x46;","icon-feed-3":"&#x47;","icon-vimeo":"&#x48;","icon-vimeo-2":"&#x49;","icon-flickr":"&#x4a;","icon-flickr-2":"&#x4b;","icon-flickr-3":"&#x4c;","icon-github-5":"&#x4d;","icon-github-6":"&#x4e;","icon-delicious":"&#x4f;","icon-lastfm":"&#x50;","icon-lastfm-2":"&#x51;","icon-skype":"&#x52;","icon-reddit":"&#x53;","icon-forrst":"&#x54;","icon-deviantart":"&#x55;","icon-forrst-2":"&#x56;","icon-deviantart-2":"&#x57;","icon-git":"&#x58;","icon-github-7":"&#x59;","icon-soundcloud":"&#x5a;","icon-soundcloud-2":"&#x5b;","icon-google-plus-3":"&#x5d;","icon-share":"&#x5e;","icon-mail":"&#x5c;","icon-mail-2":"&#x5f;"},c=document.getElementsByTagName("*"),d,e,f,g,h;for(d=0;d<c.length;d+=1){h=c[d];e=h.getAttribute("data-icon");if(e){a(h,e)}g=h.className;g=g.match(/icon-[^\s'"]+/);if(g){a(h,b[g[0]])}}}
        }
    }
})(jQuery);