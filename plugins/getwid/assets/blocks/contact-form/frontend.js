!function(t){function e(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:a})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}({3:function(t,e){/*!
 * getwid-contact-form
 */
!function(t){var e=this;t(document).ready(function(n){t(document.body).on("post-load",function(t){a()});var a=function(){t(".wp-block-getwid-contact-form__form:not(.getwid-init)").each(function(n,a){t(e).addClass("getwid-init");var s,c=t(a).find("p[class$=__result]"),r=t(a).find("button[type='submit']"),i=t(a).find(".wp-block-getwid-captcha");i.length&&function(){if(i.length){var t=i.data("sitekey"),e=i.data("theme");grecaptcha.ready(function(){s=grecaptcha.render(i[0],{sitekey:t,theme:e})})}}(),c.hide(),t(a).submit(function(e){e.preventDefault(),r.prop("disabled",!0);var n={action:"getwid_send_mail",security:Getwid.nonces.recaptcha_v2_contact_form,data:t(a).serialize()};""!=c.text()&&c.hide(300),t.post(Getwid.ajax_url,n,function(e){c.hasClass("success")?c.removeClass("success"):c.hasClass("fail")&&c.removeClass("fail"),r.prop("disabled",!1),i.length&&e.success&&grecaptcha.reset(s),e.success?(t(a)[0].reset(),c.addClass("success")):c.addClass("fail"),c.html(e.data),c.show(300)})})})};a()})}(jQuery)}});