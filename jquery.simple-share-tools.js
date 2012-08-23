(function($) {
    $.fn.simpleShare = function(sel) {
        var urls = {
                        'facebook': ['http://www.facebook.com/share.php?', 'u='],
                        'twitter': ['http://twitter.com/intent/tweet?', 'url='],
                        'linkedin': ['http://www.linkedin.com/shareArticle?', 'url='],
                        'googleplus': ['https://plus.google.com/share?', 'url=']
                    },
            url = escape(window.location.href),
            selector = sel || '.simple-share a',
            $sslinks = $(this),
            popup = function(e) {
                var nw = window.open(e.data.url, e.data.title,'height=400,width=600');
                if (window.focus) {
                    nw.focus()
                }
                return false;
            },
            service, s, href;
        
        $sslinks.each(function() {
            service = $(this).data('service');
            s = urls[service];
            if (s !== undefined) {
                href = s[0] + s[1] + url;
                $(this).attr('href', href);
                $(this).bind('click', {'url':href, 'title':'Share on '+service}, popup)
            }
        });
    }
})(jQuery);