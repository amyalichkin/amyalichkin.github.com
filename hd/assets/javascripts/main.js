;(function ($) {
    'use strict';

    $(function () {
        $('.js-popup')
            .on('click', function (e) {
                e.preventDefault();

                var $this = $(this);

                $($this.data('target')).bPopup({
                    closeClass: 'popup__close',
                    opacity: 0.5
                });
            });
    });

}).call(this, jQuery);
