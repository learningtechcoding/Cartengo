/*!
* Tabler v1.0.0-beta21 (https://tabler.io)
* @version 1.0.0-beta21
* @link https://tabler.io
* Copyright 2018-2024 The Tabler Authors
* Copyright 2018-2024 codecalm.net Paweł Kuna
* 
*/
!function(e){"function"==typeof define&&define.amd?define(e):e()}((function(){"use strict";var e,t="tablerTheme",a=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}});if(a.theme)localStorage.setItem(t,a.theme),e=a.theme;else{var n=localStorage.getItem(t);e=n||"light"}"dark"===e?document.body.setAttribute("data-bs-theme",e):document.body.removeAttribute("data-bs-theme")}));