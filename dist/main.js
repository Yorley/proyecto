(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_delay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/delay */ "./node_modules/rxjs-compat/_esm5/add/operator/delay.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_materialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/operator/materialize */ "./node_modules/rxjs-compat/_esm5/add/operator/materialize.js");
/* harmony import */ var rxjs_add_operator_dematerialize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/add/operator/dematerialize */ "./node_modules/rxjs-compat/_esm5/add/operator/dematerialize.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(null).mergeMap(function () {
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Username or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Unauthorised');
                }
            }
            // get user by id
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Unauthorised');
                }
            }
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Username "' + newUser_1.username + '" is already taken');
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].of(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw('Unauthorised');
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_1__["fakeBackendProvider"]; });





/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/authenticate', { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/dss.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/dss.service.ts ***!
  \******************************************/
/*! exports provided: DssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DssService", function() { return DssService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DssService = /** @class */ (function () {
    function DssService() {
        this.ds = this.dsInstance = deepstream('localhost:6020');
    }
    DssService.prototype.login = function (credentials, loginHandler) {
        // {username: ' ', password:' '}
        this.ds.login(credentials, loginHandler);
    };
    DssService.prototype.getRecord = function (name) {
        return this.ds.record.getRecord(name);
    };
    DssService.prototype.getList = function (name) {
        return this.ds.record.getList(name);
    };
    DssService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DssService);
    return DssService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, DssService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _dss_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dss.service */ "./src/app/_services/dss.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DssService", function() { return _dss_service__WEBPACK_IMPORTED_MODULE_3__["DssService"]; });







/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get('/api/users');
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _soil_stats_soil_stats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soil-stats/soil-stats.component */ "./src/app/soil-stats/soil-stats.component.ts");
/* harmony import */ var _product_cycle_product_cycle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-cycle/product-cycle.component */ "./src/app/product-cycle/product-cycle.component.ts");
/* harmony import */ var _changes_soil_changes_soil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changes-soil/changes-soil.component */ "./src/app/changes-soil/changes-soil.component.ts");
/* harmony import */ var _fertilization_test_fertilization_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fertilization-test/fertilization-test.component */ "./src/app/fertilization-test/fertilization-test.component.ts");
/* harmony import */ var _temperature_impact_temperature_impact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temperature-impact/temperature-impact.component */ "./src/app/temperature-impact/temperature-impact.component.ts");
/* harmony import */ var _test_soil_test_soil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test-soil/test-soil.component */ "./src/app/test-soil/test-soil.component.ts");
/* harmony import */ var _test_vulnerability_test_vulnerability_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-vulnerability/test-vulnerability.component */ "./src/app/test-vulnerability/test-vulnerability.component.ts");
/* harmony import */ var _test_waste_test_waste_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-waste/test-waste.component */ "./src/app/test-waste/test-waste.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cost_cost_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cost/cost.component */ "./src/app/cost/cost.component.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/sale/sale.component.ts");
/* harmony import */ var _waste_waste_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./waste/waste.component */ "./src/app/waste/waste.component.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./view-profile/view-profile.component */ "./src/app/view-profile/view-profile.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _uchat_uchat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./uchat/uchat.component */ "./src/app/uchat/uchat.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'soilStats', component: _soil_stats_soil_stats_component__WEBPACK_IMPORTED_MODULE_2__["SoilStatsComponent"] },
    { path: 'changeSoil', component: _changes_soil_changes_soil_component__WEBPACK_IMPORTED_MODULE_4__["ChangesSoilComponent"] },
    { path: 'fertilizationTest', component: _fertilization_test_fertilization_test_component__WEBPACK_IMPORTED_MODULE_5__["FertilizationTestComponent"] },
    { path: 'temperatureImpact', component: _temperature_impact_temperature_impact_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureImpactComponent"] },
    { path: 'testSoil', component: _test_soil_test_soil_component__WEBPACK_IMPORTED_MODULE_7__["TestSoilComponent"] },
    { path: 'testVulnerability', component: _test_vulnerability_test_vulnerability_component__WEBPACK_IMPORTED_MODULE_8__["TestVulnerabilityComponent"] },
    { path: 'testWaste', component: _test_waste_test_waste_component__WEBPACK_IMPORTED_MODULE_9__["TestWasteComponent"] },
    { path: 'cycle', component: _product_cycle_product_cycle_component__WEBPACK_IMPORTED_MODULE_3__["ProductCycleComponent"] },
    { path: 'costs', component: _cost_cost_component__WEBPACK_IMPORTED_MODULE_11__["CostComponent"] },
    { path: 'warning', component: _warning_warning_component__WEBPACK_IMPORTED_MODULE_14__["WarningComponent"] },
    { path: 'waste', component: _waste_waste_component__WEBPACK_IMPORTED_MODULE_13__["WasteComponent"] },
    { path: 'sales', component: _sale_sale_component__WEBPACK_IMPORTED_MODULE_12__["SaleComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"] },
    { path: 'viewProfile', component: _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_17__["ViewProfileComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"] },
    { path: 'chating', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_18__["ChatComponent"] },
    { path: 'chat', component: _uchat_uchat_component__WEBPACK_IMPORTED_MODULE_19__["UchatComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header>\r\n  <div class=\"collapse bg-dark\" id=\"navbarHeader\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-8 col-md-7 py-4\">\r\n          <h4 class=\"text-white\">About</h4>\r\n          <p class=\"text-muted\">Este proyecto consiste en una aplicación cuyo objetivo principal se basa en apoyar al sector \r\n            agrícola del país impulsando la economía para los pequeños agricultores, eliminando la brecha que han \r\n            creado las empresas en relación con la distribución de los productos entre quien los produce y el consumidor.</p>\r\n        </div>\r\n        <div class=\"col-sm-4 offset-md-1 py-4\">\r\n          <h4 class=\"text-white\">Contact</h4>\r\n          <ul class=\"list-unstyled\">\r\n            <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\r\n            <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\r\n            <li><a href=\"#\" class=\"text-white\">Email me</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"navbar navbar-dark bg-dark box-shadow\">\r\n    <div class=\"container d-flex justify-content-between\">\r\n      <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\r\n        <img src=\"https://png.icons8.com/color/50/000000/watermelon.png\">\r\n        <strong>ProduceMe</strong>\r\n      </a>\r\n      <div class=\" row flex-row-reverse\">\r\n        <button class=\"navbar-toggler \" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"dropdown\">\r\n          <button type=\"button\" class=\"buttonUser btn  dropdown-toggle \"  data-toggle=\"dropdown\">Cuenta</button>\r\n            <div class=\"dropdown-menu\" >\r\n                  <a class=\"dropdown-item\" href=\"#\">Bitácora</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Calendario</a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"login\">Perfil</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Ajustes</a>\r\n                  <a class=\"dropdown-item\" href=\"#\">Salir</a>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n      <div class=\"col-sm-2  float-left col-1 pl-0 pr-0 collapse width show\" id=\"sidebar\">\r\n        <div class=\"list-group border-0 card text-center text-md-left\">\r\n          <a href=\"/costs\" class=\"list-group-item d-inline-block collapsed\"><i class=\"fa fa-cart-plus\"></i> <span class=\"d-none d-md-inline\">Compras</span></a>\r\n          <a href=\"/sales\" class=\"list-group-item d-inline-block collapsed\"><i class=\"fa fa-money\"></i> <span class=\"d-none d-md-inline\">Ventas</span></a>\r\n          <a href=\"#menu1\" class=\"list-group-item d-inline-block collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\"><i class=\"fa fa-lemon-o\"></i> <span class=\"d-none d-md-inline\">Productos </span> </a>\r\n          <div class=\"collapse\" id=\"menu1\" data-parent=\"#sidebar\">\r\n            <a href=\"/cycle\" class=\"list-group-item\" >Evolución</a>\r\n            <a href=\"/temperatureImpact\" class=\"list-group-item\" >Temperatura</a>\r\n            <a href=\"#\" class=\"list-group-item\" >Geolocalización</a> \r\n          </div>\r\n          <a href=\"/waste\" class=\"list-group-item d-inline-block collapsed\"><i class=\"fa fa-recycle\"></i> <span class=\"d-none d-md-inline\">Desechos</span></a>\r\n          <a href=\"/warning\" class=\"list-group-item d-inline-block collapsed\"><i class=\"fa fa-check-square\"></i> <span class=\"d-none d-md-inline\">Prevención</span></a>\r\n          <a href=\"#menu3\" class=\"list-group-item d-inline-block collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\"><i class=\"fa fa-tree\"></i> <span class=\"d-none d-md-inline\">Cultivar</span></a>\r\n          <div class=\"collapse\" id=\"menu3\" data-parent=\"#sidebar\">\r\n              <a href=\"#\" class=\"list-group-item\" data-parent=\"#menu3\">Formas de cultivo</a>\r\n              <a href=\"/testSoil\" class=\"list-group-item\" data-toggle=\"#menu3\">Aptitud del suelo </a>\r\n              <a href=\"/soilStats\" class=\"list-group-item\" data-parent=\"#menu3\">Estadística de suelo</a>\r\n              <a href=\"/fertilizationTest\" class=\"list-group-item\" data-parent=\"#menu3\">Fertilización</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col py-1\" style=\"padding-left: 0.5%; padding-right: 0%; padding-bottom: 0%; margin-top: 0%\">\r\n          <router-outlet></router-outlet>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _soil_stats_soil_stats_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./soil-stats/soil-stats.component */ "./src/app/soil-stats/soil-stats.component.ts");
/* harmony import */ var _product_cycle_product_cycle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-cycle/product-cycle.component */ "./src/app/product-cycle/product-cycle.component.ts");
/* harmony import */ var _test_soil_test_soil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-soil/test-soil.component */ "./src/app/test-soil/test-soil.component.ts");
/* harmony import */ var _test_waste_test_waste_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./test-waste/test-waste.component */ "./src/app/test-waste/test-waste.component.ts");
/* harmony import */ var _changes_soil_changes_soil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./changes-soil/changes-soil.component */ "./src/app/changes-soil/changes-soil.component.ts");
/* harmony import */ var _test_vulnerability_test_vulnerability_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test-vulnerability/test-vulnerability.component */ "./src/app/test-vulnerability/test-vulnerability.component.ts");
/* harmony import */ var _fertilization_test_fertilization_test_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fertilization-test/fertilization-test.component */ "./src/app/fertilization-test/fertilization-test.component.ts");
/* harmony import */ var _temperature_impact_temperature_impact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./temperature-impact/temperature-impact.component */ "./src/app/temperature-impact/temperature-impact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cost_cost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cost/cost.component */ "./src/app/cost/cost.component.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/sale/sale.component.ts");
/* harmony import */ var _waste_waste_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./waste/waste.component */ "./src/app/waste/waste.component.ts");
/* harmony import */ var _warning_warning_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./warning/warning.component */ "./src/app/warning/warning.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view-profile/view-profile.component */ "./src/app/view-profile/view-profile.component.ts");
/* harmony import */ var _helpers_index__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_helpers/index */ "./src/app/_helpers/index.ts");
/* harmony import */ var _guards_index__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./_guards/index */ "./src/app/_guards/index.ts");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./_services/index */ "./src/app/_services/index.ts");
/* harmony import */ var _uchat_uchat_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./uchat/uchat.component */ "./src/app/uchat/uchat.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























// used to create fake backend










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _soil_stats_soil_stats_component__WEBPACK_IMPORTED_MODULE_6__["SoilStatsComponent"],
                _product_cycle_product_cycle_component__WEBPACK_IMPORTED_MODULE_7__["ProductCycleComponent"],
                _test_soil_test_soil_component__WEBPACK_IMPORTED_MODULE_8__["TestSoilComponent"],
                _test_waste_test_waste_component__WEBPACK_IMPORTED_MODULE_9__["TestWasteComponent"],
                _changes_soil_changes_soil_component__WEBPACK_IMPORTED_MODULE_10__["ChangesSoilComponent"],
                _test_vulnerability_test_vulnerability_component__WEBPACK_IMPORTED_MODULE_11__["TestVulnerabilityComponent"],
                _fertilization_test_fertilization_test_component__WEBPACK_IMPORTED_MODULE_12__["FertilizationTestComponent"],
                _temperature_impact_temperature_impact_component__WEBPACK_IMPORTED_MODULE_13__["TemperatureImpactComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _cost_cost_component__WEBPACK_IMPORTED_MODULE_15__["CostComponent"],
                _sale_sale_component__WEBPACK_IMPORTED_MODULE_16__["SaleComponent"],
                _waste_waste_component__WEBPACK_IMPORTED_MODULE_17__["WasteComponent"],
                _warning_warning_component__WEBPACK_IMPORTED_MODULE_18__["WarningComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_19__["ChatComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                _view_profile_view_profile_component__WEBPACK_IMPORTED_MODULE_22__["ViewProfileComponent"],
                _uchat_uchat_component__WEBPACK_IMPORTED_MODULE_26__["UchatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_27__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].firebase, 'produceMe'),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_30__["AngularFireDatabaseModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_31__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyARl6VyKE8_p5e1pmToZLR_xw3CLRvvBOI'
                })
            ],
            providers: [
                _guards_index__WEBPACK_IMPORTED_MODULE_24__["AuthGuard"],
                _services_index__WEBPACK_IMPORTED_MODULE_25__["AlertService"],
                _services_index__WEBPACK_IMPORTED_MODULE_25__["AuthenticationService"],
                _services_index__WEBPACK_IMPORTED_MODULE_25__["DssService"],
                _services_index__WEBPACK_IMPORTED_MODULE_25__["UserService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_index__WEBPACK_IMPORTED_MODULE_23__["JwtInterceptor"],
                    multi: true
                },
                // provider used to create fake backend
                _helpers_index__WEBPACK_IMPORTED_MODULE_23__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/changes-soil/changes-soil.component.css":
/*!*********************************************************!*\
  !*** ./src/app/changes-soil/changes-soil.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/changes-soil/changes-soil.component.html":
/*!**********************************************************!*\
  !*** ./src/app/changes-soil/changes-soil.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  changes-soil works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/changes-soil/changes-soil.component.ts":
/*!********************************************************!*\
  !*** ./src/app/changes-soil/changes-soil.component.ts ***!
  \********************************************************/
/*! exports provided: ChangesSoilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangesSoilComponent", function() { return ChangesSoilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangesSoilComponent = /** @class */ (function () {
    function ChangesSoilComponent() {
    }
    ChangesSoilComponent.prototype.ngOnInit = function () {
    };
    ChangesSoilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changes-soil',
            template: __webpack_require__(/*! ./changes-soil.component.html */ "./src/app/changes-soil/changes-soil.component.html"),
            styles: [__webpack_require__(/*! ./changes-soil.component.css */ "./src/app/changes-soil/changes-soil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChangesSoilComponent);
    return ChangesSoilComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css\");\r\n.chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n.panel .slidedown .glyphicon, .chat .glyphicon\r\n{\r\n    margin-right: 5px;\r\n}\r\n.body-panel\r\n{\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n}\r\n::-webkit-scrollbar-track\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n::-webkit-scrollbar-thumb\r\n{\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>hola</p>\r\n\r\n\r\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<!-- Include the above in your HEAD tag -->\r\n\r\n<div class=\"container\">\r\n    <div class=\"row form-group\">\r\n        <div class=\"col-xs-12 col-md-offset-2 col-md-8 col-lg-8 col-lg-offset-2\">\r\n            <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n                    <span class=\"glyphicon glyphicon-comment\"></span> Chat\r\n                    <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-default btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <span class=\"glyphicon glyphicon-chevron-down\"></span>\r\n                        </button>\r\n                        <ul class=\"dropdown-menu slidedown\">\r\n                            <li><a href=\"http://www.jquery2dotnet.com\"><span class=\"glyphicon glyphicon-refresh\">\r\n                            </span>Actualizar</a></li>\r\n                            <li><a href=\"http://www.jquery2dotnet.com\"><span class=\"glyphicon glyphicon-ok-sign\">\r\n                            </span>Disponible</a></li>\r\n                            <li><a href=\"http://www.jquery2dotnet.com\"><span class=\"glyphicon glyphicon-remove\">\r\n                            </span>Ocupado</a></li>\r\n                            <li><a href=\"http://www.jquery2dotnet.com\"><span class=\"glyphicon glyphicon-time\"></span>\r\n                                Ausente</a></li>\r\n                            <li class=\"divider\"></li>\r\n                            <li><a href=\"http://www.jquery2dotnet.com\"><span class=\"glyphicon glyphicon-off\"></span>\r\n                                Salir</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n                <div class=\"panel-body body-panel\">\r\n                    <ul class=\"chat\">\r\n                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\r\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <strong class=\"primary-font\">Gerardo Brenes</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>12 mins ago</small>\r\n                                </div>\r\n                                <p>\r\n                                    Buenas tardes ¿El cultivo de mora se ve afectado por el viento de estos días?\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\r\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>13 mins ago</small>\r\n                                    <strong class=\"pull-right primary-font\">Ana Porras</strong>\r\n                                </div>\r\n                                <p>\r\n                                    Lamento decirte que si y en gran medida, el 30% de la producción se podría perder.\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\r\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <strong class=\"primary-font\">Gerardo Brenes</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>14 mins ago</small>\r\n                                </div>\r\n                                <p>\r\n                                    ¿Existe alguna alternativa para proteger el cultivo? \r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\r\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>15 mins ago</small>\r\n                                    <strong class=\"pull-right primary-font\">Ana Porras</strong>\r\n                                </div>\r\n                                <p>\r\n                                    Por el momento, solo poner buenas bases a las plantas.\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"panel-footer clearfix\">\r\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\r\n                    <span class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12\" style=\"margin-top: 10px\">\r\n                        <button class=\"btn btn-warning btn-lg btn-block\" id=\"btn-chat\">Enviar</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.title = 'deepChat';
        this.chatArray = [];
        console.log(deepstream);
    }
    ChatComponent.prototype.ngOnInit = function () {
        // Get username from
        // window prompt and use 'anonymous' for
        // null or invalid response
        var defaultUsername = 'anonymous';
        var username = window.prompt('Please enter your username', defaultUsername);
        this.username = username || defaultUsername;
        // Login without credentials
        //this.ds.login(null, this.loginHandler);
        //this.chats = this.ds.getList('chats');
        /*this.chats.on('entry-added', recordName => {
                
          this.ds.getRecord( recordName ).whenReady( record => {
    
            record.subscribe( (data) => {
              if(data.username && data.text) {
                // Update bindable property
                this.chatArray.push(data);
              }
            }, true );
    
          });
        })
    */
    };
    ChatComponent.prototype.loginHandler = function (success, data) {
        console.log('logged in', success, data);
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/cost/cost.component.css":
/*!*****************************************!*\
  !*** ./src/app/cost/cost.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product{\r\n    background-color: beige;\r\n    width: 99.5%;\r\n    margin: 6px 0px 6px 0px;\r\n    padding-bottom: 10px\r\n}\r\n.search{\r\n        \r\n        padding: 80px;\r\n        background: url('verduras_Compras.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: 99.5%;\r\n        justify-content: center;\r\n        align-items: center;\r\n}\r\n.tabs{\r\n    padding: 3px;\r\n\r\n}"

/***/ }),

/***/ "./src/app/cost/cost.component.html":
/*!******************************************!*\
  !*** ./src/app/cost/cost.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container search\">\r\n    <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <div id=\"custom-search-input\">\r\n                  <div class=\"input-group col-md-12\">\r\n                      <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Buscar\" />\r\n                      <span class=\"input-group-btn\">\r\n                          <button class=\"btn btn-info btn-lg\" type=\"button\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                          </button>\r\n                      </span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</div>\r\n<div class=\"row product\">\r\n  <div class=\"col-md-4 \">\r\n    <a href=\"#\"><img class=\"img-fluid\" src=\"../../assets/sale_strawberry.png\" ></a>\r\n  </div>\r\n  <div class=\" col-md-6 \">\r\n    <h2>Fresa </h2>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi.\r\n        Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. Aliquam in felis sit amet augue.</p>\r\n      <hr>\r\n      <div class=\"row \">\r\n        <div class=\"col-sm-2\">\r\n          <h2 class=\"pull-xs-right\">$39</h2>\r\n        </div>\r\n        <div class=\"col-sm-6\">\r\n          <button class=\"btn btn-primary btn-lg\">Add to Cart</button>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <hr>\r\n</div> \r\n<ul class=\"nav nav-tabs m-t-2\">\r\n  <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#details\" class=\"nav-link active\">Detalles</a></li>\r\n  <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#reviews\" class=\"nav-link\">Opiniones</a></li>\r\n  <li class=\"nav-item\"><a data-toggle=\"tab\" href=\"#wasteManage\" class=\"nav-link\">Manejo de Desechos</a></li>\r\n</ul>\r\n<div class=\"tab-content m-t-2\">\r\n    <div class=\"tab-pane active tabs\" id=\"details\">\r\n        <h4>Información del producto</h4>\r\n        <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. \r\n            Quisque mauris augue, molestie tincidunt codeply condimentum vitae, gravida a libero. Aenean sit amet felis \r\n            dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. \r\n            Aliquam in felis sit amet augue.\r\n        </p>\r\n    </div>\r\n    <div class=\"tab-pane tabs\" id=\"reviews\">\r\n        <h4>Opinión del comprador</h4>\r\n        <ul class=\"list-unstyled\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n              <li >(Mike R.) I bought this last month before a.. </li>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n              <i class=\"fa fa-star fa-2x yellow pull-xs-right\"></i>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-5\">\r\n                <li >(CAS) I love this jacket. I purchased this as part.. </li>\r\n              </div>\r\n              <div class=\"col-md-4\">\r\n                <i class=\"fa fa-star fa-2x yellow pull-xs-right\"></i>\r\n                <i class=\"fa fa-star fa-2x yellow pull-xs-right\"></i>\r\n              </div>\r\n          </div>\r\n        </ul>\r\n    </div>\r\n    <div class=\"tab-pane tabs\" id=\"wasteManage\">\r\n        <h4>¿Qué hacer con este desecho?</h4>\r\n        <p>\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. \r\n            Quisque mauris augue, molestie tincidunt codeply condimentum vitae, gravida a libero. Aenean sit amet felis \r\n            dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. \r\n            Aliquam in felis sit amet augue.\r\n        </p>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/cost/cost.component.ts":
/*!****************************************!*\
  !*** ./src/app/cost/cost.component.ts ***!
  \****************************************/
/*! exports provided: CostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostComponent", function() { return CostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CostComponent = /** @class */ (function () {
    function CostComponent() {
    }
    CostComponent.prototype.ngOnInit = function () {
    };
    CostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cost',
            template: __webpack_require__(/*! ./cost.component.html */ "./src/app/cost/cost.component.html"),
            styles: [__webpack_require__(/*! ./cost.component.css */ "./src/app/cost/cost.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CostComponent);
    return CostComponent;
}());



/***/ }),

/***/ "./src/app/fertilization-test/fertilization-test.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/fertilization-test/fertilization-test.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product{\r\n    background-color: beige;\r\n    width: 99.5%;\r\n    margin: 6px 0px 6px 0px;\r\n    padding-bottom: 10px\r\n}\r\n\r\n.search{\r\n        \r\n        padding: 80px;\r\n        background: url(http://www.userslife.com/wp-content/uploads/2016/08/Jardineria-cultivoorganico2.jpg);\r\n        background-repeat: no-repeat;\r\n        background-size: 99.5%;\r\n        justify-content: center;\r\n        align-items: center;\r\n        color:#F8ECE0;\r\n        font-weight: bold;\r\n}\r\n\r\n.tabs{\r\n    padding: 3px;\r\n\r\n}\r\n\r\n.card{\r\n    background-color: beige;\r\n    width: 99.5%;\r\n    margin: 6px 0px 6px 0px;\r\n    padding-bottom: 10px\r\n}"

/***/ }),

/***/ "./src/app/fertilization-test/fertilization-test.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/fertilization-test/fertilization-test.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <p>Cultivo:<input type=\"text\" class=\"form-control input-lg\" result=10 name=s placeholder=\"Buscar\"></p>\r\n      \r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <p>Tipo de Suelo:<input type=\"text\" class=\"form-control input-lg\" result=10 name=s placeholder=\"Buscar\"></p>\r\n    </div>\r\n    <div class=\"col-sm-4\">\r\n      <p><input type=\"checkbox\" id=\"inorganicCheck\" onclick=\"showInorganic()\">inorganico</p>\r\n      <p><input type=\"checkbox\" id=\"organicCheck\" onclick=\"showOrganic()\">organico</p>\r\n    </div>\r\n  </div>\r\n  \r\n-->\r\n\r\n  <div class=\"container search\">\r\n      <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n                <div id=\"custom-search-input\">\r\n                    <div class=\"input-group col-md-12\">\r\n                        <div class=\"col-sm-4\">\r\n                            <p>Cultivo:<input type=\"text\" class=\"form-control input-lg\" result=10 name=s placeholder=\"Buscar\"></p>\r\n                            \r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                            <p>Tipo de Suelo:<input type=\"text\" class=\"form-control input-lg\" result=10 name=s placeholder=\"Buscar\"></p>\r\n                          </div>\r\n                          <div class=\"col-sm-4\">\r\n                            <p><input type=\"checkbox\" id=\"inorganicCheck\" onclick=\"showInorganic()\">inorganico</p>\r\n                            <p><input type=\"checkbox\" id=\"organicCheck\" onclick=\"showOrganic()\">organico</p>\r\n                          </div> \r\n\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"row card\">\r\n      <div class=\"col-md-4 \">\r\n          <div class=\"card\" style=\"width: 18rem;\">\r\n              <img class=\"card-img-top\" src=\"http://bonsaido.es/WebRoot/Store8/Shops/c1f4599d-db9a-446e-9cc9-bb15185e0afb/56B0/4ADD/64CA/A6CA/3326/0A48/3523/10AE/abono_granel.png\" alt=\"Card image cap\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">Card title</h5>\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n                \r\n              </div>\r\n            </div>\r\n      </div>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div class=\"row product\">\r\n    \r\n    <div class=\" col-md-12 \">\r\n      <h2>Agrega un ferlitizante origanico de buena calidad</h2>\r\n        <p>Haz esto una semana antes de sembrar. Estiercol viejo de vaca o de caballo son buenas elecciones que se consiguen facilmente en viveros y suministros de jardinería</p>\r\n        \r\n    </div>\r\n    <hr>\r\n  </div> \r\n"

/***/ }),

/***/ "./src/app/fertilization-test/fertilization-test.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/fertilization-test/fertilization-test.component.ts ***!
  \********************************************************************/
/*! exports provided: FertilizationTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FertilizationTestComponent", function() { return FertilizationTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FertilizationTestComponent = /** @class */ (function () {
    function FertilizationTestComponent() {
    }
    FertilizationTestComponent.prototype.ngOnInit = function () {
    };
    FertilizationTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fertilization-test',
            template: __webpack_require__(/*! ./fertilization-test.component.html */ "./src/app/fertilization-test/fertilization-test.component.html"),
            styles: [__webpack_require__(/*! ./fertilization-test.component.css */ "./src/app/fertilization-test/fertilization-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FertilizationTestComponent);
    return FertilizationTestComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"../assets/agriculture.jpg\" class=\"Banner\">\r\n<section class=\"jumbotron text-center\" style=\"padding-top: 0\">\r\n  <div class=\"container\">\r\n    <h1 class=\"jumbotron-heading\">ProduceMe</h1>\r\n    <p class=\"lead text-muted\">\"La agricultura, para un hombre honorable y de alto espíritu, es la mejor de \r\n      todas las ocupaciones y artes por medio de las cuales un hombre puede procurarse el sustento. \" <br> \r\n    </p>\r\n      <!-- <button class=\"btn btn-primary my-2\" (click)=\"toogleBeers()\">{{isAllBeersShowing ? 'All Beers' : 'My Beers'}}</button>\r\n      <button *ngIf=\"!isAllBeersShowing\" class=\"btn btn-secondary my-2\" (click)=\"topFiveShow()\" data-toggle=\"modal\" data-target=\"#topFiveModal\">Top 5</button>\r\n   -->\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Usuario</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Ingrese el nombre de usuario</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Contraseña</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ingreso la contraseña</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Ingresar</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Registrarme</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/product-cycle/product-cycle.component.css":
/*!***********************************************************!*\
  !*** ./src/app/product-cycle/product-cycle.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search{\r\n        \r\n    padding: 80px;\r\n    background: url('verduras_Compras.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size:100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    \r\n}\r\n.searchbar{\r\n    opacity: 1;\r\n}\r\n.opacity{\r\n    background: rgba(247, 235, 235, 0.562);  \r\n    padding-bottom: 5%;\r\n    margin-bottom: 9%;\r\n}\r\n#adam{\r\n    \r\n    background:url('1.jpg');\r\n    /*width: 200px; \r\n    height: 291px;*/\r\n    width: 245px;\r\n    height: 306px;\r\n    -webkit-animation: walk-east 3.0s ;\r\n            animation: walk-east 3.0s ;\r\n    background-repeat: no-repeat;  \r\n  }\r\n@-webkit-keyframes walk-east {\r\n    20% {background:url('1.jpg')} to  {background:url('2.jpg')}\r\n    46%  {background:url('2.jpg')} to  {background:url('3.jpg')}\r\n    86% {background:url('3.jpg')} \r\n    \r\n   /* from { background-position: 0px; } to { background-position: -960px; }*/\r\n  }\r\n@keyframes walk-east {\r\n    20% {background:url('1.jpg')} to  {background:url('2.jpg')}\r\n    46%  {background:url('2.jpg')} to  {background:url('3.jpg')}\r\n    86% {background:url('3.jpg')} \r\n    \r\n   /* from { background-position: 0px; } to { background-position: -960px; }*/\r\n  }"

/***/ }),

/***/ "./src/app/product-cycle/product-cycle.component.html":
/*!************************************************************!*\
  !*** ./src/app/product-cycle/product-cycle.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container search\">\r\n    <div class=\"row opacity\" >\r\n          <div class=\"col-md-12\">\r\n              <div class=\"row d-flex justify-content-center\" style=\"padding: 20px;\" >\r\n                    <h2 >Ciclo de vida de un producto</h2>\r\n              </div>\r\n              <div id=\"custom-search-input\" >\r\n                  <div class=\"input-group col-md-12  \">\r\n                      <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Buscar\" />\r\n                      <span class=\"input-group-btn\">\r\n                          <button class=\"btn btn-info btn-lg\" type=\"button\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                          </button>\r\n                      </span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\" ></div>\r\n    <div id=\"adam\"></div>\r\n  </div>  \r\n\r\n"

/***/ }),

/***/ "./src/app/product-cycle/product-cycle.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/product-cycle/product-cycle.component.ts ***!
  \**********************************************************/
/*! exports provided: ProductCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCycleComponent", function() { return ProductCycleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCycleComponent = /** @class */ (function () {
    function ProductCycleComponent() {
    }
    ProductCycleComponent.prototype.ngOnInit = function () {
    };
    ProductCycleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-cycle',
            template: __webpack_require__(/*! ./product-cycle.component.html */ "./src/app/product-cycle/product-cycle.component.html"),
            styles: [__webpack_require__(/*! ./product-cycle.component.css */ "./src/app/product-cycle/product-cycle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCycleComponent);
    return ProductCycleComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Register</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"firstName\">Nombre</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Ingrese su nombre</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"lastName\">Apellidos</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Ingrese sus apellidos</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Nombre de usuario</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Ingrese su nombre de usuario</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Contraseña</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Ingrese su contraseña</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\r\n            <label for=\"email\">Correo</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !email.valid\" class=\"help-block\">Ingrese su correo</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !phone.valid }\">\r\n            <label for=\"phone\">Teléfono</label>\r\n            <input type=\"phone\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !phone.valid\" class=\"help-block\">Ingrese su teléfono</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !address.valid }\">\r\n            <label for=\"address\">Dirección</label>\r\n            <input type=\"address\" class=\"form-control\" name=\"address\" [(ngModel)]=\"model.address\" #address=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !address.valid\" class=\"help-block\">Ingrese su dirección</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Registrarme</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancelar</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/index */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_index__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/sale/sale.component.css":
/*!*****************************************!*\
  !*** ./src/app/sale/sale.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sale/sale.component.html":
/*!******************************************!*\
  !*** ./src/app/sale/sale.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sale works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/sale/sale.component.ts":
/*!****************************************!*\
  !*** ./src/app/sale/sale.component.ts ***!
  \****************************************/
/*! exports provided: SaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleComponent", function() { return SaleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SaleComponent = /** @class */ (function () {
    function SaleComponent() {
    }
    SaleComponent.prototype.ngOnInit = function () {
    };
    SaleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sale',
            template: __webpack_require__(/*! ./sale.component.html */ "./src/app/sale/sale.component.html"),
            styles: [__webpack_require__(/*! ./sale.component.css */ "./src/app/sale/sale.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SaleComponent);
    return SaleComponent;
}());



/***/ }),

/***/ "./src/app/soil-stats/soil-stats.component.css":
/*!*****************************************************!*\
  !*** ./src/app/soil-stats/soil-stats.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/soil-stats/soil-stats.component.html":
/*!******************************************************!*\
  !*** ./src/app/soil-stats/soil-stats.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>peroooooooo</p>\r\n"

/***/ }),

/***/ "./src/app/soil-stats/soil-stats.component.ts":
/*!****************************************************!*\
  !*** ./src/app/soil-stats/soil-stats.component.ts ***!
  \****************************************************/
/*! exports provided: SoilStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoilStatsComponent", function() { return SoilStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SoilStatsComponent = /** @class */ (function () {
    function SoilStatsComponent() {
    }
    SoilStatsComponent.prototype.ngOnInit = function () {
    };
    SoilStatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-soil-stats',
            template: __webpack_require__(/*! ./soil-stats.component.html */ "./src/app/soil-stats/soil-stats.component.html"),
            styles: [__webpack_require__(/*! ./soil-stats.component.css */ "./src/app/soil-stats/soil-stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SoilStatsComponent);
    return SoilStatsComponent;
}());



/***/ }),

/***/ "./src/app/temperature-impact/temperature-impact.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/temperature-impact/temperature-impact.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #610B0B;\r\n    font-size: x-large;\r\n    padding-top: 10px;\r\n    padding-right: 30px;\r\n    padding-bottom: 10px;\r\n    padding-left: 50px;\r\n    \r\n}\r\n.bgCont{\r\n\r\n    background-color: beige;\r\n    width: 99.5%;\r\n    padding-bottom: 15px;\r\n    \r\n    \r\n}\r\n.products{\r\n    background-color:   beige;\r\n    border: firebrick;\r\n    border-width: 2px;  \r\n    padding: 10px;\r\n    margin-bottom: 0px;\r\n}\r\nagm-map {\r\n    height: calc(100vh - 150px);\r\n}\r\n"

/***/ }),

/***/ "./src/app/temperature-impact/temperature-impact.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/temperature-impact/temperature-impact.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark bg-dark sticky-top\">\r\n    <div class=\"form-check form-check-inline\">\r\n        <label *ngFor=\"let fruit of fruits | async\" class=\"mr-3\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"visibleMarkers[fruit.key]\" \r\n           name=\"{{fruit.key}}\" class=\"mr-1\"><span class=\"text-light text-capitalize\">{{fruit.name}}</span>\r\n        </label>\r\n    </div>\r\n  </nav>\r\n  \r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\r\n    <ng-container  *ngFor=\"let marker of fruits | async\">\r\n      <agm-marker [latitude]=\"marker.lat\" [longitude]=\"marker.lng\" [iconUrl]=\"marker.icon\" *ngIf=\"visibleMarkers[marker.key]\">\r\n        <agm-info-window>\r\n          <h5>{{marker.title}}</h5>\r\n          <p class=\"text-muted\">Recomendaciones de temperatura para su cultivo.</p>\r\n          <div class=\"d-flex justify-content-between\">\r\n              <span class=\"mr-1\"><i class=\"fa fa-thermometer-full text-muted\"></i> <strong>Máx.</strong> 30º</span>\r\n              <span class=\"mr-1\"><i class=\"fa fa-thermometer-half text-muted\"></i> <strong>Prom.</strong> 25º</span>\r\n              <span class=\"mr-1\"><i class=\"fa fa-thermometer-empty text-muted\"></i> <strong>Min.</strong> 10º</span>\r\n          </div>\r\n          \r\n        </agm-info-window>\r\n      </agm-marker>\r\n    </ng-container>\r\n    \r\n  </agm-map>"

/***/ }),

/***/ "./src/app/temperature-impact/temperature-impact.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/temperature-impact/temperature-impact.component.ts ***!
  \********************************************************************/
/*! exports provided: TemperatureImpactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureImpactComponent", function() { return TemperatureImpactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TemperatureImpactComponent = /** @class */ (function () {
    function TemperatureImpactComponent(db) {
        this.db = db;
        this.lat = 9.5649173;
        this.lng = -84.0078721;
        this.zoom = 11;
        this.visibleMarkers = {};
    }
    TemperatureImpactComponent.prototype.ngOnInit = function () {
        var fruitsRef = this.db.list('product');
        // Esto permite agregar el id de la fruta al objeto
        this.fruits = fruitsRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    };
    TemperatureImpactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temperature-impact',
            template: __webpack_require__(/*! ./temperature-impact.component.html */ "./src/app/temperature-impact/temperature-impact.component.html"),
            styles: [__webpack_require__(/*! ./temperature-impact.component.css */ "./src/app/temperature-impact/temperature-impact.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], TemperatureImpactComponent);
    return TemperatureImpactComponent;
}());



/***/ }),

/***/ "./src/app/test-soil/test-soil.component.css":
/*!***************************************************!*\
  !*** ./src/app/test-soil/test-soil.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-soil/test-soil.component.html":
/*!****************************************************!*\
  !*** ./src/app/test-soil/test-soil.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-soil works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/test-soil/test-soil.component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-soil/test-soil.component.ts ***!
  \**************************************************/
/*! exports provided: TestSoilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSoilComponent", function() { return TestSoilComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestSoilComponent = /** @class */ (function () {
    function TestSoilComponent() {
    }
    TestSoilComponent.prototype.ngOnInit = function () {
    };
    TestSoilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-soil',
            template: __webpack_require__(/*! ./test-soil.component.html */ "./src/app/test-soil/test-soil.component.html"),
            styles: [__webpack_require__(/*! ./test-soil.component.css */ "./src/app/test-soil/test-soil.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestSoilComponent);
    return TestSoilComponent;
}());



/***/ }),

/***/ "./src/app/test-vulnerability/test-vulnerability.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/test-vulnerability/test-vulnerability.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test-vulnerability/test-vulnerability.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/test-vulnerability/test-vulnerability.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test-vulnerability works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/test-vulnerability/test-vulnerability.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/test-vulnerability/test-vulnerability.component.ts ***!
  \********************************************************************/
/*! exports provided: TestVulnerabilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestVulnerabilityComponent", function() { return TestVulnerabilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestVulnerabilityComponent = /** @class */ (function () {
    function TestVulnerabilityComponent() {
    }
    TestVulnerabilityComponent.prototype.ngOnInit = function () {
    };
    TestVulnerabilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-vulnerability',
            template: __webpack_require__(/*! ./test-vulnerability.component.html */ "./src/app/test-vulnerability/test-vulnerability.component.html"),
            styles: [__webpack_require__(/*! ./test-vulnerability.component.css */ "./src/app/test-vulnerability/test-vulnerability.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestVulnerabilityComponent);
    return TestVulnerabilityComponent;
}());



/***/ }),

/***/ "./src/app/test-waste/test-waste.component.css":
/*!*****************************************************!*\
  !*** ./src/app/test-waste/test-waste.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product{\r\n    background-color: beige;\r\n    width: 99.5%;\r\n    margin: 6px 0px 6px 0px;\r\n    padding-bottom: 10px\r\n}\r\n.search{\r\n        \r\n        padding: 80px;\r\n        background: url('shut.jpg');\r\n        background-repeat: no-repeat;\r\n        background-size: 99.5%;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n}\r\n.tabs{\r\n    padding: 3px;\r\n\r\n}\r\n* {\r\n    box-sizing: border-box;    \r\n}\r\n.grafico {\r\n    height: 200px;\r\n    margin: 1rem auto;\r\n    position: relative;\r\n    width: 200px;\r\n\r\n    \r\n      }\r\n.recorte {\r\n    border-radius: 50%;\r\n    clip: rect(0px, 200px, 200px, 100px);\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n     }\r\n.quesito {\r\n    border-radius: 50%;\r\n    clip: rect(0px, 100px, 200px, 0px);\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n    font-family: monospace;\r\n    font-size: 1.5rem;\r\n     }\r\n.sombra {\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.3);\r\n    border: 5px solid #000;\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n     }\r\n#porcion1 {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n     }\r\n#porcion1 .quesito {\r\n    background-color:#A16358;\r\n    -webkit-transform: rotate(70deg);\r\n            transform: rotate(70deg);\r\n     }\r\n#porcion2 {\r\n    -webkit-transform: rotate(70deg);\r\n            transform: rotate(70deg);\r\n     }\r\n#porcion2 .quesito {\r\n    background-color:#69905B;\r\n    -webkit-transform: rotate(120deg);\r\n            transform: rotate(120deg);\r\n     }\r\n#porcion3 {\r\n    -webkit-transform: rotate(-170deg);\r\n            transform: rotate(-170deg);\r\n     }\r\n#porcion3 .quesito {\r\n    background-color:  #5C5986;\r\n    -webkit-transform: rotate(25deg);\r\n            transform: rotate(25deg);\r\n     }\r\n#porcionFin {\r\n    -webkit-transform:rotate(-145deg);\r\n            transform:rotate(-145deg);\r\n     }\r\n#porcionFin .quesito {\r\n    background-color: #5C5986;\r\n    -webkit-transform: rotate(145deg);\r\n            transform: rotate(145deg);\r\n     }\r\n#porcion1 .quesito:after {\r\n    content: attr(data-rel);\r\n    left: 25%;\r\n    line-height: 5;\r\n    position: absolute;\r\n    top: 0;\r\n    -webkit-transform: rotate(-70deg);\r\n            transform: rotate(-70deg);\r\n}\r\n#porcion2 .quesito:after {\r\n    content: attr(data-rel);\r\n    left: 15%;\r\n    position: absolute;\r\n    top: 30%;\r\n    -webkit-transform: rotate(-190deg);\r\n            transform: rotate(-190deg);\r\n}\r\n#porcion3 .quesito:after {\r\n    content: attr(data-rel);\r\n    left: 35%;\r\n    position: absolute;\r\n    top: 4%;\r\n    -webkit-transform: rotate(70deg);\r\n            transform: rotate(70deg);\r\n}\r\n#porcionFin .quesito:after {\r\n   content: attr(data-rel);\r\n   left: 10%;\r\n   position: absolute;\r\n   top: 30%;\r\n}\r\n.Humedad{\r\n    background-color:#A16358;\r\n    height: 150px;\r\n    width: 300px;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n.Erosion{\r\n    background-color:#69905B;\r\n    height: 150px;\r\n    width: 300px;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n.precipitacion{\r\n    background-color:#5C5986;\r\n    height: 150px;\r\n    width: 300px;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n.space{\r\n    margin-top: 30px;\r\n    width: 99.5%;\r\n}\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/test-waste/test-waste.component.html":
/*!******************************************************!*\
  !*** ./src/app/test-waste/test-waste.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container search\">\r\n    <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n              <div id=\"custom-search-input\">\r\n                  <div class=\"input-group col-md-12\">\r\n                      <input type=\"text\" class=\"form-control input-lg\" placeholder=\"Buscar producto\" />\r\n                      <span class=\"input-group-btn\">\r\n                          <button class=\"btn btn-info btn-lg\" type=\"button\">\r\n                              <i class=\"fa fa-search\"></i>\r\n                          </button>\r\n                      </span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n    </div>\r\n</div>\r\n<div class=\"d-flex justify-content-around\">\r\n    <div class=\"card space\" >\r\n            <h6 class=\"card-header\">Aptitud de suelo</h6>\r\n            <div class=\"card-body\">\r\n                <div class=\"grafic\">\r\n                    <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                              \r\n                              <div class=\"grafico\">\r\n                                  <div class=\"sombra\"></div>\r\n                                  <div id=\"porcion1\" class=\"recorte\"><div class=\"quesito\" data-rel=\"70\"></div></div>\r\n                                  <div id=\"porcion2\" class=\"recorte\"><div class=\"quesito\" data-rel=\"120\"></div></div>\r\n                                  <div id=\"porcion3\" class=\"recorte\"><div class=\"quesito\" data-rel=\"\"></div></div>\r\n                                  \r\n                                  <div id=\"porcionFin\" class=\"recorte\"><div class=\"quesito\" data-rel=\"145\"></div></div>\r\n                                  \r\n                             </div>\r\n                             \r\n                          </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row d-flex\" style=\"justify-content: space-between;\">\r\n                  <div class=\"col-sm\">\r\n                      <div class=\"Humedad\" id=\"details\">\r\n                          <h4>Humedad</h4>\r\n                          <p>\r\n                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. \r\n                              Quisque mauris augue.\r\n                          </p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm\">\r\n                      <div class=\"Erosion\" id=\"details\">\r\n                          <h4>Erosion</h4>\r\n                          <p>\r\n                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. \r\n                              Quisque mauris augue.\r\n                          </p>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-sm\">\r\n                      <div class=\"precipitacion\" id=\"details\">\r\n                          <h4>Precipitacion</h4>\r\n                              <p>\r\n                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra codeply varius quam sit amet vulputate. \r\n                                  Quisque mauris augue.\r\n                              </p>\r\n                          </div>\r\n                  </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/test-waste/test-waste.component.ts":
/*!****************************************************!*\
  !*** ./src/app/test-waste/test-waste.component.ts ***!
  \****************************************************/
/*! exports provided: TestWasteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestWasteComponent", function() { return TestWasteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestWasteComponent = /** @class */ (function () {
    function TestWasteComponent() {
    }
    TestWasteComponent.prototype.ngOnInit = function () {
    };
    TestWasteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-waste',
            template: __webpack_require__(/*! ./test-waste.component.html */ "./src/app/test-waste/test-waste.component.html"),
            styles: [__webpack_require__(/*! ./test-waste.component.css */ "./src/app/test-waste/test-waste.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestWasteComponent);
    return TestWasteComponent;
}());



/***/ }),

/***/ "./src/app/uchat/uchat.component.css":
/*!*******************************************!*\
  !*** ./src/app/uchat/uchat.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chat\r\n{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li\r\n{\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body\r\n{\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body\r\n{\r\n    margin-right: 60px;\r\n}\r\n\r\n.chat li .chat-body p\r\n{\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel .slidedown , .chat \r\n{\r\n    margin-right: 5px;\r\n}\r\n\r\n.body-panel\r\n{\r\n    overflow-y: scroll;\r\n    height: 250px;\r\n}\r\n\r\n::-webkit-scrollbar-track\r\n{\r\n    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar\r\n{\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb\r\n{\r\n    box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n    background-color: #555;\r\n}"

/***/ }),

/***/ "./src/app/uchat/uchat.component.html":
/*!********************************************!*\
  !*** ./src/app/uchat/uchat.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"width: 100%\">\r\n    <div class=\"row form-group\">\r\n        <div class=\"col-md-12\">\r\n            <div class=\"panel panel-primary\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"panel-heading\">\r\n                    <span class=\"fa fa-comment\"></span> Chat\r\n                    <div class=\"btn-group pull-right\">\r\n                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n                            <span class=\"fa fa-chevron-down\"></span>\r\n                        </button>\r\n                        <div class=\"dropdown-menu\">\r\n                            <a href=\"http://www.jquery2dotnet.com\" class=\"dropdown-item\"><span class=\"fa fa-refresh\">\r\n                            </span>Actualizar</a>\r\n                            <a href=\"http://www.jquery2dotnet.com\" class=\"dropdown-item\"><span class=\"fa fa-ok-sign\">\r\n                            </span>Disponible</a>\r\n                            <a href=\"http://www.jquery2dotnet.com\" class=\"dropdown-item\"><span class=\"fa fa-remove\">\r\n                            </span>Ocupado</a>\r\n                            <a href=\"http://www.jquery2dotnet.com\" class=\"dropdown-item\"><span class=\"fa fa-time\"></span>\r\n                                Ausente</a>\r\n                            <li class=\"divider\"></li>\r\n                            <a href=\"http://www.jquery2dotnet.com\" class=\"dropdown-item\"><span class=\"fa fa-off\"></span>\r\n                                Salir</a>\r\n                            </div>    \r\n                    </div>\r\n                  </div>\r\n                \r\n                </div>\r\n                  \r\n\r\n              </div>\r\n                \r\n                <div class=\"panel-body body-panel\">\r\n                    <ul class=\"chat\">\r\n                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\r\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <strong class=\"primary-font\">Gerardo Brenes</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>12 mins ago</small>\r\n                                </div>\r\n                                <p>\r\n                                    Buenas tardes ¿El cultivo de mora se ve afectado por el viento de estos días?\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\r\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>13 mins ago</small>\r\n                                    <strong class=\"pull-right primary-font\">Ana Porras</strong>\r\n                                </div>\r\n                                <p>\r\n                                    Lamento decirte que si y en gran medida, el 30% de la producción se podría perder.\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"left clearfix\"><span class=\"chat-img pull-left\">\r\n                            <img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <strong class=\"primary-font\">Gerardo Brenes</strong> <small class=\"pull-right text-muted\">\r\n                                        <span class=\"glyphicon glyphicon-time\"></span>14 mins ago</small>\r\n                                </div>\r\n                                <p>\r\n                                    ¿Existe alguna alternativa para proteger el cultivo? \r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                        <li class=\"right clearfix\"><span class=\"chat-img pull-right\">\r\n                            <img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />\r\n                        </span>\r\n                            <div class=\"chat-body clearfix\">\r\n                                <div class=\"header\">\r\n                                    <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>15 mins ago</small>\r\n                                    <strong class=\"pull-right primary-font\">Ana Porras</strong>\r\n                                </div>\r\n                                <p>\r\n                                    Por el momento, solo poner buenas bases a las plantas.\r\n                                </p>\r\n                            </div>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"panel-footer clearfix\">\r\n                    <textarea class=\"form-control\" rows=\"3\"></textarea>\r\n                    <span class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12\" style=\"margin-top: 10px\">\r\n                        <button class=\"btn btn-warning btn-lg btn-block\" id=\"btn-chat\">Enviar</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/uchat/uchat.component.ts":
/*!******************************************!*\
  !*** ./src/app/uchat/uchat.component.ts ***!
  \******************************************/
/*! exports provided: UchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UchatComponent", function() { return UchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UchatComponent = /** @class */ (function () {
    function UchatComponent() {
    }
    UchatComponent.prototype.ngOnInit = function () {
    };
    UchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-uchat',
            template: __webpack_require__(/*! ./uchat.component.html */ "./src/app/uchat/uchat.component.html"),
            styles: [__webpack_require__(/*! ./uchat.component.css */ "./src/app/uchat/uchat.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UchatComponent);
    return UchatComponent;
}());



/***/ }),

/***/ "./src/app/view-profile/view-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-profile/view-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width{\r\n    /*float:left;width:100%;margin-top:30px;min-height:100px;position:relative;*/\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n.form-style-fake{position:absolute;top:0px;}\r\n.form-style-base{position:absolute;top:0px;z-index: 999;opacity: 0;}\r\n.imgCircle{border-radius: 50%;}\r\n.form-control{padding: 10px 50px;}\r\n.form-input{height:50px;border-radius: 0px;margin-top: 20px;}\r\n.Profile-input-file{\r\n    height:180px;width:180px;left:33%;\r\n    position: absolute;\r\n    top: 0px;\r\n    z-index: 999;\r\n    opacity: 0 !important;\r\n}\r\n.mg-auto{\r\n    margin:0 auto;max-width: 800px;overflow: hidden;\r\n}\r\n.fake-styled-btn{\r\n    background: #006cad;\r\n    padding: 10px;\r\n    color: #fff;\r\n}\r\n#main-input{width:850px;}\r\n.input-place{\r\n    position: absolute;top:35px;left: 20px;font-size:23px;color:gray;}\r\n.margin{margin-top:10px;margin-bottom:10px;}\r\n.truncate {\r\n    width: 250px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.bg-form{\r\n    float:left;width:100%;\r\n    position:relative;\r\n    background: url(\"http://lorempixel.com/200/200/abstract/\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    margin-top: 0px;\r\n}\r\n.bg-transparent{\r\n    background: rgba(0,0,0,0.5);float: left;\r\n    width: 100%;margin-top: 0px;\r\n    padding-bottom: 100px;\r\n}\r\n.container{\r\n    background: url('profile.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    width: 99.5%;\r\n    height: 100%;\r\n\r\n}\r\n.custom-form{float: left;width:100%;border-radius: 20px;box-shadow: 0 0 16px #fff;overflow: hidden;\r\nbackground: rgba(255,255,255,0.6);\r\n}\r\n.img-section{\r\n    float: left;width: 100%;padding-top: 15px;padding-bottom: 15px;background: rgba(0,0,0,0.7);position: relative;\r\n}\r\n.img-section h4{color:#fff;}\r\n#PicUpload{\r\n    color: #ffffff;\r\n    width: 180px;\r\n    height: 180px;\r\n    background: rgba(255,255,255,0.4);\r\n    padding: 100px;\r\n    position: absolute;\r\n    left: 30.5%;\r\n    border-radius: 50%;\r\n    display: none;\r\n    top:15px;\r\n}\r\n.camera{\r\n    font-size: 50px;\r\n    color: #333;\r\n}\r\n.custom-btn{\r\n    margin-top: 15px;\r\n    border-radius: 0px;\r\n    padding: 10px 60px;\r\n    margin-bottom: 15px;\r\n}\r\n#checker{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 0px;\r\n    cursor: pointer;\r\n}\r\n.color{\r\n    color:#333;\r\n}\r\n/*====== style for placeholder ========*/\r\n.form-control::-webkit-input-placeholder {\r\n    color:lightgray;\r\n    font-size:18px;\r\n}\r\n.form-control:-moz-placeholder {\r\n    color:lightgray;\r\n    font-size:18px;\r\n}\r\n.form-control::-moz-placeholder {\r\n    color:lightgray;\r\n    font-size:18px;\r\n}\r\n.form-control:-ms-input-placeholder {\r\n    color:lightgray;\r\n    font-size:18px;\r\n}\r\n/* --------------------- Rating CSS */\r\n.rating {\r\n    float:left;\r\n}\r\nfieldset{\r\n\r\n  /*width: 300px;*/\r\n  /*margin:auto;*/\r\n  padding-right: 10px;\r\n}\r\n.rating:not(:checked) > input {\r\n    position:absolute;\r\n    top:-9999px;\r\n    clip:rect(0,0,0,0);\r\n}\r\n.rating:not(:checked) > label {\r\n    float:right;\r\n    width:1em;\r\n    padding:0 .1em;\r\n    overflow:hidden;\r\n    white-space:nowrap;\r\n    cursor:pointer;\r\n    font-size:200%;\r\n    line-height:1.2;\r\n    color:#ddd;\r\n    text-shadow:1px 1px #bbb, 2px 2px #666, .1em .1em .2em rgba(0,0,0,.5);\r\n}\r\n.rating:not(:checked) > label:before {\r\n    content: '★ ';\r\n}\r\n.rating > input:checked ~ label {\r\n    color: #f70;\r\n    text-shadow:1px 1px #c60, 2px 2px #940, .1em .1em .2em rgba(0,0,0,.5);\r\n}\r\n.rating:not(:checked) > label:hover,\r\n.rating:not(:checked) > label:hover ~ label {\r\n    color: gold;\r\n    text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);\r\n}\r\n.rating > input:checked + label:hover,\r\n.rating > input:checked + label:hover ~ label,\r\n.rating > input:checked ~ label:hover,\r\n.rating > input:checked ~ label:hover ~ label,\r\n.rating > label:hover ~ input:checked ~ label {\r\n    color: #ea0;\r\n    text-shadow:1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5);\r\n}\r\n.rating > label:active {\r\n    position:relative;\r\n    top:2px;\r\n    left:2px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/view-profile/view-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-profile/view-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"js/jquery-1.11.0.min.js\"></script>\r\n<script src=\"js/bootstrap.min.js\"></script>\r\n<script src=\"js/wow.min.js\"></script>\r\n<!--<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\r\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\r\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\r\n<link href=\"//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" rel=\"stylesheet\" />-->\r\n<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\" bg-transparent\">\r\n    <div class=\"col-md-12 d-flex justify-content-around\">\r\n        <!--=========================input type file change on button ends here====================-->\r\n        <div class=\"\">\r\n             <!--<h2 class=\"text-center color\">Bienvenido(a): {{currentUser.firstName}}</h2>-->\r\n            <div class=\"col-lg-12\" style=\"margin-top:30px;padding-bottom: 20px;\">\r\n                <div class=\"custom-form\">\r\n                <div class=\"text-center bg-form\">\r\n                    <div class=\"img-section\">\r\n                        <img src=\"http://lorempixel.com/200/200/nature/\" class=\"imgCircle\" alt=\"Profile picture\">\r\n                        <span class=\"fake-icon-edit\" id=\"PicUpload\" style=\"color: #ffffff;\"><span class=\"fas fa-camera\"></span></span>\r\n                    <div class=\"col-lg-12\">\r\n                        <h4 class=\"text-right col-sm-12\"><span class=\"fa fa-edit\"></span> Editar perfil</h4>\r\n                        <input type=\"checkbox\" class=\"form-control\" id=\"checker\">\r\n                    </div>\r\n                    </div>\r\n                    <input type=\"file\" id=\"image-input\" onchange=\"readURL(this);\" accept=\"image/*\" disabled class=\"form-control form-input Profile-input-file\" >\r\n                </div>\r\n                \r\n            <div class=\"col-md-12 d-flex justify-content-center\" style=\"padding-top: 20px\">\r\n                    <h3 >Puntaje recibido: </h3>\r\n                    <fieldset class=\"rating\" >\r\n                        <input type=\"radio\" id=\"star5\" name=\"rating\" value=\"5\" /><label class = \"full\" for=\"star5\" title=\"Awesome - 5 stars\"></label>\r\n                        <input type=\"radio\" id=\"star4half\" name=\"rating\" value=\"4 and a half\" /><label class=\"half\" for=\"star4half\" title=\"Pretty good - 4.5 stars\"></label>\r\n                        <input type=\"radio\" id=\"star4\" name=\"rating\" value=\"4\" /><label class = \"full\" for=\"star4\" title=\"Pretty good - 4 stars\"></label>\r\n                        <input type=\"radio\" id=\"star3half\" name=\"rating\" value=\"3 and a half\" /><label class=\"half\" for=\"star3half\" title=\"Meh - 3.5 stars\"></label>\r\n                        <input type=\"radio\" id=\"star3\" name=\"rating\" value=\"3\" /><label class = \"full\" for=\"star3\" title=\"Meh - 3 stars\"></label>\r\n                        <input type=\"radio\" id=\"star2half\" name=\"rating\" value=\"2 and a half\" /><label class=\"half\" for=\"star2half\" title=\"Kinda bad - 2.5 stars\"></label>\r\n                        <input type=\"radio\" id=\"star2\" name=\"rating\" value=\"2\" /><label class = \"full\" for=\"star2\" title=\"Kinda bad - 2 stars\"></label>\r\n                        <input type=\"radio\" id=\"star1half\" name=\"rating\" value=\"1 and a half\" /><label class=\"half\" for=\"star1half\" title=\"Meh - 1.5 stars\"></label>\r\n                        <input type=\"radio\" id=\"star1\" name=\"rating\" value=\"1\" /><label class = \"full\" for=\"star1\" title=\"Sucks big time - 1 star\"></label>\r\n                        <input type=\"radio\" id=\"starhalf\" name=\"rating\" value=\"half\" /><label class=\"half\" for=\"starhalf\" title=\"Sucks big time - 0.5 stars\"></label>\r\n                    </fieldset>\r\n            </div>\r\n                <div class=\"col-lg-12 col-md-12\">\r\n                    <div class=\"row d-flex \">\r\n                        <div class=\"col-sm-12\">\r\n                            <div class=\"col-sm-1\">\r\n                                <span class=\"fa fa-user input-place\" style=\"padding: 0; margin-right: 0px;\"></span>\r\n                            </div> \r\n                            <input type=\"text\" class=\"form-control form-input \" value={{currentUser.firstName}} placeholder=\"Nombre\" disabled id=\"name\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12\">\r\n                        <div class=\"row d-flex \">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"col-sm-1\">\r\n                                    <span class=\"fa fa-envelope input-place\" style=\"padding: 0; margin-right: 0px;\"></span>\r\n                                </div> \r\n                                    <input type=\"text\" class=\"form-control form-input\" value=\"{{currentUser.email}}\" placeholder=\"Correo\" disabled id=\"email\">\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n                <div class=\"col-lg-12 col-md-12\">\r\n                        <div class=\"row d-flex \">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"col-sm-1\">\r\n                                    <span class=\"fa fa-phone input-place\" style=\"padding: 0; margin-right: 0px;\"></span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control form-input\" value=\"{{currentUser.phone}}\" placeholder=\"Telefono\" disabled id=\"phone\">\r\n                            </div>\r\n                        </div>\r\n                </div>    \r\n                <div class=\"col-lg-12 col-md-12\">\r\n                        <div class=\"row d-flex \">\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"col-sm-1\">\r\n                                    <span class=\"fa fa-map-marker input-place\" style=\"padding: 0; margin-right: 0px;\"></span>\r\n                                </div>\r\n                                <input type=\"text\" class=\"form-control form-input\" value=\"Residencia\" placeholder=\"Dirección\" disabled id=\"place\">\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n\r\n                <div class=\"col-lg-12 col-md-12 text-center\"style=\"padding-top: 10px\">\r\n                 <!-- <p><a [routerLink]=\"['chat']\">Salir</a></p> -->\r\n                  <p><a href=\"/chat\">Salir</a></p>\r\n                  \r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n\t</div>\r\n</div>\r\n<!--===================================Script==================================================-->\r\n<script>\r\n $('input[id=base-input]').change(function() {\r\n        $('#fake-input').val($(this).val().replace(\"C:\\\\fakepath\\\\\", \"\"));\r\n    });\r\n    //==================Javascript code for custom input type file on button ================-->\r\n\r\n    $('input[id=main-input]').change(function() {\r\n        console.log($(this).val());\r\n        var mainValue = $(this).val();\r\n        if(mainValue == \"\"){\r\n            document.getElementById(\"fake-btn\").innerHTML = \"Choose File\";\r\n        }else{\r\n            document.getElementById(\"fake-btn\").innerHTML = mainValue.replace(\"C:\\\\fakepath\\\\\", \"\");\r\n        }\r\n    });\r\n\r\n//=========================input type file change on button ends here====================-->\r\n\r\n//    ===================== snippet for profile picture change ============================ //\r\n\r\n    function readURL(input) {\r\n        if (input.files && input.files[0]) {\r\n            var reader = new FileReader();\r\n            reader.onload = function (e) {\r\n                $('.imgCircle')\r\n                        .attr('src', e.target.result)\r\n                        .width(200)\r\n                        .height(200);\r\n            };\r\n            reader.readAsDataURL(input.files[0]);\r\n        }\r\n    }\r\n\r\n//    =================================== ends here ============================================ //\r\n\r\n    var checkme = document.getElementById('checker');\r\n    var userImage = document.getElementById('image-input');\r\n    var userName = document.getElementById('name');\r\n    var userPhone = document.getElementById('phone');\r\n    var userEmail = document.getElementById('email');\r\n    var userPlace = document.getElementById('place');\r\n    var UserSend = document.getElementById('submit');\r\n    var editPic = document.getElementById('PicUpload');\r\n    checkme.onchange = function() {\r\n        UserSend.disabled = !this.checked;\r\n        userImage.disabled = !this.checked;\r\n        userName.disabled = !this.checked;\r\n        userPhone.disabled = !this.checked;\r\n        userEmail.disabled = !this.checked;\r\n        userPlace.disabled = !this.checked;\r\n        editPic.style.display = this.checked ? 'block' : 'none';\r\n    };\r\n\r\n</script>"

/***/ }),

/***/ "./src/app/view-profile/view-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-profile/view-profile.component.ts ***!
  \********************************************************/
/*! exports provided: ViewProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProfileComponent", function() { return ViewProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/index */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewProfileComponent = /** @class */ (function () {
    function ViewProfileComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.onResize();
    }
    ViewProfileComponent.prototype.onResize = function (event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    };
    ViewProfileComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    ViewProfileComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    ViewProfileComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ViewProfileComponent.prototype, "onResize", null);
    ViewProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i.toString(),
            selector: 'app-view-profile',
            template: __webpack_require__(/*! ./view-profile.component.html */ "./src/app/view-profile/view-profile.component.html"),
            styles: [__webpack_require__(/*! ./view-profile.component.css */ "./src/app/view-profile/view-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_index__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], ViewProfileComponent);
    return ViewProfileComponent;
}());



/***/ }),

/***/ "./src/app/warning/warning.component.css":
/*!***********************************************!*\
  !*** ./src/app/warning/warning.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/warning/warning.component.html":
/*!************************************************!*\
  !*** ./src/app/warning/warning.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  warning works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/warning/warning.component.ts":
/*!**********************************************!*\
  !*** ./src/app/warning/warning.component.ts ***!
  \**********************************************/
/*! exports provided: WarningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningComponent", function() { return WarningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WarningComponent = /** @class */ (function () {
    function WarningComponent() {
    }
    WarningComponent.prototype.ngOnInit = function () {
    };
    WarningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-warning',
            template: __webpack_require__(/*! ./warning.component.html */ "./src/app/warning/warning.component.html"),
            styles: [__webpack_require__(/*! ./warning.component.css */ "./src/app/warning/warning.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WarningComponent);
    return WarningComponent;
}());



/***/ }),

/***/ "./src/app/waste/waste.component.css":
/*!*******************************************!*\
  !*** ./src/app/waste/waste.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/waste/waste.component.html":
/*!********************************************!*\
  !*** ./src/app/waste/waste.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  waste works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/waste/waste.component.ts":
/*!******************************************!*\
  !*** ./src/app/waste/waste.component.ts ***!
  \******************************************/
/*! exports provided: WasteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WasteComponent", function() { return WasteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WasteComponent = /** @class */ (function () {
    function WasteComponent() {
    }
    WasteComponent.prototype.ngOnInit = function () {
    };
    WasteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-waste',
            template: __webpack_require__(/*! ./waste.component.html */ "./src/app/waste/waste.component.html"),
            styles: [__webpack_require__(/*! ./waste.component.css */ "./src/app/waste/waste.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WasteComponent);
    return WasteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBfNc4_WWf1AD-lVit6lDCIVZOb0II9ixs',
        authDomain: 'produceme2018.firebaseapp.com',
        databaseURL: 'https://produceme2018.firebaseio.com',
        projectId: 'produceme2018',
        storageBucket: 'produceme2018.appspot.com',
        messagingSenderId: '361352963036'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Yorley\Documents\GitHub\pm\produceme\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map