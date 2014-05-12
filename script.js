/**
 * 逛逛附近
 * http://appmarket.pixnet.tw/#/addon/262
 *
 * @copyright Copyright 2003-2014 PIXNET Digital Media Corporation 優像數位媒體科技股份有限公司
 * @license http://framework.pixnet.net/license BSD License
 * @author Repeat Yang <repeat _at_ pixnet _dot_ tw>
 */
(function ($, undefined) {
    $.extend({
        pixNearby: function (options) {
            var args, output, set_title, nearby_content,
            objtype = $('form.json-form input[name="obj_type"]').val(),
            objid = $('form.json-form input[name="obj_id"]').val(),
            album_owner = $('form.json-form input[name="album_username"]').val(),
            settings = {
                user: album_owner,
                distance_min: parseInt(options['min']),
                distance_max: parseInt(options['max']),
                trim_user: 1
            };

            if ('AlbumSet' == objtype) {
                $.get(
                    'http://emma.pixnet.cc/album/sets/' + objid + '?user=' + album_owner,
                    function (result) {
                        if (!result.set.location) {
                            return;
                        }

                        var lat = result.set.location.latitude,
                        lon = result.set.location.longitude;

                        args = $.extend(settings, {
                            lat: lat,
                            lon: lon
                        });
                        $.get(
                            'http://emma.pixnet.cc/album/sets/nearby',
                            args,
                            function (result) {
                                if (0 == result.total) {
                                    return;
                                }
                                output = "";
                                for (var i in result.sets) {
                                    // 只列出公開相簿
                                    if (0 != result.sets[i].permission) {
                                        continue;
                                    }

                                    set_title = $('<a>').text(result.sets[i].title).html();
                                    output += '<a href="' + result.sets[i].link + '"><img width="75" height="75" src="'
                                            + result.sets[i].thumb + '" title="' + set_title + '" alt="' + set_title + '"></a>';
                                }
                                nearby_content = '<div class="box" id="nearby-sets"><h4>附近的相簿</h4><div class="box-content">' + output + '</div></div>';
                                $('#right-column').append(nearby_content);
                            },
                            'jsonp'
                        );
                    },
                    'jsonp'
                );
            } else if ('AlbumElement' == objtype) {
                $.get(
                    'http://emma.pixnet.cc/album/elements/' + objid + '?user=' + album_owner,

                    function (result) {
                        if (!result.element.location) {
                            return;
                        }

                        var lat = result.element.location.latitude,
                        lon = result.element.location.longitude;

                        args = $.extend(settings, {
                            lat: lat,
                            lon: lon,
                            per_page: 50,
                            type: 'pic',
                            with_detail: 1
                        });
                        $.get(
                            'http://emma.pixnet.cc/album/elements/nearby',
                            args,
                            function (result) {
                                if (0 == result.total) {
                                    return;
                                }
                                output = "";
                                for (var i in result.elements) {
                                    output += '<a href="' + result.elements[i].link + '"><img width="60" height="60" src="'
                                            + result.elements[i].pimg + '"></a>';
                                }
                                nearby_content = '<div class="box" id="nearby-elements"><h4>附近的相片</h4><div class="box-content">' + output + '</div></div>';
                                $('#right-column').append(nearby_content);
                            },
                            'jsonp'
                        );
                    },
                    'jsonp'
                );
            }
        }
    });
})(jQuery);
