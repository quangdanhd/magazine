jQuery(document).on('click', '.main-pagination .load-button', function () {
    let load = jQuery(this);
    if (!load.hasClass('loading')) {
        load.addClass('loading').find('.tsi').addClass('tsi-spin');
        let page = jQuery(this).attr('data-page');
        if (!!page) {
            let url = '/latest-pagination?page=' + page;
            jQuery.get(url, function (data, status) {
                if (status === 'success') {
                    if (!!data) {
                        let html = typeof data['html'] !== 'undefined' ? data['html'] : '';
                        load.closest('.main-content').find('.block-content').find('.posts-wrap').append(html);
                        let next_page = typeof data['next_page'] !== 'undefined' ? data['next_page'] : false;
                        if (next_page) {
                            page++;
                            load.attr('data-page', page);
                        } else {
                            load.hide();
                        }
                    } else {
                        load.hide();
                    }
                }
                load.removeClass('loading').find('.tsi').removeClass('tsi-spin');
            });
        }
    }
});
