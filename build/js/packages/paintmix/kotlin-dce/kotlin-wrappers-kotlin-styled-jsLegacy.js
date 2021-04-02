(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-css', 'kotlin-wrappers-kotlin-extensions-jsLegacy', 'inline-style-prefixer', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'styled-components', 'react', 'react-dom', 'react', 'kotlinx-html-js', 'styled-components'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-css'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('inline-style-prefixer'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('styled-components'), require('react'), require('react-dom'), require('react'), require('kotlinx-html-js'), require('styled-components'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['inline-style-prefixer'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'inline-style-prefixer' was not found. Please, check whether 'inline-style-prefixer' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }if (typeof StyledComponents === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-jsLegacy'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-jsLegacy'.");
    }root['kotlin-wrappers-kotlin-styled-jsLegacy'] = factory(typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-styled-jsLegacy'], kotlin, this['kotlin-css'], this['kotlin-wrappers-kotlin-extensions-jsLegacy'], this['inline-style-prefixer'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['styled-components'], react, this['react-dom'], ReactModule, this['kotlinx-html-js'], StyledComponents);
  }
}(this, function (_, Kotlin, $module$kotlin_css, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$inline_style_prefixer, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$styled_components, $module$react, $module$react_dom, $module$react_0, $module$kotlinx_html_js, $module$styled_components_0) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var KeyframesBuilder = $module$kotlin_css.kotlinx.css.properties.KeyframesBuilder;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var StyledElement = $module$kotlin_css.kotlinx.css.StyledElement;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var CSSBuilder = $module$kotlin_css.kotlinx.css.CSSBuilder;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var ReadOnlyProperty = Kotlin.kotlin.properties.ReadOnlyProperty;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RElementBuilder = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RElementBuilder;
  var RDOMBuilder = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var invoke_0 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_9p99ed$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var invoke_1 = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.invoke_z5wujd$;
  var createElement = $module$react.createElement;
  var render = $module$react_dom.render;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var functionalComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.functionalComponent_7g4vsr$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  StyledDOMBuilder.prototype = Object.create(RDOMBuilder.prototype);
  StyledDOMBuilder.prototype.constructor = StyledDOMBuilder;
  function StyledBuilder() {
  }
  StyledBuilder.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'StyledBuilder', interfaces: []};
  function StyledDOMBuilder(factory) {
    RDOMBuilder.call(this, factory);
    this.type_redftz$_0 = this.attrs.tagName;
    this.css_en1qsi$_0 = new CSSBuilder();
  }
  Object.defineProperty(StyledDOMBuilder.prototype, 'type', {configurable: true, get: function () {
    return this.type_redftz$_0;
  }});
  Object.defineProperty(StyledDOMBuilder.prototype, 'css', {configurable: true, get: function () {
    return this.css_en1qsi$_0;
  }});
  StyledDOMBuilder.prototype.create = function () {
    return Styled_getInstance().createElement_lnfw8r$(this.type, this.css, this.props, this.childList);
  };
  StyledDOMBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledDOMBuilder', interfaces: [StyledBuilder, RDOMBuilder]};
  var GlobalStyles_instance = null;
  function devOverrideUseRef$lambda() {
    throw Error_init('invalid hook call');
  }
  function devOverrideUseRef(action) {
    var tmp$;
    if (process.env.NODE_ENV !== 'production') {
      var useRef = $module$react_0.useRef;
      $module$react_0.useRef = devOverrideUseRef$lambda;
      var result = action();
      $module$react_0.useRef = useRef;
      tmp$ = result;
    } else
      tmp$ = action();
    return tmp$;
  }
  function Styled() {
    Styled_instance = this;
    this.cache_0 = LinkedHashMap_init();
  }
  function Styled$wrap$lambda$lambda$lambda(it) {
    return it._css;
  }
  function Styled$wrap$lambda$lambda(closure$type) {
    return function () {
      return invoke_0(rawStyled(closure$type), [Styled$wrap$lambda$lambda$lambda]);
    };
  }
  Styled.prototype.wrap_0 = function (type) {
    var $receiver = this.cache_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = devOverrideUseRef(Styled$wrap$lambda$lambda(type));
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    } else {
      tmp$ = value;
    }
    return tmp$;
  };
  Styled.prototype.createElement_lnfw8r$ = function (type, css, props, children) {
    var wrappedType = this.wrap_0(type);
    var styledProps = props;
    var tmp$ = !css.rules.isEmpty();
    if (!tmp$) {
      tmp$ = !css.multiRules.isEmpty();
    }var tmp$_0 = tmp$;
    if (!tmp$_0) {
      tmp$_0 = !css.declarations.isEmpty();
    }if (tmp$_0) {
      styledProps._css = css.toString();
    }if (!css.classes.isEmpty()) {
      styledProps.className = joinToString(css.classes, ' ');
    }if (!css.styleName.isEmpty()) {
      styledProps['data-style'] = joinToString(css.styleName, ' ');
    }return createElement.apply(null, [wrappedType, styledProps].concat(copyToArray(children)));
  };
  Styled.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Styled', interfaces: []};
  var Styled_instance = null;
  function Styled_getInstance() {
    if (Styled_instance === null) {
      new Styled();
    }return Styled_instance;
  }
  function rawStyled(target) {
    return $module$styled_components_0.default(target);
  }
  var package$styled = _.styled || (_.styled = {});
  $$importsForInline$$['kotlin-css'] = $module$kotlin_css;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$styled.StyledBuilder = StyledBuilder;
  package$styled.StyledDOMBuilder = StyledDOMBuilder;
  Object.defineProperty(package$styled, 'Styled', {get: Styled_getInstance});
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  package$styled.rawStyled_za3rmp$ = rawStyled;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-jsLegacy.js.map
