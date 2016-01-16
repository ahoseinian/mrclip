'use strict'; module.exports = angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("auth/tpl/login.html","<div class=\"row\">\n  <div class=\"col-xs-12 col-md-5\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h1>ورود</h1>\n      </div>\n\n      <form novalidate action=\"/auth/login\" method=\"post\" class=\"card-block\">\n        <fieldset class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"email\" name=\"email\">\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"password\" name=\"password\">\n        </fieldset>\n        <button type=\"submit\" class=\"btn btn-block btn-primary btn-sm\">ورود</button>\n        <button ui-sref=\"app.signup\" class=\"btn btn-link center-block\"> ثبت نام </button>\n      </form>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("auth/tpl/signup.html","<div class=\"row\">\n  <div class=\"col-xs-12 col-md-5\">\n    <div class=\"card\">\n      <div class=\"card-header text-xs-center\">\n        <h1>ثبت نام</h1>\n      </div>\n      <form novalidate action=\"/auth/signup\" class=\"card-block\" name=\"form\" method=\"post\">\n        <fieldset class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"نام و نام خانوادگی\" name=\"fullname\" ng-model=\"fullname\" required>\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"پست الکترونیکی\" name=\"email\" ng-model=\"email\" required>\n          <span class=\"text-danger\" ng-show=\"form.email.$dirty && form.email.$invalid\">ایمیل صحیح نیست</span>\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"پسورد\" name=\"password\" ng-model=\"password\" required ng-minlength=\"8\">\n          <input type=\"password\" class=\"form-control\" placeholder=\"تکرار پسورد\" name=\"repeatPassword\" ng-model=\"repeatPassword\">\n          <span class=\"text-danger\" ng-show=\"form.password.$valid && (repeatPassword !== password)\">پسورد ها همخوانی ندارند</span>\n          <span class=\"text-danger\" ng-show=\"form.password.$dirty && form.password.$invalid\">حداقل ۸ کاراکتر</span>\n        </fieldset>\n        <button type=\"submit\" class=\"btn btn-block btn-primary btn-sm\" ng-disabled=\"form.$invalid || password != repeatPassword\">ثبت نام</button>\n        <div class=\"text-xs-center\">\n          اکانت دارید؟\n          <a ui-sref=\"app.login\">ورود</a>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("clip/tpl/index.html","<ui-view></ui-view>\n");
$templateCache.put("clip/tpl/player.html","<div class=\"videogular-container\">\n\n  <videogular vg-theme=\"vm.config.theme\">\n    <vg-media vg-src=\"vm.config.sources\" vg-tracks=\"vm.config.tracks\">\n    </vg-media>\n    <vg-controls>\n      <vg-play-pause-button></vg-play-pause-button>\n      <vg-time-display>{{ currentTime | date:\'mm:ss\':\'+0000\' }}</vg-time-display>\n      <vg-scrub-bar>\n        <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n      </vg-scrub-bar>\n      <vg-time-display>{{ timeLeft | date:\'mm:ss\':\'+0000\' }}</vg-time-display>\n      <vg-volume>\n        <vg-mute-button></vg-mute-button>\n        <vg-volume-bar></vg-volume-bar>\n      </vg-volume>\n      <vg-fullscreen-button></vg-fullscreen-button>\n    </vg-controls>\n\n    <vg-overlay-play></vg-overlay-play>\n    <vg-poster vg-url=\'vm.config.plugins.poster\'></vg-poster>\n  </videogular>\n</div>");
$templateCache.put("clip/tpl/show.html","<div ng-include=\"\'clip/tpl/player.html\'\"></div>\n<h1>{{vm.item.title}}</h1>\n");
$templateCache.put("main/tpl/home.html","<h3>Home view</h3>\n");
$templateCache.put("main/tpl/index.html","<div ui-view>\n</div>\n ");
$templateCache.put("main/tpl/navbar.html","<nav class=\"navbar navbar-light bg-faded m-b-1\">\n  <button class=\"navbar-toggler hidden-sm-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#exCollapsingNavbar2\">\n    &#9776;\n  </button>\n  <div class=\"collapse navbar-toggleable-xs\" id=\"exCollapsingNavbar2\">\n    <a class=\"navbar-brand\" ui-sref=\"app.home\" ui-sref-active=\"active\">MR.CLIP</a>\n    <ul class=\"nav navbar-nav\">\n      <div class=\"pull-xs-left\" ng-if=\"!user\">\n        <li class=\"nav-item\" ui-sref-active=\"active\">\n          <a class=\"nav-link\" ui-sref=\"app.login\">ورود</a>\n        </li>\n        <li class=\"nav-item\" ui-sref-active=\"active\">\n          <a class=\"nav-link\" ui-sref=\"app.signup\">ثبت نام</a>\n        </li>\n      </div>\n\n      <div class=\"pull-xs-left\" ng-if=\"user\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\">{{user.fullname}}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/auth/logout\" target=\"_self\">خروج</a>\n        </li>\n      </div>\n    </ul>\n  </div>\n</nav>\n");
$templateCache.put("main/tpl/sidebar.html","<div class=\"card sidebar\">\n  <div class=\"card-header\">\n    <h4>Clips</h4>\n  </div>\n  <div class=\"card-block\">\n    <ul class=\"no-style p-a-0\">\n      <li ng-repeat=\"item in vm.clips\">\n        <a ui-sref=\"app.clip.show({id: item._id, title: item.title})\">\n          <img ng-src=\"/images/200/{{item._id}}.jpg\" alt=\"{{item.title}}\" class=\"clip-image\">\n          <p class=\"title\">{{item.title}}</p>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n");}]);