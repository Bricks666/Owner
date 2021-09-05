/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Elements.js":
/*!*************************!*\
  !*** ./src/Elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"html\": () => (/* binding */ html)\n/* harmony export */ });\nconst html = {\n  header: document.querySelector(\".connect-block\"),\n  accountName: document.querySelector(\".connect-block__current-user\"),\n  currentOwner: document.querySelector(\".card__owner\"),\n  changeOwnerButton: document.querySelector(\".card__change-owner\"),\n  changeOwnerField: document.querySelector(\".card__new-owner-address\"),\n};\n\n\n//# sourceURL=webpack://owner/./src/Elements.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"removeButton\": () => (/* binding */ removeButton)\n/* harmony export */ });\nconst createButton = (text, className) => {\n  const button = document.createElement(\"button\");\n\n  button.type = \"submit\";\n\n  button.innerHTML = text;\n\n  button.classList.add(className ?? \"\");\n\n  return button;\n};\n\nconst removeButton = (button) => {\n  button.remove();\n};\n\n\n//# sourceURL=webpack://owner/./src/buttons.js?");

/***/ }),

/***/ "./src/connect.js":
/*!************************!*\
  !*** ./src/connect.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"connectAccount\": () => (/* binding */ connectAccount)\n/* harmony export */ });\n/* harmony import */ var _connectButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connectButton */ \"./src/connectButton.js\");\n/* harmony import */ var _deployButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deployButton */ \"./src/deployButton.js\");\n/* harmony import */ var _htmlSetters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./htmlSetters */ \"./src/htmlSetters.js\");\n\n\n\n\nasync function connect(data) {\n  data.contract = new data.web3.eth.Contract(data.dataForDeploy.abi);\n\n  data.account = (await data.web3.eth.getAccounts())[0];\n\n  if (data.account === undefined) {\n    throw new Error(\"Account not found\");\n  }\n\n  (0,_htmlSetters__WEBPACK_IMPORTED_MODULE_2__.setAccountName)(data, data.account);\n}\n\nasync function refreshAccount(data, html) {\n  const newAddress = (await data.web3.eth.getAccounts())[0];\n\n  if (data.account === undefined) {\n    throw new Error(\"Account not found\");\n  }\n\n  if (data.account !== newAddress) {\n    (0,_htmlSetters__WEBPACK_IMPORTED_MODULE_2__.setAccountName)(data, newAddress);\n  }\n}\n\nasync function connectAccount(data, html) {\n  await connect(data);\n\n  const id = setInterval(() => refreshAccount(data, html), 500);\n\n  (0,_connectButton__WEBPACK_IMPORTED_MODULE_0__.removeConnectButton)(html);\n\n  (0,_deployButton__WEBPACK_IMPORTED_MODULE_1__.addDeployButton)(data, html);\n}\n\n\n//# sourceURL=webpack://owner/./src/connect.js?");

/***/ }),

/***/ "./src/connectButton.js":
/*!******************************!*\
  !*** ./src/connectButton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeConnectButton\": () => (/* binding */ removeConnectButton),\n/* harmony export */   \"addConnectButton\": () => (/* binding */ addConnectButton)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ \"./src/connect.js\");\n\n\n\n\nconst removeConnectButton = (html) => {\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.removeButton)(html.connectButton);\n};\n\nconst addConnectButton = (data, html) => {\n  const connectButton = createConnectButton();\n\n  connectButton.addEventListener(\n    \"click\",\n    async () => await (0,_connect__WEBPACK_IMPORTED_MODULE_1__.connectAccount)(data, html)\n  );\n\n  html.header.append(connectButton);\n\n  html.connectButton = connectButton;\n};\n\nfunction createConnectButton() {\n  return (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.createButton)(\"Connect to account\", \"connect-account\");\n}\n\n\n//# sourceURL=webpack://owner/./src/connectButton.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = {\n  dataForDeploy: {\n    abi: [\n      {\n        inputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"constructor\",\n      },\n      {\n        anonymous: false,\n        inputs: [\n          {\n            indexed: true,\n            internalType: \"address\",\n            name: \"oldOwner\",\n            type: \"address\",\n          },\n          {\n            indexed: true,\n            internalType: \"address\",\n            name: \"newOwner\",\n            type: \"address\",\n          },\n        ],\n        name: \"OwnerSet\",\n        type: \"event\",\n      },\n      {\n        inputs: [\n          {\n            internalType: \"address\",\n            name: \"newOwner\",\n            type: \"address\",\n          },\n        ],\n        name: \"changeOwner\",\n        outputs: [],\n        stateMutability: \"nonpayable\",\n        type: \"function\",\n      },\n      {\n        inputs: [],\n        name: \"getOwner\",\n        outputs: [\n          {\n            internalType: \"address\",\n            name: \"\",\n            type: \"address\",\n          },\n        ],\n        stateMutability: \"view\",\n        type: \"function\",\n      },\n    ],\n    bytecode:\n      \"608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a3610356806100db6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063893d20e81461003b578063a6f9dae114610059575b600080fd5b610043610075565b604051610050919061025d565b60405180910390f35b610073600480360381019061006e91906101fe565b61009e565b005b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461012c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161012390610278565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a73560405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000813590506101f881610309565b92915050565b600060208284031215610214576102136102db565b5b6000610222848285016101e9565b91505092915050565b610234816102a9565b82525050565b6000610247601383610298565b9150610252826102e0565b602082019050919050565b6000602082019050610272600083018461022b565b92915050565b600060208201905081810360008301526102918161023a565b9050919050565b600082825260208201905092915050565b60006102b4826102bb565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b7f43616c6c6572206973206e6f74206f776e657200000000000000000000000000600082015250565b610312816102a9565b811461031d57600080fd5b5056fea26469706673582212208f65d9c920a5e7c951f66594688d8b1bb886420d647e05d3e5c9ec7eeab019cd64736f6c63430008070033\",\n  },\n  account: \"\",\n  contract: \"\",\n};\n\n\n//# sourceURL=webpack://owner/./src/data.js?");

/***/ }),

/***/ "./src/deployButton.js":
/*!*****************************!*\
  !*** ./src/deployButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addDeployButton\": () => (/* binding */ addDeployButton),\n/* harmony export */   \"removeDeployButton\": () => (/* binding */ removeDeployButton)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _deployContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deployContract */ \"./src/deployContract.js\");\n\n\n\nconst addDeployButton = (data, html) => {\n  const button = createDeployButton();\n\n  button.onclick = async () => await (0,_deployContract__WEBPACK_IMPORTED_MODULE_1__.deploy)(data, html);\n\n  html.deployButton = button;\n\n  html.header.append(button);\n};\n\nconst removeDeployButton = (html) => {\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.removeButton)(html.deployButton);\n};\n\nfunction createDeployButton() {\n  return (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.createButton)(\"Deploy contract\", \"deploy-contract\");\n}\n\n\n//# sourceURL=webpack://owner/./src/deployButton.js?");

/***/ }),

/***/ "./src/deployContract.js":
/*!*******************************!*\
  !*** ./src/deployContract.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deploy\": () => (/* binding */ deploy)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n/* harmony import */ var _htmlSetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlSetters */ \"./src/htmlSetters.js\");\n/*\nНужно разбить функцию на большее количество частей,\nПотому что так получается, что слишком много всего делает\n*/\n\n\n\n\nasync function deployContract(data) {\n  const deploy = data.contract.deploy({ data: data.dataForDeploy.bytecode });\n\n  const contract = await deploy\n    .send({ from: data.account })\n    .on(\"receipt\", (receipt) => (0,_htmlSetters__WEBPACK_IMPORTED_MODULE_1__.setCurrentOwner)(data, receipt.from));\n\n  return contract;\n}\n\nasync function deploy(data, html) {\n  data.contract = await deployContract(data);\n\n  (0,_buttons__WEBPACK_IMPORTED_MODULE_0__.removeButton)(html.deployButton);\n\n  data.contract.events\n    .OwnerSet()\n    .on(\"data\", ({ returnValues }) =>\n      (0,_htmlSetters__WEBPACK_IMPORTED_MODULE_1__.setCurrentOwner)(data, returnValues.newOwner)\n    )\n    .on(\"error\", console.log);\n}\n\n\n//# sourceURL=webpack://owner/./src/deployContract.js?");

/***/ }),

/***/ "./src/htmlSetters.js":
/*!****************************!*\
  !*** ./src/htmlSetters.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCurrentOwner\": () => (/* binding */ setCurrentOwner),\n/* harmony export */   \"setAccountName\": () => (/* binding */ setAccountName)\n/* harmony export */ });\n/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Elements */ \"./src/Elements.js\");\n\n\nconst setCurrentOwner = (data, name) => {\n  _Elements__WEBPACK_IMPORTED_MODULE_0__.html.currentOwner.querySelector(\".card__owner-address\").innerHTML = name;\n\n  data.currentOwner = name;\n};\n\nconst setAccountName = (data, name) => {\n  _Elements__WEBPACK_IMPORTED_MODULE_0__.html.accountName.querySelector(\".connect-block__current-address\").innerHTML =\n    name;\n  data.account = name;\n};\n\n\n//# sourceURL=webpack://owner/./src/htmlSetters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _web3_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3.min */ \"./src/web3.min.js\");\n/* harmony import */ var _web3_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_min__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Elements */ \"./src/Elements.js\");\n/* harmony import */ var _connectButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connectButton */ \"./src/connectButton.js\");\n\n\n\n\n\nwindow.addEventListener(\"load\", () => {\n  if (_data__WEBPACK_IMPORTED_MODULE_1__.data.web3 === undefined) {\n    _data__WEBPACK_IMPORTED_MODULE_1__.data.web3 = initialWeb3();\n  }\n\n  (0,_connectButton__WEBPACK_IMPORTED_MODULE_3__.addConnectButton)(_data__WEBPACK_IMPORTED_MODULE_1__.data, _Elements__WEBPACK_IMPORTED_MODULE_2__.html);\n});\n\nfunction initialWeb3() {\n  if (typeof window.web3 === \"undefined\") {\n    alert(\"Metamask not found\");\n\n    return new (_web3_min__WEBPACK_IMPORTED_MODULE_0___default())(new (_web3_min__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)(\"localhost:8545\"));\n  }\n\n  return new (_web3_min__WEBPACK_IMPORTED_MODULE_0___default())(window.web3.currentProvider);\n}\n\nasync function changeOwner(data) {\n  const newAddress = _Elements__WEBPACK_IMPORTED_MODULE_2__.html.changeOwnerField.value;\n  _Elements__WEBPACK_IMPORTED_MODULE_2__.html.changeOwnerField.value = \"\";\n\n  console.log(data.currentOwner, newAddress, data.currentOwner === newAddress);\n\n  if (newAddress === data.currentOwner) {\n    alert(\"Нельзя сменить адрес на свой\");\n    return;\n  }\n\n  if (data.web3.utils.isAddress(newAddress) === false) {\n    throw new TypeError(\"Введен некорректный адрес\");\n  }\n\n  await data.contract.methods\n    .changeOwner(newAddress)\n    .send({ from: data.account });\n}\n\n_Elements__WEBPACK_IMPORTED_MODULE_2__.html.changeOwnerButton.addEventListener(\n  \"click\",\n  async () => await changeOwner(_data__WEBPACK_IMPORTED_MODULE_1__.data)\n);\n\n\n//# sourceURL=webpack://owner/./src/index.js?");

/***/ }),

/***/ "./src/web3.min.js":
/*!*************************!*\
  !*** ./src/web3.min.js ***!
  \*************************/
/***/ ((module) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;