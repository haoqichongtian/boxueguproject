/**
 * Created by hao_w on 2017/6/19.
 */
define(['jquery','cookie'],function ($,ck) {
    $('#formLogin').submit(function () {
        var data = $(this).serializeArray();
        console.log(data);
        $.ajax({
            url: '/api/login',
            type: 'post',
            data: data,
            success: function (info) {
                var result=JSON.stringify(info.result);
                $.cookie('info',result);
                window.location.href = 'index';
            },
            error: function (errorinfo) {
                alert('用户名或密码错误');
            }
        })
        return false;
    });
})