

define(['jquery','cookie','template','nprogress'],function ($,c,template,NProgress) {
    NProgress.start();

    NProgress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
    if (!$.cookie('PHPSESSID') && location.pathname != '/login') {
        location.href = '/login';
    }

    if (location.pathname != '/login' && location.pathname != '/index.php/login' && location.pathname != '/index.php/dashboard/login') {
        console.log('ahah');
        var result = JSON.parse($.cookie('info'));
        var temhtml = template('infoTem', result);
        $('.aside>.profile').html(temhtml);
    }
    $('#logoutbtn').on('click',function () {
      $.ajax({
          url:'/api/logout',
          type:'post',
          success:function (info) {
              if (info.code == 200) {
                  alert('退出成功');
                  location.href='/login';
              }
          }
      })
    })
})