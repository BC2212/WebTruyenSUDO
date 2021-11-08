jQuery(document).ready(function() {
    var fixKeyword = function(str) {
        str = str.toLowerCase();
        str = str.replace(/(<([^>]+)>)/gi, "");
        str = str.replace(/[`~!@#$%^&*()_|\=?;:'",.<>\{\}\[\]\\\/]/gi, "");
        str = str.split(" ").join("+");
        return str;
    }
    jQuery('#form-search').submit(function() {
        var keywordObj = jQuery(this).find('input[name=keyword]')[0];
        if (typeof keywordObj != 'undefined' && keywordObj != null) {
            var keyword = jQuery(keywordObj).val();
            keyword = fixKeyword(keyword);
            keyword = jQuery.trim(keyword);
            if (keyword == '') {
                alert('Bạn chưa nhập từ khóa. (Không tính các ký tự đặc biệt vào độ dài từ khóa)');
                jQuery(keywordObj).focus();
                return false;
            }
            window.location.replace('/search/' + keyword + '/');
        }
        return false;
    });
    jQuery("a#swstyle").click(function() {
        var $Data = jQuery(this);
        var $Style = $Data.attr("data");
        jQuery.post(AjaxURL, {
            CStyle: 1,
            Style: $Style
        }, function(data) {
            if (data == 1) {
                location.reload();
            } else {
                fx.messageBox("Lỗi", "Hệ thống cho thấy bạn đang cố tình can thiệp vào hệ thống của chúng tôi!");
            }
        });
    });
});

function onSearch($keysearch) {
    if ($keysearch.length <= 4) {
        $('.search-suggest').fadeOut();
    }
    return false;
}

function SetupSlimscroll(e) {
    $(e).slimScroll({
        height: '250px'
    });
}