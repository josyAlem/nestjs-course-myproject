(self["webpackChunkmean_course"] = self["webpackChunkmean_course"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 4786:
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularMaterialModule": () => (/* binding */ AngularMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6627);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);









class AngularMaterialModule {
}
AngularMaterialModule.ɵfac = function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); };
AngularMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_1__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__.MatExpansionModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ 4118);
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ 7292);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);





const routes = [
    {
        path: 'posts',
        component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_1__.PostListComponent
    }, {
        path: 'createPost',
        component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_0__.PostCreateComponent
    }, {
        path: 'edit/:postId',
        component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_0__.PostCreateComponent
    }, {
        path: "",
        redirectTo: "/posts",
        pathMatch: "full"
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["main[_ngcontent-%COMP%] {\n  width: 80%;\n  margin: 1rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDRixpQkFBQTtBQUNBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW57XHJcbiAgd2lkdGg6ODAlO1xyXG5tYXJnaW46MXJlbSBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-material.module */ 4786);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ 7292);
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ 4118);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
            _angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__.PostCreateComponent,
        _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_4__.PostListComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule,
        _angular_material_module__WEBPACK_IMPORTED_MODULE_2__.AngularMaterialModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule] }); })();


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2522);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);




const _c0 = function () { return ["/posts"]; };
const _c1 = function () { return ["/createPost"]; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 8, vars: 4, consts: [["color", "accent"], [1, "example-spacer"], ["mat-button", "", "routerLinkActive", "mat-primary", 3, "routerLink"], ["mat-button", "", "routerLinkActive", "mat-primary", "id", "btnNewPost", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Posts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " New Post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["#btnNewPost[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnRuTmV3UG9zdHtcclxuICBmbG9hdDpyaWdodCAgO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7873:
/*!**********************************************!*\
  !*** ./src/app/posts/mime-type.validator.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mimeType": () => (/* binding */ mimeType)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);

const mimeType = (control) => {
    if (typeof (control.value) === 'string') {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null);
    }
    const file = control.value;
    const fileReader = new FileReader();
    const frObs = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((observer) => {
        fileReader.addEventListener("loadend", () => {
            const arr = new Uint8Array(fileReader.result).subarray(0, 4);
            let header = "";
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        if (file)
            fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ 4118:
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCreateComponent": () => (/* binding */ PostCreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mime-type.validator */ 7873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ 9078);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3738);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 8295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 1095);












function PostCreateComponent_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner");
} }
function PostCreateComponent_form_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function PostCreateComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function PostCreateComponent_form_2_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onSavePost(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PostCreateComponent_form_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](7); return _r2.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Pick Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function PostCreateComponent_form_2_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onImagePicked($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, PostCreateComponent_form_2_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Save Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.imagePreview !== "" && ctx_r1.imagePreview);
} }
class PostCreateComponent {
    constructor(postsService, route) {
        this.postsService = postsService;
        this.route = route;
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, {
                validators: [],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_0__.mimeType]
            })
        });
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            var _a, _b, _c, _d, _e;
            if (paramMap.has("postId")) {
                this.mode = "edit";
                this.postId = ((_a = paramMap.get("postId")) === null || _a === void 0 ? void 0 : _a.toString()) || "";
                (_b = this.form.get("image")) === null || _b === void 0 ? void 0 : _b.clearValidators();
                (_c = this.form.get("image")) === null || _c === void 0 ? void 0 : _c.updateValueAndValidity();
                this.onEdit();
            }
            else {
                this.mode = "create";
                this.postId = "";
                (_d = this.form.get("image")) === null || _d === void 0 ? void 0 : _d.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
                (_e = this.form.get("image")) === null || _e === void 0 ? void 0 : _e.updateValueAndValidity();
            }
        });
    }
    onImagePicked(event) {
        var _a, _b;
        let el = event.target;
        const file = (_a = el === null || el === void 0 ? void 0 : el.files) === null || _a === void 0 ? void 0 : _a[0];
        this.form.patchValue({ image: file });
        (_b = this.form.get("image")) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        if (file)
            reader.readAsDataURL(file);
    }
    onEdit() {
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe((res) => {
            this.isLoading = false;
            if (res) {
                this.post = {
                    id: res._id,
                    title: res.title,
                    content: res.content,
                    imagePath: res.imagePath
                };
                this.imagePreview = this.post.imagePath;
                this.form.setValue({
                    title: this.post.title,
                    content: this.post.content,
                    image: null
                });
            }
        });
    }
    onSavePost() {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    }
}
PostCreateComponent.ɵfac = function PostCreateComponent_Factory(t) { return new (t || PostCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_1__.PostsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
PostCreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PostCreateComponent, selectors: [["app-post-create"]], decls: 3, vars: 2, consts: [[4, "ngIf"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["matInput", "", "type", "text", "formControlName", "title", "placeholder", "Post Title"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["matInput", "", "rows", "4", "formControlName", "content", "placeholder", "Post Content"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [1, "image-preview"], [3, "src"]], template: function PostCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PostCreateComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PostCreateComponent_form_2_Template, 14, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatSpinner, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\ninput[type=\"file\"][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyB7XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7292:
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListComponent": () => (/* binding */ PostListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../posts.service */ 9078);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4885);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 1562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 1095);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);







function PostListComponent_mat_spinner_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
} }
const _c0 = function (a1) { return ["/edit", a1]; };
function PostListComponent_div_1_mat_accordion_1_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-action-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "EDIT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostListComponent_div_1_mat_accordion_1_mat_expansion_panel_1_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const p_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.onDelete(p_r5.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", p_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", p_r5.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r5.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c0, p_r5.id));
} }
function PostListComponent_div_1_mat_accordion_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-accordion", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostListComponent_div_1_mat_accordion_1_mat_expansion_panel_1_Template, 13, 6, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.postList);
} }
function PostListComponent_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No posts added yet!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PostListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostListComponent_div_1_mat_accordion_1_Template, 2, 1, "mat-accordion", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PostListComponent_div_1_p_2_Template, 2, 0, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.postList && ctx_r1.postList.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.postList || ctx_r1.postList.length == 0);
} }
class PostListComponent {
    constructor(postSvc) {
        this.postSvc = postSvc;
        this.postList = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.postSvc.getPosts();
        this.isLoading = true;
        this.postSub = this.postSvc.getPostUpdateListener().subscribe((posts) => {
            this.isLoading = false;
            this.postList = posts;
        });
    }
    ngOnDestroy() {
        this.postSub.unsubscribe();
    }
    onDelete(id) {
        this.postSvc.deletePost(id);
    }
}
PostListComponent.ɵfac = function PostListComponent_Factory(t) { return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_0__.PostsService)); };
PostListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostListComponent, selectors: [["app-post-list"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["multi", "true", 4, "ngIf"], ["class", "info-text mat-body-1", 4, "ngIf"], ["multi", "true"], [4, "ngFor", "ngForOf"], [1, "post-image"], [3, "src"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "warn", 3, "click"], [1, "info-text", "mat-body-1"]], template: function PostListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PostListComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PostListComponent_div_1_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__.MatSpinner, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionPanelActionRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.info-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.post-image[_ngcontent-%COMP%] {\n  height: 70%;\n  width: 90%;\n}\n\n.post-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0FBQ0YiLCJmaWxlIjoicG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuXHJcbi5pbmZvLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc3QtaW1hZ2Uge1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5wb3N0LWltYWdlIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9078:
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 9075);






class PostsService {
    constructor(http, router, domSanitizerSvc) {
        this.http = http;
        this.router = router;
        this.domSanitizerSvc = domSanitizerSvc;
        this.posts = [];
        this.postsUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    getPosts() {
        this.http
            .get("http://localhost:3000/api/posts")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(postData => {
            return postData.data.map((post) => {
                return {
                    id: post._id,
                    title: post.title,
                    content: post.content,
                    imagePath: this.createFile(post.imagePath.data)
                };
            });
        }))
            .subscribe(transformedPosts => {
            this.posts = transformedPosts;
            this.postsUpdated$.next([...this.posts]);
        });
    }
    getPostUpdateListener() {
        return this.postsUpdated$.asObservable();
    }
    getPost(id) {
        return this.http.get("http://localhost:3000/api/posts/" + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(postData => {
            var _a;
            return {
                id: postData.data._id,
                title: postData.data.title,
                content: postData.data.content,
                imagePath: this.createFile((_a = postData.data.imagePath) === null || _a === void 0 ? void 0 : _a.data)
            };
        }));
    }
    addPost(title, content, image) {
        const postData = new FormData();
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
        this.http
            .post("http://localhost:3000/api/posts", postData)
            .subscribe(response => {
            var _a;
            const post = {
                id: response.data.id,
                title: title,
                content: content,
                imagePath: this.createFile((_a = response.data.imagePath) === null || _a === void 0 ? void 0 : _a.data)
            };
            this.posts.push(post);
            this.postsUpdated$.next([...this.posts]);
            this.router.navigate(["/"]);
        });
    }
    updatePost(id, title, content, image) {
        let postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            if (image != null)
                postData.append("image", image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image || ""
            };
        }
        this.http
            .put("http://localhost:3000/api/posts/" + id, postData)
            .subscribe(response => {
            var _a;
            const updatedPosts = [...this.posts];
            const oldPostIndex = updatedPosts.findIndex(p => p.id === id);
            const post = {
                id: id,
                title: title,
                content: content,
                imagePath: this.createFile((_a = response.data.imagePath) === null || _a === void 0 ? void 0 : _a.data)
            };
            updatedPosts[oldPostIndex] = post;
            this.posts = updatedPosts;
            this.postsUpdated$.next([...this.posts]);
            this.router.navigateByUrl("");
        });
    }
    deletePost(postId) {
        this.http
            .delete("http://localhost:3000/api/posts/" + postId)
            .subscribe(() => {
            const updatedPosts = this.posts.filter(post => post.id !== postId);
            this.posts = updatedPosts;
            this.postsUpdated$.next([...this.posts]);
        });
    }
    createFile(fileBuffer) {
        if (!fileBuffer)
            return "";
        const base64String = btoa(String.fromCharCode(...new Uint8Array(fileBuffer)));
        return this.domSanitizerSvc.bypassSecurityTrustUrl("data:image/png;base64," + base64String);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer)); };
PostsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map