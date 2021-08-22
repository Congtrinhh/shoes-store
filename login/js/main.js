$('#userForm').validate({
    messages: {
        name: "Vui lòng nhập tên tài khoản",
        password: "Vui lòng nhập mật khẩu",
    },
    errorPlacement: function(errorElement, invalidElement) {
        errorElement.insertAfter( invalidElement.parent() );
    }
});

$('.btn[type="submit"]').on('click', function(e){
    e.preventDefault();
    if ( $('#userForm').valid() ) {
        if ( $('[name="name"]').val() =='tomcat' && $('[name="password"]').val() =="12345" ) {
            console.log("hop le");
            window.location.assign('./index.html');

            localStorage.setItem('userName', 'tomcat');
            localStorage.setItem('login-token', 'user');
        }
        else {
            console.log("k hop le");
            location.reload();
        }
    }
})
