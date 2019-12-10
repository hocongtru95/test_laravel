/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  var getTracking3rd = function getTracking3rd() {
    return $('.nativeads_tracking_3rd_item').map(function () {
      return {
        key: $(this).attr('id'),
        value: $(this).val()
      };
    }).get();
  };

  var generateNativeAds = function generateNativeAds() {
    var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 46;
    var NATIVE_AD = 46;
    var NATIVE_IMAGE_VIDEO = 47;
    var NATIVE_TOPIC = 52;
    var NATIVE_TOP_300_600 = 70;

    switch (format) {
      case NATIVE_AD:
        $('.fm-video, .fm-topic, .fm-topic-36').not('.fm-ad').remove();
        break;

      case NATIVE_IMAGE_VIDEO:
        $('.fm-ad, .fm-topic, .fm-topic-36').not('.fm-video').remove();
        break;

      case NATIVE_TOPIC:
        $('.fm-ad, .fm-video, .fm-topic-36').not('.fm-topic').remove();
        break;

      case NATIVE_TOP_300_600:
        $('.fm-ad, .fm-video, .fm-topic').not('.fm-topic-36').remove();
        break;
    }

    var prev, current, next, index;
    index = 0;
    var $dom = $('.nativead-wrap_0');
    $('.btn-next').on('click', function (e) {
      e.preventDefault();
      $dom = $('.tab-nativead .active .nativead-wrap');
      current = $dom.find('.active');
      next = current.next();
      prev = current.prev();

      if (next.length) {
        current.removeClass('active');
        next.addClass('active');
        $('#progressbar li').eq($dom.find('fieldset').index(next)).addClass('active');
        index++;
      }

      if (index === $dom.find('fieldset').length - 1) {
        $('.btn-generate').show();
      }
    });
    $('.btn-prev').on('click', function (e) {
      e.preventDefault();
      $dom = $('.tab-nativead .active .nativead-wrap');
      current = $dom.find('.active');
      next = current.next();
      prev = current.prev();

      if (prev.length) {
        current.removeClass('active');
        prev.addClass('active');
        $('#progressbar li').eq($dom.find('fieldset').index(current)).removeClass('active');
        index--;
      }
    });
    $('.nav-nativead li').on('click', function () {
      var $progressbar_item = $('.progress-item');

      if ($(this).index(0) !== 0) {
        $progressbar_item.hide();
      } else {
        $progressbar_item.show();
      }

      setTimeout(function () {
        $dom = $('.tab-nativead .active .nativead-wrap');
        var $dom_progress = $('#progressbar li');
        var index_active = $dom.find('fieldset.active').prevAll().length;
        $dom_progress.each(function (i) {
          $dom_progress.eq(i + 1).removeClass('active');

          if (i <= index_active) {
            $dom_progress.eq(i).addClass('active');
          }
        });
      }, 300);
    });
    var item_index = 2;
    $('.add-item').on('click', function () {
      if (item_index >= 4) {
        return alert("Max Item = 5");
      }

      item_index++;
      var nav_item = "<li class=\"nav-item-".concat(item_index, "\"><a data-toggle=\"tab\" href=\"#item_").concat(item_index, "\">Item ").concat(item_index + 1, "</a></li>");

      if (format === NATIVE_TOPIC) {
        var part_item = "      <div class=\"form-group fm-ad fm-video fm-topic\">\n                                            <label for=\"\">Image 16:9</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"image169_".concat(item_index, "\">\n                                            <small>B\u1EA1n \u0111\u01B0\u1EE3c upload banner v\u1EDBi k\xEDch th\u01B0\u1EDBc: <span>640x360</span> pixel, l\u1ED7i file: <span>.jpg,.png</span>, v\xE0 dung l\u01B0\u1EE3ng t\u1ED1i \u0111a <span>250 KB</span></small>\n                                        </div>\n                                        <div class=\"form-group fm-ad fm-video fm-topic\">\n                                            <label for=\"\">Image 16:10</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"image1610_").concat(item_index, "\">\n                                            <small>B\u1EA1n \u0111\u01B0\u1EE3c upload banner v\u1EDBi k\xEDch th\u01B0\u1EDBc: <span>640x400</span> pixel, l\u1ED7i file: <span>.jpg,.png</span>, v\xE0 dung l\u01B0\u1EE3ng t\u1ED1i \u0111a <span>250 KB</span></small>\n                                        </div>\n                                        <div class=\"form-group fm-topic\">\n                                            <label for=\"\">Image 1:1</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"image11_").concat(item_index, "\">\n                                            <small>B\u1EA1n \u0111\u01B0\u1EE3c upload banner v\u1EDBi k\xEDch th\u01B0\u1EDBc: <span>240x240</span> pixel, l\u1ED7i file: <span>.jpg,.png</span>, v\xE0 dung l\u01B0\u1EE3ng t\u1ED1i \u0111a <span>250 KB</span></small>\n                                        </div>");
      }

      if (format === NATIVE_TOP_300_600) {
        var part_item = "      <div class=\"form-group fm-topic-36\">\n                                            <label for=\"\">Image 5:6</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"image56_".concat(item_index, "\">\n                                            <small>B\u1EA1n \u0111\u01B0\u1EE3c upload banner v\u1EDBi k\xEDch th\u01B0\u1EDBc: <span>300x360</span> pixel, l\u1ED7i file: <span>.jpg,.png</span>, v\xE0 dung l\u01B0\u1EE3ng t\u1ED1i \u0111a <span>250 KB</span></small>\n                                        </div>");
      }

      var item = "<div id=\"item_".concat(item_index, "\" class=\"tab-pane fade\">\n                            <div class=\"row nativead-wrap nativead-wrap_").concat(item_index, "\">\n                                <fieldset class=\"active\">\n                                    <div class=\"col-md-12\">\n                                        ").concat(part_item, "\n                                    </div>\n                                </fieldset>\n                                <fieldset>\n                                    <div class=\"col-md-12\">\n                                        <div class=\"form-group\">\n                                            <label>Title</label>\n                                            <textarea name=\"title_").concat(item_index, "\" id=\"\" class=\"form-control\" cols=\"30\" rows=\"10\" maxlength=\"300\" style=\"width: 100%; height: 69px;\"></textarea>\n                                            <small>300 k\xFD t\u1EF1</small>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label for=\"\">Sapo</label>\n                                            <textarea name=\"sapo_").concat(item_index, "\" id=\"\" class=\"form-control\" cols=\"30\" rows=\"10\" maxlength=\"300\" style=\"width: 100%; height: 69px;\"></textarea>\n                                            <small>300 k\xFD t\u1EF1</small>\n                                        </div>\n                                        <div class=\"form-group fm-topic fm-topic-36\">\n                                            <label for=\"\">Landing</label>\n                                            <input type=\"text\" class=\"form-control\" name=\"amdlanding_").concat(item_index, "\">\n                                            <small>10000 k\xFD t\u1EF1</small>\n                                        </div>\n                                    </div>\n                                </fieldset>\n                            </div>\n                        </div>");
      $('.nav-item-' + (item_index - 1)).after(nav_item);
      $('#item_' + (item_index - 1)).after(item);
    });
    $('.remove-item').on('click', function () {
      if (item_index <= 2) {
        return alert("Min item 3");
      }

      $('.nav-item-' + item_index).remove();
      $('#item_' + item_index).remove();
      item_index--;
    });
    $('.btn-generate').on('click', function () {
      var date = new Date();
      var activate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      var obj = {
        list_item: {
          item_0: {
            image_16_9: $('#nativead-frm input[name="image169"]').val() || '',
            image_16_10: $('#nativead-frm input[name="image1610"]').val() || '',
            image_15_7: $('#nativead-frm input[name="image157"]').val() || '',
            title: $('#nativead-frm textarea[name="title"]').val() || '',
            sapo: $('#nativead-frm textarea[name="sapo"]').val() || '',
            reach: $('#nativead-frm input[name="reach"]').val() || ''
          }
        },
        logo: $('#nativead-frm input[name="logo"]').val() || '',
        logo_transparen: $('#nativead-frm input[name="logo_transparent"]').val() || '',
        logo_mobile: $('#nativead-frm input[name="logo_mobile"]').val() || '',
        avatar: $('#nativead-frm input[name="avatar"]').val() || '',
        avatar_desc: $('#nativead-frm input[name="brand_name"]').val() || '',
        color: $('#nativead-frm input[name="bg_color"]').val() || '',
        font_color: $('#nativead-frm input[name="font_color"]').val() || '',
        config: Object.assign({}, JSON.parse($('#nativead-frm textarea[name="config"]').val() || '{}')),
        script: $('#nativead-frm input[name="script"]').val() || '',
        amdlanding: $('#nativead-frm input[name="amdlanding"]').val() || '',
        activate: activate
      };

      if (format === NATIVE_IMAGE_VIDEO) {
        obj.video = $('#nativead-frm input[name="video"]').val() || '';
        obj.vast = $('#nativead-frm input[name="vast_link"]').val() || '';
        obj.duration = $('#nativead-frm input[name="duration"]').val() || '';
        obj.true_view = $('#nativead-frm input[name="true_view"]').val() || '';
        obj.tracking_3rd = getTracking3rd();
      }

      var result = JSON.stringify(obj);
      console.log(result);
      return result;
    });
  };

  $('.show-frm-nativead').on('click', function () {
    generateNativeAds(70);
  });
})(jQuery);

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\test_laravel\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\test_laravel\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });