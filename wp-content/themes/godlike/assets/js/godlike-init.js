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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/*!-----------------------------------------------------------------
  Name: GODLIKE - Gaming Template
  Version: 1.0.0
  Author: _nK
  Website: https://nkdev.info
  Purchase: https://nkdev.info
  Support: https://nk.ticksy.com
  License: You must have a valid license purchased only from ThemeForest (the above link) in order to legally use the theme for your project.
  Copyright 2018.
-------------------------------------------------------------------*/
;

(function () {
  'use strict';
  /*------------------------------------------------------------------
  
    Theme Options
  
  -------------------------------------------------------------------*/

  var options = {
    enableSearchAutofocus: godlikeInitOptions.enableSearchAutofocus == 1,
    enableActionLikeAnimation: godlikeInitOptions.enableActionLikeAnimation == 1,
    enableShortcuts: godlikeInitOptions.enableShortcuts == 1,
    enableFadeBetweenPages: godlikeInitOptions.enableFadeBetweenPages == 1,
    enableMouseParallax: godlikeInitOptions.enableMouseParallax == 1,
    enableCookieAlert: godlikeInitOptions.enableCookieAlert == 1,
    scrollToAnchorSpeed: godlikeInitOptions.scrollToAnchorSpeed,
    parallaxSpeed: godlikeInitOptions.parallaxSpeed,
    templates: {
      secondaryNavbarBackItem: godlikeInitOptions.secondaryNavbarBackItem,
      likeAnimationLiked: godlikeInitOptions.likeAnimationLiked,
      likeAnimationDisliked: godlikeInitOptions.likeAnimationDisliked,
      cookieAlert: '<span class="nk-cookie-alert-close"><span class="nk-icon-close"></span></span>\n            ' + godlikeInitOptions.cookieAlertText + ' <a href="' + godlikeInitOptions.cookieAlertLink + '">' + godlikeInitOptions.cookieAlertLinkTitle + '</a>\n            <div class="nk-gap"></div>\n            <span class="nk-cookie-alert-confirm nk-btn link-effect-4 nk-btn-bg-white nk-btn-color-dark-1">' + godlikeInitOptions.cookieAlertButtonTitle + '</span>',
      plainVideoIcon: '<span class="nk-video-icon"><i class="fa fa-play pl-5"></i></span>',
      plainVideoLoadIcon: '<span class="nk-loading-spinner"><i></i></span>',
      fullscreenVideoClose: '<span class="nk-icon-close"></span>',
      gifIcon: '<span class="nk-gif-icon"><i class="fa fa-hand-pointer-o"></i></span>',
      audioPlainButton: '<div class="nk-audio-plain-play-pause">\n                <span class="nk-audio-plain-play">\n                    <span class="ion-play ml-3"></span>\n                </span>\n                <span class="nk-audio-plain-pause">\n                    <span class="ion-pause"></span>\n                </span>\n            </div>',
      instagram: false,
      instagramLoadingText: false,
      instagramFailText: false,
      instagramApiPath: false,
      twitter: false,
      twitterLoadingText: false,
      twitterFailText: false,
      twitterApiPath: false,
      countdown: '<div>\n                <span>%D</span>\n                ' + godlikeInitOptions.days + '\n            </div>\n            <div>\n                <span>%H</span>\n                ' + godlikeInitOptions.hours + '\n            </div>\n            <div>\n                <span>%M</span>\n                ' + godlikeInitOptions.minutes + '\n            </div>\n            <div>\n                <span>%S</span>\n                ' + godlikeInitOptions.seconds + '\n            </div>'
    },
    shortcuts: {
      toggleSearch: godlikeInitOptions.toggleSearch,
      showSearch: godlikeInitOptions.showSearch,
      closeSearch: godlikeInitOptions.closeSearch,
      closeFullscreenVideo: godlikeInitOptions.closeFullscreenVideo,
      postLike: godlikeInitOptions.postLike,
      postDislike: godlikeInitOptions.postDislike,
      postScrollToComments: godlikeInitOptions.postScrollToComments,
      toggleSideLeftNavbar: godlikeInitOptions.toggleSideLeftNavbar,
      openSideLeftNavbar: godlikeInitOptions.openSideLeftNavbar,
      closeSideLeftNavbar: godlikeInitOptions.closeSideLeftNavbar,
      toggleSideRightNavbar: godlikeInitOptions.toggleSideRightNavbar,
      openSideRightNavbar: godlikeInitOptions.openSideRightNavbar,
      closeSideRightNavbar: godlikeInitOptions.closeSideRightNavbar,
      toggleFullscreenNavbar: godlikeInitOptions.toggleFullscreenNavbar,
      openFullscreenNavbar: godlikeInitOptions.openFullscreenNavbar,
      closeFullscreenNavbar: godlikeInitOptions.closeFullscreenNavbar,
      toggleCart: godlikeInitOptions.toggleCart,
      showCart: godlikeInitOptions.showCart,
      closeCart: godlikeInitOptions.closeCart,
      toggleSignForm: godlikeInitOptions.toggleSignForm,
      showSignForm: godlikeInitOptions.showSignForm,
      closeSignForm: godlikeInitOptions.closeSignForm
    },
    events: {
      actionHeart: function actionHeart(params) {},
      actionLike: function actionLike(params) {}
    }
  };

  if (typeof Godlike !== 'undefined') {
    Godlike.setOptions(options);
    Godlike.init();
  }
})();

/***/ })

/******/ });