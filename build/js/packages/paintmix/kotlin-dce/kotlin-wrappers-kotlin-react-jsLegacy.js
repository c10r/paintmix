(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'react', 'kotlin-wrappers-kotlin-extensions-jsLegacy', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('react'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-jsLegacy'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-wrappers-kotlin-react-jsLegacy'.");
    }if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-jsLegacy'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-react-jsLegacy'.");
    }if (typeof this['kotlin-wrappers-kotlin-extensions-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-jsLegacy'. Its dependency 'kotlin-wrappers-kotlin-extensions-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-extensions-jsLegacy' is loaded prior to 'kotlin-wrappers-kotlin-react-jsLegacy'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-jsLegacy'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'kotlin-wrappers-kotlin-react-jsLegacy'.");
    }root['kotlin-wrappers-kotlin-react-jsLegacy'] = factory(typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined' ? {} : this['kotlin-wrappers-kotlin-react-jsLegacy'], kotlin, react, this['kotlin-wrappers-kotlin-extensions-jsLegacy'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$react, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var createElement = $module$react.createElement;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var clone = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.clone_issdgt$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var Children = $module$react.Children;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var throwCCE = Kotlin.throwCCE;
  var cloneElement = $module$react.cloneElement;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var coroutines = $module$kotlinx_coroutines_core.kotlinx.coroutines;
  var Throwable = Error;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var launch = $module$kotlinx_coroutines_core.kotlinx.coroutines.launch_s496o7$;
  var Any = Object;
  var ReadWriteProperty = Kotlin.kotlin.properties.ReadWriteProperty;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var rawUseEffect = $module$react.useEffect;
  RElementBuilder.prototype = Object.create(RBuilder.prototype);
  RElementBuilder.prototype.constructor = RElementBuilder;
  function RBuilder() {
    this.childList = ArrayList_init();
  }
  RBuilder.prototype.child_52psg1$ = function (element) {
    this.childList.add_11rb$(element);
    return element;
  };
  RBuilder.prototype.unaryPlus_84gpoi$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.childList.add_11rb$($receiver);
  };
  RBuilder.prototype.child_k3oess$ = function (type, props, children) {
    return this.child_52psg1$(createElement.apply(null, [type, props].concat(copyToArray(children))));
  };
  RBuilder.prototype.child_4dvv5y$ = function (type, props, handler) {
    var $receiver = new RElementBuilder(props);
    handler($receiver);
    var children = $receiver.childList;
    return this.child_k3oess$(type, props, children);
  };
  RBuilder.prototype.invoke_eb8iu4$ = function ($receiver, handler) {
    return this.child_4dvv5y$($receiver, {}, handler);
  };
  RBuilder.prototype.invoke_csqs6z$ = function ($receiver, value, handler) {
    var $receiver_0 = {};
    $receiver_0.value = value;
    return this.child_4dvv5y$($receiver, $receiver_0, handler);
  };
  function RBuilder$invoke$lambda$lambda$lambda(closure$handler, closure$value) {
    return function ($receiver) {
      closure$handler($receiver, closure$value);
      return Unit;
    };
  }
  function RBuilder$invoke$lambda$lambda(closure$handler) {
    return function (value) {
      return buildElements(RBuilder$invoke$lambda$lambda$lambda(closure$handler, value));
    };
  }
  function RBuilder$invoke$lambda($receiver) {
    return Unit;
  }
  RBuilder.prototype.invoke_ory6b3$ = function ($receiver, handler) {
    var $receiver_0 = {};
    $receiver_0.children = RBuilder$invoke$lambda$lambda(handler);
    return this.child_4dvv5y$($receiver, $receiver_0, RBuilder$invoke$lambda);
  };
  RBuilder.prototype.node_rwypko$ = function ($receiver, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.child_k3oess$($receiver, clone(props), children);
  };
  RBuilder.prototype.child_ssazr1$ = function (klazz, handler) {
    return this.invoke_eb8iu4$(get_rClass(klazz), handler);
  };
  RBuilder.prototype.child_t7en6a$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.child_t7en6a$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, handler) {
      return this.child_ssazr1$(getKClass(C_0), handler);
    };
  }));
  function RBuilder$childFunction$lambda(closure$children) {
    return function (value) {
      var $receiver = new RBuilder();
      closure$children($receiver, value);
      return first($receiver.childList);
    };
  }
  RBuilder.prototype.childFunction_2656uf$ = function (klazz, handler, children) {
    var tmp$ = get_rClass(klazz);
    var $receiver = new RElementBuilder({});
    handler($receiver);
    return this.child_k3oess$(tmp$, $receiver.attrs, listOf(RBuilder$childFunction$lambda(children)));
  };
  RBuilder.prototype.childFunction_khdow9$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.childFunction_khdow9$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, handler, children) {
      return this.childFunction_2656uf$(getKClass(C_0), handler, children);
    };
  }));
  RBuilder.prototype.node_3ecl1l$ = function (klazz, props, children) {
    if (children === void 0)
      children = emptyList();
    return this.node_rwypko$(get_rClass(klazz), props, children);
  };
  RBuilder.prototype.node_e2hqbc$ = defineInlineFunction('kotlin-wrappers-kotlin-react-jsLegacy.react.RBuilder.node_e2hqbc$', wrapFunction(function () {
    var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
    var getKClass = Kotlin.getKClass;
    return function (C_0, isC, props, children) {
      if (children === void 0)
        children = emptyList();
      return this.node_3ecl1l$(getKClass(C_0), props, children);
    };
  }));
  RBuilder.prototype.children_yllgzm$ = function ($receiver) {
    addAll(this.childList, Children.toArray(get_children($receiver)));
  };
  RBuilder.prototype.children_48djri$ = function ($receiver, value) {
    var tmp$;
    this.childList.add_11rb$((typeof (tmp$ = get_children($receiver)) === 'function' ? tmp$ : throwCCE())(value));
  };
  RBuilder.prototype.renderEach_3b8uhr$ = function ($receiver, fn) {
    var tmp$ = this.childList;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var $receiver_0 = new RBuilder();
      fn($receiver_0, item);
      tmp$_1.call(destination, first($receiver_0.childList));
    }
    tmp$.add_11rb$(copyToArray(destination));
  };
  RBuilder.prototype.renderEachIndexed_a4qrr7$ = function ($receiver, fn) {
    var tmp$ = this.childList;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0, tmp$_0_0;
    var index = 0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var index_0 = checkIndexOverflow((tmp$_0_0 = index, index = tmp$_0_0 + 1 | 0, tmp$_0_0));
      var $receiver_0 = new RBuilder();
      fn($receiver_0, index_0, item);
      tmp$_1.call(destination, first($receiver_0.childList));
    }
    tmp$.add_11rb$(copyToArray(destination));
  };
  RBuilder.prototype.withKey_s5hl0b$ = function ($receiver, newKey) {
    var index = this.childList.indexOf_11rb$($receiver);
    if (index >= 0) {
      this.childList.removeAt_za3lpa$(index);
      var $receiver_0 = {};
      set_key($receiver_0, newKey);
      var elementWithKey = cloneElement($receiver, $receiver_0);
      this.childList.add_wxm5ur$(index, elementWithKey);
    }};
  RBuilder.prototype.withKey_pspxar$ = function ($receiver, newKey) {
    this.withKey_s5hl0b$($receiver, newKey.toString());
  };
  RBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'RBuilder', interfaces: []};
  function buildElements(handler) {
    var tmp$;
    var $receiver = new RBuilder();
    handler($receiver);
    var nodes = $receiver.childList;
    switch (nodes.size) {
      case 0:
        tmp$ = null;
        break;
      case 1:
        tmp$ = first(nodes);
        break;
      default:var tmp$_0 = $module$react.Fragment;
        var $receiver_0 = {};
        tmp$ = createElement.apply(null, [tmp$_0, $receiver_0].concat(copyToArray(nodes)));
        break;
    }
    return tmp$;
  }
  function RElementBuilder(attrs) {
    RBuilder.call(this);
    this.attrs_iyt8sk$_0 = attrs;
  }
  Object.defineProperty(RElementBuilder.prototype, 'attrs', {get: function () {
    return this.attrs_iyt8sk$_0;
  }});
  RElementBuilder.prototype.attrs_slhiwc$ = function (handler) {
    handler(this.attrs);
  };
  Object.defineProperty(RElementBuilder.prototype, 'key', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_key(this.attrs, value);
  }});
  Object.defineProperty(RElementBuilder.prototype, 'ref', {configurable: true, get: function () {
    throw IllegalStateException_init(''.toString());
  }, set: function (value) {
    set_ref(this.attrs, value);
  }});
  RElementBuilder.prototype.ref_5ij4lk$ = function (handler) {
    ref(this.attrs, handler);
  };
  RElementBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'RElementBuilder', interfaces: [RBuilder]};
  function functionalComponent$lambda$lambda(closure$func, closure$props) {
    return function ($receiver) {
      closure$func($receiver, closure$props);
      return Unit;
    };
  }
  function functionalComponent$lambda(closure$func) {
    return function (props) {
      return buildElements(functionalComponent$lambda$lambda(closure$func, props));
    };
  }
  function functionalComponent(displayName, func) {
    if (displayName === void 0)
      displayName = null;
    var fc = functionalComponent$lambda(func);
    if (displayName != null) {
      fc.displayName = displayName;
    }return fc;
  }
  function child$lambda($receiver) {
    return Unit;
  }
  function child($receiver, component, props, handler) {
    if (props === void 0) {
      props = {};
    }if (handler === void 0)
      handler = child$lambda;
    return $receiver.child_4dvv5y$(component, props, handler);
  }
  function get_rClass($receiver) {
    return get_js($receiver);
  }
  function get_children($receiver) {
    return $receiver.children;
  }
  function set_key($receiver, value) {
    $receiver.key = value;
  }
  function set_ref($receiver, value) {
    $receiver.ref = value;
  }
  function ref($receiver, ref) {
    $receiver.ref = ref;
  }
  function RStateDelegate(state, setState) {
    this.state_0 = state;
    this.setState_0 = setState;
  }
  RStateDelegate.prototype.component1 = function () {
    return this.state_0;
  };
  RStateDelegate.prototype.component2 = function () {
    return this.setState_0;
  };
  RStateDelegate.prototype.getValue_lrcp0p$ = function (thisRef, property) {
    return this.state_0;
  };
  RStateDelegate.prototype.setValue_9rddgb$ = function (thisRef, property, value) {
    this.setState_0(value);
  };
  RStateDelegate.$metadata$ = {kind: Kind_CLASS, simpleName: 'RStateDelegate', interfaces: [ReadWriteProperty]};
  function useEffect$lambda(closure$effect) {
    return function () {
      closure$effect();
      return undefined;
    };
  }
  function useEffect(dependencies, effect) {
    if (dependencies === void 0)
      dependencies = null;
    var rawEffect = useEffect$lambda(effect);
    if (dependencies != null) {
      rawUseEffect(rawEffect, copyToArray(dependencies));
    } else {
      rawUseEffect(rawEffect);
    }
  }
  var package$react = _.react || (_.react = {});
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$react.RBuilder = RBuilder;
  package$react.buildElements_zepujl$ = buildElements;
  package$react.RElementBuilder = RElementBuilder;
  package$react.functionalComponent_7g4vsr$ = functionalComponent;
  package$react.child_9r8yuv$ = child;
  $$importsForInline$$.react = $module$react;
  package$react.get_rClass_inwa2g$ = get_rClass;
  package$react.get_children_yllgzm$ = get_children;
  package$react.set_key_38rnt0$ = set_key;
  package$react.set_ref_jjyqia$ = set_ref;
  package$react.ref_dpkau5$ = ref;
  package$react.RStateDelegate = RStateDelegate;
  package$react.useEffect_wrbdb4$ = useEffect;
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-jsLegacy.js.map
