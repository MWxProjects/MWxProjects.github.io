function getParametersByName(e,a){a||(a=window.location.href);var s={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),r=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(a);r&&(r[2]?s[e]=decodeURIComponent(r[2].replace(/\+/g," ")):s[e]="")})),s}function updateTextElement(){var e=getParametersByName(["hello","hi","source"]),a=document.getElementById("textElement"),s="";switch(!0){case"Guest"===e.source:s=e.source+" get password below";break;case"ARUP"===e.hi:s=e.hi+" your password is 217";break;case"Capital Group"===e.hi:s=e.hi+" your password is 217";break;case"JJM"===e.hi:s=e.hi+" your password is 217";break;case"Live Nation"===e.hi:s=e.hi+" your password is 217";break;case"Vivian"===e.hello:s="";break;case"Lifeforce"===e.hello:s=e.hello+" your password is 141";break;case"Starz"===e.hello:s=e.hello+" your password is 151";break;case"iSpot"===e.hello:s=e.hello+" your password is 163";break;case"MillerKnoll"===e.hello:s=e.hello+" your password is 177";break;case"Fanatics"===e.hello:s=e.hello+" your password is 181";break;case"Calm"===e.hello:s=e.hello+" your password is 192";break;case"Spark"===e.hello:s=e.hello+" your password is 111";break;case"Remote"===e.hello:s=e.hello+" your password is 128";break;case"Shoes For Crews"===e.hello:s=e.hello+" your password is 133";break;case"Evercommerce"===e.hello:s=e.hello+" your password is 303";break}a.textContent=s}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("password-input"),a=document.getElementById("submit-button"),s=document.getElementById("content");a.addEventListener("click",(function(){let a="";switch(e.value){case"217":case"141":case"151":case"163":case"177":case"181":case"192":case"111":case"128":case"133":case"303":a="pages/1/work.html";break;case"2330":case"2771":case"2882":a="pages/ad1/work.html";break;case"33300":case"37711":case"38822":a="pages/xd1/work.html";break}a?window.location.href=a+"?v="+Math.random():s.textContent="Password not recognized. Please try again."}))}));