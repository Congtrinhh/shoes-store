$(window).on('load', function(){
	$('.loader').fadeOut();	
    console.log('utils loader fadeout done')
    displayNumberIndicator();

    toggleUserInfo(); // entity info block
})

function displayNumberIndicator() {
    let productListFromLS = getProductListFromLS();
    if (productListFromLS == null || productListFromLS=='' || productListFromLS==undefined || productListFromLS==[]) {
        $('.number-indicator').html(0);
    } else {
        $('.number-indicator').html(productListFromLS.length);
    }
    $('.number-indicator').addClass('indicatorAnimation');
    setTimeout(function(){
        $('.number-indicator').removeClass('indicatorAnimation');
    }, 750);
}

/* local storage - get list products */
function getProductListFromLS() {
    let list = localStorage.getItem('productList');
    
    if (list!=null && list.length>0) {
        try {
            return JSON.parse(list);
        } catch(e) {
            console.log(e.message);
        } 
    }
    return null;
}

function storeProductList(list){
    localStorage.setItem("productList", JSON.stringify(list));
}

// try -catch loi

function removeProductList() {
    localStorage.removeItem("productList");
}
			
			
function toggleMenu() { 
    // dùng event delegate 
    $('body').on('click', '#menu-toggle', function(){
        $(this).toggleClass('on');
        $('.nav-and-search').toggleClass('on');
        $('.overlay').toggleClass('on');

    })
    $('body').on('click', '.overlay', function(){
         $(this).removeClass('on');
        $('.nav-and-search').removeClass('on');
        $('#menu-toggle').toggleClass('on');

    })
}
toggleMenu();
			
function updateFooterContent() {
    if (window.innerWidth >= 576) {
        $('.footer__sub-content').addClass('show');
    } else {
        $('.footer__sub-content').removeClass('show');
    }
}
$(window).on('load', updateFooterContent);         
$(window).on('resize', updateFooterContent);         
//})

//  --------------------------- toast ---------------------------
function showToast() {
    const toastHTMLElem = document.querySelector('.toast');
    const toastElem = new bootstrap.Toast(toastHTMLElem, {
        delay: 5000,
    });

    toastHTMLElem.classList.add('on');

    toastElem.show();
}

// header (highlight current nav page)
// $('.header .header__nav > ul > li > a').each(function(){
// 	if ( $('.header .header__nav > ul').attr('tab-name') && $(this).attr('href').includes( $('.header .header__nav > ul').attr('tab-name') ) ) {
// 		$(this).addClass('active-link');
// 	}	
// })

function toggleUserInfo(){
    let loginToken = localStorage.getItem('login-token');
    if ( loginToken=='user' ) {
        // ẩn phần login 
        $('.login-default').css('display', 'none');
        // hiện phần user info
        $('.entity-preview-info').css('display', 'flex');
        $('.entity-preview-info').css('align-items', 'center');

    }
    else {
        // hiện phần login
        $('.login-default').css('display', 'flex');
        // ẩn phần user info
        $('.entity-preview-info').css('display', 'none');
    }
}