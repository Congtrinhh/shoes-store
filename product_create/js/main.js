$('#createForm').validate({
    rules: {
        images: {
            required: true,
            extension: 'jpg|png|jpeg',
        },
    },
    messages: {
        images: {
            required: "Vui lòng thêm ảnh",
            extension: 'Định dạng file không hợp lệ',
        },
    },
    errorPlacement: function (errorElem, invalidElem) {
        errorElem.insertAfter(invalidElem.parent());
    },
});