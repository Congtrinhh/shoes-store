
/* --------------- validate form --------------- */
$('#createForm').validate({
    rules: {
        price: {
            isNumber: true
        },
        quantity: {
            isNumber: true
        }
    },
    messages: {
        'product-line-id': 'Vui lòng chọn tên dòng sản phẩm',
        'color-id': 'Vui lòng chọn màu',
        'size-id': 'Vui lòng chọn size',
        price: {
            required: 'Vui lòng nhập giá',
        },
        quantity: {
            required: 'Vui lòng nhập số lượng ban đầu',
        },
    },
})

jQuery.validator.addMethod('isNumber', function (value) {
    const regex = /\D/gm;
    return !regex.test(value.trim());
}, 'Định dạng số chưa đúng');



$('#createForm').on('click', function () { // remvoe tb lỗi khi có tác động vào form
    $('.error-message').removeClass('on');
})