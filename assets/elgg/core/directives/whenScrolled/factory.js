// <script>

define(function() {
    return function() {
        return {
            restrict: 'A',
            link: function(scope, elm, attr) {
                var raw = elm[0];

                elm.bind('scroll', function() {
                    if ((raw.scrollTop + raw.offsetHeight + 3000) >= raw.scrollHeight) {
                        scope.$apply(attr.whenScrolled);
                    }
                });
            }
        };

    }
});
