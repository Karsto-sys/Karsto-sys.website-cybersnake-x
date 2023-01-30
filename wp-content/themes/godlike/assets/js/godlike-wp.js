'use strict';

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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

(function ($) {
  // fixed carousel inside full-width-row when row resized
  $(document).on('vc-full-width-row', function (e, rows, a, b, c) {
    var args = Array.prototype.slice.call(arguments, 1);

    if (args.length) {
      var $carousels = $(args).find('.nk-carousel-inner');

      if ($carousels.length && typeof $carousels.flickity !== 'undefined') {
        $carousels.flickity('resize');
      }
    }
  });
  $(document).on('tinymce-editor-init', function (event, editor) {
    if ((editor.id == 'bbp_reply_content' || editor.id == 'bbp_topic_content' || $('#buddypress').length) && editor.dom) {
      var body = editor.dom.select('body');

      if (typeof body[0] !== 'undefined') {
        body[0].style.backgroundColor = "#151515";
        body[0].style.color = "white";
        body[0].style.margin = "0px";
        body[0].style.padding = "0px";
        var css = 'a { color: #b56d19;}',
            head = editor.dom.doc.head || editor.dom.doc.getElementsByTagName('head')[0],
            style = editor.dom.doc.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(editor.dom.doc.createTextNode(css));
        }

        head.appendChild(style);
      }
    }
  });
  $(document.body).on('country_to_state_changed', function (event, country, wrapper) {
    var statebox = wrapper.find('#billing_state, #shipping_state, #calc_shipping_state', '#calc_shipping_city');
    statebox.addClass('form-control');
  });
  $(document).on('change input', 'div.woocommerce > form .cart_item :input', function () {
    $('#godlike-cart-update').removeClass('godlike-shadow-button');
  });
  $(document.body).on('updated_cart_totals', function () {
    $('#godlike-cart-update').addClass('godlike-shadow-button');
  }); //Called when woocommerce finishes the adding to cart process and produce fragments with the new data

  $(document.body).on("added_to_cart removed_from_cart", function (event, fragments, cart_hash, $thisbutton) {
    var smallCart;
    var countContainer = $('#godlike_small_cart_count');
    $.each(fragments, function (name, item) {
      smallCart = $(item).find('.godlike_hide_small_cart');
    });

    if (smallCart !== undefined) {
      //remove small cart modal container
      $('#godlike_small_cart').html(smallCart.html());

      if (smallCart.attr('data-cart-count') > 0) {
        countContainer.removeClass('fade out');
        countContainer.addClass('fade show');
      }

      countContainer.text(smallCart.attr('data-cart-count'));
    } //hide add to cart button


    $('.added_to_cart').prev('.add_to_cart_button').hide();
  });
  $(document.body).on("wc_fragments_loaded wc_fragments_refreshed", function () {
    var countContainer = $('#godlike_small_cart_count');
    var smallCart = $('#godlike_small_cart .widget_shopping_cart_content .godlike_hide_small_cart');

    if (smallCart.length) {
      //remove small cart modal container
      $('#godlike_small_cart').html(smallCart.html());

      if (smallCart.attr('data-cart-count') > 0) {
        countContainer.removeClass('fade out');
        countContainer.addClass('fade show');
      }

      countContainer.text(smallCart.attr('data-cart-count'));
    }
  });
  $('.price_slider_amount .button').addClass('nk-btn float-left nk-btn-sm').removeClass('button');
  $('.widget_product_categories .product-categories').addClass('nk-widget-categories');
  $('#godlike-check-age').on('change', function () {
    var month = $(this).find('[name="godlike_age_check_month"]').val();
    var year = $(this).find('[name="godlike_age_check_year"]').val();
    var $days_container = $(this).find('[name="godlike_age_check_day"]');

    if (month && year) {
      var $day_options = $days_container.find('option');
      var number_days = new Date(year, month, 0).getDate();
      var current_days = $day_options.length - 1;
      var selected_day = $days_container.val();

      if (number_days < current_days) {
        // delete extra date
        $day_options.filter(':eq(' + number_days + ')').nextAll().remove(); // clear selection if selected day is gone

        if (selected_day > number_days) {
          $days_container.val('');
        }
      } else if (number_days > current_days) {
        // add date
        for (var i = current_days + 1; i < number_days + 1; i++) {
          $days_container.append('<option value="' + i + '">' + i + '</option>');
        }
      }
    }
  }); // add top padding when disabled header and main navigation is opaque

  var $padding = false;
  var $content = $('.nk-main .row:eq(0) > div');
  var $headerNotOpaq = $('.nk-header:not(.nk-header-opaque)');
  var $page = $('article.page');
  var $headerTitle = $('.nk-header-title');

  function updateTopContentPadding() {
    $padding.height($headerNotOpaq[0].getBoundingClientRect().height);
  }

  if (!$headerTitle.length && $headerNotOpaq.length && (!$page.length || $page.length && $page.prev('.nk-gap-4').length)) {
    // generate paddings
    $content.each(function () {
      var $newPadding = $('<div>');
      var $isSidebar = $(this).children('.nk-sidebar'); // is sidebar

      if ($isSidebar.length) {
        $newPadding.addClass('d-none d-lg-block').prependTo($isSidebar);
      } else {
        $newPadding.prependTo($(this));
      }

      $padding = $padding ? $padding.add($newPadding) : $newPadding;
    });
    Godlike.debounceResize(updateTopContentPadding);
    updateTopContentPadding();
  } // BuddyPress fields fixed


  $('.godlike-select select').addClass('form-control');
  $('.godlike-datetime select').addClass('form-control'); // BuddyPress tabs fixed

  $('.godlike_tabs li').each(function (i, elem) {
    if ($(this).hasClass("current")) {
      $(this).find('a').addClass('active');
    }
  });
  $('.godlike_notification_order form').addClass('nk-social-sort');
  $('.godlike_notification_order select').addClass('form-control');
  $('.godlike_notification_actions .mark-read.primary').prepend('<span class="ion-eye"></span> ');
  $('.godlike_notification_actions .mark-unread.primary').prepend('<span class="ion-eye-disabled"></span> ');
  $('.godlike_notification_actions .delete.secondary.confirm').prepend('<span class="ion-trash-b"></span> ');
  /* Star action */
  // threads stars

  $('#message-threads .thread-star').each(function () {
    var className = $(this).find('a.message-action-unstar').length ? 'ion-android-star' : 'ion-android-star-outline';
    $(this).parents('tr:eq(0)').find('.nk-social-messages-description .nk-social-messages-favorite span').addClass(className);
  });
  $('#message-threads').on('click', '.nk-social-messages-favorite', function (e) {
    e.preventDefault();
    $(this).parents('tr:eq(0)').find('td.thread-star a').click();
    $(this).find('span').toggleClass('ion-android-star-outline ion-android-star');
  }); // single thread stars

  $('#message-thread .message-metadata.nk-social-messages-single-meta').each(function () {
    var className = $(this).find('a.message-action-unstar').length ? 'ion-android-star' : 'ion-android-star-outline';
    $(this).find('.nk-social-messages-single-meta-favorite span').addClass(className);
  });
  $('#message-thread').on('click', '.nk-social-messages-single-meta-favorite', function (e) {
    e.preventDefault();
    $(this).parents('.message-metadata.nk-social-messages-single-meta:eq(0)').find('.message-star-actions a').click();
    $(this).find('span').toggleClass('ion-android-star-outline ion-android-star');
  });
  $('.members.friends .friendship-button, .godlike_group_buttons .group-button').addClass('nk-btn-xs');
  $('#settings-form select').addClass('form-control');
  var groupSettingsSubmit = $('#group-settings-form input[type=submit]');

  if (groupSettingsSubmit.length) {
    groupSettingsSubmit.after('<button class="nk-btn link-effect-4 float-right">' + groupSettingsSubmit.val() + '</button>');
    groupSettingsSubmit.remove();
  }
  /*rtMedia fixed*/


  $('#rtm-media-gallery-uploader #rtmedia-upload-container #drag-drop-area .rtm-album-privacy select').addClass('form-control');
  var startMediaUpload = $('.start-media-upload');
  var startMediaUploadValue = startMediaUpload.val();
  startMediaUpload.after("<button class='start-media-upload nk-btn text-white' value='" + startMediaUploadValue + "'>" + startMediaUploadValue + "</button>");
  startMediaUpload.remove();
  /*rtMedia fixed Load More button*/

  var rtMediaGalleryNext = $('#rtMedia-galary-next');

  if (rtMediaGalleryNext.attr('href') === '') {
    rtMediaGalleryNext.attr('href', '#');
  }

  $('.rtmedia-title-editor, .rtm-form-select, .rtmedia-desc-textarea, .rtmedia-merge-user-album-list').addClass('form-control');
  $('.rtm-single-actions.rtm-item-actions button.rtmedia-edit').removeClass('button');
  $('.rtm-single-actions.rtm-item-actions button.rtmedia-edit').addClass('nk-btn');
  $('.rtm-single-actions.rtm-item-actions button.rtmedia-delete-media').removeClass('button');
  $('.rtm-single-actions.rtm-item-actions button.rtmedia-delete-media').addClass('nk-btn');
  $('#bbp_forum_type_select.bbp_dropdown, #bbp_forum_status_select.bbp_dropdown, #bbp_forum_visibility_select.bbp_dropdown').addClass('form-control');
  /* WooCommerce prevent review without rating */

  $('body').on('click', '#respond #submit', function () {
    if (typeof wc_single_product_params === 'undefined') {
      return;
    }

    var $rating = $(this).closest('#respond').find('.nk-rating');
    var $form = $(this).closest('form');
    var formData = $form.serializeArray();
    var rating = false;

    for (var k = 0; k < formData.length; k++) {
      if (formData[k].name === 'rating') {
        rating = formData[k].value;
        break;
      }
    }

    if ($rating.length > 0 && !rating && wc_single_product_params.review_rating_required === 'yes') {
      window.alert(wc_single_product_params.i18n_required_rating_text);
      return false;
    }
  });
})(jQuery);

/***/ })

/******/ });