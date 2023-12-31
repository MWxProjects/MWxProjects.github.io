$(function () {
  var e = Cookies.get("no-lines"),
    o = Cookies.get("dark"),
    n = Cookies.get("boxed");
  "true" == e && $("body").addClass("no-lines"),
    "true" == o && $("html").addClass("dark"),
    "true" == n && $("body").addClass("boxed");
  var t = $(
      '<div class="toggleContainer"><span class="container-caption">Customize</span><div class="toggle-container-btn ion-ios-cog-outline"></div></div>'
    ),
    i = $(
      '<div id="linesOption" class="option"><span class="caption">Vertical lines</span><div class="toggle-btn ion-ios-barcode-outline"></div>'
    ),
    s = $(
      '<div id="darkOption" class="option"><span class="caption">Dark mode</span><div class="toggle-btn ion-contrast"></div>'
    ),
    a = $(
      '<div id="boxedOption" class="option"><span class="caption">Boxed mode</span><div class="toggle-btn ion-cube"></div>'
    );
  $("body").append(t),
    t.prepend(i),
    t.prepend(s),
    t.prepend(a),
    $("body").on("click", ".toggle-container-btn", function () {
      $(".toggleContainer").toggleClass("active");
    }),
    $("body").on("click", "#linesOption", function () {
      $("body").toggleClass("no-lines"),
        $("body").hasClass("no-lines")
          ? Cookies.set("no-lines", "true")
          : Cookies.set("no-lines", "false");
    }),
    $("body").on("click", "#darkOption", function () {
      $("html").toggleClass("dark"),
        $("html").hasClass("dark")
          ? Cookies.set("dark", "true")
          : Cookies.set("dark", "false");
    }),
    $("body").on("click", "#boxedOption", function () {
      $("body").toggleClass("boxed"),
        $("body").hasClass("boxed")
          ? Cookies.set("boxed", "true")
          : Cookies.set("boxed", "false");
    }),
    $("body").on("click", ".option", function () {
      $(this).toggleClass("active");
    });
}),
  (function (e) {
    if ("function" == typeof define && define.amd) define(e);
    else if ("object" == typeof exports) module.exports = e();
    else {
      var o = window.Cookies,
        n = (window.Cookies = e());
      n.noConflict = function () {
        return (window.Cookies = o), n;
      };
    }
  })(function () {
    function e() {
      for (var e = 0, o = {}; e < arguments.length; e++) {
        var n = arguments[e];
        for (var t in n) o[t] = n[t];
      }
      return o;
    }
    function o(n) {
      function t(o, i, s) {
        var a;
        if ("undefined" != typeof document) {
          if (arguments.length > 1) {
            if (
              ((s = e({ path: "/" }, t.defaults, s)),
              "number" == typeof s.expires)
            ) {
              var d = new Date();
              d.setMilliseconds(d.getMilliseconds() + 864e5 * s.expires),
                (s.expires = d);
            }
            try {
              (a = JSON.stringify(i)), /^[\{\[]/.test(a) && (i = a);
            } catch (r) {}
            return (
              (i = n.write
                ? n.write(i, o)
                : encodeURIComponent(String(i)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
              (o = encodeURIComponent(String(o))),
              (o = o.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)),
              (o = o.replace(/[\(\)]/g, escape)),
              (document.cookie = [
                o,
                "=",
                i,
                s.expires ? "; expires=" + s.expires.toUTCString() : "",
                s.path ? "; path=" + s.path : "",
                s.domain ? "; domain=" + s.domain : "",
                s.secure ? "; secure" : "",
              ].join(""))
            );
          }
          o || (a = {});
          for (
            var c = document.cookie ? document.cookie.split("; ") : [],
              l = /(%[0-9A-Z]{2})+/g,
              p = 0;
            p < c.length;
            p++
          ) {
            var u = c[p].split("="),
              f = u.slice(1).join("=");
            '"' === f.charAt(0) && (f = f.slice(1, -1));
            try {
              var g = u[0].replace(l, decodeURIComponent);
              if (
                ((f = n.read
                  ? n.read(f, g)
                  : n(f, g) || f.replace(l, decodeURIComponent)),
                this.json)
              )
                try {
                  f = JSON.parse(f);
                } catch (r) {}
              if (o === g) {
                a = f;
                break;
              }
              o || (a[g] = f);
            } catch (r) {}
          }
          return a;
        }
      }
      return (
        (t.set = t),
        (t.get = function (e) {
          return t(e);
        }),
        (t.getJSON = function () {
          return t.apply({ json: !0 }, [].slice.call(arguments));
        }),
        (t.defaults = {}),
        (t.remove = function (o, n) {
          t(o, "", e(n, { expires: -1 }));
        }),
        (t.withConverter = o),
        t
      );
    }
    return o(function () {});
  });
!(function (t) {
  "use strict";
  function i() {
    t(".parallax").each(function () {
      var i = t(this),
        a = t(window).scrollTop(),
        o = a * n,
        o = +o.toFixed(2);
      i.hasClass("fs")
        ? i.css("transform", "translate3d(-50%,-" + (50 - 0.15 * o) + "%,0)")
        : i.css("transform", "translate3d(0," + o + "px,0)");
    });
  }
  function a() {
    var i = t(window).height(),
      a = t(window).scrollTop(),
      o = a + i;
    t.each(e, function () {
      var i = t(this),
        n = i.outerHeight(),
        e = i.offset().top - 100,
        s = e + n;
      s >= a && e <= o ? i.addClass("in-view") : i.removeClass("in-view");
    });
  }
  t("body").append(
    '<div class="l1"></div><div class="l2"></div><div class="l3"></div>'
  ),
    t(
      "a[href!=#][data-toggle!=tab][data-toggle!=collapse][target!=_blank][class!=anchor]"
    ).addClass("smooth"),
    t(".smooth-transition").animsition({
      linkElement: ".smooth",
      inDuration: 500,
      outDuration: 500,
    }),
    t("html").on("click", function (i) {
      t(".navigation, .nav-trigger").removeClass("tapped");
    }),
    t(".nav-trigger").on("click", function (i) {
      i.stopPropagation(),
        t(".navigation").toggleClass("tapped"),
        t(".navigation").hasClass("tapped")
          ? t(".nav-trigger").addClass("tapped")
          : t(".nav-trigger").removeClass("tapped");
    }),
    t(".navigation li").on("click", function (i) {
      i.stopPropagation(), t(this).toggleClass("tapped");
    });
  var o = t(".grid");
  o.imagesLoaded(function () {
    o.packery({ itemSelector: ".item" });
  }),
    t(".filter-trigger").on("click", function (i) {
      i.preventDefault(),
        t("body").addClass("filters-active"),
        t("html,body").animate(
          { scrollTop: t(".grid").offset().top + "px" },
          500
        ),
        t(".filter-container").fadeIn();
    }),
    t(".filter-container").on("click", function (i) {
      i.preventDefault(),
        t("body").removeClass("filters-active"),
        t(".filter-container").fadeOut();
    }),
    t(".filter").on("click", function (i) {
      i.preventDefault(), i.stopPropagation();
      var a = t(this).attr("data-filter");
      t(".filter.active").removeClass("active"),
        t(this).addClass("active"),
        t(".grid")
          .find(".item:not(." + a + ")")
          .css({
            "-webkit-transition": "all .25s",
            transition: "all .25s",
            "-webkit-transform": "scale(0)",
            transform: "scale(0)",
            "-webkit-opacity": "0",
            opacity: "0",
          }),
        setTimeout(function () {
          t(".grid")
            .find(".item:not(." + a + ")")
            .hide(0),
            t(".grid")
              .find("." + a)
              .show(0)
              .css({
                "-webkit-transform": "scale(1)",
                "-webkit-opacity": "1",
                transform: "scale(1)",
                opacity: "1",
              }),
            o.packery("layout");
        }, 250);
    }),
    t(window).on("resize", function () {
      setTimeout(function () {
        o.packery("layout"), window.requestAnimationFrame(a);
      }, 1500);
    }),
    t(".anchor").on("click", function (i) {
      i.preventDefault(), i.stopPropagation();
      var a = t(this).attr("href");
      t("html,body").animate({ scrollTop: t(a).offset().top + "px" });
    });
  var n = 0.15;
  t(window).on("scroll", function () {
    window.requestAnimationFrame(i);
  });
  var e = t(".item, .fadein");
  t(window).on("scroll resize", function () {
    window.requestAnimationFrame(a),
      t(".anchor").each(function () {
        var i = "#" + t(".in-view").attr("id");
        i == t(this).attr("href") &&
          (t(".anchor").removeClass("active"), t(this).addClass("active"));
      });
  }),
    t(window).on("load", function () {
      window.requestAnimationFrame(a);
    }),
    t(window).on("pageshow", function (t) {
      t.originalEvent.persisted && window.location.reload();
    });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("submit-button");
  const contentDiv = document.getElementById("content");

  const passwordOutcomes = {
    "happydev": "pages/sp/sp23.html",
    // "archives": "design/archive.html",
    // "happydesign": "pages/sp/dp23.html",
    // "happyux": ""
    // Add more password-outcome pairs as needed
  };

  submitButton.addEventListener("click", function () {
    const enteredPassword = passwordInput.value;
    const outcome = passwordOutcomes[enteredPassword];

    if (outcome) {
      passwordInput.value = "";
      window.location.href = outcome + "?v=" + Math.random();
    } else {
      alert("Incorrect or expired password. Please try again.");
    }
  });
});


