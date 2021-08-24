$(window).on('load', function () {

    $('#sideBarToggle').on('click', function () {
        $(this).parents('.nav-header-container').siblings('.main__bottom').find('.sidebar-container')
            .toggleClass('on');
        $(this).parents('.nav-header-container').toggleClass('on');
    })

    $('a[data-bs-toggle="collapse"]').on('click', function () {
        $(this).find('.child-menu__trigger').toggleClass('on');
    })
})