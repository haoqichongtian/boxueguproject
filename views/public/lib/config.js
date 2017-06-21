/**
 * Created by hao_w on 2017/6/21.
 */
require.config({
    baseUrl: '/views/public',
    paths: {
        'jquery': 'assets/jquery/jquery',
        'cookie': 'assets/jquery-cookie/jquery.cookie',
        'bootstrap': 'assets/bootstrap/js/bootstrap.min',
        'nprogress': 'assets/nprogress/nprogress',
        'template':'assets/artTemplate/template',
        'common':'js/dashboard/common',
        'login':'js/dashboard/login'
    },
    shim:{
        'bootstrap':{
            deps:['jquery']
        }
    }
})