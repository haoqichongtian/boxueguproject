/**
 * Created by hao_w on 2017/6/19.
 */
define(['jquery','cookie'],function ($,ck) {
    $('#formLogin').submit(function () {
        console.log('提交');
        var data = $(this).serializeArray();
        if (!$('input[name="tc_name"]').val() || !$('input[name="tc_pass"]').val()) {
            alert('用户名或密码不能为空');
            return false;
        }
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