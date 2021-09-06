// ---------------- ẩn thanh user nav khi kích thước màn hình nhỏ xuống  ----------------
$(window).on('load', function () {
	if (window.innerWidth <= 768) {
		$('.collapse#user-navigation-bar').removeClass('show');
	}

})
