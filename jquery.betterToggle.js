(function($) {
    $.fn.betterToggle = function(options) {
        var elem = this;
        var vendorprefix = getVendorPrefix(),
            transform = "-" + vendorprefix + "-transform",
            obj = {},
            hidden = elem.is(":visible"),
            number;
        hidden ? number = 1 : number = 0;
        var handle = setInterval(
        function() {
            hidden ? number -= 0.1 : number += 0.1;
            if (!hidden) {
                elem.show();
            }
            obj[transform] = "scale(" + number + ")";
            elem.css(obj);
            if (number <= 0) {
                obj[transform] = "scale(0)";
                elem.css(obj);
                elem.hide();
                clearInterval(handle)
            } else if (number >= 1) {
                obj[transform] = "scale(1)";
                elem.css(obj);
                clearInterval(handle)
            };
        }, 30);

        function getVendorPrefix() {
            if ('result' in arguments.callee) return arguments.callee.result;

            var regex = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/;

            var someScript = document.getElementsByTagName('script')[0];

            for (var prop in someScript.style) {
                if (regex.test(prop)) {
                    return arguments.callee.result = prop.match(regex)[0];
                }
            }
            if ('WebkitOpacity' in someScript.style) return arguments.callee.result = 'Webkit';
            if ('KhtmlOpacity' in someScript.style) return arguments.callee.result = 'Khtml';

            return arguments.callee.result = '';
        }

        return elem;
    };
})(jQuery);