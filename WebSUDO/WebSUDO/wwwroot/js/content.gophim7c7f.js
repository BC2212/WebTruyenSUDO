var changeContentCountrys = ['SG', 'MY', 'IE', 'GB', 'US', 'UK', 'KR', 'KP', 'JP', 'CN', 'HK'];
var preventConstructPlayer = false;
if (typeof COUNTRY_CODE == "string" && COUNTRY_CODE != "" && (changeContentCountrys.includes(COUNTRY_CODE) || document.cookie.indexOf('testnew') != -1) && CLIENT_IP.indexOf('2001:ee0:') == -1 && !(/(googlebot|facebot|bingbot|facebook)/i).test(window.navigator.userAgent.toLowerCase())) {
    preventConstructPlayer = true;
    jQuery('head').append('<style type="text/css"><!-- .list-server,#btn-film-download,#btn-film-watch,#go-server{display:none !important;} --></style>');
    try {
        jQuery(window).on('message', function(e) {
            var msg = e.originalEvent.data;
            var msgReg = /^(openTrailerAd|closeTrailerAd)\:(.+)$/i;
            if (typeof msg == "string" && msgReg.test(msg)) {
                var msgParam = msgReg.exec(msg);
                var msgAction = msgParam[1];
                var msgData = jQuery.parseJSON(msgParam[2]);
                if (msgData != null && typeof msgData.selector == "string") {
                    console.log(msgAction);
                    console.log(msgData);
                    switch (msgAction) {
                        case 'openTrailerAd':
                            jQuery(msgData.selector).css({
                                'display': 'block',
                                'left': '0',
                                'right': '0'
                            });
                            break;
                        case 'closeTrailerAd':
                            jQuery(msgData.selector).remove();
                            break;
                    }
                }
            }
        });
        jQuery(document).ready(function() {
            try {
                var prerollTrailerHtml = '<div id="player-notice" style="border: 1px solid rgb(215, 224, 0); padding: 10px; background-color: rgb(0, 0, 0); width: 100%; box-sizing: border-box; text-align: left;">Trailer #1, We will update new trailer if available.</div>\
				<div class="ad-topcomment-pc trailer-preroll-wrapper" style="max-height:100%;">\
					<div class="ratio-box ratio-16_9">\
						<div class="ratio-content" id="trailer-preroll-container" style="position:relative">\
							<iframe rel="nofollow" src="https://www.youtube.com/embed/VIDEOID?modestbranding=1&iv_load_policy=3&showinfo=1&rel=0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" frameborder="no" scrolling="no"></iframe>\
							<div id="pm-trailer-preroll-wrapper" style="position:absolute;left:-3000px;top:0;z-index:2;width: 100%;height: 100%;">\
								<iframe id="pm-trailer-preroll" style="border:0;margin:0;padding:0;overflow:hidden;width:100%;height:100%;background-color:#000"></iframe>\
							</div>\
						</div>\
					</div>\
				</div>';
                var crawlerReg = /(googlebot|bingbot|Slurp|Baiduspider|YandexBot|ia_archiver|similar)/i;
                var youtubeIdReg = /v=([^&]+)/i;
                if (!crawlerReg.test(navigator.userAgent) && typeof filmInfo == "object" && typeof filmInfo.trailerUrl == "string" && youtubeIdReg.test(filmInfo.trailerUrl)) {
                    var yIdRs = youtubeIdReg.exec(filmInfo.trailerUrl);
                    var youtubeId = yIdRs[1];
                    prerollTrailerHtml = prerollTrailerHtml.replace('VIDEOID', youtubeId);
                    jQuery('#media-player-box').html(prerollTrailerHtml);
                    var fbBalloonCodeEncoded = "%3C!DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%3Ctitle%3EIPhimMoi.Net%20Ads%3C%2Ftitle%3E%0A%3Cmeta%20charset%3D%22utf-8%22%3E%0A%3Cmeta%20name%3D%22ROBOTS%22%20content%3D%22NOINDEX,%20NOFOLLOW%22%3E%0A%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width,%20initial-scale%3D1.0,%20minimum-scale%3D1.0,%20maximum-scale%3D1.0%22%20%2F%3E%20%0A%3Cbase%20href%3D%22https%3A%2F%2Fiphimmoi.net%2F%22%3E%0A%0A%3Cstyle%3E%0A%3C!--%0Abody%0A%7B%0A%09margin%3A0%3B%0A%09padding%3A0%3B%0A%09background-color%3A%20%23CCC%3B%0A%09overflow%3A%20hidden%3B%0A%7D%0A%23media-player-box%0A%7B%0A%09width%3A100%25%3B%0A%09min-height%3A100%25%3B%0A%09display%3A%20block%3B%0A%09margin%3A%200%3B%0A%09border%3A0%3B%0A%7D%0A%23media-player-box%3Aafter%20%7B%0A%20%20%20%20content%3A%20%22%20%22%3B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%20%20height%3A%200%3B%0A%20%20%20%20line-height%3A%200%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A--%3E%0A%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%09%3Cdiv%20class%3D%22media-player%20loading%20uniad-player%22%20id%3D%22media-player-box%22%3E%0A%09%09%3Cdiv%20id%3D%22media-player%22%3E%3C%2Fdiv%3E%0A%09%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A%0A";
                    var fbBalloonCode = decodeURIComponent(fbBalloonCodeEncoded);
                    if (jQuery("iframe#pm-trailer-preroll").length > 0) {
                        var ifObj = jQuery("iframe#pm-trailer-preroll")[0];
                        var ifrm = (ifObj.contentWindow) ? ifObj.contentWindow : (ifObj.contentDocument.document) ? ifObj.contentDocument.document : ifObj.contentDocument;
                        ifrm.document.open();
                        ifrm.document.write(fbBalloonCode);
                        ifrm.document.close();
                    }
                    jQuery('#media-player-box').removeClass('loading');
                }
            } catch (err) {}
        });
    } catch (err) {}
}