<?php
    header('Content-Type:text/html;charset=utf-8');
    $path='';
if (array_key_exists('PATH_INFO',$_SERVER)) {
    $path=$_SERVER['PATH_INFO'];
    $path=substr($path,1);//截取字符串
    $arr=explode('/',$path);//切割字符串为数组
    if (count($arr)==2) {
      $path='/views/'.$arr[0].'/'.$arr[1];
    }
    if (count($arr)==1) {
      # code...
      $path='/views/dashboard/'.$arr[0];
    }
}else{
    $path='views/dashboard/index';
}
//   var_dump($_SERVER);

   $path=$path.'.html';
   include $path;


?>
