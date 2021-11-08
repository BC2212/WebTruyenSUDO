var filmInfo = {};
jQuery(document).ready(function() {
    if (jQuery('#trailer-player').length > 0) {
        if (typeof filmInfo.trailerUrl == 'string') {
            var trailer = new Trailer(filmInfo.trailerUrl);
            trailer.setup("trailer-player");
            jQuery(window).load(function() {
                fx.scrollTo('.block-wrapper.page-single');
            });
        }
    }
    jQuery('.btn-film-trailer').click(function() {
        var wWidth = jQuery(window).width();
        var wHeight = jQuery(window).height();
        if (wWidth < 1000 || wHeight < 450)
            return true;
        var videoUrl = jQuery(this).attr('data-videourl');
        if (typeof videoUrl != 'string')
            return true;
        var trailer = new TrailerPopup(videoUrl, 'Trailer ' + filmInfo.title, filmInfo.fullUrl);
        trailer.setOptionCode('<script type="text/javascript" src="http://media.adnetwork.vn/js/jwplayer.js"></script>\
						<script type="text/javascript">\
						/* load placement for account: youthclass, site: http://phimmoi.net, size: 970x90 - web, zone: video */\
						var _abd = _abd || [];\
						_abd.push(["1385700597","Video","1452850064","trailer-wrapper","720","405"]);\
						</script>\
						<script src="http://media.adnetwork.vn/js/adnetwork.js" type="text/javascript"></script>\
						<noscript><a href="http://track.adnetwork.vn/247/adServerNs/zid_1452850064/wid_1385700597/" target="_blank"><img src="http://delivery.adnetwork.vn/247/noscript/zid_1452850064/wid_1385700597/" /></a></noscript>');
        trailer.setCallback(function() {
            if (typeof removeBalloon == "function") {
                removeBalloon();
            }
        });
        if (trailer.show())
            return false;
        return true;
    });
    jQuery('.block-movie-content > .content img').each(function() {
        var parentElemCenter = jQuery(this).parent().css('text-align');
        if (parentElemCenter != 'center') {
            jQuery(this).wrap('<div style="text-align: center"></div>');
        }
    });
    if (jQuery('#film-content-wrapper > #film-content').length > 0) {
        var contentElement = jQuery('#film-content-wrapper > #film-content')[0];
        jQuery(contentElement).css('max-height', '800px');
        jQuery(window).load(function() {
            if (typeof contentElement.scrollHeight == "number" && contentElement.scrollHeight > 0) {
                window._restoreContentHeight = currentContentHeight = contentElement.scrollHeight;
                window._flagContentHeight = 'small';
                if (currentContentHeight > 800) {
                    window._restoreContentHeight = currentContentHeight;
                    window._flagContentHeight = 'small';
                    jQuery('#film-content-wrapper').append('<button class="expand-content" id="btn-expand-content">Hiển thị thêm</button>');
                    jQuery('#btn-expand-content').click(function() {
                        if (window._flagContentHeight == 'small') {
                            if (typeof contentElement.scrollHeight == "number" && contentElement.scrollHeight > 0)
                                window._restoreContentHeight = contentElement.scrollHeight;
                            jQuery(contentElement).height(window._restoreContentHeight + 'px');
                            window._flagContentHeight = 'large';
                            jQuery('#btn-expand-content').text('Thu gọn nội dung');
                        } else {
                            fx.scrollTo('#film-content-wrapper', 300);
                            jQuery(contentElement).height('800px');
                            window._flagContentHeight = 'small';
                            jQuery('#btn-expand-content').text('Hiển thị thêm');
                        }
                    });
                    jQuery(contentElement).css({
                        'height': '800px',
                        'max-height': 'none'
                    });
                }
            }
        });
    }
});