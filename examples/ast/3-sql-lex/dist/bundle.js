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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "./node_modules/node-libs-browser/mock/empty.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pipe_annotation_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe/annotation-pipe */ "./src/pipe/annotation-pipe.ts");
/* harmony import */ var _pipe_blank_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe/blank-pipe */ "./src/pipe/blank-pipe.ts");
/* harmony import */ var _pipe_keyword_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipe/keyword-pipe */ "./src/pipe/keyword-pipe.ts");
/* harmony import */ var _pipe_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/symbol-pipe */ "./src/pipe/symbol-pipe.ts");





var Lex = /** @class */ (function () {
    function Lex() {
        this.pipes = [
            new _pipe_blank_pipe__WEBPACK_IMPORTED_MODULE_2__["default"](),
            new _pipe_annotation_pipe__WEBPACK_IMPORTED_MODULE_1__["default"](),
            new _pipe_keyword_pipe__WEBPACK_IMPORTED_MODULE_3__["default"](),
            new _pipe_symbol_pipe__WEBPACK_IMPORTED_MODULE_4__["default"]()
        ];
    }
    Lex.prototype.parse = function (filePath) {
        var content = fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"](filePath, { encoding: 'utf-8' });
        while (content) {
            // let token =
            //   this.getTokenWhiteBlank(content) || this.getTokenAnnotaion(content);
            // this.tokens.push(token);
        }
    };
    return Lex;
}());


/***/ }),

/***/ "./src/pipe/annotation-pipe.ts":
/*!*************************************!*\
  !*** ./src/pipe/annotation-pipe.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token */ "./src/token.ts");

var AnnotationPipe = /** @class */ (function () {
    function AnnotationPipe() {
    }
    AnnotationPipe.prototype.getToken = function (content, lastToken) {
        var regex = new RegExp(/^\/\*.*?(?:\*\/|$)/);
        var matchs = content.match(regex);
        if (matchs) {
            return new _token__WEBPACK_IMPORTED_MODULE_0__["default"](TokenEnum.ANNOTAION, matchs[0], TokenEnum.ANNOTAION.toString());
        }
        return null;
    };
    return AnnotationPipe;
}());
/* harmony default export */ __webpack_exports__["default"] = (AnnotationPipe);


/***/ }),

/***/ "./src/pipe/blank-pipe.ts":
/*!********************************!*\
  !*** ./src/pipe/blank-pipe.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token */ "./src/token.ts");

var BlankPipe = /** @class */ (function () {
    function BlankPipe() {
    }
    BlankPipe.prototype.getToken = function (content, lastToken) {
        var regex = new RegExp(/^(\s+)/);
        var matchs = content.match(regex);
        if (matchs) {
            return new _token__WEBPACK_IMPORTED_MODULE_0__["default"](TokenEnum.WHITEBLANK, matchs[0], TokenEnum.WHITEBLANK.toString());
        }
        return null;
    };
    return BlankPipe;
}());
/* harmony default export */ __webpack_exports__["default"] = (BlankPipe);


/***/ }),

/***/ "./src/pipe/keyword-pipe.ts":
/*!**********************************!*\
  !*** ./src/pipe/keyword-pipe.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token */ "./src/token.ts");

var KeywordPipe = /** @class */ (function () {
    function KeywordPipe() {
        this.keywords = KeywordPipe.keywordStr.split(/\s/);
    }
    KeywordPipe.prototype.getToken = function (content, lastToken) {
        for (var _i = 0, _a = this.keywords; _i < _a.length; _i++) {
            var keyword = _a[_i];
            var matchs = content.match(new RegExp(keyword));
            if (matchs) {
                return new _token__WEBPACK_IMPORTED_MODULE_0__["default"](TokenEnum.KEYWORD, matchs[0], keyword);
            }
        }
        return null;
    };
    KeywordPipe.keywordStr = '_FILENAME ACCESSIBLE ADD ALL ALTER ANALYZE AND AS ASC ASENSITIVE BEFORE BETWEEN BIGINT BINARY BLOB BOTH BY CALL CASCADE CASE CHANGE CHAR CHARACTER CHECK COLLATE COLUMN CONDITION CONSTRAINT CONTINUE CONVERT CREATE CROSS CURRENT_DATE CURRENT_TIME CURRENT_TIMESTAMP CURRENT_USER CURSOR DATABASE DATABASES DAY_HOUR DAY_MICROSECOND DAY_MINUTE DAY_SECOND DEC DECIMAL DECLARE DEFAULT DELAYED DELETE DESC DESCRIBE DETERMINISTIC DISTINCT DISTINCTROW DIV DOUBLE DROP DUAL EACH ELSE ELSEIF ENCLOSED ESCAPED EXISTS EXIT EXPLAIN FALSE FETCH FLOAT FLOAT4 FLOAT8 FOR FORCE FOREIGN FROM FULLTEXT GET GRANT GROUP HAVING HIGH_PRIORITY HOUR_MICROSECOND HOUR_MINUTE HOUR_SECOND IF IGNORE IN INDEX INFILE INNER INOUT INSENSITIVE INSERT INT INT1 INT2 INT3 INT4 INT8 INTEGER INTERVAL INTO IO_AFTER_GTIDS IO_BEFORE_GTIDS IS ITERATE JOIN KEY KEYS KILL LEADING LEAVE LEFT LIKE LIMIT LINEAR LINES LOAD LOCALTIME LOCALTIMESTAMP LOCK LONG LONGBLOB LONGTEXT LOOP LOW_PRIORITY MASTER_BIND MASTER_SSL_VERIFY_SERVER_CERT MATCH MAXVALUE MEDIUMBLOB MEDIUMINT MEDIUMTEXT MIDDLEINT MINUTE_MICROSECOND MINUTE_SECOND MOD MODIFIES NATURAL NONBLOCKING NOT NO_WRITE_TO_BINLOG NULL NUMERIC ON OPTIMIZE OPTION OPTIONALLY OR ORDER OUT OUTER OUTFILE PARTITION PRECISION PRIMARY PROCEDURE PURGE RANGE READ READS READ_WRITE REAL REFERENCES REGEXP RELEASE RENAME REPEAT REPLACE REQUIRE RESIGNAL RESTRICT RETURN REVOKE RIGHT RLIKE SCHEMA SCHEMAS SECOND_MICROSECOND SELECT SENSITIVE SEPARATOR SET SHOW SIGNAL SMALLINT SPATIAL SPECIFIC SQL SQLEXCEPTION SQLSTATE SQLWARNING SQL_BIG_RESULT SQL_CALC_FOUND_ROWS SQL_SMALL_RESULT SSL STARTING STRAIGHT_JOIN TABLE TERMINATED THEN TINYBLOB TINYINT TINYTEXT TO TRAILING TRIGGER TRUE UNDO UNION UNIQUE UNLOCK UNSIGNED UPDATE USAGE USE USING UTC_DATE UTC_TIME UTC_TIMESTAMP VALUES VARBINARY VARCHAR VARCHARACTER VARYING WHEN WHERE WHILE WITH WRITE XOR YEAR_MONTH ZEROFILL';
    return KeywordPipe;
}());
/* harmony default export */ __webpack_exports__["default"] = (KeywordPipe);


/***/ }),

/***/ "./src/pipe/symbol-pipe.ts":
/*!*********************************!*\
  !*** ./src/pipe/symbol-pipe.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token */ "./src/token.ts");

var symbolDict = [
    { name: 'NOT_EQUAL', regex: /((!=)|(<>))/gi },
    { name: 'LEFT_PEREN', regex: /\(/gi },
    { name: 'RIGHT_PEREN', regex: /\)/gi },
    { name: 'COMMA', regex: /,/gi },
    { name: 'QUESTION', regex: /\?/gi },
    { name: 'ASTERISK', regex: /\*/gi },
    { name: 'SEMICOLON', regex: /;/gi },
    { name: 'EQUALS', regex: /=/gi },
    { name: 'GREATER_THAN', regex: />/gi },
    { name: 'LESS_THAN', regex: /</gi }
];
var SymbolPipe = /** @class */ (function () {
    function SymbolPipe() {
    }
    SymbolPipe.prototype.getToken = function (content, lastToken) {
        for (var _i = 0, symbolDict_1 = symbolDict; _i < symbolDict_1.length; _i++) {
            var symbol = symbolDict_1[_i];
            var regex = new RegExp(symbol.regex);
            var matchs = content.match(regex);
            if (matchs) {
                return new _token__WEBPACK_IMPORTED_MODULE_0__["default"](TokenEnum.SYMBOL, matchs[0], symbol.name);
            }
        }
        return null;
    };
    return SymbolPipe;
}());
/* harmony default export */ __webpack_exports__["default"] = (SymbolPipe);


/***/ }),

/***/ "./src/token.ts":
/*!**********************!*\
  !*** ./src/token.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Token = /** @class */ (function () {
    function Token(
    //Token的类型
    type, 
    //Token的值
    value, 
    //Token的词素
    name, 
    //Token的行数
    line, 
    //Token的开始字符数
    startPosition) {
        this.type = type;
        this.value = value;
        this.name = name;
        this.line = line;
        this.startPosition = startPosition;
    }
    return Token;
}());
/* harmony default export */ __webpack_exports__["default"] = (Token);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2Fubm90YXRpb24tcGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZS9ibGFuay1waXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9waXBlL2tleXdvcmQtcGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGlwZS9zeW1ib2wtcGlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQzJCO0FBQ1Y7QUFDSTtBQUNGO0FBRzVDO0lBU0U7UUFQQSxVQUFLLEdBQVU7WUFDYixJQUFJLHdEQUFT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Q3BCLFVBQVU7SUFDSCxJQUFZO0lBQ25CLFVBQVU7SUFDSCxJQUFhO0lBQ3BCLGFBQWE7SUFDTixhQUFzQjtRQVJ0QixTQUFJLEdBQUosSUFBSSxDQUFXO1FBRWYsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUViLFNBQUksR0FBSixJQUFJLENBQVE7UUFFWixTQUFJLEdBQUosSUFBSSxDQUFTO1FBRWIsa0JBQWEsR0FBYixhQUFhLENBQVM7SUFDNUIsQ0FBQztJQUNOLFlBQUM7QUFBRCxDQUFDO0FBRWMsb0VBQUssRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCBBbm5vdGF0aW9uUGlwZSBmcm9tICcuL3BpcGUvYW5ub3RhdGlvbi1waXBlJztcbmltcG9ydCBCbGFua1BpcGUgZnJvbSAnLi9waXBlL2JsYW5rLXBpcGUnO1xuaW1wb3J0IEtleXdvcmRQaXBlIGZyb20gJy4vcGlwZS9rZXl3b3JkLXBpcGUnO1xuaW1wb3J0IFN5bWJvbFBpcGUgZnJvbSAnLi9waXBlL3N5bWJvbC1waXBlJztcbmltcG9ydCBUb2tlbiBmcm9tICcuL3Rva2VuJztcblxuY2xhc3MgTGV4IHtcbiAgdG9rZW5zOiBUb2tlbltdO1xuICBwaXBlczogYW55W10gPSBbXG4gICAgbmV3IEJsYW5rUGlwZSgpLFxuICAgIG5ldyBBbm5vdGF0aW9uUGlwZSgpLFxuICAgIG5ldyBLZXl3b3JkUGlwZSgpLFxuICAgIG5ldyBTeW1ib2xQaXBlKClcbiAgXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcGFyc2UoZmlsZVBhdGg6IHN0cmluZykge1xuICAgIGxldCBjb250ZW50ID0gZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCB7IGVuY29kaW5nOiAndXRmLTgnIH0pO1xuICAgIHdoaWxlIChjb250ZW50KSB7XG4gICAgICAvLyBsZXQgdG9rZW4gPVxuICAgICAgLy8gICB0aGlzLmdldFRva2VuV2hpdGVCbGFuayhjb250ZW50KSB8fCB0aGlzLmdldFRva2VuQW5ub3RhaW9uKGNvbnRlbnQpO1xuICAgICAgLy8gdGhpcy50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgVG9rZW4gZnJvbSAnLi4vdG9rZW4nO1xuaW1wb3J0IFBpcGUgZnJvbSAnLi9waXBlJztcblxuY2xhc3MgQW5ub3RhdGlvblBpcGUgaW1wbGVtZW50cyBQaXBlIHtcbiAgZ2V0VG9rZW4oY29udGVudDogc3RyaW5nLCBsYXN0VG9rZW4/OiBUb2tlbik6IFRva2VuIHtcbiAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoL15cXC9cXCouKj8oPzpcXCpcXC98JCkvKTtcbiAgICBjb25zdCBtYXRjaHMgPSBjb250ZW50Lm1hdGNoKHJlZ2V4KTtcbiAgICBpZiAobWF0Y2hzKSB7XG4gICAgICByZXR1cm4gbmV3IFRva2VuKFxuICAgICAgICBUb2tlbkVudW0uQU5OT1RBSU9OLFxuICAgICAgICBtYXRjaHNbMF0sXG4gICAgICAgIFRva2VuRW51bS5BTk5PVEFJT04udG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGlvblBpcGU7XG4iLCJpbXBvcnQgVG9rZW4gZnJvbSAnLi4vdG9rZW4nO1xuaW1wb3J0IFBpcGUgZnJvbSAnLi9waXBlJztcblxuY2xhc3MgQmxhbmtQaXBlIGltcGxlbWVudHMgUGlwZSB7XG4gIGdldFRva2VuKGNvbnRlbnQ6IHN0cmluZywgbGFzdFRva2VuPzogVG9rZW4pOiBUb2tlbiB7XG4gICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKC9eKFxccyspLyk7XG4gICAgY29uc3QgbWF0Y2hzID0gY29udGVudC5tYXRjaChyZWdleCk7XG4gICAgaWYgKG1hdGNocykge1xuICAgICAgcmV0dXJuIG5ldyBUb2tlbihcbiAgICAgICAgVG9rZW5FbnVtLldISVRFQkxBTkssXG4gICAgICAgIG1hdGNoc1swXSxcbiAgICAgICAgVG9rZW5FbnVtLldISVRFQkxBTksudG9TdHJpbmcoKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxhbmtQaXBlO1xuIiwiaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IFRva2VuIGZyb20gJy4uL3Rva2VuJztcbmltcG9ydCBQaXBlIGZyb20gJy4vcGlwZSc7XG5cbmNsYXNzIEtleXdvcmRQaXBlIGltcGxlbWVudHMgUGlwZSB7XG4gIHN0YXRpYyBrZXl3b3JkU3RyID1cbiAgICAnX0ZJTEVOQU1FIEFDQ0VTU0lCTEUgQUREIEFMTCBBTFRFUiBBTkFMWVpFIEFORCBBUyBBU0MgQVNFTlNJVElWRSBCRUZPUkUgQkVUV0VFTiBCSUdJTlQgQklOQVJZIEJMT0IgQk9USCBCWSBDQUxMIENBU0NBREUgQ0FTRSBDSEFOR0UgQ0hBUiBDSEFSQUNURVIgQ0hFQ0sgQ09MTEFURSBDT0xVTU4gQ09ORElUSU9OIENPTlNUUkFJTlQgQ09OVElOVUUgQ09OVkVSVCBDUkVBVEUgQ1JPU1MgQ1VSUkVOVF9EQVRFIENVUlJFTlRfVElNRSBDVVJSRU5UX1RJTUVTVEFNUCBDVVJSRU5UX1VTRVIgQ1VSU09SIERBVEFCQVNFIERBVEFCQVNFUyBEQVlfSE9VUiBEQVlfTUlDUk9TRUNPTkQgREFZX01JTlVURSBEQVlfU0VDT05EIERFQyBERUNJTUFMIERFQ0xBUkUgREVGQVVMVCBERUxBWUVEIERFTEVURSBERVNDIERFU0NSSUJFIERFVEVSTUlOSVNUSUMgRElTVElOQ1QgRElTVElOQ1RST1cgRElWIERPVUJMRSBEUk9QIERVQUwgRUFDSCBFTFNFIEVMU0VJRiBFTkNMT1NFRCBFU0NBUEVEIEVYSVNUUyBFWElUIEVYUExBSU4gRkFMU0UgRkVUQ0ggRkxPQVQgRkxPQVQ0IEZMT0FUOCBGT1IgRk9SQ0UgRk9SRUlHTiBGUk9NIEZVTExURVhUIEdFVCBHUkFOVCBHUk9VUCBIQVZJTkcgSElHSF9QUklPUklUWSBIT1VSX01JQ1JPU0VDT05EIEhPVVJfTUlOVVRFIEhPVVJfU0VDT05EIElGIElHTk9SRSBJTiBJTkRFWCBJTkZJTEUgSU5ORVIgSU5PVVQgSU5TRU5TSVRJVkUgSU5TRVJUIElOVCBJTlQxIElOVDIgSU5UMyBJTlQ0IElOVDggSU5URUdFUiBJTlRFUlZBTCBJTlRPIElPX0FGVEVSX0dUSURTIElPX0JFRk9SRV9HVElEUyBJUyBJVEVSQVRFIEpPSU4gS0VZIEtFWVMgS0lMTCBMRUFESU5HIExFQVZFIExFRlQgTElLRSBMSU1JVCBMSU5FQVIgTElORVMgTE9BRCBMT0NBTFRJTUUgTE9DQUxUSU1FU1RBTVAgTE9DSyBMT05HIExPTkdCTE9CIExPTkdURVhUIExPT1AgTE9XX1BSSU9SSVRZIE1BU1RFUl9CSU5EIE1BU1RFUl9TU0xfVkVSSUZZX1NFUlZFUl9DRVJUIE1BVENIIE1BWFZBTFVFIE1FRElVTUJMT0IgTUVESVVNSU5UIE1FRElVTVRFWFQgTUlERExFSU5UIE1JTlVURV9NSUNST1NFQ09ORCBNSU5VVEVfU0VDT05EIE1PRCBNT0RJRklFUyBOQVRVUkFMIE5PTkJMT0NLSU5HIE5PVCBOT19XUklURV9UT19CSU5MT0cgTlVMTCBOVU1FUklDIE9OIE9QVElNSVpFIE9QVElPTiBPUFRJT05BTExZIE9SIE9SREVSIE9VVCBPVVRFUiBPVVRGSUxFIFBBUlRJVElPTiBQUkVDSVNJT04gUFJJTUFSWSBQUk9DRURVUkUgUFVSR0UgUkFOR0UgUkVBRCBSRUFEUyBSRUFEX1dSSVRFIFJFQUwgUkVGRVJFTkNFUyBSRUdFWFAgUkVMRUFTRSBSRU5BTUUgUkVQRUFUIFJFUExBQ0UgUkVRVUlSRSBSRVNJR05BTCBSRVNUUklDVCBSRVRVUk4gUkVWT0tFIFJJR0hUIFJMSUtFIFNDSEVNQSBTQ0hFTUFTIFNFQ09ORF9NSUNST1NFQ09ORCBTRUxFQ1QgU0VOU0lUSVZFIFNFUEFSQVRPUiBTRVQgU0hPVyBTSUdOQUwgU01BTExJTlQgU1BBVElBTCBTUEVDSUZJQyBTUUwgU1FMRVhDRVBUSU9OIFNRTFNUQVRFIFNRTFdBUk5JTkcgU1FMX0JJR19SRVNVTFQgU1FMX0NBTENfRk9VTkRfUk9XUyBTUUxfU01BTExfUkVTVUxUIFNTTCBTVEFSVElORyBTVFJBSUdIVF9KT0lOIFRBQkxFIFRFUk1JTkFURUQgVEhFTiBUSU5ZQkxPQiBUSU5ZSU5UIFRJTllURVhUIFRPIFRSQUlMSU5HIFRSSUdHRVIgVFJVRSBVTkRPIFVOSU9OIFVOSVFVRSBVTkxPQ0sgVU5TSUdORUQgVVBEQVRFIFVTQUdFIFVTRSBVU0lORyBVVENfREFURSBVVENfVElNRSBVVENfVElNRVNUQU1QIFZBTFVFUyBWQVJCSU5BUlkgVkFSQ0hBUiBWQVJDSEFSQUNURVIgVkFSWUlORyBXSEVOIFdIRVJFIFdISUxFIFdJVEggV1JJVEUgWE9SIFlFQVJfTU9OVEggWkVST0ZJTEwnO1xuICBrZXl3b3Jkczogc3RyaW5nW107XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMua2V5d29yZHMgPSBLZXl3b3JkUGlwZS5rZXl3b3JkU3RyLnNwbGl0KC9cXHMvKTtcbiAgfVxuICBnZXRUb2tlbihjb250ZW50OiBzdHJpbmcsIGxhc3RUb2tlbj86IFRva2VuKTogVG9rZW4ge1xuICAgIGZvciAobGV0IGtleXdvcmQgb2YgdGhpcy5rZXl3b3Jkcykge1xuICAgICAgbGV0IG1hdGNocyA9IGNvbnRlbnQubWF0Y2gobmV3IFJlZ0V4cChrZXl3b3JkKSk7XG4gICAgICBpZiAobWF0Y2hzKSB7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4oVG9rZW5FbnVtLktFWVdPUkQsIG1hdGNoc1swXSwga2V5d29yZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEtleXdvcmRQaXBlO1xuIiwiaW1wb3J0IHsgRk9STUVSUiB9IGZyb20gJ2Rucyc7XG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tICdxdWVyeXN0cmluZyc7XG5pbXBvcnQgVG9rZW4gZnJvbSAnLi4vdG9rZW4nO1xuaW1wb3J0IFBpcGUgZnJvbSAnLi9waXBlJztcblxuY29uc3Qgc3ltYm9sRGljdCA9IFtcbiAgeyBuYW1lOiAnTk9UX0VRVUFMJywgcmVnZXg6IC8oKCE9KXwoPD4pKS9naSB9LFxuICB7IG5hbWU6ICdMRUZUX1BFUkVOJywgcmVnZXg6IC9cXCgvZ2kgfSxcbiAgeyBuYW1lOiAnUklHSFRfUEVSRU4nLCByZWdleDogL1xcKS9naSB9LFxuICB7IG5hbWU6ICdDT01NQScsIHJlZ2V4OiAvLC9naSB9LFxuICB7IG5hbWU6ICdRVUVTVElPTicsIHJlZ2V4OiAvXFw/L2dpIH0sXG4gIHsgbmFtZTogJ0FTVEVSSVNLJywgcmVnZXg6IC9cXCovZ2kgfSxcbiAgeyBuYW1lOiAnU0VNSUNPTE9OJywgcmVnZXg6IC87L2dpIH0sXG4gIHsgbmFtZTogJ0VRVUFMUycsIHJlZ2V4OiAvPS9naSB9LFxuICB7IG5hbWU6ICdHUkVBVEVSX1RIQU4nLCByZWdleDogLz4vZ2kgfSxcbiAgeyBuYW1lOiAnTEVTU19USEFOJywgcmVnZXg6IC88L2dpIH1cbl07XG5jbGFzcyBTeW1ib2xQaXBlIGltcGxlbWVudHMgUGlwZSB7XG4gIGdldFRva2VuKGNvbnRlbnQ6IHN0cmluZywgbGFzdFRva2VuPzogVG9rZW4pOiBUb2tlbiB7XG4gICAgZm9yIChsZXQgc3ltYm9sIG9mIHN5bWJvbERpY3QpIHtcbiAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoc3ltYm9sLnJlZ2V4KTtcbiAgICAgIGxldCBtYXRjaHMgPSBjb250ZW50Lm1hdGNoKHJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUb2tlbihUb2tlbkVudW0uU1lNQk9MLCBtYXRjaHNbMF0sIHN5bWJvbC5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ltYm9sUGlwZTtcbiIsImNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3IoXG4gICAgLy9Ub2tlbueahOexu+Wei1xuICAgIHB1YmxpYyB0eXBlOiBUb2tlbkVudW0sXG4gICAgLy9Ub2tlbueahOWAvFxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nLFxuICAgIC8vVG9rZW7nmoTor43ntKBcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLFxuICAgIC8vVG9rZW7nmoTooYzmlbBcbiAgICBwdWJsaWMgbGluZT86IG51bWJlcixcbiAgICAvL1Rva2Vu55qE5byA5aeL5a2X56ym5pWwXG4gICAgcHVibGljIHN0YXJ0UG9zaXRpb24/OiBudW1iZXJcbiAgKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2tlbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=