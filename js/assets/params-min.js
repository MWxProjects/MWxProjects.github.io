function getParametersByName(e,t){t||(t=window.location.href);var n={};return e.forEach((function(e){var o=e.replace(/[\[\]]/g,"\\$&"),a=new RegExp("[?&]"+o+"(=([^&#]*)|&|#|$)").exec(t);a&&(a[2]?n[e]=decodeURIComponent(a[2].replace(/\+/g," ")):n[e]="")})),n}function updateTextElement(){var e=getParametersByName(["hello","hi"]),t=document.getElementById("textElement");e.hello&&(t.textContent=e.hi+" your password is happydev"),e.hi&&(t.textContent=e.hello+" your password is 123")}