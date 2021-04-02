(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-html-js', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-wrappers-kotlin-styled-jsLegacy', 'kotlin-css', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-html-js'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-styled-jsLegacy'), require('kotlin-css'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'paintmix'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'paintmix'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'paintmix'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'paintmix'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'paintmix'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'paintmix'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'paintmix'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'paintmix'.");
    }root.paintmix = factory(typeof paintmix === 'undefined' ? {} : paintmix, kotlin, this['kotlinx-html-js'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-wrappers-kotlin-styled-jsLegacy'], this['kotlin-css'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_html_js, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_styled_jsLegacy, $module$kotlin_css, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var set_classes = $module$kotlinx_html_js.kotlinx.html.set_classes_njy09m$;
  var Unit = Kotlin.kotlin.Unit;
  var child = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.child_9r8yuv$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_width = $module$kotlin_css.kotlinx.css.set_width_n8chyh$;
  var set_marginTop = $module$kotlin_css.kotlinx.css.set_marginTop_n8chyh$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_7g4vsr$;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Pair = Kotlin.kotlin.Pair;
  var equals = Kotlin.equals;
  var removeLast = Kotlin.kotlin.collections.removeLast_vvxzk3$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var numberToInt = Kotlin.numberToInt;
  var useEffect = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.useEffect_wrbdb4$;
  var LinearDimension = $module$kotlin_css.kotlinx.css.LinearDimension;
  var set_height = $module$kotlin_css.kotlinx.css.set_height_n8chyh$;
  var FlexBasis = $module$kotlin_css.kotlinx.css.FlexBasis;
  var set_flexBasis = $module$kotlin_css.kotlinx.css.set_flexBasis_e7c78b$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var Math_0 = Math;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var rawUseState = $module$kotlin_wrappers_kotlin_react_jsLegacy.$$importsForInline$$.react.useState;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var RStateDelegate_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RStateDelegate;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var setOf_0 = Kotlin.kotlin.collections.setOf_mh5how$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var await_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.await_t11jrl$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var FlexDirection = $module$kotlin_css.kotlinx.css.FlexDirection;
  var set_flexDirection = $module$kotlin_css.kotlinx.css.set_flexDirection_c4dh0c$;
  var Align = $module$kotlin_css.kotlinx.css.Align;
  var set_alignItems = $module$kotlin_css.kotlinx.css.set_alignItems_olgsez$;
  var JustifyContent = $module$kotlin_css.kotlinx.css.JustifyContent;
  var set_justifyContent = $module$kotlin_css.kotlinx.css.set_justifyContent_gwpzrh$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var Cursor = $module$kotlin_css.kotlinx.css.Cursor;
  var set_cursor = $module$kotlin_css.kotlinx.css.set_cursor_hrkqtc$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var set_borderColor = $module$kotlin_css.kotlinx.css.set_borderColor_ommczd$;
  var BorderStyle = $module$kotlin_css.kotlinx.css.BorderStyle;
  var set_borderStyle = $module$kotlin_css.kotlinx.css.set_borderStyle_whe14r$;
  var set_borderTopStyle = $module$kotlin_css.kotlinx.css.set_borderTopStyle_whe14r$;
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_1(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function () {
      closure$props.clickCustomSetting();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function () {
      closure$props.clickLevelSetting();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$props) {
    return function () {
      closure$props.clickDeleteSetting();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.clickCustom = actionBar$lambda$lambda$lambda$lambda$lambda$lambda(closure$props);
      $receiver.clickLevel = actionBar$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props);
      $receiver.clickDelete = actionBar$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$props);
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(actionBar$lambda$lambda$lambda$lambda$lambda(closure$props));
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_0(closure$props) {
    return function (it) {
      closure$props.clickRemoveTube();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_1(closure$props) {
    return function (it) {
      closure$props.clickAddTube();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_2(closure$props) {
    return function (it) {
      closure$props.clickReady();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_3(closure$props) {
    return function (it) {
      closure$props.clickReset();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_4(closure$props) {
    return function (it) {
      closure$props.clickNew();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_5(closure$props) {
    return function (it) {
      closure$props.clickNextLevel();
      return Unit;
    };
  }
  function actionBar$lambda$lambda$lambda$lambda$lambda_6(closure$props) {
    return function (it) {
      closure$props.clickReset();
      return Unit;
    };
  }
  function actionBar$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    set_classes($receiver_0.attrs, setOf(['flex', 'flex-row', 'pb-4', 'w-full', 'justify-center']));
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    set_classes($receiver_0_0.attrs, setOf(['pr-4', 'pl-4']));
    child($receiver_0_0, settings, void 0, actionBar$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_52psg1$($receiver_0_0.create());
    if (props.isCustomLevel) {
      if (!props.isReady) {
        var $receiver_0_1 = new RDOMBuilder_init(img$lambda(null, null, null));
        var $receiver_1 = $receiver_0_1.attrs;
        set_classes($receiver_1, setOf(['pr-4', 'pl-4', 'h-14']));
        $receiver_1.src = 'minus.svg';
        set_onClickFunction($receiver_1, actionBar$lambda$lambda$lambda$lambda$lambda_0(props));
        $receiver_0.child_52psg1$($receiver_0_1.create());
        var $receiver_0_2 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0_2.unaryPlus_pdl1vz$(props.numTestTubes.toString());
        set_classes($receiver_0_2.attrs, setOf(['text-6xl', 'pr-4', 'pl-4']));
        $receiver_0.child_52psg1$($receiver_0_2.create());
        var $receiver_0_3 = new RDOMBuilder_init(img$lambda(null, null, null));
        var $receiver_2 = $receiver_0_3.attrs;
        set_classes($receiver_2, setOf(['pr-4', 'pl-4', 'h-14']));
        $receiver_2.src = 'plus.svg';
        set_onClickFunction($receiver_2, actionBar$lambda$lambda$lambda$lambda$lambda_1(props));
        $receiver_0.child_52psg1$($receiver_0_3.create());
        var $receiver_0_4 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
        var $receiver_3 = $receiver_0_4.attrs;
        set_classes($receiver_3, setOf(['text-green-800', 'bg-green-100', 'rounded', 'font-semibold', 'text-2xl', 'pl-2', 'pr-2']));
        $receiver_3.text_61zpoe$('Ready');
        set_onClickFunction($receiver_3, actionBar$lambda$lambda$lambda$lambda$lambda_2(props));
        $receiver_0.child_52psg1$($receiver_0_4.create());
      } else if (!props.isSolved) {
        var $receiver_0_5 = new RDOMBuilder_init(img$lambda(null, null, null));
        var $receiver_4 = $receiver_0_5.attrs;
        set_classes($receiver_4, setOf(['pr-4', 'pl-4', 'h-14']));
        $receiver_4.src = 'refresh.svg';
        set_onClickFunction($receiver_4, actionBar$lambda$lambda$lambda$lambda$lambda_3(props));
        $receiver_0.child_52psg1$($receiver_0_5.create());
      } else {
        var $receiver_0_6 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
        var $receiver_5 = $receiver_0_6.css;
        set_width($receiver_5, get_px(80));
        set_marginTop($receiver_5, get_px(10));
        var $receiver_6 = $receiver_0_6.attrs;
        set_classes($receiver_6, setOf(['rounded', 'font-semibold', 'bg-blue-100', 'text-blue-800', 'text-2xl', 'pl-4', 'pr-4']));
        $receiver_6.text_61zpoe$('New');
        set_onClickFunction($receiver_6, actionBar$lambda$lambda$lambda$lambda$lambda_4(props));
        $receiver_0.child_52psg1$($receiver_0_6.create());
      }
    } else {
      var $receiver_0_7 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0_7.unaryPlus_pdl1vz$(props.level.toString());
      set_classes($receiver_0_7.attrs, setOf(['text-6xl', 'pr-4', 'pl-4']));
      $receiver_0.child_52psg1$($receiver_0_7.create());
      if (props.isSolved) {
        var $receiver_0_8 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
        var $receiver_7 = $receiver_0_8.css;
        set_width($receiver_7, get_px(80));
        set_marginTop($receiver_7, get_px(10));
        var $receiver_8 = $receiver_0_8.attrs;
        set_classes($receiver_8, setOf(['rounded', 'font-semibold', 'bg-blue-100', 'text-blue-800', 'text-2xl', 'pl-4', 'pr-4']));
        $receiver_8.text_61zpoe$('Next Level');
        set_onClickFunction($receiver_8, actionBar$lambda$lambda$lambda$lambda$lambda_5(props));
        $receiver_0.child_52psg1$($receiver_0_8.create());
      } else {
        var $receiver_0_9 = new RDOMBuilder_init(img$lambda(null, null, null));
        var $receiver_9 = $receiver_0_9.attrs;
        set_classes($receiver_9, setOf(['pr-4', 'pl-4', 'h-14']));
        $receiver_9.src = 'refresh.svg';
        set_onClickFunction($receiver_9, actionBar$lambda$lambda$lambda$lambda$lambda_6(props));
        $receiver_0.child_52psg1$($receiver_0_9.create());
      }
    }
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var actionBar;
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function div$lambda_0(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var MAX_TUBES_PER_ROW;
  function Board(start, end, tubes, maxTubeSize) {
    this.start = start;
    this.end = end;
    this.tubes = tubes;
    this.maxTubeSize = maxTubeSize;
  }
  Board.prototype.isSolved = function () {
    var colorsMap = HashMap_init();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = this.tubes.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var tmp$_1;
      tmp$_1 = item.paints.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (!colorsMap.containsKey_11rb$(element)) {
          var value = LinkedHashSet_init();
          colorsMap.put_xwzc9p$(element, value);
        }ensureNotNull(colorsMap.get_11rb$(element)).add_11rb$(index_0);
      }
    }
    var $receiver = colorsMap.values;
    var all$result;
    all$break: do {
      var tmp$_2;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        if (!(element_0.size <= 1)) {
          all$result = false;
          break all$break;
        }}
      all$result = true;
    }
     while (false);
    return all$result;
  };
  Board.prototype.selectTube_za3lpa$ = function (index) {
    if (this.start == null) {
      return new Pair(index, null);
    }if (index === this.start) {
      return new Pair(null, null);
    }this.makeMove_1g3ugi$(this.start, index);
    return new Pair(null, null);
  };
  Board.prototype.isLegalMove_1g3ugi$ = function (start, end) {
    if (start == null || end == null) {
      return false;
    }if (start >= this.tubes.size || end >= this.tubes.size || start < 0 || end < 0) {
      return false;
    }if (this.tubes.get_za3lpa$(start).isEmpty()) {
      return false;
    }if (this.tubes.get_za3lpa$(end).isFull_za3lpa$(this.maxTubeSize)) {
      return false;
    }if (this.tubes.get_za3lpa$(start).topPaintInTube() == null) {
      return false;
    }if (this.tubes.get_za3lpa$(end).topPaintInTube() == null) {
      return true;
    }return equals(this.tubes.get_za3lpa$(start).topPaintInTube(), this.tubes.get_za3lpa$(end).topPaintInTube());
  };
  Board.prototype.makeMove_1g3ugi$ = function (start, end) {
    if (this.isLegalMove_1g3ugi$(start, end)) {
      while (!this.tubes.get_za3lpa$(ensureNotNull(start)).isEmpty() && !this.tubes.get_za3lpa$(ensureNotNull(end)).isFull_za3lpa$(this.maxTubeSize) && (equals(this.tubes.get_za3lpa$(start).topPaintInTube(), this.tubes.get_za3lpa$(end).topPaintInTube()) || this.tubes.get_za3lpa$(end).topPaintInTube() == null)) {
        var paint = removeLast(this.tubes.get_za3lpa$(start).paints);
        this.tubes.get_za3lpa$(end).paints.add_11rb$(paint);
      }
    }};
  Board.$metadata$ = {kind: Kind_CLASS, simpleName: 'Board', interfaces: []};
  Board.prototype.component1 = function () {
    return this.start;
  };
  Board.prototype.component2 = function () {
    return this.end;
  };
  Board.prototype.component3 = function () {
    return this.tubes;
  };
  Board.prototype.component4 = function () {
    return this.maxTubeSize;
  };
  Board.prototype.copy_kvh30b$ = function (start, end, tubes, maxTubeSize) {
    return new Board(start === void 0 ? this.start : start, end === void 0 ? this.end : end, tubes === void 0 ? this.tubes : tubes, maxTubeSize === void 0 ? this.maxTubeSize : maxTubeSize);
  };
  Board.prototype.toString = function () {
    return 'Board(start=' + Kotlin.toString(this.start) + (', end=' + Kotlin.toString(this.end)) + (', tubes=' + Kotlin.toString(this.tubes)) + (', maxTubeSize=' + Kotlin.toString(this.maxTubeSize)) + ')';
  };
  Board.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.end) | 0;
    result = result * 31 + Kotlin.hashCode(this.tubes) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxTubeSize) | 0;
    return result;
  };
  Board.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.start, other.start) && Kotlin.equals(this.end, other.end) && Kotlin.equals(this.tubes, other.tubes) && Kotlin.equals(this.maxTubeSize, other.maxTubeSize)))));
  };
  function board$lambda$lambda(closure$setBoard, closure$props, closure$setTubesPerRow) {
    return function () {
      closure$setBoard(closure$props.board);
      var numTubes = closure$props.board.tubes.size;
      var x = numTubes * 1.0 / 6;
      var numRows = Math_0.ceil(x);
      var tmp$ = closure$setTubesPerRow;
      var x_0 = numTubes / numRows;
      tmp$(numberToInt(Math_0.ceil(x_0)));
      return Unit;
    };
  }
  function board$lambda$lambda$lambda$lambda$lambda(closure$props, closure$index) {
    return function (it) {
      closure$props.onClick(closure$index);
      return Unit;
    };
  }
  function board$lambda$lambda$lambda$lambda$lambda_0(closure$board, closure$tube, closure$index) {
    return function ($receiver) {
      $receiver.maxSize = closure$board.maxTubeSize;
      $receiver.testTube = closure$tube;
      $receiver.isStart = closure$board.start === closure$index;
      var x = closure$board.tubes.size / 6;
      $receiver.numRows = numberToInt(Math_0.ceil(x));
      return Unit;
    };
  }
  function board$lambda$lambda$lambda$lambda(closure$board, closure$tube, closure$index) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(board$lambda$lambda$lambda$lambda$lambda_0(closure$board, closure$tube, closure$index));
      return Unit;
    };
  }
  function board$lambda($receiver, props) {
    var tmp$, tmp$_0;
    var tmp$_1 = rawUseState(props.board);
    var state = tmp$_1[0];
    var setState = tmp$_1[1];
    var tmp$_2 = new RStateDelegate_init((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), typeof (tmp$_0 = setState) === 'function' ? tmp$_0 : throwCCE());
    var board = tmp$_2.component1(), setBoard = tmp$_2.component2();
    var tmp$_3, tmp$_0_0;
    var tmp$_1_0 = rawUseState(0);
    var state_0 = tmp$_1_0[0];
    var setState_0 = tmp$_1_0[1];
    var tmp$_4 = new RStateDelegate_init((tmp$_3 = state_0) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE(), typeof (tmp$_0_0 = setState_0) === 'function' ? tmp$_0_0 : throwCCE());
    var tubesPerRow = tmp$_4.component1(), setTubesPerRow = tmp$_4.component2();
    useEffect(listOf(props.board), board$lambda$lambda(setBoard, props, setTubesPerRow));
    var $receiver_0 = new RDOMBuilder_init(div$lambda_0(null));
    set_classes($receiver_0.attrs, setOf(['w-full', 'flex', 'flex-row', 'flex-wrap', 'items-center', 'justify-around']));
    var index = 0;
    for (var tmp$_5 = board.tubes.iterator(); tmp$_5.hasNext(); ++index) {
      var tube = tmp$_5.next();
      if (index % tubesPerRow === 0) {
        var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda);
        var $receiver_1 = $receiver_0_0.css;
        set_height($receiver_1, new LinearDimension('0px'));
        set_width($receiver_1, new LinearDimension('100vw'));
        $receiver_0.child_52psg1$($receiver_0_0.create());
      }var $receiver_0_1 = new StyledDOMBuilder_init(styledDiv$lambda);
      var $receiver_2 = $receiver_0_1.css;
      var x = 1 / 7;
      set_flexBasis($receiver_2, new FlexBasis(Math_0.ceil(x).toString() + '%'));
      set_onClickFunction($receiver_0_1.attrs, board$lambda$lambda$lambda$lambda$lambda(props, index));
      child($receiver_0_1, testTube, void 0, board$lambda$lambda$lambda$lambda(board, tube, index));
      $receiver_0.child_52psg1$($receiver_0_1.create());
    }
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var board;
  function main$lambda$lambda($receiver) {
    child($receiver, paintMixer);
    return Unit;
  }
  function main$lambda(it) {
    render(document.getElementById('root'), void 0, main$lambda$lambda);
    return Unit;
  }
  function main() {
    window.onload = main$lambda;
  }
  function p$lambda_0(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_1(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function customLevel$lambda$lambda$lambda$lambda$lambda(closure$props) {
    return function (color) {
      closure$props.onPaletteClick(color);
      return Unit;
    };
  }
  function customLevel$lambda$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.colors = Paints_getInstance().ALL_COLORS;
      $receiver.onClick = customLevel$lambda$lambda$lambda$lambda$lambda(closure$props);
      return Unit;
    };
  }
  function customLevel$lambda$lambda$lambda(closure$props) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(customLevel$lambda$lambda$lambda$lambda(closure$props));
      return Unit;
    };
  }
  function customLevel$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_1(null));
    set_classes($receiver_0.attrs, setOf(['flex-column', 'items-center']));
    if (!props.isReady) {
      child($receiver_0, palette, void 0, customLevel$lambda$lambda$lambda(props));
    }if (props.isSolved) {
      var $receiver_0_0 = new RDOMBuilder_init(p$lambda_0(null));
      $receiver_0_0.unaryPlus_pdl1vz$('Solved!');
      set_classes($receiver_0_0.attrs, setOf_0('text-9xl'));
      $receiver_0.child_52psg1$($receiver_0_0.create());
    }$receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var customLevel;
  function Level(tubes) {
    this.tubes = tubes;
  }
  Level.prototype.createTubes = function () {
    var $receiver = this.tubes;
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var destination_0 = ArrayList_init(item.length);
      var tmp$_1;
      loop_label: for (tmp$_1 = 0; tmp$_1 !== item.length; ++tmp$_1) {
        var item_0 = item[tmp$_1];
        var tmp$_2 = destination_0.add_11rb$;
        var transform$result;
        transform$break: do {
          switch (item_0.toUpperCase()) {
            case 'P':
            case 'PINK':
              transform$result = Color.Companion.pink;
              break transform$break;
            case 'R':
            case 'RED':
              transform$result = Color.Companion.red;
              break transform$break;
            case 'O':
            case 'ORANGE':
              transform$result = Color.Companion.orange;
              break transform$break;
            case 'Y':
            case 'YELLOW':
              transform$result = Color.Companion.yellow;
              break transform$break;
            case 'L':
            case 'LIMEGREEN':
              transform$result = Color.Companion.limeGreen;
              break transform$break;
            case 'GR':
            case 'GREEN':
              transform$result = Color.Companion.green;
              break transform$break;
            case 'C':
            case 'CYAN':
              transform$result = Color.Companion.cyan;
              break transform$break;
            case 'B':
            case 'BLUE':
              transform$result = Color.Companion.blue;
              break transform$break;
            case 'PURPLE':
              transform$result = Color.Companion.purple;
              break transform$break;
            case 'G':
            case 'GREY':
              transform$result = Color.Companion.grey;
              break transform$break;
            default:transform$result = Color.Companion.white;
              break transform$break;
          }
        }
         while (false);
        tmp$_2.call(destination_0, transform$result);
      }
      var colors = toMutableList(destination_0);
      tmp$_0.call(destination, new TestTube(colors));
    }
    return toMutableList(destination);
  };
  Level.$metadata$ = {kind: Kind_CLASS, simpleName: 'Level', interfaces: []};
  Level.prototype.component1 = function () {
    return this.tubes;
  };
  Level.prototype.copy_bwh3i6$ = function (tubes) {
    return new Level(tubes === void 0 ? this.tubes : tubes);
  };
  Level.prototype.toString = function () {
    return 'Level(tubes=' + Kotlin.toString(this.tubes) + ')';
  };
  Level.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tubes) | 0;
    return result;
  };
  Level.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.tubes, other.tubes))));
  };
  function styledDiv$lambda_0(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  var START_TUBES;
  var MIN_TUBES;
  var MAX_TUBES;
  var MAX_TUBE_SIZE;
  var LEVEL_KEY;
  var BACKEND_URL;
  function paintMixer$lambda$lambda(closure$isSolved, closure$isCustomLevel, closure$setTubes, closure$numTestTubes) {
    return function () {
      if (!closure$isSolved && closure$isCustomLevel) {
        var tmp$ = closure$setTubes;
        var $receiver = downTo(closure$numTestTubes, 1);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination.add_11rb$(new TestTube(ArrayList_init_0()));
        }
        tmp$(toMutableList(destination));
      }return Unit;
    };
  }
  function Coroutine$paintMixer$lambda$lambda$lambda(closure$level_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$level = closure$level_0;
  }
  Coroutine$paintMixer$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$paintMixer$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$paintMixer$lambda$lambda$lambda.prototype.constructor = Coroutine$paintMixer$lambda$lambda$lambda;
  Coroutine$paintMixer$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            localStorage[LEVEL_KEY] = this.local$closure$level.toString();
            return Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function paintMixer$lambda$lambda$lambda(closure$level_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$paintMixer$lambda$lambda$lambda(closure$level_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$paintMixer$lambda$lambda$lambda_0(closure$level_0, closure$setNumTestTubes_0, closure$setTubes_0, closure$setOriginalTubes_0, closure$setIsReady_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$level = closure$level_0;
    this.local$closure$setNumTestTubes = closure$setNumTestTubes_0;
    this.local$closure$setTubes = closure$setTubes_0;
    this.local$closure$setOriginalTubes = closure$setOriginalTubes_0;
    this.local$closure$setIsReady = closure$setIsReady_0;
  }
  Coroutine$paintMixer$lambda$lambda$lambda_0.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$paintMixer$lambda$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$paintMixer$lambda$lambda$lambda_0.prototype.constructor = Coroutine$paintMixer$lambda$lambda$lambda_0;
  Coroutine$paintMixer$lambda$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = await_0(window.fetch(BACKEND_URL + '?level=' + this.local$closure$level), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var levelApi = this.result_0;
            this.state_0 = 3;
            this.result_0 = await_0(levelApi.json(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var levelJson = this.result_0;
            var partialLevel = levelJson;
            var partialTubes = JSON.parse(typeof (tmp$ = partialLevel.tubes) === 'string' ? tmp$ : throwCCE());
            var newLevel = new Level(partialTubes);
            this.local$closure$setNumTestTubes(newLevel.createTubes().size);
            this.local$closure$setTubes(newLevel.createTubes());
            this.local$closure$setOriginalTubes(newLevel.createTubes());
            return this.local$closure$setIsReady(true);
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function paintMixer$lambda$lambda$lambda_0(closure$level_0, closure$setNumTestTubes_0, closure$setTubes_0, closure$setOriginalTubes_0, closure$setIsReady_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$paintMixer$lambda$lambda$lambda_0(closure$level_0, closure$setNumTestTubes_0, closure$setTubes_0, closure$setOriginalTubes_0, closure$setIsReady_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function paintMixer$lambda$lambda_0(closure$level, closure$isCustomLevel, closure$setNumTestTubes, closure$setTubes, closure$setOriginalTubes, closure$setIsReady) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, paintMixer$lambda$lambda$lambda(closure$level));
      if (closure$level > 0 && !closure$isCustomLevel) {
        launch(coroutines.GlobalScope, void 0, void 0, paintMixer$lambda$lambda$lambda_0(closure$level, closure$setNumTestTubes, closure$setTubes, closure$setOriginalTubes, closure$setIsReady));
      }return Unit;
    };
  }
  function Coroutine$paintMixer$lambda$lambda$lambda_1(closure$setLevel_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$setLevel = closure$setLevel_0;
  }
  Coroutine$paintMixer$lambda$lambda$lambda_1.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$paintMixer$lambda$lambda$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$paintMixer$lambda$lambda$lambda_1.prototype.constructor = Coroutine$paintMixer$lambda$lambda$lambda_1;
  Coroutine$paintMixer$lambda$lambda$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            var tmp$_1;
            if ((tmp$ = localStorage[LEVEL_KEY]) != null) {
              this.local$closure$setLevel(toInt(tmp$));
              tmp$_1 = Unit;
            } else
              tmp$_1 = null;
            var tmp$_2;
            if ((tmp$_0 = tmp$_1) != null)
              tmp$_2 = tmp$_0;
            else {
              var closure$setLevel = this.local$closure$setLevel;
              console.log('setting level to 1 womp womp');
              closure$setLevel(1);
              tmp$_2 = Unit;
            }

            return tmp$_2;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function paintMixer$lambda$lambda$lambda_1(closure$setLevel_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$paintMixer$lambda$lambda$lambda_1(closure$setLevel_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function paintMixer$lambda$lambda_1(closure$setLevel) {
    return function () {
      launch(coroutines.GlobalScope, void 0, void 0, paintMixer$lambda$lambda$lambda_1(closure$setLevel));
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda(closure$setIsCustomLevel) {
    return function () {
      closure$setIsCustomLevel(true);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_0(closure$setIsCustomLevel) {
    return function () {
      closure$setIsCustomLevel(false);
      return Unit;
    };
  }
  function Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: null, interfaces: [CoroutineImpl]};
  Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda.prototype.constructor = Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda;
  Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return localStorage.removeItem(LEVEL_KEY), Unit;
          case 1:
            throw this.exception_0;
          default:this.state_0 = 1;
            throw new Error('State Machine Unreachable execution');
        }
      } catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        } else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function paintMixer$lambda$lambda$lambda$lambda$lambda$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$paintMixer$lambda$lambda$lambda$lambda$lambda$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_1() {
    launch(coroutines.GlobalScope, void 0, void 0, paintMixer$lambda$lambda$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_2(closure$numTestTubes, closure$setNumTestTubes) {
    return function () {
      if (closure$numTestTubes < 18) {
        closure$setNumTestTubes(closure$numTestTubes + 1 | 0);
      }return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_3(closure$numTestTubes, closure$setNumTestTubes) {
    return function () {
      if (closure$numTestTubes > 2) {
        closure$setNumTestTubes(closure$numTestTubes - 1 | 0);
      }return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_4(closure$originalTubes, closure$setTubes) {
    return function () {
      if (closure$originalTubes != null) {
        var $receiver = closure$originalTubes;
        var closure$setTubes_0 = closure$setTubes;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(new TestTube(toMutableList(item.paints)));
        }
        var tubesCopy = destination;
        closure$setTubes_0(toMutableList(tubesCopy));
      }return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_5(closure$tubes, closure$setOriginalTubes, closure$setIsReady) {
    return function () {
      var $receiver = closure$tubes;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new TestTube(toMutableList(item.paints)));
      }
      var originalTubesCopy = destination;
      closure$setOriginalTubes(toMutableList(originalTubesCopy));
      closure$setIsReady(true);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_6(closure$setOriginalTubes, closure$setIsReady, closure$setIsSolved, closure$setNumTestTubes) {
    return function () {
      closure$setOriginalTubes(null);
      closure$setIsReady(false);
      closure$setIsSolved(false);
      closure$setNumTestTubes(4);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_7(closure$setLevel, closure$level) {
    return function () {
      closure$setLevel(closure$level + 1 | 0);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda(closure$setIsCustomLevel, closure$numTestTubes, closure$setNumTestTubes, closure$originalTubes, closure$setTubes, closure$tubes, closure$setOriginalTubes, closure$setIsReady, closure$setIsSolved, closure$setLevel, closure$level, closure$isReady, closure$isSolved, closure$isCustomLevel) {
    return function ($receiver) {
      $receiver.clickCustomSetting = paintMixer$lambda$lambda$lambda$lambda$lambda(closure$setIsCustomLevel);
      $receiver.clickLevelSetting = paintMixer$lambda$lambda$lambda$lambda$lambda_0(closure$setIsCustomLevel);
      $receiver.clickDeleteSetting = paintMixer$lambda$lambda$lambda$lambda$lambda_1;
      $receiver.clickAddTube = paintMixer$lambda$lambda$lambda$lambda$lambda_2(closure$numTestTubes, closure$setNumTestTubes);
      $receiver.clickRemoveTube = paintMixer$lambda$lambda$lambda$lambda$lambda_3(closure$numTestTubes, closure$setNumTestTubes);
      $receiver.clickReset = paintMixer$lambda$lambda$lambda$lambda$lambda_4(closure$originalTubes, closure$setTubes);
      $receiver.clickReady = paintMixer$lambda$lambda$lambda$lambda$lambda_5(closure$tubes, closure$setOriginalTubes, closure$setIsReady);
      $receiver.clickNew = paintMixer$lambda$lambda$lambda$lambda$lambda_6(closure$setOriginalTubes, closure$setIsReady, closure$setIsSolved, closure$setNumTestTubes);
      $receiver.clickNextLevel = paintMixer$lambda$lambda$lambda$lambda$lambda_7(closure$setLevel, closure$level);
      $receiver.numTestTubes = closure$numTestTubes;
      $receiver.level = closure$level;
      $receiver.isReady = closure$isReady;
      $receiver.isSolved = closure$isSolved;
      $receiver.isCustomLevel = closure$isCustomLevel;
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda_2(closure$setIsCustomLevel, closure$numTestTubes, closure$setNumTestTubes, closure$originalTubes, closure$setTubes, closure$tubes, closure$setOriginalTubes, closure$setIsReady, closure$setIsSolved, closure$setLevel, closure$level, closure$isReady, closure$isSolved, closure$isCustomLevel) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(paintMixer$lambda$lambda$lambda$lambda(closure$setIsCustomLevel, closure$numTestTubes, closure$setNumTestTubes, closure$originalTubes, closure$setTubes, closure$tubes, closure$setOriginalTubes, closure$setIsReady, closure$setIsSolved, closure$setLevel, closure$level, closure$isReady, closure$isSolved, closure$isCustomLevel));
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_8(closure$isReady, this$, closure$setStart, closure$setEnd, closure$setTubes, closure$setIsSolved, closure$selectedColor, closure$tubes) {
    return function (index) {
      if (closure$isReady) {
        var newIndices = this$.board.selectTube_za3lpa$(index);
        closure$setStart(newIndices.first);
        closure$setEnd(newIndices.second);
        var $receiver = this$.board.tubes;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(item.copy_go26g5$());
        }
        var newTubes = destination;
        closure$setTubes(toMutableList(newTubes));
        closure$setIsSolved(this$.board.isSolved());
      } else {
        if (closure$selectedColor != null) {
          var $receiver_0 = closure$selectedColor;
          var closure$tubes_0 = closure$tubes;
          var closure$setTubes_0 = closure$setTubes;
          var destination_0 = ArrayList_init(collectionSizeOrDefault(closure$tubes_0, 10));
          var tmp$_0;
          tmp$_0 = closure$tubes_0.iterator();
          while (tmp$_0.hasNext()) {
            var item_0 = tmp$_0.next();
            destination_0.add_11rb$(item_0.copy_go26g5$());
          }
          var newTubes_0 = destination_0;
          newTubes_0.get_za3lpa$(index).paints.add_11rb$($receiver_0);
          closure$setTubes_0(toMutableList(newTubes_0));
        }}
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda_0(closure$start, closure$end, closure$tubes, closure$isReady, closure$setStart, closure$setEnd, closure$setTubes, closure$setIsSolved, closure$selectedColor) {
    return function ($receiver) {
      $receiver.board = new Board(closure$start, closure$end, closure$tubes, 4);
      $receiver.onClick = paintMixer$lambda$lambda$lambda$lambda$lambda_8(closure$isReady, $receiver, closure$setStart, closure$setEnd, closure$setTubes, closure$setIsSolved, closure$selectedColor, closure$tubes);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda_3(closure$start, closure$end, closure$tubes, closure$isReady, closure$setStart, closure$setEnd, closure$setTubes, closure$setIsSolved, closure$selectedColor) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(paintMixer$lambda$lambda$lambda$lambda_0(closure$start, closure$end, closure$tubes, closure$isReady, closure$setStart, closure$setEnd, closure$setTubes, closure$setIsSolved, closure$selectedColor));
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda$lambda_9(closure$setSelectedColor) {
    return function (color) {
      closure$setSelectedColor(color);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda$lambda_1(closure$isReady, closure$isSolved, closure$setSelectedColor) {
    return function ($receiver) {
      $receiver.isReady = closure$isReady;
      $receiver.isSolved = closure$isSolved;
      $receiver.onPaletteClick = paintMixer$lambda$lambda$lambda$lambda$lambda_9(closure$setSelectedColor);
      return Unit;
    };
  }
  function paintMixer$lambda$lambda$lambda_4(closure$isReady, closure$isSolved, closure$setSelectedColor) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(paintMixer$lambda$lambda$lambda$lambda_1(closure$isReady, closure$isSolved, closure$setSelectedColor));
      return Unit;
    };
  }
  function paintMixer$lambda($receiver, f) {
    var tmp$, tmp$_0;
    var tmp$_1 = rawUseState(null);
    var state = tmp$_1[0];
    var setState = tmp$_1[1];
    var tmp$_2 = new RStateDelegate_init((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), typeof (tmp$_0 = setState) === 'function' ? tmp$_0 : throwCCE());
    var selectedColor = tmp$_2.component1(), setSelectedColor = tmp$_2.component2();
    var tmp$_3, tmp$_0_0;
    var tmp$_1_0 = rawUseState(false);
    var state_0 = tmp$_1_0[0];
    var setState_0 = tmp$_1_0[1];
    var tmp$_4 = new RStateDelegate_init((tmp$_3 = state_0) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE(), typeof (tmp$_0_0 = setState_0) === 'function' ? tmp$_0_0 : throwCCE());
    var isReady = tmp$_4.component1(), setIsReady = tmp$_4.component2();
    var tmp$_5, tmp$_0_1;
    var tmp$_1_1 = rawUseState(false);
    var state_1 = tmp$_1_1[0];
    var setState_1 = tmp$_1_1[1];
    var tmp$_6 = new RStateDelegate_init((tmp$_5 = state_1) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE(), typeof (tmp$_0_1 = setState_1) === 'function' ? tmp$_0_1 : throwCCE());
    var isSolved = tmp$_6.component1(), setIsSolved = tmp$_6.component2();
    var tmp$_7, tmp$_0_2;
    var tmp$_1_2 = rawUseState(4);
    var state_2 = tmp$_1_2[0];
    var setState_2 = tmp$_1_2[1];
    var tmp$_8 = new RStateDelegate_init((tmp$_7 = state_2) == null || Kotlin.isType(tmp$_7, Any) ? tmp$_7 : throwCCE(), typeof (tmp$_0_2 = setState_2) === 'function' ? tmp$_0_2 : throwCCE());
    var numTestTubes = tmp$_8.component1(), setNumTestTubes = tmp$_8.component2();
    var tmp$_9, tmp$_0_3;
    var tmp$_1_3 = rawUseState(null);
    var state_3 = tmp$_1_3[0];
    var setState_3 = tmp$_1_3[1];
    var tmp$_10 = new RStateDelegate_init((tmp$_9 = state_3) == null || Kotlin.isType(tmp$_9, Any) ? tmp$_9 : throwCCE(), typeof (tmp$_0_3 = setState_3) === 'function' ? tmp$_0_3 : throwCCE());
    var start = tmp$_10.component1(), setStart = tmp$_10.component2();
    var tmp$_11, tmp$_0_4;
    var tmp$_1_4 = rawUseState(null);
    var state_4 = tmp$_1_4[0];
    var setState_4 = tmp$_1_4[1];
    var tmp$_12 = new RStateDelegate_init((tmp$_11 = state_4) == null || Kotlin.isType(tmp$_11, Any) ? tmp$_11 : throwCCE(), typeof (tmp$_0_4 = setState_4) === 'function' ? tmp$_0_4 : throwCCE());
    var end = tmp$_12.component1(), setEnd = tmp$_12.component2();
    var tmp$_13, tmp$_0_5;
    var tmp$_1_5 = rawUseState(1);
    var state_5 = tmp$_1_5[0];
    var setState_5 = tmp$_1_5[1];
    var tmp$_14 = new RStateDelegate_init((tmp$_13 = state_5) == null || Kotlin.isType(tmp$_13, Any) ? tmp$_13 : throwCCE(), typeof (tmp$_0_5 = setState_5) === 'function' ? tmp$_0_5 : throwCCE());
    var level = tmp$_14.component1(), setLevel = tmp$_14.component2();
    var tmp$_15, tmp$_0_6;
    var tmp$_1_6 = rawUseState(true);
    var state_6 = tmp$_1_6[0];
    var setState_6 = tmp$_1_6[1];
    var tmp$_16 = new RStateDelegate_init((tmp$_15 = state_6) == null || Kotlin.isType(tmp$_15, Any) ? tmp$_15 : throwCCE(), typeof (tmp$_0_6 = setState_6) === 'function' ? tmp$_0_6 : throwCCE());
    var isCustomLevel = tmp$_16.component1(), setIsCustomLevel = tmp$_16.component2();
    var tmp$_17, tmp$_0_7;
    var tmp$_1_7 = rawUseState(null);
    var state_7 = tmp$_1_7[0];
    var setState_7 = tmp$_1_7[1];
    var tmp$_18 = new RStateDelegate_init((tmp$_17 = state_7) == null || Kotlin.isType(tmp$_17, Any) ? tmp$_17 : throwCCE(), typeof (tmp$_0_7 = setState_7) === 'function' ? tmp$_0_7 : throwCCE());
    var originalTubes = tmp$_18.component1(), setOriginalTubes = tmp$_18.component2();
    var $receiver_0 = downTo(numTestTubes, 1);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_19;
    tmp$_19 = $receiver_0.iterator();
    while (tmp$_19.hasNext()) {
      var item = tmp$_19.next();
      destination.add_11rb$(new TestTube(ArrayList_init_0()));
    }
    var tmp$_20, tmp$_0_8;
    var tmp$_1_8 = rawUseState(toMutableList(destination));
    var state_8 = tmp$_1_8[0];
    var setState_8 = tmp$_1_8[1];
    var tmp$_21 = new RStateDelegate_init((tmp$_20 = state_8) == null || Kotlin.isType(tmp$_20, Any) ? tmp$_20 : throwCCE(), typeof (tmp$_0_8 = setState_8) === 'function' ? tmp$_0_8 : throwCCE());
    var tubes = tmp$_21.component1(), setTubes = tmp$_21.component2();
    useEffect(listOf_0([numTestTubes, isSolved]), paintMixer$lambda$lambda(isSolved, isCustomLevel, setTubes, numTestTubes));
    useEffect(listOf_0([level, isCustomLevel]), paintMixer$lambda$lambda_0(level, isCustomLevel, setNumTestTubes, setTubes, setOriginalTubes, setIsReady));
    useEffect(emptyList(), paintMixer$lambda$lambda_1(setLevel));
    var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_0);
    var $receiver_1 = $receiver_0_0.css;
    set_display($receiver_1, Display.flex);
    set_flexDirection($receiver_1, FlexDirection.column);
    set_alignItems($receiver_1, Align.center);
    set_justifyContent($receiver_1, JustifyContent.center);
    set_height($receiver_1, new LinearDimension('100vh'));
    child($receiver_0_0, actionBar, void 0, paintMixer$lambda$lambda$lambda_2(setIsCustomLevel, numTestTubes, setNumTestTubes, originalTubes, setTubes, tubes, setOriginalTubes, setIsReady, setIsSolved, setLevel, level, isReady, isSolved, isCustomLevel));
    child($receiver_0_0, board, void 0, paintMixer$lambda$lambda$lambda_3(start, end, tubes, isReady, setStart, setEnd, setTubes, setIsSolved, selectedColor));
    if (isCustomLevel) {
      child($receiver_0_0, customLevel, void 0, paintMixer$lambda$lambda$lambda_4(isReady, isSolved, setSelectedColor));
    }$receiver.child_52psg1$($receiver_0_0.create());
    return Unit;
  }
  var paintMixer;
  function Paints() {
    Paints_instance = this;
    this.ALL_COLORS = listOf_0([Color.Companion.pink, Color.Companion.red, Color.Companion.orange, Color.Companion.yellow, Color.Companion.limeGreen, Color.Companion.green, Color.Companion.cyan, Color.Companion.blue, Color.Companion.purple, Color.Companion.grey]);
  }
  Paints.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Paints', interfaces: []};
  var Paints_instance = null;
  function Paints_getInstance() {
    if (Paints_instance === null) {
      new Paints();
    }return Paints_instance;
  }
  function styledDiv$lambda_1(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function div$lambda_2(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function palette$lambda$lambda$lambda$lambda$lambda(closure$props, closure$color) {
    return function (it) {
      closure$props.onClick(closure$color);
      return Unit;
    };
  }
  function palette$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda_2(null));
    set_classes($receiver_0.attrs, setOf(['flex', 'justify-center']));
    var index = 0;
    for (var tmp$ = props.colors.iterator(); tmp$.hasNext(); ++index) {
      var color = tmp$.next();
      var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_1);
      var $receiver_1 = $receiver_0_0.attrs;
      var tmp$_0;
      if (index === 0)
        tmp$_0 = 'rounded-l-2xl';
      else if (index === (props.colors.size - 1 | 0))
        tmp$_0 = 'rounded-r-2xl';
      else
        tmp$_0 = '';
      set_classes($receiver_1, setOf(['py-4', 'w-16', 'h-16', 'md:w-20', 'md:h-20', 'lg:w-24', 'lg-h-24', tmp$_0]));
      set_onClickFunction($receiver_1, palette$lambda$lambda$lambda$lambda$lambda(props, color));
      var $receiver_2 = $receiver_0_0.css;
      set_backgroundColor($receiver_2, color);
      set_cursor($receiver_2, Cursor.pointer);
      $receiver_0.child_52psg1$($receiver_0_0.create());
    }
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var palette;
  function img$lambda_0(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_0(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function p$lambda_1(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda_3(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  var settingsClasses;
  function settings$lambda$lambda$lambda$lambda$lambda(closure$setIsOpen, closure$isOpen) {
    return function (it) {
      closure$setIsOpen(!closure$isOpen);
      return Unit;
    };
  }
  function settings$lambda$lambda$lambda$lambda$lambda$lambda(closure$props, closure$setIsOpen) {
    return function (it) {
      closure$props.clickLevel();
      closure$setIsOpen(false);
      return Unit;
    };
  }
  function settings$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props, closure$setIsOpen) {
    return function (it) {
      closure$props.clickCustom();
      closure$setIsOpen(false);
      return Unit;
    };
  }
  function settings$lambda$lambda$lambda$lambda$lambda$lambda_1(closure$props, closure$setIsOpen) {
    return function (it) {
      closure$props.clickDelete();
      closure$setIsOpen(false);
      return Unit;
    };
  }
  function settings$lambda($receiver, props) {
    var tmp$, tmp$_0;
    var tmp$_1 = rawUseState(false);
    var state = tmp$_1[0];
    var setState = tmp$_1[1];
    var tmp$_2 = new RStateDelegate_init((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), typeof (tmp$_0 = setState) === 'function' ? tmp$_0 : throwCCE());
    var isOpen = tmp$_2.component1(), setIsOpen = tmp$_2.component2();
    var $receiver_0 = new RDOMBuilder_init(div$lambda_3(null));
    set_classes($receiver_0.attrs, setOf_0('flex-column'));
    var $receiver_0_0 = new RDOMBuilder_init(img$lambda_0(null, null, null));
    var $receiver_1 = $receiver_0_0.attrs;
    set_classes($receiver_1, setOf(['h-14', 'mb-2']));
    $receiver_1.src = 'settings.svg';
    set_onClickFunction($receiver_1, settings$lambda$lambda$lambda$lambda$lambda(setIsOpen, isOpen));
    $receiver_0.child_52psg1$($receiver_0_0.create());
    if (isOpen) {
      var $receiver_0_1 = new RDOMBuilder_init(div$lambda_3(null));
      set_classes($receiver_0_1.attrs, setOf(['flex', 'flex-row', 'border-b-2', 'border-gray-900', 'p-1', 'w-full', 'absolute', 'top-0', 'left-0', 'items-center', 'justify-around']));
      var $receiver_0_2 = new RDOMBuilder_init(div$lambda_3(null));
      var $receiver_2 = $receiver_0_2.attrs;
      set_classes($receiver_2, settingsClasses);
      set_onClickFunction($receiver_2, settings$lambda$lambda$lambda$lambda$lambda$lambda(props, setIsOpen));
      var $receiver_0_3 = new RDOMBuilder_init(img$lambda_0(null, null, null));
      var $receiver_3 = $receiver_0_3.attrs;
      set_classes($receiver_3, setOf(['h-6', 'm-2']));
      $receiver_3.src = 'stairs.svg';
      $receiver_0_2.child_52psg1$($receiver_0_3.create());
      var $receiver_0_4 = new RDOMBuilder_init(p$lambda_1(null));
      $receiver_0_4.unaryPlus_pdl1vz$('Levels');
      $receiver_0_2.child_52psg1$($receiver_0_4.create());
      $receiver_0_1.child_52psg1$($receiver_0_2.create());
      var $receiver_0_5 = new RDOMBuilder_init(div$lambda_3(null));
      var $receiver_4 = $receiver_0_5.attrs;
      set_classes($receiver_4, settingsClasses);
      set_onClickFunction($receiver_4, settings$lambda$lambda$lambda$lambda$lambda$lambda_0(props, setIsOpen));
      var $receiver_0_6 = new RDOMBuilder_init(img$lambda_0(null, null, null));
      var $receiver_5 = $receiver_0_6.attrs;
      set_classes($receiver_5, setOf(['h-6', 'm-2']));
      $receiver_5.src = 'wrench.svg';
      $receiver_0_5.child_52psg1$($receiver_0_6.create());
      var $receiver_0_7 = new RDOMBuilder_init(p$lambda_1(null));
      $receiver_0_7.unaryPlus_pdl1vz$('Level-Maker');
      $receiver_0_5.child_52psg1$($receiver_0_7.create());
      $receiver_0_1.child_52psg1$($receiver_0_5.create());
      var $receiver_0_8 = new RDOMBuilder_init(div$lambda_3(null));
      var $receiver_6 = $receiver_0_8.attrs;
      set_classes($receiver_6, settingsClasses);
      set_onClickFunction($receiver_6, settings$lambda$lambda$lambda$lambda$lambda$lambda_1(props, setIsOpen));
      var $receiver_0_9 = new RDOMBuilder_init(img$lambda_0(null, null, null));
      var $receiver_7 = $receiver_0_9.attrs;
      set_classes($receiver_7, setOf(['h-6', 'm-2']));
      $receiver_7.src = 'trash.svg';
      $receiver_0_8.child_52psg1$($receiver_0_9.create());
      var $receiver_0_10 = new RDOMBuilder_init(p$lambda_1(null));
      $receiver_0_10.unaryPlus_pdl1vz$('Delete save');
      $receiver_0_8.child_52psg1$($receiver_0_10.create());
      $receiver_0_1.child_52psg1$($receiver_0_8.create());
      $receiver_0.child_52psg1$($receiver_0_1.create());
    }$receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var settings;
  function styledDiv$lambda_2(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  var PADDING;
  function TestTube(paints) {
    this.paints = paints;
  }
  TestTube.prototype.isEmpty = function () {
    return this.paints.isEmpty();
  };
  TestTube.prototype.isFull_za3lpa$ = function (maxSize) {
    return this.paints.size === maxSize;
  };
  TestTube.prototype.topPaintInTube = function () {
    return !this.isEmpty() ? last(this.paints) : null;
  };
  TestTube.$metadata$ = {kind: Kind_CLASS, simpleName: 'TestTube', interfaces: []};
  TestTube.prototype.component1 = function () {
    return this.paints;
  };
  TestTube.prototype.copy_go26g5$ = function (paints) {
    return new TestTube(paints === void 0 ? this.paints : paints);
  };
  TestTube.prototype.toString = function () {
    return 'TestTube(paints=' + Kotlin.toString(this.paints) + ')';
  };
  TestTube.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.paints) | 0;
    return result;
  };
  TestTube.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.paints, other.paints))));
  };
  function testTube$lambda$lambda(closure$setTestTube, closure$props) {
    return function () {
      closure$setTestTube(closure$props.testTube);
      return Unit;
    };
  }
  function testTube$lambda($receiver, props) {
    var tmp$, tmp$_0;
    var tmp$_1 = rawUseState(props.testTube);
    var state = tmp$_1[0];
    var setState = tmp$_1[1];
    var tmp$_2 = new RStateDelegate_init((tmp$ = state) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), typeof (tmp$_0 = setState) === 'function' ? tmp$_0 : throwCCE());
    var testTube = tmp$_2.component1(), setTestTube = tmp$_2.component2();
    useEffect(listOf(props.testTube), testTube$lambda$lambda(setTestTube, props));
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
    var $receiver_1 = $receiver_0.css;
    if (props.isStart) {
      set_backgroundColor($receiver_1, new Color('#e80bc329'));
    }set_classes($receiver_0.attrs, setOf(['pl-4', 'pr-4', 'py-8', 'flex', 'flex-col', 'items-center']));
    for (var i = props.maxSize - 1 | 0; i >= 0; i--) {
      var $receiver_0_0 = new StyledDOMBuilder_init(styledDiv$lambda_2);
      var $receiver_2 = $receiver_0_0.css;
      set_borderColor($receiver_2, Color.Companion.black);
      set_borderStyle($receiver_2, BorderStyle.solid);
      set_borderTopStyle($receiver_2, BorderStyle.none);
      set_backgroundColor($receiver_2, (testTube.paints.size - 1 | 0) >= i ? testTube.paints.get_za3lpa$(i) : Color.Companion.white);
      var $receiver_3 = $receiver_0_0.attrs;
      var tmp$_3;
      switch (props.numRows) {
        case 1:
          tmp$_3 = 'w-20 h-20 md:w-24 md:h-24';
          break;
        case 2:
          tmp$_3 = 'w-14 h-14 md:w-20 md:h-20';
          break;
        default:tmp$_3 = 'w-10 h-10 md:w-14 md:h-14';
          break;
      }
      set_classes($receiver_3, setOf(['border-2', tmp$_3, i === 0 ? 'rounded-b-full' : '']));
      $receiver_0.child_52psg1$($receiver_0_0.create());
    }
    $receiver.child_52psg1$($receiver_0.create());
    return Unit;
  }
  var testTube;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  _.Board = Board;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_jsLegacy;
  _.main = main;
  _.Level = Level;
  Object.defineProperty(_, 'Paints', {get: Paints_getInstance});
  _.TestTube = TestTube;
  actionBar = functionalComponent(void 0, actionBar$lambda);
  MAX_TUBES_PER_ROW = 6;
  board = functionalComponent(void 0, board$lambda);
  customLevel = functionalComponent(void 0, customLevel$lambda);
  START_TUBES = 4;
  MIN_TUBES = 2;
  MAX_TUBES = 18;
  MAX_TUBE_SIZE = 4;
  LEVEL_KEY = 'level';
  BACKEND_URL = 'https://us-central1-bored-games-io.cloudfunctions.net/paintmix';
  paintMixer = functionalComponent(void 0, paintMixer$lambda);
  palette = functionalComponent(void 0, palette$lambda);
  settingsClasses = setOf(['flex', 'flex-row', 'flex-grow', 'items-center', 'justify-center', 'hover:bg-gray-200', 'p-2', 'rounded-lg']);
  settings = functionalComponent(void 0, settings$lambda);
  PADDING = get_px(8);
  testTube = functionalComponent(void 0, testTube$lambda);
  main();
  return _;
}));

//# sourceMappingURL=paintmix.js.map
