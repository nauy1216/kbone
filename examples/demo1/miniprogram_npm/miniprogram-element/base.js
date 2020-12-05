module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/base.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// const mp = require('miniprogram-render')
// const _ = require('./util/tool')
// const component = require('./util/component')

// const {
//     cache,
//     Event,
//     EventTarget,
//     tool,
// } = mp.$$adapter
// const {
//     USE_TEMPLATE,
// } = _
// const {
//     wxCompHandles,
//     wxCompNameMap,
// } = component
const _childNodes = __webpack_require__(/*! ./childNodes */ "./src/childNodes.js")
console.error("_childNodes", _childNodes)
// dom 子树作为自定义组件渲染的层级数
const MAX_DOM_SUB_TREE_LEVEL = 10
let DOM_SUB_TREE_LEVEL = 10

// setData 的模式，默认使用 data path 模式
let isOriginalSetData = false

console.warn('当前渲染模式版本：miniprogram-element@2.x 版本。\n\n2.x 版本对比 1.x 版本去除了渲染内置组件时额外引入的一层节点，此模式基于 2.11.2 基础库实现，如果在 2.11.2 版本之前的基础库环境运行，则会降级成 1.x 渲染模式。\n\n渲染过程如果升级版本过程中遇到样式错乱问题，可尝试去除使用 1.x 版本时额外追加的强依赖结构的兼容样式，也可选择退回 1.x 版本（退回版本可以使用 generate.renderVersion 和 generate.elementVersion 配置：https://wechat-miniprogram.github.io/kbone/docs/config/#generate-renderversion ，指定 tag 为 core-v1 即可）。')

// const version = wx.getSystemInfoSync().SDKVersion
const behaviors = []
// if (_.compareVersion(version, '2.10.3') >= 0) behaviors.push('wx://form-field-button')
// if (_.compareVersion(version, '2.11.2') < 0) console.warn('当前基础库版本低于 2.11.2，建议调整最低支持基础库。')

module.exports = Behavior({
    behaviors,
    properties: {
        inCover: {
            type: Boolean,
            value: false,
        },
    },
    data: {
        wxCompName: '', // 需要渲染的内置组件名
        wxCustomCompName: '', // 需要渲染的自定义组件名
        childNodes: _childNodes, // 孩子节点
    },
    created() {
        // this._childNodes = _childNodes
        // const config = cache.getConfig()

        // // 根据配置重置全局变量
        // const domSubTreeLevel = +config.optimization.domSubTreeLevel
        // if (domSubTreeLevel >= 1 && domSubTreeLevel <= MAX_DOM_SUB_TREE_LEVEL) DOM_SUB_TREE_LEVEL = domSubTreeLevel

        // isOriginalSetData = config.optimization.setDataMode === 'original'
    },
    attached() {
        // this._childNodes = _childNodes
        // const nodeId = this.dataset.privateNodeId
        // const pageId = this.dataset.privatePageId
        // const data = {}

        // this.nodeId = nodeId
        // this.pageId = pageId

        // // 记录 dom
        // this.domNode = cache.getNode(pageId, nodeId)
        // if (!this.domNode) return

        // // 存储 document
        // this.document = cache.getDocument(pageId)

        // // 监听全局事件
        // this.onChildNodesUpdate = tool.throttle(this.onChildNodesUpdate.bind(this))
        // this.domNode.$$clearEvent('$$childNodesUpdate', {$$namespace: 'root'})
        // this.domNode.addEventListener('$$childNodesUpdate', this.onChildNodesUpdate, {$$namespace: 'root'})
        // this.onSelfNodeUpdate = tool.throttle(this.onSelfNodeUpdate.bind(this))
        // this.domNode.$$clearEvent('$$domNodeUpdate', {$$namespace: 'root'})
        // this.domNode.addEventListener('$$domNodeUpdate', this.onSelfNodeUpdate, {$$namespace: 'root'})

        // // 初始化
        // this.init(data)

        // // 初始化孩子节点
        // const childNodes = _.filterNodes(this.domNode, DOM_SUB_TREE_LEVEL - 1, this)
        // data.childNodes = _.dealWithLeafAndSimple(childNodes, this.onChildNodesUpdate)
        // console.log('data.childNodes', data.childNodes)
        // // 挂载该节点所处的自定义组件实例
        // if (data.wxCompName) this.domNode._wxComponent = this

        // // 执行一次 setData
        // if (Object.keys(data).length) this.setData(data)
    },
    detached() {
        // this.nodeId = null
        // this.pageId = null
        // this.domNode = null
        // this.document = null
    },
    methods: {
        /**
         * 初始化
         */
        init(data) {
            // const domNode = this.domNode
            // const tagName = domNode.tagName

            // // 使用 template 渲染
            // if (USE_TEMPLATE.indexOf(tagName) !== -1 || USE_TEMPLATE.indexOf(domNode.behavior) !== -1) return

            // if (tagName === 'WX-COMPONENT') {
            //     // 内置组件，目前只有 view 组件需要进入
            //     data.wxCompName = domNode.behavior
            //     const wxCompName = wxCompNameMap[data.wxCompName]
            //     if (wxCompName) _.checkComponentAttr(wxCompName, domNode, data)
            //     else console.warn(`value "${data.wxCompName}" is not supported for wx-component's behavior`)
            // }
        },

        /**
         * 监听子节点变化
         */
        onChildNodesUpdate() {
            // if (!this.pageId || !this.nodeId) return

            // // 儿子节点有变化
            // const childNodes = _.filterNodes(this.domNode, DOM_SUB_TREE_LEVEL - 1, this)
            // if (isOriginalSetData) {
            //     // 全量 setData
            //     if (_.checkDiffChildNodes(childNodes, this.data.childNodes)) {
            //         this.setData({
            //             childNodes: _.dealWithLeafAndSimple(childNodes, this.onChildNodesUpdate),
            //         })
            //     }
            // } else {
            //     // 使用 data path 的模式
            //     const destData = {count: 0}
            //     const newChildNodes = _.dealWithLeafAndSimple(childNodes, this.onChildNodesUpdate)

            //     if (!this.data.childNodes.length) {
            //         this.setData({childNodes: newChildNodes})
            //     } else {
            //         const isInterrupt = _.getDiffChildNodes(newChildNodes, this.data.childNodes, destData, 'childNodes')

            //         if (isInterrupt) {
            //             // key 数量超出阈值，转为 setData 完整数据
            //             this.setData({childNodes: newChildNodes})
            //         } else if (destData.count) {
            //             delete destData.count
            //             this.setData(destData)
            //         }
            //     }
            // }
        },

        /**
         * 监听当前节点变化
         */
        onSelfNodeUpdate() {
            // if (!this.pageId || !this.nodeId) return

            // const domNode = this.domNode
            // const data = this.data
            // const tagName = domNode.tagName

            // // 使用 template 渲染
            // if (USE_TEMPLATE.indexOf(tagName) !== -1 || USE_TEMPLATE.indexOf(domNode.behavior) !== -1) return

            // if (tagName === 'WX-COMPONENT') {
            //     // 内置组件，目前只有 view 组件需要进入
            //     const newData = {}
            //     const wxCompName = wxCompNameMap[domNode.behavior]

            //     if (data.wxCompName !== domNode.behavior) newData.wxCompName = domNode.behavior
            //     if (wxCompName) _.checkComponentAttr(wxCompName, domNode, newData, data)
            //     if (Object.keys(newData)) this.setData(newData)
            // }
        },

        /**
         * 触发简单节点事件，不做捕获冒泡处理
         */
        callSingleEvent(eventName, evt) {
            const domNode = this.getDomNodeFromEvt(evt)
            if (!domNode) return

            domNode.$$trigger(eventName, {
                event: new Event({
                    timeStamp: evt && evt.timeStamp,
                    touches: evt && evt.touches,
                    changedTouches: evt && evt.changedTouches,
                    name: eventName,
                    target: domNode,
                    eventPhase: Event.AT_TARGET,
                    detail: evt && evt.detail,
                    $$extra: evt && evt.extra,
                }),
                currentTarget: domNode,
            })
        },

        /**
         * 触发简单节点事件，不做冒泡处理，但会走捕获阶段
         */
        callSimpleEvent(eventName, evt, domNode) {
            // domNode = domNode || this.getDomNodeFromEvt(evt)
            // if (!domNode) return

            // EventTarget.$$process(domNode, new Event({
            //     touches: evt.touches,
            //     changedTouches: evt.changedTouches,
            //     name: eventName,
            //     target: domNode,
            //     eventPhase: Event.AT_TARGET,
            //     detail: evt && evt.detail,
            //     $$extra: evt && evt.extra,
            //     bubbles: false, // 不冒泡
            // }))
        },

        /**
         * 触发事件
         */
        callEvent(eventName, evt, extra) {
            // const domNode = this.getDomNodeFromEvt(evt)

            // if (!domNode) return

            // EventTarget.$$process(domNode, eventName, evt, extra, (domNode, evt, isCapture) => {
            //     // 延迟触发跳转，先等所有同步回调处理完成
            //     setTimeout(() => {
            //         if (evt.cancelable) return
            //         const window = cache.getWindow(this.pageId)

            //         // 处理特殊节点事件
            //         if (domNode.tagName === 'A' && evt.type === 'click' && !isCapture) {
            //             // 处理 a 标签的跳转
            //             const href = domNode.href
            //             const target = domNode.target

            //             if (!href || href.indexOf('javascript') !== -1) return

            //             if (target === '_blank') window.open(href)
            //             else window.location.href = href
            //         } else if (domNode.tagName === 'LABEL' && evt.type === 'click' && !isCapture) {
            //             // 处理 label 的点击
            //             const forValue = domNode.getAttribute('for')
            //             let targetDomNode
            //             if (forValue) {
            //                 targetDomNode = window.document.getElementById(forValue)
            //             } else {
            //                 targetDomNode = domNode.querySelector('input')

            //                 // 寻找 switch 节点
            //                 if (!targetDomNode) targetDomNode = domNode.querySelector('wx-component[behavior=switch]')
            //             }

            //             if (!targetDomNode || !!targetDomNode.getAttribute('disabled')) return

            //             // 找到了目标节点
            //             if (targetDomNode.tagName === 'INPUT') {
            //                 if (_.checkEventAccessDomNode(evt, targetDomNode, domNode)) return

            //                 const type = targetDomNode.type
            //                 if (type === 'radio') {
            //                     targetDomNode.setAttribute('checked', true)
            //                     const name = targetDomNode.name
            //                     const otherDomNodes = window.document.querySelectorAll(`input[name=${name}]`) || []
            //                     for (const otherDomNode of otherDomNodes) {
            //                         if (otherDomNode.type === 'radio' && otherDomNode !== targetDomNode) {
            //                             otherDomNode.setAttribute('checked', false)
            //                         }
            //                     }
            //                     this.callSimpleEvent('change', {detail: {value: targetDomNode.value}}, targetDomNode)
            //                 } else if (type === 'checkbox') {
            //                     targetDomNode.setAttribute('checked', !targetDomNode.checked)
            //                     this.callSimpleEvent('change', {detail: {value: targetDomNode.checked ? [targetDomNode.value] : []}}, targetDomNode)
            //                 } else {
            //                     targetDomNode.focus()
            //                 }
            //             } else if (targetDomNode.tagName === 'WX-COMPONENT') {
            //                 if (_.checkEventAccessDomNode(evt, targetDomNode, domNode)) return

            //                 const behavior = targetDomNode.behavior
            //                 if (behavior === 'switch') {
            //                     const checked = !targetDomNode.getAttribute('checked')
            //                     targetDomNode.setAttribute('checked', checked)
            //                     this.callSimpleEvent('change', {detail: {value: checked}}, targetDomNode)
            //                 }
            //             }
            //         } else if ((domNode.tagName === 'BUTTON' || (domNode.tagName === 'WX-COMPONENT' && domNode.behavior === 'button')) && evt.type === 'click' && !isCapture) {
            //             // 处理 button 点击
            //             const type = domNode.tagName === 'BUTTON' ? domNode.getAttribute('type') : domNode.getAttribute('form-type')
            //             const formAttr = domNode.getAttribute('form')
            //             const form = formAttr ? window.document.getElementById(formAttr) : _.findParentNode(domNode, 'FORM')

            //             if (!form) return
            //             if (type !== 'submit' && type !== 'reset') return

            //             const inputList = form.querySelectorAll('input[name]')
            //             const textareaList = form.querySelectorAll('textarea[name]')
            //             const switchList = form.querySelectorAll('wx-component[behavior=switch]').filter(item => !!item.getAttribute('name'))
            //             const sliderList = form.querySelectorAll('wx-component[behavior=slider]').filter(item => !!item.getAttribute('name'))
            //             const pickerList = form.querySelectorAll('wx-component[behavior=picker]').filter(item => !!item.getAttribute('name'))

            //             if (type === 'submit') {
            //                 const formData = {}
            //                 if (inputList.length) {
            //                     inputList.forEach(item => {
            //                         if (item.type === 'radio') {
            //                             if (item.checked) formData[item.name] = item.value
            //                         } else if (item.type === 'checkbox') {
            //                             formData[item.name] = formData[item.name] || []
            //                             if (item.checked) formData[item.name].push(item.value)
            //                         } else {
            //                             formData[item.name] = item.value
            //                         }
            //                     })
            //                 }
            //                 if (textareaList.length) textareaList.forEach(item => formData[item.getAttribute('name')] = item.value)
            //                 if (switchList.length) switchList.forEach(item => formData[item.getAttribute('name')] = !!item.getAttribute('checked'))
            //                 if (sliderList.length) sliderList.forEach(item => formData[item.getAttribute('name')] = +item.getAttribute('value') || 0)
            //                 if (pickerList.length) pickerList.forEach(item => formData[item.getAttribute('name')] = item.getAttribute('value'))

            //                 const detail = {value: formData}
            //                 if (form._formId) {
            //                     detail.formId = form._formId
            //                     form._formId = null
            //                 }
            //                 this.callSimpleEvent('submit', {detail, extra: {$$from: 'button'}}, form)
            //             } else if (type === 'reset') {
            //                 if (inputList.length) {
            //                     inputList.forEach(item => {
            //                         if (item.type === 'radio') {
            //                             item.setAttribute('checked', false)
            //                         } else if (item.type === 'checkbox') {
            //                             item.setAttribute('checked', false)
            //                         } else {
            //                             item.setAttribute('value', '')
            //                         }
            //                     })
            //                 }
            //                 if (textareaList.length) textareaList.forEach(item => item.setAttribute('value', ''))
            //                 if (switchList.length) switchList.forEach(item => item.setAttribute('checked', undefined))
            //                 if (sliderList.length) sliderList.forEach(item => item.setAttribute('value', undefined))
            //                 if (pickerList.length) pickerList.forEach(item => item.setAttribute('value', undefined))

            //                 this.callSimpleEvent('reset', {extra: {$$from: 'button'}}, form)
            //             }
            //         }
            //     }, 0)
            // })
        },

        /**
         * 监听节点事件
         */
        onTouchStart(evt) {
            // if (this.document && this.document.$$checkEvent(evt)) {
            //     this.callEvent('touchstart', evt)
            // }
        },

        onTouchMove(evt) {
            // if (this.document && this.document.$$checkEvent(evt)) {
            //     this.callEvent('touchmove', evt)
            // }
        },

        onTouchEnd(evt) {
            // if (this.document && this.document.$$checkEvent(evt)) {
            //     this.callEvent('touchend', evt)
            // }
        },

        onTouchCancel(evt) {
            // if (this.document && this.document.$$checkEvent(evt)) {
            //     this.callEvent('touchcancel', evt)
            // }
        },

        onTap(evt) {
            // if (this.document && this.document.$$checkEvent(evt)) {
            //     this.callEvent('click', evt, {button: 0}) // 默认左键
            // }
        },

        onLongPress(evt) {
            // if (this.document && this.document.$$checkEvent(evt)) {
            //     this.callEvent('longpress', evt)
            // }
        },

        /**
         * 图片相关事件
         */
        onImgLoad(evt) {
            // this.callSingleEvent('load', evt)
        },

        onImgError(evt) {
            // this.callSingleEvent('error', evt)
        },

        /**
         * capture 相关事件，wx-capture 的事件不走仿造事件捕获冒泡系统，单独触发
         */
        onCaptureTouchStart(evt) {
            // this.callSingleEvent('touchstart', evt)
        },

        onCaptureTouchMove(evt) {
            // this.callSingleEvent('touchmove', evt)
        },

        onCaptureTouchEnd(evt) {
            // this.callSingleEvent('touchend', evt)
        },

        onCaptureTouchCancel(evt) {
            // this.callSingleEvent('touchcancel', evt)
        },

        onCaptureTap(evt) {
            // this.callSingleEvent('click', evt)
        },

        onCaptureLongPress(evt) {
            // this.callSingleEvent('longpress', evt)
        },

        /**
         * 动画相关事件
         */
        onTransitionEnd(evt) {
            // this.callEvent('transitionend', evt)
        },

        onAnimationStart(evt) {
            // this.callEvent('animationstart', evt)
        },

        onAnimationIteration(evt) {
            // this.callEvent('animationiteration', evt)
        },

        onAnimationEnd(evt) {
            // this.callEvent('animationend', evt)
        },

        /**
         * 从小程序事件对象中获取 domNode
         */
        getDomNodeFromEvt(evt) {
            // if (!evt) return
            // const pageId = this.pageId
            // const originNodeId = evt.currentTarget && evt.currentTarget.dataset.privateNodeId || this.nodeId
            // return cache.getNode(pageId, originNodeId)
        },

        // ...wxCompHandles,
    }
})


/***/ }),

/***/ "./src/childNodes.js":
/*!***************************!*\
  !*** ./src/childNodes.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
module.exports = [
    {
      "nodeId": "b-1607152742796",
      "pageId": "p-1607152742791-/pages/index/index",
      "type": "element",
      "tagName": "div",
      "id": "",
      "className": "h5-div node-b-1607152742796 ",
      "style": "",
      "isImage": false,
      "useTemplate": false,
      "isLeaf": false,
      "isSimple": true,
      "content": "",
      "childNodes": [
        {
          "nodeId": "b-1607152742797",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "ul",
          "id": "",
          "className": "h5-ul node-b-1607152742797 tabbar",
          "style": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": true,
          "content": "",
          "childNodes": [
            {
              "nodeId": "b-1607152742798",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "li",
              "id": "",
              "className": "h5-li node-b-1607152742798 ",
              "style": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": false,
              "isSimple": true,
              "content": "",
              "childNodes": [
                {
                  "nodeId": "b-1607152742799",
                  "pageId": "p-1607152742791-/pages/index/index",
                  "type": "element",
                  "tagName": "a",
                  "id": "",
                  "className": "h5-a node-b-1607152742799 link router-link-exact-active router-link-active",
                  "style": "",
                  "isImage": false,
                  "useTemplate": false,
                  "isLeaf": true,
                  "content": "aaa",
                  "isSimple": false,
                  "childNodes": []
                }
              ]
            },
            {
              "nodeId": "b-1607152742801",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "text",
              "content": " ",
              "className": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": false,
              "isSimple": false,
              "childNodes": []
            },
            {
              "nodeId": "b-1607152742802",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "li",
              "id": "",
              "className": "h5-li node-b-1607152742802 ",
              "style": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": false,
              "isSimple": true,
              "content": "",
              "childNodes": [
                {
                  "nodeId": "b-1607152742803",
                  "pageId": "p-1607152742791-/pages/index/index",
                  "type": "element",
                  "tagName": "a",
                  "id": "",
                  "className": "h5-a node-b-1607152742803 link",
                  "style": "",
                  "isImage": false,
                  "useTemplate": false,
                  "isLeaf": true,
                  "content": "bbb",
                  "isSimple": false,
                  "childNodes": []
                }
              ]
            }
          ]
        },
        {
          "nodeId": "b-1607152742805",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742806",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "div",
          "id": "",
          "className": "h5-div node-b-1607152742806 cnt",
          "style": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": true,
          "content": "",
          "childNodes": [
            {
              "nodeId": "b-1607152742807",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "p",
              "id": "",
              "className": "h5-p node-b-1607152742807 ",
              "style": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": true,
              "content": "I am aaa",
              "isSimple": false,
              "childNodes": []
            },
            {
              "nodeId": "b-1607152742809",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "text",
              "content": " ",
              "className": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": false,
              "isSimple": false,
              "childNodes": []
            },
            {
              "nodeId": "b-1607152742810",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "p",
              "id": "",
              "className": "h5-p node-b-1607152742810 ",
              "style": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": true,
              "content": "route: /test/aaa",
              "isSimple": false,
              "childNodes": []
            }
          ]
        },
        {
          "nodeId": "b-1607152742812",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742813",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "button",
          "id": "",
          "className": "h5-button node-b-1607152742813 btn",
          "style": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": true,
          "content": "console global",
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742815",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742816",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "button",
          "id": "",
          "className": "h5-button node-b-1607152742816 btn",
          "style": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": true,
          "content": "throw an error",
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742818",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742819",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "button",
          "id": "",
          "className": "h5-button node-b-1607152742819 btn",
          "style": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": true,
          "content": "update style",
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742821",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742822",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "div",
          "id": "",
          "className": "h5-div node-b-1607152742822 ",
          "style": "margin-left:20px;",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": true,
          "content": "",
          "childNodes": [
            {
              "nodeId": "b-1607152742823",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "p",
              "id": "",
              "className": "h5-p node-b-1607152742823 ",
              "style": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": false,
              "isSimple": true,
              "content": "",
              "childNodes": [
                {
                  "nodeId": "b-1607152742824",
                  "pageId": "p-1607152742791-/pages/index/index",
                  "type": "text",
                  "content": "这是",
                  "className": "",
                  "isImage": false,
                  "useTemplate": false,
                  "isLeaf": false,
                  "isSimple": false,
                  "childNodes": []
                },
                {
                  "nodeId": "b-1607152742825",
                  "pageId": "p-1607152742791-/pages/index/index",
                  "type": "element",
                  "tagName": "span",
                  "id": "",
                  "className": "h5-span node-b-1607152742825 ",
                  "style": "",
                  "isImage": false,
                  "useTemplate": false,
                  "isLeaf": true,
                  "content": "1",
                  "isSimple": false,
                  "childNodes": []
                },
                {
                  "nodeId": "b-1607152742827",
                  "pageId": "p-1607152742791-/pages/index/index",
                  "type": "text",
                  "content": "段中间插入了span的文本",
                  "className": "",
                  "isImage": false,
                  "useTemplate": false,
                  "isLeaf": false,
                  "isSimple": false,
                  "childNodes": []
                }
              ]
            }
          ]
        },
        {
          "nodeId": "b-1607152742829",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742830",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "div",
          "id": "",
          "className": "h5-div node-b-1607152742830 ",
          "style": "margin:20px;",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": true,
          "content": "",
          "childNodes": [
            {
              "nodeId": "b-1607152742831",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "p",
              "id": "",
              "className": "h5-p node-b-1607152742831 ",
              "style": "width:10rem;",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": true,
              "content": "这段看起来特别特别长的文字宽度是 10 rem，测试测试测试测试测试测试测试测试测试测试测试测试",
              "isSimple": false,
              "childNodes": []
            }
          ]
        },
        {
          "nodeId": "b-1607152742833",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "text",
          "content": " ",
          "className": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": false,
          "childNodes": []
        },
        {
          "nodeId": "b-1607152742834",
          "pageId": "p-1607152742791-/pages/index/index",
          "type": "element",
          "tagName": "div",
          "id": "",
          "className": "h5-div node-b-1607152742834 footer",
          "style": "",
          "isImage": false,
          "useTemplate": false,
          "isLeaf": false,
          "isSimple": true,
          "content": "",
          "childNodes": [
            {
              "nodeId": "b-1607152742835",
              "pageId": "p-1607152742791-/pages/index/index",
              "type": "element",
              "tagName": "p",
              "id": "",
              "className": "h5-p node-b-1607152742835 ",
              "style": "",
              "isImage": false,
              "useTemplate": false,
              "isLeaf": true,
              "content": "wechat-miniprogram",
              "isSimple": false,
              "childNodes": []
            }
          ]
        }
      ]
    }
  ]

/***/ })

/******/ });
//# sourceMappingURL=base.js.map