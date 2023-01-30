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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),

/***/ 19:
/***/ (function(module, exports) {

/*
 * Inifinite Scroll
 *
 * Don't touch the main plugin code! Scroll down and look at initialization.
 */
(function ($) {
  "use strict";

  var infiniteScrollObjects = [];
  /* Instance */

  function InfiniteScroll($infiniteBlock, userOptions) {
    var self = this;
    self.$block = $infiniteBlock; // default options and callback functions

    self.options = $.extend({
      id: $infiniteBlock.attr('data-id'),
      nextPageUrl: $infiniteBlock.attr('data-next-page-url'),
      // set true if you want to load fetch new items on scrolling page
      infinite: false,
      init: function init() {},
      createLoadMoreButton: function createLoadMoreButton() {
        if (!this.loadMoreButton) {
          this.loadMoreButton = $('<div>').insertBefore(this.$block);
        }

        return this.loadMoreButton.html('Load More');
      },
      createNoMoreButton: function createNoMoreButton() {
        return this.loadMoreButton.html('No More');
      },
      startLoading: function startLoading() {// console.log('start loading');
      },
      endLoading: function endLoading() {
        // console.log('end loading');
        // Update load more button
        if (this.options.nextPageUrl) {
          this.options.createLoadMoreButton.apply(this);
        } else {
          this.options.createNoMoreButton.apply(this);
        }
      },
      onLoad: function onLoad($newBlock, data) {// console.log('on load', $newBlock, data);
      },
      onLoaded: function onLoaded($newBlock, data) {// console.log('on loaded', $newBlock, data);
      }
    }, userOptions || {});
    infiniteScrollObjects.push(self);
    self.init();
  }

  InfiniteScroll.prototype = $.extend({
    // init
    init: function init() {
      var self = this;
      self.options.init.apply(self); // on click load more

      self.options.createLoadMoreButton.apply(self).on('click', function () {
        self.loadMore();
      });
    },
    // load more action
    loadMore: function loadMore() {
      var self = this;

      if (self.busy || !self.options.nextPageUrl) {
        return;
      }

      self.busy = true; // loading event

      self.options.startLoading.apply(self); // load to invisible container, then append to posts container

      $.get(self.options.nextPageUrl, {}, function (data) {
        var data = data.replace('<body', '<body><div id="nk-infinite-load-body"').replace('</body>', '</div></body>');
        var $body = $(data).filter('#nk-infinite-load-body'); // find current block on new page

        var $newBlock = $body.find('[data-nk-infinite-scroll="true"][data-id="' + self.options.id + '"]');

        if ($newBlock.length) {
          // on load event
          self.options.onLoad.apply(self, [$newBlock, data]);
        } // update next page data


        self.options.nextPageUrl = $newBlock.attr('data-next-page-url');
        self.busy = false; // loading event

        self.options.endLoading.apply(self); // on loaded event

        self.options.onLoaded.apply(self, [$newBlock, data]);
      });
    }
  }, InfiniteScroll.prototype);
  /**
   * Get window size
   */

  var $wnd = $(window);
  var wndW = 0;
  var wndH = 0;

  function getWndSize() {
    wndW = $wnd.width();
    wndH = $wnd.height();
  }

  getWndSize();
  $wnd.on('resize load orientationchange', getWndSize);
  /**
   * In Viewport checker
   * return visible percent from 0 to 1
   */

  function isInViewport($item) {
    var rect = $item[0].getBoundingClientRect();
    return rect.bottom >= 0 && rect.right >= 0 && rect.top <= wndH && rect.left <= wndW;
  }
  /* Load new posts when scrolled page */


  var scrollTimeout;
  $(window).on('scroll resize load', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function () {
      for (var k = 0; k < infiniteScrollObjects.length; k++) {
        var item = infiniteScrollObjects[k];

        if (item.options.infinite && isInViewport(item.$block)) {
          item.loadMore();
        }
      }
    }, 20);
  }); // Global init function

  window.nkInfiniteScroll = function ($block, options) {
    $block.each(function () {
      return new InfiniteScroll($(this), options);
    });
  };
})(jQuery);
/**
 * INIT CODE
 */


(function ($) {
  "use strict";

  var loading = nk_infinite_scroll.loading;
  var load_more_posts = nk_infinite_scroll.load_more_posts;
  var no_more_posts = nk_infinite_scroll.no_more_posts; // init all infinite blocks

  nkInfiniteScroll($('[data-nk-infinite-scroll="true"]'), {
    init: function init() {
      this.$pagination = this.$block.prev('.nk-pagination');
      this.$container = this.$pagination.prev('.clearfix').prev('.nk-load-more-container, .nk-infinite-scroll-container');
      this.options.infinite = this.$container.hasClass('nk-infinite-scroll-container');
    },
    createLoadMoreButton: function createLoadMoreButton() {
      if (!this.loadMoreButton) {
        this.loadMoreButton = this.$pagination.html('<a href="javascript:void(0)" class="nk-btn nk-btn-lg nk-btn-circle">').children('a');
      }

      return this.loadMoreButton.html(load_more_posts);
    },
    createNoMoreButton: function createNoMoreButton() {
      return this.loadMoreButton.html(no_more_posts);
    },
    // Show preloader
    startLoading: function startLoading() {
      this.loadMoreButton.html(loading);
    },
    // Insert new loaded items
    onLoad: function onLoad($newBlock, data) {
      var self = this;
      var $newCont = $newBlock.prev('.nk-pagination').prev('.clearfix').prev('.nk-load-more-container, .nk-infinite-scroll-container'); // update items

      var $items = $newCont.children();
      self.$container.append($items);

      if (self.$container.hasClass('isotope')) {
        self.$container.isotope('appended', $items);
        self.$container.imagesLoaded().progress(function () {
          self.$container.isotope('layout');
        }); // fix isotope layout after appended item

        setTimeout(function () {
          self.$container.isotope('layout');
        }, 100);
      }
    }
  });
})(jQuery);

/***/ })

/******/ });