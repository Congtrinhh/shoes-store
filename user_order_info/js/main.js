// -------------- highlight tab đang đứng --------------
$(window).on('load', function(){
	const tabIndicator = $('#user-navigation-bar').attr('tab-indicator');
	$('#user-navigation-bar > li > a').each(function(){
		if ( $(this).attr('href') == tabIndicator ) {
			$(this).addClass('active');
		}
	})
})

// ---------------- ẩn thanh user nav khi kích thước màn hình nhỏ xuống  ----------------
$(window).on('load', function() {
    if ( window.innerWidth <= 768 ) {
        $('.collapse').removeClass('show');
    }

	$('body').on('click', '.btn-logout', function(e) {
		localStorage.setItem('login-token', '');
	})

    const tabLink = localStorage.getItem('user-tab-link');
    if ( tabLink=='./user_order_info.html' || tabLink.includes('order') ) {
		$('#user-navigation-bar > li > a').filter('[href="./user_order_info.html"]') .addClass('active');
	}
    $('#user-navigation-bar > li > a').on('click', function(){
        localStorage.setItem('user-tab-link', $(this).attr('href'));
    })

})
