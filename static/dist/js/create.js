webpackJsonp([0],[function(t,n,i){"use strict";var e=i(1),o=(i(3).Promise,i(7));!function(){var t={step:0},n={stepTo:function(t){e(".j-step-o").removeClass("active").eq(t).addClass("active"),e(".j-step-cnt").hide().eq(t).show()}},i={init:function(){this.evt()},evt:function(){e(".j-btn-next").on("click",function(){t.step+=1,n.stepTo(t.step)}),e(".j-btn-prev").on("click",function(){t.step-=1,n.stepTo(t.step)}),e(".j-btn-submit").on("click",function(){location.href="/detail"})}};e(function(){o.init().then(function(){i.init()})})}()}]);