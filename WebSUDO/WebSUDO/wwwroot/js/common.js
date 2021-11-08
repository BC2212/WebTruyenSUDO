var _titleSllipsis = null;
var _loadFbSDk = null;
jQuery(document).ready(function() {
    try {
        jQuery('#mega-menu-1').dcMegaMenu({
            speed: 'fast',
            effect: 'slide'
        });
    } catch (err) {
        console.error(err.message);
    }
    try {
        jQuery('.last-film-box').each(function() {
            var currentId = jQuery(this).attr('id');
            var categoryId = jQuery(this).attr('data-categoryid');
            if (typeof currentId == 'string' && typeof categoryId == 'string') {
                jQuery('#' + currentId).carouFredSel({
                    auto: false,
                    prev: '#prev' + categoryId,
                    next: '#next' + categoryId
                });
            }
        });
        if (typeof topSliderInit == "undefined" && (typeof FX_DEVICE_SMALL == "undefined" || !FX_DEVICE_SMALL || typeof FX_DEVICE_TOUTCH == "undefined" || !FX_DEVICE_TOUTCH)) {
            jQuery('#movie-carousel-top').carouFredSel({
                auto: false,
                prev: '#prevTop',
                next: '#nextTop',
            });
            jQuery('#movie-carousel-kinhdien').carouFredSel({
                auto: true,
                prev: '#prevKd',
                next: '#nextKd',
                scroll: {
                    items: 1,
                    duration: 1000
                },
            });
            window.topSliderInit = true;
            eval('console.log("topSliderInit")');
        }
    } catch (err) {
        console.error(err.message);
    }
    try {
        jQuery("#tabs-movie").tabs();
    } catch (err) {
        console.error(err.message);
    }
    _titleSllipsis = function() {
        if (typeof window.localStorage != 'undefined') return true;
        jQuery(".movie-title-1, .movie-title-2, .news-title-1 a, .name-en a").ellipsis();
    }
    jQuery(window).load(function() {
        setTimeout("_titleSllipsis()", 1000);
    });
    jQuery('body').append('<div id="fb-root"></div>');
    _loadFbSDk = function() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v2.10&appId=231677770831046";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    jQuery(window).load(function() {
        setTimeout("_loadFbSDk()", 100);
    });
});