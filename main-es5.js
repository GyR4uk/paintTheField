(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["main"], {

        /***/
        "./$$_lazy_route_resource lazy recursive":
            /*!******************************************************!*\
              !*** ./$$_lazy_route_resource lazy namespace object ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                function webpackEmptyAsyncContext(req) {
                    // Here Promise.resolve().then() is used instead of new Promise() to prevent
                    // uncaught exception popping up in devtools
                    return Promise.resolve().then(function () {
                        var e = new Error("Cannot find module '" + req + "'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    });
                }
                webpackEmptyAsyncContext.keys = function () {
                    return [];
                };
                webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
                module.exports = webpackEmptyAsyncContext;
                webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/app.component.html":
            /*!**************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
              \**************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<app-login-screen *ngIf=\"!this.LoginService.isLogged\"></app-login-screen>\n<div *ngIf=\"this.LoginService.isLogged\" class=\"container\">\n    <app-controls></app-controls>\n    <app-game-filed></app-game-filed>\n    <app-chat class=\"chat\"></app-chat>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/chat/chat-bar/chat-bar.component.html":
            /*!*********************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/chat/chat-bar/chat-bar.component.html ***!
              \*********************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"wrapper\">\n    <div class=\"send-message\" (click)=\"onFilter()\">\n        <img src=\"games/0/assets/funnel.svg\" />\n    </div>\n    <input type=\"text\" [(ngModel)]=\"text\" (keydown)=\"onInput($event)\" />\n    <div class=\"send-message border\" (click)=\"sendMessage(this.text)\">\n        <img src=\"games/0/assets/send.svg\" />\n    </div>\n\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html":
            /*!********************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/chat/chat.component.html ***!
              \********************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"top\">\n    <h1>Color Paint</h1>\n</div>\n<div class=\"messages\">\n    <chat-message *ngFor=\"let message of this.ChatService.mess\" [data]=\"message\"></chat-message>\n</div>\n<chat-bar class=\"bar\"></chat-bar>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/chat/message/message.component.html":
            /*!*******************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/chat/message/message.component.html ***!
              \*******************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div [ngClass]=\"{ wrap: data.isMine, 'from-wrap': !data.isMine }\">\n    <div [ngClass]=\"{ message: data.isMine, 'from-message': !data.isMine }\">\n        <div [ngClass]=\"{ name: data.isMine, 'from-name': !data.isMine }\">\n            {{ data.user }} | ( {{ (data.game === '' ? \"resting\" : data.game) }} )\n        </div>\n        <div class=\"text\">{{ data.text }}</div>\n        <div [ngClass]=\"{ time: data.isMine, 'from-time': !data.isMine }\">\n            {{ this.ChatService.getCurrentTime(data.time) }}\n        </div>\n    </div>\n    <div [ngClass]=\"{ circle: data.isMine, 'from-circle': !data.isMine }\"></div>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/controls/control-leader-table/control-leader-table.component.html":
            /*!*************************************************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/controls/control-leader-table/control-leader-table.component.html ***!
              \*************************************************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<img src=\"games/0/assets/medal.svg\" (click)=\"onClick()\" />\n<div *ngIf=\"show\" class=\"leaderBoard\">\n    <div class=\"head\">Leader Board</div>\n    <div>\n        <div class=\"row\" *ngFor=\"let leader of arrayOfRecords; let i = index;\">\n            <img [src]=\"getPlace(i)\" />\n            <p style=\"color: #027271\">{{ leader.user }}</p>\n            <p style=\"color: #ffa500\">{{leader.score}}</p>\n        </div>\n    </div>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/controls/controls.component.html":
            /*!****************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/controls/controls.component.html ***!
              \****************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"contr\">\n    <img src=\"games/0/assets/house.svg\" class=\"btn\" (click)=\"onLogOut()\" />\n    <!-- <img src=\"games/0/assets/refresh.svg\" class=\"btn\" (click)=\"onRealodClick()\" /> -->\n    <control-leaders-table class=\"btn\"></control-leaders-table>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/game-field/cell/cell.component.html":
            /*!*******************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/game-field/cell/cell.component.html ***!
              \*******************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div [ngStyle]=\"{ background: cell.color }\"\n    [ngClass]=\"{active: cell.active, first: index === 0 && !cell.color, easy: this.GameService.GAME_DIFFICULTY === 10 && !cell.color, medium: this.GameService.GAME_DIFFICULTY === 13 && !cell.color, hard: this.GameService.GAME_DIFFICULTY === 16 && !cell.color}\">\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/game-field/color-panel/color-panel.component.html":
            /*!*********************************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/game-field/color-panel/color-panel.component.html ***!
              \*********************************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"color-panel\" *ngIf=\"!this.GameService.isEnd\">\n  <div *ngFor=\"let color of this.GameService.ACTIVE_ARRAY_OF_COLORS\" (click)=\"onClick(color)\" [ngStyle]=\"{\n        background: color\n      }\"></div>\n</div>\n<div class=\"color-panel\" *ngIf=\"this.GameService.isEnd\">\n  <img src=\"games/0/assets/arrows.svg\" class=\"end\" (click)=\"onRestart()\" />\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/game-field/game-difficulty/game-difficulty.component.html":
            /*!*****************************************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/game-field/game-difficulty/game-difficulty.component.html ***!
              \*****************************************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"gamediff\">\n    <button (click)=\"onSelectDifficulty(10)\">Легко</button>\n    <button (click)=\"onSelectDifficulty(13)\">Нормально</button>\n    <button (click)=\"onSelectDifficulty(16)\">Сложно</button>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/game-field/game-field.component.html":
            /*!********************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/game-field/game-field.component.html ***!
              \********************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"wrapper\">\n    <app-stars [count]=\"3\" *ngIf=\"this.GameService.GAME_DIFFICULTY\"></app-stars>\n    <div class=\"game\">\n        <div class=\"field\" *ngIf=\"!this.GameService.GAME_DIFFICULTY\">\n            <game-diff></game-diff>\n        </div>\n        <div *ngIf=\"this.GameService.GAME_DIFFICULTY\"\n            [ngClass]=\"{ field : true, easy : this.GameService.GAME_DIFFICULTY === 10, medium: this.GameService.GAME_DIFFICULTY === 13, hard: this.GameService.GAME_DIFFICULTY === 16 }\">\n            <game-cell *ngFor=\" let x of GameService.arrayOfCells; let i=index\" [data]=\"x\" [index]=\"i\">\n            </game-cell>\n        </div>\n        <game-color-panel></game-color-panel>\n    </div>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/game-field/scores/scores.component.html":
            /*!***********************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/game-field/scores/scores.component.html ***!
              \***********************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"scope\">\n    <h1>{{this.GameService.scores}}</h1>\n</div>\n"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/game-field/stars/stars.component.html":
            /*!*********************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/game-field/stars/stars.component.html ***!
              \*********************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div style=\"display: flex; justify-content: center; align-items: center; flex-direction: column;\">\n    <ul class=\"stars\">\n        <li *ngFor=\"let star of stars\" [@endAnimation]='star.width <= 10 ? \"end\" : \"\"' class=\"star\">\n            <div class=\"star-bg\" [style.width]=\"star.width +'%'\">\n\n\n            </div>\n        </li>\n    </ul>\n    <game-scores></game-scores>\n</div>"

                /***/
            }),

        /***/
        "./node_modules/raw-loader/index.js!./src/app/login-screen/login-screen.component.html":
            /*!************************************************************************************!*\
              !*** ./node_modules/raw-loader!./src/app/login-screen/login-screen.component.html ***!
              \************************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "<div class=\"authorization\">\n    <input type=\"text\" #userName required placeholder=\"Назовись...\" />\n    <button (click)=\"onLogin(userName.value)\">Авторизоваться</button>\n</div>"

                /***/
            }),

        /***/
        "./src/app/app.component.css":
            /*!***********************************!*\
              !*** ./src/app/app.component.css ***!
              \***********************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".chat {\n    width: 100%;\n    height: 100vh;\n    box-sizing: border-box;\n    border: 2px solid #ccc;\n    border-radius: 10px;\n}\n\n.container {\n    display: grid;\n    grid-template-columns: 0.5fr 5fr 2fr;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDVmciAyZnI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/app.component.ts":
            /*!**********************************!*\
              !*** ./src/app/app.component.ts ***!
              \**********************************/
            /*! exports provided: AppComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
                    return AppComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./shared/login.service */ "./src/app/shared/login.service.ts");
                /* harmony import */
                var _shared_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./shared/chat.service */ "./src/app/shared/chat.service.ts");




                var AppComponent = /** @class */ (function () {
                    function AppComponent(LoginService) {
                        this.LoginService = LoginService;
                    }
                    AppComponent.prototype.onLogin = function (name) {
                        this.LoginService._login(name);
                    };
                    AppComponent.ctorParameters = function () {
                        return [{
                            type: _shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
                        }];
                    };
                    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "app-root",
                            template: __webpack_require__( /*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
                            providers: [_shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _shared_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]],
                            styles: [__webpack_require__( /*! ./app.component.css */ "./src/app/app.component.css")]
                        })
                    ], AppComponent);
                    return AppComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/app.module.ts":
            /*!*******************************!*\
              !*** ./src/app/app.module.ts ***!
              \*******************************/
            /*! exports provided: AppModule */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "AppModule", function () {
                    return AppModule;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
                /* harmony import */
                var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
                /* harmony import */
                var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./app.component */ "./src/app/app.component.ts");
                /* harmony import */
                var _game_field_game_filed_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./game-field/game-filed.component */ "./src/app/game-field/game-filed.component.ts");
                /* harmony import */
                var _game_field_cell_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./game-field/cell/cell.component */ "./src/app/game-field/cell/cell.component.ts");
                /* harmony import */
                var _game_field_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! ./game-field/color-panel/color-panel.component */ "./src/app/game-field/color-panel/color-panel.component.ts");
                /* harmony import */
                var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__( /*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
                /* harmony import */
                var _controls_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__( /*! ./controls/controls.component */ "./src/app/controls/controls.component.ts");
                /* harmony import */
                var _shared_game_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__( /*! ./shared/game.service */ "./src/app/shared/game.service.ts");
                /* harmony import */
                var _chat_chat_bar_chat_bar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__( /*! ./chat/chat-bar/chat-bar.component */ "./src/app/chat/chat-bar/chat-bar.component.ts");
                /* harmony import */
                var _chat_message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__( /*! ./chat/message/message.component */ "./src/app/chat/message/message.component.ts");
                /* harmony import */
                var _login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__( /*! ./login-screen/login-screen.component */ "./src/app/login-screen/login-screen.component.ts");
                /* harmony import */
                var _game_field_scores_scores_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__( /*! ./game-field/scores/scores.component */ "./src/app/game-field/scores/scores.component.ts");
                /* harmony import */
                var _game_field_stars_stars_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__( /*! ./game-field/stars/stars.component */ "./src/app/game-field/stars/stars.component.ts");
                /* harmony import */
                var _game_field_game_difficulty_game_difficulty_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__( /*! ./game-field/game-difficulty/game-difficulty.component */ "./src/app/game-field/game-difficulty/game-difficulty.component.ts");
                /* harmony import */
                var _controls_control_leader_table_control_leader_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__( /*! ./controls/control-leader-table/control-leader-table.component */ "./src/app/controls/control-leader-table/control-leader-table.component.ts");




















                var AppModule = /** @class */ (function () {
                    function AppModule() {}
                    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                            declarations: [
                                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                                _game_field_game_filed_component__WEBPACK_IMPORTED_MODULE_7__["GameFiled"],
                                _game_field_cell_cell_component__WEBPACK_IMPORTED_MODULE_8__["GameCell"],
                                _game_field_color_panel_color_panel_component__WEBPACK_IMPORTED_MODULE_9__["ColorPanel"],
                                _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                                _controls_controls_component__WEBPACK_IMPORTED_MODULE_11__["ControlsComponent"],
                                _chat_chat_bar_chat_bar_component__WEBPACK_IMPORTED_MODULE_13__["ChatMessageBar"],
                                _chat_message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"],
                                _login_screen_login_screen_component__WEBPACK_IMPORTED_MODULE_15__["LoginScreenComponent"],
                                _game_field_scores_scores_component__WEBPACK_IMPORTED_MODULE_16__["ScoresComponent"],
                                _game_field_stars_stars_component__WEBPACK_IMPORTED_MODULE_17__["StarsComponent"],
                                _game_field_game_difficulty_game_difficulty_component__WEBPACK_IMPORTED_MODULE_18__["GameDifficultyComoponent"],
                                _controls_control_leader_table_control_leader_table_component__WEBPACK_IMPORTED_MODULE_19__["LeaderTableComponent"]
                            ],
                            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
                            providers: [_shared_game_service__WEBPACK_IMPORTED_MODULE_12__["GameService"]],
                            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                        })
                    ], AppModule);
                    return AppModule;
                }());



                /***/
            }),

        /***/
        "./src/app/chat/chat-bar/chat-bar.component.css":
            /*!******************************************************!*\
              !*** ./src/app/chat/chat-bar/chat-bar.component.css ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "* {\n    box-sizing: border-box;\n    word-wrap: break-word;\n}\n\n.wrapper {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    height: 10%;\n    background: rgba(6, 123, 123, 0.12);\n}\n\n.send-message {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 15%;\n    height: 50%;\n    border-radius: 15px;\n    cursor: pointer;\n}\n\n.border {\n    border: 2px solid #027271;\n}\n\ninput {\n    width: 80%;\n    height: 40%;\n    border: 2px solid #027271;\n    font-size: 100%;\n    padding: 8px;\n    outline: none;\n    border-radius: 10px;\n}\n\n.send-message img {\n    height: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWJhci9jaGF0LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LWJhci9jaGF0LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbi53cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSg2LCAxMjMsIDEyMywgMC4xMik7XG59XG5cbi5zZW5kLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm9yZGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI3MjcxO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBoZWlnaHQ6IDQwJTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI3MjcxO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uc2VuZC1tZXNzYWdlIGltZyB7XG4gICAgaGVpZ2h0OiA4MCU7XG59Il19 */"

                /***/
            }),

        /***/
        "./src/app/chat/chat-bar/chat-bar.component.ts":
            /*!*****************************************************!*\
              !*** ./src/app/chat/chat-bar/chat-bar.component.ts ***!
              \*****************************************************/
            /*! exports provided: ChatMessageBar */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ChatMessageBar", function () {
                    return ChatMessageBar;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var src_app_shared_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/chat.service */ "./src/app/shared/chat.service.ts");



                var ChatMessageBar = /** @class */ (function () {
                    function ChatMessageBar(ChatService) {
                        this.ChatService = ChatService;
                        this.text = "";
                    }
                    ChatMessageBar.prototype.sendMessage = function (text) {
                        if (text.length !== 0 && text.replace(/\s/g, "").length !== 0) {
                            this.ChatService._createMessage(text);
                            this.text = "";
                        }
                    };
                    ChatMessageBar.prototype.onInput = function (event) {
                        if (event.code === "Enter") {
                            this.sendMessage(event.target.value);
                        }
                    };
                    ChatMessageBar.prototype.onFilter = function () {
                        this.ChatService.filtered = !this.ChatService.filtered;
                    };
                    ChatMessageBar.ctorParameters = function () {
                        return [{
                            type: src_app_shared_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
                        }];
                    };
                    ChatMessageBar = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "chat-bar",
                            template: __webpack_require__( /*! raw-loader!./chat-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat-bar/chat-bar.component.html"),
                            styles: [__webpack_require__( /*! ./chat-bar.component.css */ "./src/app/chat/chat-bar/chat-bar.component.css")]
                        })
                    ], ChatMessageBar);
                    return ChatMessageBar;
                }());



                /***/
            }),

        /***/
        "./src/app/chat/chat.component.css":
            /*!*****************************************!*\
              !*** ./src/app/chat/chat.component.css ***!
              \*****************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Lakki+Reddy&display=swap\");\n* {\n    box-sizing: border-box;\n}\n.top {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    min-width: 100%;\n    height: 5%;\n    min-height: 35px;\n    background: rgba(6, 123, 123, 0.64);\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n}\n.top h1 {\n    font-family: \"Lakki Reddy\", cursive;\n    font-size: 200%;\n}\n.bar {\n    height: 10%;\n    background: green;\n    font-size: 100%;\n}\n.messages {\n    width: 100%;\n    height: 85%;\n    border-bottom: 2px solid #ccc;\n    border-top: 2px solid #ccc;\n    overflow-y: scroll;\n    background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FO0lBQ0ksc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MYWtraStSZWRkeSZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNSU7XG4gICAgbWluLWhlaWdodDogMzVweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYsIDEyMywgMTIzLCAwLjY0KTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xufVxuXG4udG9wIGgxIHtcbiAgICBmb250LWZhbWlseTogXCJMYWtraSBSZWRkeVwiLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMjAwJTtcbn1cblxuLmJhciB7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgZm9udC1zaXplOiAxMDAlO1xufVxuXG4ubWVzc2FnZXMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODUlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjY2NjO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/chat/chat.component.ts":
            /*!****************************************!*\
              !*** ./src/app/chat/chat.component.ts ***!
              \****************************************/
            /*! exports provided: ChatComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
                    return ChatComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _shared_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/chat.service */ "./src/app/shared/chat.service.ts");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




                var ChatComponent = /** @class */ (function () {
                    function ChatComponent(ChatService, http) {
                        var _this = this;
                        this.ChatService = ChatService;
                        this.http = http;
                        this.http
                            .get("http://localhost:8080/api/messages")
                            .toPromise()
                            .then(function (array) {
                                _this.ChatService.mess = array;
                                //console.log(this.ChatService.mess);
                            })
                            .catch(function (err) {
                                return console.warn("Невозможно получить сообщения. Авторизуйтесь или подключитесь к интренету!");
                            });
                    }
                    ChatComponent.ctorParameters = function () {
                        return [{
                                type: _shared_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
                            },
                            {
                                type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
                            }
                        ];
                    };
                    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "app-chat",
                            template: __webpack_require__( /*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.component.html"),
                            styles: [__webpack_require__( /*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
                        })
                    ], ChatComponent);
                    return ChatComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/chat/message/message.component.css":
            /*!****************************************************!*\
              !*** ./src/app/chat/message/message.component.css ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "* {\n    font-family: 'Arial', sans-serif;\n}\n\n.wrap {\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr .1fr;\n    grid-template-columns: 1fr .05fr;\n}\n\n.from-wrap {\n    margin: 10px;\n    display: grid;\n    grid-template-rows: 1fr .1fr;\n    grid-template-columns: .05fr 1fr;\n}\n\n.message {\n    display: grid;\n    grid-row: 1;\n    grid-column: 1;\n    align-self: center;\n    background: #e6e6e6;\n    padding: 5px 10px;\n    border-radius: 10px;\n}\n\n.from-message {\n    display: grid;\n    grid-row: 1;\n    grid-column: 2;\n    align-self: center;\n    background: rgb(219, 232, 247);\n    padding: 5px 10px;\n    border-radius: 10px;\n}\n\n.circle {\n    grid-row: 2;\n    grid-column: 2;\n    width: 12px;\n    height: 12px;\n    background: #e6e6e6;\n    border-radius: 50%;\n    justify-self: left;\n}\n\n.from-circle {\n    grid-row: 2;\n    grid-column: 1;\n    width: 12px;\n    height: 12px;\n    background: rgb(219, 232, 247);\n    border-radius: 50%;\n    justify-self: right;\n}\n\n.name {\n    font-weight: bold;\n    color: #869af3;\n    grid-row: 1;\n}\n\n.from-name {\n    color: #f07d00;\n    grid-row: 1;\n    font-weight: bold;\n}\n\n.text {\n    grid-row: 2;\n    word-wrap: break-word;\n    overflow-x: hidden;\n}\n\n.time {\n    grid-row: 3;\n    justify-self: right;\n    font-size: 80%;\n    color: #999;\n}\n\n.from-time {\n    grid-row: 3;\n    justify-self: left;\n    font-size: 80%;\n    color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbn1cblxuLndyYXAge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC4xZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgLjA1ZnI7XG59XG5cbi5mcm9tLXdyYXAge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIC4xZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAuMDVmciAxZnI7XG59XG5cbi5tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5mcm9tLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHJnYigyMTksIDIzMiwgMjQ3KTtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY2lyY2xlIHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMjtcbiAgICB3aWR0aDogMTJweDtcbiAgICBoZWlnaHQ6IDEycHg7XG4gICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4uZnJvbS1jaXJjbGUge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGhlaWdodDogMTJweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjE5LCAyMzIsIDI0Nyk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG59XG5cbi5uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzg2OWFmMztcbiAgICBncmlkLXJvdzogMTtcbn1cblxuLmZyb20tbmFtZSB7XG4gICAgY29sb3I6ICNmMDdkMDA7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0IHtcbiAgICBncmlkLXJvdzogMjtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4udGltZSB7XG4gICAgZ3JpZC1yb3c6IDM7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBjb2xvcjogIzk5OTtcbn1cblxuLmZyb20tdGltZSB7XG4gICAgZ3JpZC1yb3c6IDM7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGNvbG9yOiAjOTk5O1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/chat/message/message.component.ts":
            /*!***************************************************!*\
              !*** ./src/app/chat/message/message.component.ts ***!
              \***************************************************/
            /*! exports provided: MessageComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "MessageComponent", function () {
                    return MessageComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var src_app_shared_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/chat.service */ "./src/app/shared/chat.service.ts");



                var MessageComponent = /** @class */ (function () {
                    function MessageComponent(ChatService) {
                        this.ChatService = ChatService;
                    }
                    MessageComponent.ctorParameters = function () {
                        return [{
                            type: src_app_shared_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
                        }];
                    };
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
                    ], MessageComponent.prototype, "data", void 0);
                    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "chat-message",
                            template: __webpack_require__( /*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/app/chat/message/message.component.html"),
                            styles: [__webpack_require__( /*! ./message.component.css */ "./src/app/chat/message/message.component.css")]
                        })
                    ], MessageComponent);
                    return MessageComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/controls/control-leader-table/control-leader-table.component.css":
            /*!**********************************************************************************!*\
              !*** ./src/app/controls/control-leader-table/control-leader-table.component.css ***!
              \**********************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".leaderBoard {\n    width: 300px;\n    height: 500px;\n    position: relative;\n    border: 2px solid #ccc;\n    border-radius: 10px;\n    background: #fff;\n    overflow: hidden;\n    overflow-x: scroll;\n    box-sizing: border-box;\n}\n\n.head {\n    /* border-top-left-radius: 8px;\n    border-top-right-radius: 8px; */\n    width: 100%;\n    height: 8%;\n    font-size: 20px;\n    background: #6ca8ab;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-family: \"Lakki Reddy\", cursive;\n}\n\n.row {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    width: 100%;\n    border-bottom: 2px solid #027271;\n    font-family: 'Roboto Slab', serif;\n}\n\n.row img {\n    width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvY29udHJvbC1sZWFkZXItdGFibGUvY29udHJvbC1sZWFkZXItdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7bUNBQytCO0lBQy9CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyb2xzL2NvbnRyb2wtbGVhZGVyLXRhYmxlL2NvbnRyb2wtbGVhZGVyLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVhZGVyQm9hcmQge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGVhZCB7XG4gICAgLyogYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7ICovXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4JTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzZjYThhYjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IFwiTGFra2kgUmVkZHlcIiwgY3Vyc2l2ZTtcbn1cblxuLnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDI3MjcxO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbn1cblxuLnJvdyBpbWcge1xuICAgIHdpZHRoOiA0MHB4O1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/controls/control-leader-table/control-leader-table.component.ts":
            /*!*********************************************************************************!*\
              !*** ./src/app/controls/control-leader-table/control-leader-table.component.ts ***!
              \*********************************************************************************/
            /*! exports provided: LeaderTableComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LeaderTableComponent", function () {
                    return LeaderTableComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



                var LeaderTableComponent = /** @class */ (function () {
                    function LeaderTableComponent(http) {
                        this.http = http;
                        this.show = false;
                        this.place = [
                            "games/0/assets/gold-medal.svg",
                            "games/0/assets/second.svg",
                            "games/0/assets/third.svg",
                            "games/0/assets/no-medal.svg"
                        ];
                    }
                    LeaderTableComponent.prototype.onClick = function () {
                        var _this = this;
                        this.http
                            .get("http://localhost:8080/api/records")
                            .subscribe(function (arrayOfUsers) {
                                _this.arrayOfRecords = arrayOfUsers;
                                _this.arrayOfRecords = _this.arrayOfRecords.filter(function (el) {
                                    return el.game === "paintTheField";
                                });
                                _this.show = !_this.show;
                            });
                    };
                    LeaderTableComponent.prototype.getPlace = function (index) {
                        if (index < 3) {
                            return this.place[index];
                        } else {
                            return this.place[3];
                        }
                    };
                    LeaderTableComponent.ctorParameters = function () {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
                        }];
                    };
                    LeaderTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "control-leaders-table",
                            template: __webpack_require__( /*! raw-loader!./control-leader-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/controls/control-leader-table/control-leader-table.component.html"),
                            styles: [__webpack_require__( /*! ./control-leader-table.component.css */ "./src/app/controls/control-leader-table/control-leader-table.component.css")]
                        })
                    ], LeaderTableComponent);
                    return LeaderTableComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/controls/controls.component.css":
            /*!*************************************************!*\
              !*** ./src/app/controls/controls.component.css ***!
              \*************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".contr {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n}\n\n.btn {\n    width: 50%;\n    max-width: 50px;\n    margin-top: 10%;\n    border-radius: 50%;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbHMvY29udHJvbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

                /***/
            }),

        /***/
        "./src/app/controls/controls.component.ts":
            /*!************************************************!*\
              !*** ./src/app/controls/controls.component.ts ***!
              \************************************************/
            /*! exports provided: ControlsComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ControlsComponent", function () {
                    return ControlsComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/game.service */ "./src/app/shared/game.service.ts");
                /* harmony import */
                var _shared_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../shared/login.service */ "./src/app/shared/login.service.ts");




                var ControlsComponent = /** @class */ (function () {
                    function ControlsComponent(GameService, LoginService) {
                        this.GameService = GameService;
                        this.LoginService = LoginService;
                    }
                    ControlsComponent.prototype.onLogOut = function () {
                        this.LoginService._logOut();
                    };
                    ControlsComponent.prototype.onRealodClick = function () {
                        this.GameService.restartTheGame();
                    };
                    ControlsComponent.ctorParameters = function () {
                        return [{
                                type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
                            },
                            {
                                type: _shared_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
                            }
                        ];
                    };
                    ControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "app-controls",
                            template: __webpack_require__( /*! raw-loader!./controls.component.html */ "./node_modules/raw-loader/index.js!./src/app/controls/controls.component.html"),
                            styles: [__webpack_require__( /*! ./controls.component.css */ "./src/app/controls/controls.component.css")]
                        })
                    ], ControlsComponent);
                    return ControlsComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/game-field/cell/cell.component.css":
            /*!****************************************************!*\
              !*** ./src/app/game-field/cell/cell.component.css ***!
              \****************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "div {\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    border: 3px solid #999;\n    border-radius: 5px;\n}\n\n.active {\n    border-color: green;\n    -webkit-animation-name: animBordres;\n            animation-name: animBordres;\n    -webkit-animation-duration: .3s;\n            animation-duration: .3s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-delay: 0;\n            animation-delay: 0;\n}\n\n@-webkit-keyframes animBordres {\n    from {\n        border-color: orange;\n    }\n    to {\n        border-color: olivedrab;\n    }\n}\n\n@keyframes animBordres {\n    from {\n        border-color: orange;\n    }\n    to {\n        border-color: olivedrab;\n    }\n}\n\n.first {\n    background: midnightblue;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-delay: 0;\n            animation-delay: 0;\n}\n\n.easy {\n    -webkit-animation-name: anmiFirstEasy;\n            animation-name: anmiFirstEasy;\n}\n\n.medium {\n    -webkit-animation-name: anmiFirstMedium;\n            animation-name: anmiFirstMedium;\n}\n\n.hard {\n    -webkit-animation-name: animFirstHard;\n            animation-name: animFirstHard;\n}\n\n@-webkit-keyframes anmiFirstEasy {\n    25% {\n        background: midnightblue;\n    }\n    50% {\n        background: purple;\n    }\n    75% {\n        background: crimson;\n    }\n    100% {\n        background: mediumpurple;\n    }\n}\n\n@keyframes anmiFirstEasy {\n    25% {\n        background: midnightblue;\n    }\n    50% {\n        background: purple;\n    }\n    75% {\n        background: crimson;\n    }\n    100% {\n        background: mediumpurple;\n    }\n}\n\n@-webkit-keyframes anmiFirstMedium {\n    0% {\n        background: midnightblue;\n    }\n    25% {\n        background: purple;\n    }\n    50% {\n        background: crimson;\n    }\n    75% {\n        background: mediumpurple;\n    }\n    100% {\n        background: orange;\n    }\n}\n\n@keyframes anmiFirstMedium {\n    0% {\n        background: midnightblue;\n    }\n    25% {\n        background: purple;\n    }\n    50% {\n        background: crimson;\n    }\n    75% {\n        background: mediumpurple;\n    }\n    100% {\n        background: orange;\n    }\n}\n\n@-webkit-keyframes animFirstHard {\n    16% {\n        background: midnightblue;\n    }\n    32% {\n        background: purple;\n    }\n    48% {\n        background: crimson;\n    }\n    64% {\n        background: mediumpurple;\n    }\n    80% {\n        background: orange;\n    }\n    100% {\n        background: blue;\n    }\n}\n\n@keyframes animFirstHard {\n    16% {\n        background: midnightblue;\n    }\n    32% {\n        background: purple;\n    }\n    48% {\n        background: crimson;\n    }\n    64% {\n        background: mediumpurple;\n    }\n    80% {\n        background: orange;\n    }\n    100% {\n        background: blue;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9jZWxsL2NlbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsMEJBQWtCO1lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFQQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkMsMEJBQWtCO1lBQWxCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kscUNBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7O0FBYkE7SUFDSTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQWhCQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQW5CQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1maWVsZC9jZWxsL2NlbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzk5OTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFuaW1Cb3JkcmVzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogLjNzO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMDtcbn1cblxuQGtleWZyYW1lcyBhbmltQm9yZHJlcyB7XG4gICAgZnJvbSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogb2xpdmVkcmFiO1xuICAgIH1cbn1cblxuLmZpcnN0IHtcbiAgICBiYWNrZ3JvdW5kOiBtaWRuaWdodGJsdWU7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDA7XG59XG5cbi5lYXN5IHtcbiAgICBhbmltYXRpb24tbmFtZTogYW5taUZpcnN0RWFzeTtcbn1cblxuLm1lZGl1bSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGFubWlGaXJzdE1lZGl1bTtcbn1cblxuLmhhcmQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBhbmltRmlyc3RIYXJkO1xufVxuXG5Aa2V5ZnJhbWVzIGFubWlGaXJzdEVhc3kge1xuICAgIDI1JSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1pZG5pZ2h0Ymx1ZTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogcHVycGxlO1xuICAgIH1cbiAgICA3NSUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBjcmltc29uO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWVkaXVtcHVycGxlO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBhbm1pRmlyc3RNZWRpdW0ge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWlkbmlnaHRibHVlO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNyaW1zb247XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1lZGl1bXB1cnBsZTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgYW5pbUZpcnN0SGFyZCB7XG4gICAgMTYlIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWlkbmlnaHRibHVlO1xuICAgIH1cbiAgICAzMiUge1xuICAgICAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XG4gICAgfVxuICAgIDQ4JSB7XG4gICAgICAgIGJhY2tncm91bmQ6IGNyaW1zb247XG4gICAgfVxuICAgIDY0JSB7XG4gICAgICAgIGJhY2tncm91bmQ6IG1lZGl1bXB1cnBsZTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogb3JhbmdlO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmx1ZTtcbiAgICB9XG59Il19 */"

                /***/
            }),

        /***/
        "./src/app/game-field/cell/cell.component.ts":
            /*!***************************************************!*\
              !*** ./src/app/game-field/cell/cell.component.ts ***!
              \***************************************************/
            /*! exports provided: GameCell */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "GameCell", function () {
                    return GameCell;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



                var GameCell = /** @class */ (function () {
                    function GameCell(GameService) {
                        this.GameService = GameService;
                    }
                    GameCell.ctorParameters = function () {
                        return [{
                            type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
                        }];
                    };
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("data")
                    ], GameCell.prototype, "cell", void 0);
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("index")
                    ], GameCell.prototype, "index", void 0);
                    GameCell = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "game-cell",
                            template: __webpack_require__( /*! raw-loader!./cell.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-field/cell/cell.component.html"),
                            styles: [__webpack_require__( /*! ./cell.component.css */ "./src/app/game-field/cell/cell.component.css")]
                        })
                    ], GameCell);
                    return GameCell;
                }());



                /***/
            }),

        /***/
        "./src/app/game-field/color-panel/color-panel.component.css":
            /*!******************************************************************!*\
              !*** ./src/app/game-field/color-panel/color-panel.component.css ***!
              \******************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".color-panel {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 5% auto;\n    width: 100%;\n}\n\n.color-panel div {\n    width: 10%;\n    padding-bottom: 10%;\n    box-sizing: border-box;\n    border: 2px #999;\n    border-radius: 50%;\n    cursor: pointer;\n    margin: 0 3%;\n}\n\n.end {\n    width: 10%;\n    cursor: pointer;\n    transition: .5s;\n}\n\n.end:hover {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1maWVsZC9jb2xvci1wYW5lbC9jb2xvci1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yLXBhbmVsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA1JSBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29sb3ItcGFuZWwgZGl2IHtcbiAgICB3aWR0aDogMTAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDJweCAjOTk5O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAwIDMlO1xufVxuXG4uZW5kIHtcbiAgICB3aWR0aDogMTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5lbmQ6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/game-field/color-panel/color-panel.component.ts":
            /*!*****************************************************************!*\
              !*** ./src/app/game-field/color-panel/color-panel.component.ts ***!
              \*****************************************************************/
            /*! exports provided: ColorPanel */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ColorPanel", function () {
                    return ColorPanel;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



                var ColorPanel = /** @class */ (function () {
                    function ColorPanel(GameService) {
                        this.GameService = GameService;
                    }
                    ColorPanel.prototype.onClick = function (color) {
                        this.GameService.changeColor(color);
                    };
                    ColorPanel.prototype.onRestart = function () {
                        this.GameService.restartTheGame();
                    };
                    ColorPanel.ctorParameters = function () {
                        return [{
                            type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
                        }];
                    };
                    ColorPanel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "game-color-panel",
                            template: __webpack_require__( /*! raw-loader!./color-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-field/color-panel/color-panel.component.html"),
                            styles: [__webpack_require__( /*! ./color-panel.component.css */ "./src/app/game-field/color-panel/color-panel.component.css")]
                        })
                    ], ColorPanel);
                    return ColorPanel;
                }());



                /***/
            }),

        /***/
        "./src/app/game-field/game-difficulty/game-difficulty.component.css":
            /*!**************************************************************************!*\
              !*** ./src/app/game-field/game-difficulty/game-difficulty.component.css ***!
              \**************************************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".gamediff {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton {\n    height: 15%;\n    width: 50%;\n    margin-bottom: 10px;\n    border-radius: 20px;\n    font-size: 150%;\n    font-family: 'Roboto Slab', serif;\n    border: 2px solid #027271;\n    outline: none;\n    cursor: pointer;\n    transition: width .3s;\n}\n\nbutton:hover {\n    width: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9nYW1lLWRpZmZpY3VsdHkvZ2FtZS1kaWZmaWN1bHR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2dhbWUtZmllbGQvZ2FtZS1kaWZmaWN1bHR5L2dhbWUtZGlmZmljdWx0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbWVkaWZmIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxNTAlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI3MjcxO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICB3aWR0aDogNTUlO1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/game-field/game-difficulty/game-difficulty.component.ts":
            /*!*************************************************************************!*\
              !*** ./src/app/game-field/game-difficulty/game-difficulty.component.ts ***!
              \*************************************************************************/
            /*! exports provided: GameDifficultyComoponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "GameDifficultyComoponent", function () {
                    return GameDifficultyComoponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



                var GameDifficultyComoponent = /** @class */ (function () {
                    function GameDifficultyComoponent(GameService) {
                        this.GameService = GameService;
                    }
                    GameDifficultyComoponent.prototype.onSelectDifficulty = function (difficulty) {
                        this.GameService.startTheGame(difficulty);
                    };
                    GameDifficultyComoponent.ctorParameters = function () {
                        return [{
                            type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
                        }];
                    };
                    GameDifficultyComoponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "game-diff",
                            template: __webpack_require__( /*! raw-loader!./game-difficulty.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-field/game-difficulty/game-difficulty.component.html"),
                            styles: [__webpack_require__( /*! ./game-difficulty.component.css */ "./src/app/game-field/game-difficulty/game-difficulty.component.css")]
                        })
                    ], GameDifficultyComoponent);
                    return GameDifficultyComoponent;
                }());



                /***/
            }),

        /***/
        "./src/app/game-field/game-field.component.css":
            /*!*****************************************************!*\
              !*** ./src/app/game-field/game-field.component.css ***!
              \*****************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = "* {\n    box-sizing: border-box;\n}\n\n.wrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-width: 800px;\n    max-width: 2200px;\n}\n\n.game {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.field {\n    min-width: 550px;\n    min-height: 550px;\n    width: 37vw;\n    height: 37vw;\n}\n\n.easy {\n    display: grid;\n    grid-gap: 2px;\n    grid-template-columns: repeat(10, .1fr);\n}\n\n.medium {\n    display: grid;\n    grid-gap: 2px;\n    grid-template-columns: repeat(13, .1fr);\n}\n\n.hard {\n    display: grid;\n    grid-gap: 2px;\n    grid-template-columns: repeat(16, .1fr);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9nYW1lLWZpZWxkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUNBQXVDO0FBQzNDIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS1maWVsZC9nYW1lLWZpZWxkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ud3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi13aWR0aDogODAwcHg7XG4gICAgbWF4LXdpZHRoOiAyMjAwcHg7XG59XG5cbi5nYW1lIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWVsZCB7XG4gICAgbWluLXdpZHRoOiA1NTBweDtcbiAgICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgICB3aWR0aDogMzd2dztcbiAgICBoZWlnaHQ6IDM3dnc7XG59XG5cbi5lYXN5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIC4xZnIpO1xufVxuXG4ubWVkaXVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAycHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTMsIC4xZnIpO1xufVxuXG4uaGFyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMnB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDE2LCAuMWZyKTtcbn0iXX0= */"

                /***/
            }),

        /***/
        "./src/app/game-field/game-filed.component.ts":
            /*!****************************************************!*\
              !*** ./src/app/game-field/game-filed.component.ts ***!
              \****************************************************/
            /*! exports provided: GameFiled */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "GameFiled", function () {
                    return GameFiled;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/game.service */ "./src/app/shared/game.service.ts");



                var GameFiled = /** @class */ (function () {
                    function GameFiled(GameService) {
                        this.GameService = GameService;
                    }
                    GameFiled.ctorParameters = function () {
                        return [{
                            type: _shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
                        }];
                    };
                    GameFiled = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "app-game-filed",
                            template: __webpack_require__( /*! raw-loader!./game-field.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-field/game-field.component.html"),
                            styles: [__webpack_require__( /*! ./game-field.component.css */ "./src/app/game-field/game-field.component.css")]
                        })
                    ], GameFiled);
                    return GameFiled;
                }());



                /***/
            }),

        /***/
        "./src/app/game-field/scores/scores.component.css":
            /*!********************************************************!*\
              !*** ./src/app/game-field/scores/scores.component.css ***!
              \********************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".scope {\n    display: block;\n    justify-content: center;\n    align-items: center;\n    height: 5%;\n    width: 100%;\n    margin-bottom: 0.6em;\n}\n\n.scope h1 {\n    font-family: 'Lilita One', cursive;\n    font-size: 250%;\n    color: orange;\n    margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9zY29yZXMvc2NvcmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2dhbWUtZmllbGQvc2NvcmVzL3Njb3Jlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3BlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42ZW07XG59XG5cbi5zY29wZSBoMSB7XG4gICAgZm9udC1mYW1pbHk6ICdMaWxpdGEgT25lJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDI1MCU7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBtYXJnaW46IDA7XG59Il19 */"

                /***/
            }),

        /***/
        "./src/app/game-field/scores/scores.component.ts":
            /*!*******************************************************!*\
              !*** ./src/app/game-field/scores/scores.component.ts ***!
              \*******************************************************/
            /*! exports provided: ScoresComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ScoresComponent", function () {
                    return ScoresComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");



                var ScoresComponent = /** @class */ (function () {
                    function ScoresComponent(GameService) {
                        this.GameService = GameService;
                        this.text = this.GameService.isEnd.toString();
                    }
                    ScoresComponent.ctorParameters = function () {
                        return [{
                            type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]
                        }];
                    };
                    ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "game-scores",
                            template: __webpack_require__( /*! raw-loader!./scores.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-field/scores/scores.component.html"),
                            styles: [__webpack_require__( /*! ./scores.component.css */ "./src/app/game-field/scores/scores.component.css")]
                        })
                    ], ScoresComponent);
                    return ScoresComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/game-field/stars/stars.component.css":
            /*!******************************************************!*\
              !*** ./src/app/game-field/stars/stars.component.css ***!
              \******************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ":host {\n    display: flex;\n    flex-direction: column;\n}\n\n.stars {\n    display: flex;\n    margin: 0;\n    justify-content: center;\n    padding: 10px 0;\n}\n\n.star {\n    display: block;\n    width: 41px;\n    height: 41px;\n    -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n    background: rgb(185, 185, 185);\n    position: relative;\n}\n\n.star-bg {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    margin: auto;\n    height: 40px;\n    background: rgb(255, 187, 0);\n    transition: all ease 0.2s;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1maWVsZC9zdGFycy9zdGFycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrSEFBMEc7WUFBMUcsMEdBQTBHO0lBQzFHLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1QsTUFBTTtJQUNOLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHlCQUF5Qjs7QUFFN0IiLCJmaWxlIjoic3JjL2FwcC9nYW1lLWZpZWxkL3N0YXJzL3N0YXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3RhcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLnN0YXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MXB4O1xuICAgIGhlaWdodDogNDFweDtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCA5OCUgMzUlLCA2OCUgNTclLCA3OSUgOTElLCA1MCUgNzAlLCAyMSUgOTElLCAzMiUgNTclLCAyJSAzNSUsIDM5JSAzNSUpO1xuICAgIGJhY2tncm91bmQ6IHJnYigxODUsIDE4NSwgMTg1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zdGFyLWJnIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTg3LCAwKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xuXG59Il19 */"

                /***/
            }),

        /***/
        "./src/app/game-field/stars/stars.component.ts":
            /*!*****************************************************!*\
              !*** ./src/app/game-field/stars/stars.component.ts ***!
              \*****************************************************/
            /*! exports provided: StarsComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "StarsComponent", function () {
                    return StarsComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
                /* harmony import */
                var src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! src/app/shared/game.service */ "./src/app/shared/game.service.ts");




                var StarsComponent = /** @class */ (function () {
                    function StarsComponent(GameService) {
                        this.GameService = GameService;
                        this.maxSeconds = 30;
                        this.seconds = 30;
                    }
                    StarsComponent.prototype.ngOnInit = function () {
                        var _this = this;
                        switch (this.GameService.GAME_DIFFICULTY) {
                            case 10: {
                                this.maxSeconds = 40;
                                break;
                            }
                            case 13: {
                                this.maxSeconds = 80;
                                break;
                            }
                            case 16: {
                                this.maxSeconds = 130;
                                break;
                            }
                        }
                        this.seconds = this.maxSeconds;
                        this.stars = Array(this.count)
                            .fill(0)
                            .map(function (x, i) {
                                return ({
                                    width: 100
                                });
                            });
                        var timer = setInterval(function () {
                            _this.seconds--;
                            var partSize = _this.maxSeconds / _this.count;
                            var currentStarIndex = Math.ceil(_this.seconds / partSize) - 1;
                            _this.stars[currentStarIndex].width =
                                _this.seconds % partSize ?
                                ((_this.seconds % partSize) / partSize) * 100 :
                                100;
                            _this.GameService.scoreFactor = _this.seconds / partSize;
                            if (_this.seconds === 0) {
                                clearInterval(timer);
                            }
                            if (_this.GameService.isEnd) {
                                clearInterval(timer);
                            }
                        }, 1000);
                    };
                    StarsComponent.ctorParameters = function () {
                        return [{
                            type: src_app_shared_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]
                        }];
                    };
                    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
                    ], StarsComponent.prototype, "count", void 0);
                    StarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "app-stars",
                            template: __webpack_require__( /*! raw-loader!./stars.component.html */ "./node_modules/raw-loader/index.js!./src/app/game-field/stars/stars.component.html"),
                            animations: [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("endAnimation", [
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("end", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                        transform: "rotate(360deg)"
                                    })),
                                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("* => end", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("750ms"))
                                ])
                            ],
                            styles: [__webpack_require__( /*! ./stars.component.css */ "./src/app/game-field/stars/stars.component.css")]
                        })
                    ], StarsComponent);
                    return StarsComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/login-screen/login-screen.component.css":
            /*!*********************************************************!*\
              !*** ./src/app/login-screen/login-screen.component.css ***!
              \*********************************************************/
            /*! no static exports found */
            /***/
            (function (module, exports) {

                module.exports = ".authorization {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    justify-content: center;\n    align-items: center;\n}\n\ninput {\n    width: 25%;\n    min-width: 300px;\n    height: 40px;\n    border-radius: 20px;\n    padding-left: 15px;\n    padding-right: 15px;\n    border: none;\n    font-size: 100%;\n    outline: none;\n    text-align: center;\n    font-family: 'Roboto Slab', serif;\n}\n\ninput:focus {\n    box-shadow: 0 0 10px #cccccc;\n}\n\ninput::-webkit-input-placeholder {\n    opacity: 1;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput::-moz-placeholder {\n    opacity: 1;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:-moz-placeholder {\n    opacity: 1;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:-ms-input-placeholder {\n    opacity: 1;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:focus::-webkit-input-placeholder {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:focus::-moz-placeholder {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:focus:-moz-placeholder {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:focus:-ms-input-placeholder {\n    opacity: 0;\n    transition: opacity 0.3s ease;\n    font-style: italic;\n}\n\ninput:hover {\n    box-shadow: 0 0 10px #cccccc\n}\n\nbutton {\n    display: block;\n    width: 15%;\n    height: 30px;\n    margin: 10px auto;\n    margin-bottom: 10px;\n    border-radius: 20px;\n    font-size: 100%;\n    font-family: 'Roboto Slab', serif;\n    border: 2px solid #027271;\n    outline: none;\n    cursor: pointer;\n    transition: width .3s;\n}\n\nbutton:hover {\n    width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tc2NyZWVuL2xvZ2luLXNjcmVlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXNjcmVlbi9sb2dpbi1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRob3JpemF0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2VyaWY7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjY2NjO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuaW5wdXQ6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICNjY2NjY2Ncbn1cblxuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTUlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzZXJpZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDI3MjcxO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcztcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICB3aWR0aDogMjAlO1xufSJdfQ== */"

                /***/
            }),

        /***/
        "./src/app/login-screen/login-screen.component.ts":
            /*!********************************************************!*\
              !*** ./src/app/login-screen/login-screen.component.ts ***!
              \********************************************************/
            /*! exports provided: LoginScreenComponent */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LoginScreenComponent", function () {
                    return LoginScreenComponent;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _shared_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../shared/login.service */ "./src/app/shared/login.service.ts");



                var LoginScreenComponent = /** @class */ (function () {
                    function LoginScreenComponent(LoginService) {
                        this.LoginService = LoginService;
                    }
                    /*////////////////////////////////////////////////////////////////////////
  /////// ТЗ:
  ///////  1. Нужно стилизовать компонент (стили приписывать в login-screen-component.css)
  ///////  2. Нужно сделать провеврку на то что длинна имени, введенного в поле будет больше 3 (код писать тут, в помеченном месте)
    ////////////////////////////////////////////////////////////////////////*/
                    LoginScreenComponent.prototype.onLogin = function (name) {
                        // ТУТ ДЕЛАТЬ ПРОВЕРКИ (на вход поступает строка, которую польщтватель вводит в поле ввода)
                        this.LoginService._login(name);
                    };
                    LoginScreenComponent.ctorParameters = function () {
                        return [{
                            type: _shared_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
                        }];
                    };
                    LoginScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                            selector: "app-login-screen",
                            template: __webpack_require__( /*! raw-loader!./login-screen.component.html */ "./node_modules/raw-loader/index.js!./src/app/login-screen/login-screen.component.html"),
                            styles: [__webpack_require__( /*! ./login-screen.component.css */ "./src/app/login-screen/login-screen.component.css")]
                        })
                    ], LoginScreenComponent);
                    return LoginScreenComponent;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/chat.service.ts":
            /*!****************************************!*\
              !*** ./src/app/shared/chat.service.ts ***!
              \****************************************/
            /*! exports provided: ChatService */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "ChatService", function () {
                    return ChatService;
                });
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

                var ChatService = /** @class */ (function () {
                    function ChatService(http) {
                        this.http = http;
                        this.arrayOfMesages = [];
                        this.filtered = false;
                    }
                    ChatService.prototype.getCurrentTime = function (number) {
                        var date = new Date(number);
                        var minutes = date.getMinutes().toString().length === 1 ?
                            "0" + date.getMinutes().toString() :
                            date.getMinutes();
                        var hours = date.getHours().toString().length === 1 ?
                            "0" + date.getHours().toString() :
                            date.getHours();
                        return hours + ":" + minutes;
                    };
                    ChatService.prototype._createMessage = function (text) {
                        var _this = this;
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                            "Content-Type": "application/json"
                        });
                        this.http
                            .post("http://localhost:8080/api/messages", JSON.stringify({
                                text: text
                            }), {
                                headers: headers
                            })
                            .toPromise()
                            .then(function (data) {
                                _this.onGetMessages();
                            })
                            .catch(function (err) {
                                return alert("Невозможно отправить сообещние!");
                            });
                    };
                    ChatService.prototype.onGetMessages = function () {
                        var _this = this;
                        if (!this.filtered) {
                            this.http
                                .get("http://localhost:8080/api/messages")
                                .toPromise()
                                .then(function (array) {
                                    _this.mess = array;
                                    _this.mess = _this.mess.filter(function (el) {
                                        return el.game === "paintTheField";
                                    });
                                })
                                .catch(function (err) {
                                    return console.warn("Невозможно получить список сообщений! Авторизируйтесь!");
                                });
                        } else {
                            this.http
                                .get("http://localhost:8080/api/messages")
                                .toPromise()
                                .then(function (array) {
                                    _this.mess = array;
                                })
                                .catch(function (err) {
                                    return console.warn("Невозможно получить список сообщений! Авторизируйтесь!");
                                });
                        }
                    };
                    ChatService.prototype.inrevalMessage = function () {
                        var _this = this;
                        var timer = setInterval(function () {
                            _this.onGetMessages();
                        }, 1000);
                    };
                    ChatService.prototype.setLoginName = function (name) {
                        this.AUTHOR_NAME = name;
                    };
                    ChatService.ctorParameters = function () {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
                        }];
                    };
                    return ChatService;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/game.service.ts":
            /*!****************************************!*\
              !*** ./src/app/shared/game.service.ts ***!
              \****************************************/
            /*! exports provided: GameService */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "GameService", function () {
                    return GameService;
                });
                /* harmony import */
                var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! tslib */ "./node_modules/tslib/tslib.es6.js");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


                var GameService = /** @class */ (function () {
                    function GameService(http) {
                        this.http = http;
                        this.arrayOfCells = [];
                        this.ARRAY_OF_COLORS = [
                            "midnightblue",
                            "purple",
                            "crimson",
                            "mediumpurple",
                            "orange",
                            "blue"
                        ];
                        this._colors = {
                            10: 4,
                            13: 5,
                            16: 6
                        };
                        this.currentActive = 0;
                        this.isEnd = false;
                        this.scores = 0;
                        this.ACTIVE_ARRAY_OF_COLORS = [];
                    }
                    GameService.prototype.startTheGame = function (number) {
                        var _this = this;
                        this.scoreFactor = 3;
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                            "Content-Type": "application/json"
                        });
                        this.http
                            .post("http://localhost:8080/api/records", JSON.stringify({
                                game: "paintTheField"
                            }), {
                                headers: headers
                            })
                            .toPromise()
                            .then(function (response) {
                                _this.id = response;
                            })
                            .catch(function (err) {
                                return console.warn("ID игре не присовоено! Результат не будет сохранен!");
                            });
                        this.GAME_DIFFICULTY = number;
                        this._editActiveColorsArray();
                        this._initArray();
                    };
                    GameService.prototype.restartTheGame = function () {
                        this.GAME_DIFFICULTY = undefined;
                        this.isEnd = false;
                        this.ACTIVE_ARRAY_OF_COLORS = [];
                        this.currentActive = 0;
                        this.scores = 0;
                    };
                    GameService.prototype._checkForTheEnd = function () {
                        var _this = this;
                        for (var i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
                            if (this.arrayOfCells[i].active === false) {
                                this.isEnd = false;
                                return;
                            }
                        }
                        if (this.scoreFactor < 1) {
                            this.scoreFactor = 1;
                        }
                        this.scores = Math.ceil(this.scores * this.scoreFactor);
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                            "Content-Type": "application/json"
                        });
                        this.http
                            .patch("http://localhost:8080/api/records/" + this.id.id, JSON.stringify({
                                id: this.id,
                                score: this.scores
                            }), {
                                headers: headers
                            })
                            .subscribe(function (response) {
                                var e_1, _a;
                                _this.isEnd = true;
                                _this.scoreFactor = 3;
                                try {
                                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.arrayOfCells), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var cell = _c.value;
                                        cell.color = "gray";
                                    }
                                } catch (e_1_1) {
                                    e_1 = {
                                        error: e_1_1
                                    };
                                } finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    } finally {
                                        if (e_1) throw e_1.error;
                                    }
                                }
                            }, function (request) {
                                var e_2, _a;
                                alert("УПС! Сервер не хочет принять ваш результат.");
                                _this.isEnd = true;
                                _this.scoreFactor = 3;
                                try {
                                    for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](_this.arrayOfCells), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var cell = _c.value;
                                        cell.color = "gray";
                                    }
                                } catch (e_2_1) {
                                    e_2 = {
                                        error: e_2_1
                                    };
                                } finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    } finally {
                                        if (e_2) throw e_2.error;
                                    }
                                }
                            });
                        return;
                    };
                    GameService.prototype._editActiveColorsArray = function () {
                        if (this.ACTIVE_ARRAY_OF_COLORS.length !== 0) {
                            this.ACTIVE_ARRAY_OF_COLORS = [];
                        }
                        for (var i = 0; i < this._colors[this.GAME_DIFFICULTY]; i++) {
                            this.ACTIVE_ARRAY_OF_COLORS.push(this.ARRAY_OF_COLORS[i]);
                        }
                    };
                    GameService.prototype._createCell = function () {
                        return {
                            color: this.ARRAY_OF_COLORS[Math.floor(Math.random() * this._colors[this.GAME_DIFFICULTY])],
                            active: false
                        };
                    };
                    GameService.prototype._initArray = function () {
                        this.arrayOfCells = [];
                        for (var i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
                            this.arrayOfCells.push(this._createCell());
                        }
                        this.arrayOfCells[0].active = true;
                        this.arrayOfCells[0].color = undefined;
                        this._checkField();
                        this._checkForTheEnd();
                    };
                    GameService.prototype.changeColor = function (color) {
                        var e_3, _a;
                        var chek;
                        try {
                            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.arrayOfCells), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var cell = _c.value;
                                if (cell.active) {
                                    cell.color = color;
                                }
                            }
                        } catch (e_3_1) {
                            e_3 = {
                                error: e_3_1
                            };
                        } finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            } finally {
                                if (e_3) throw e_3.error;
                            }
                        }
                        do {
                            chek = this._checkField();
                        } while (chek === 0);
                        this._checkForTheEnd();
                    };
                    GameService.prototype._addScores = function (num) {
                        var addNum = 100;
                        for (var i = 0; i < num; i++) {
                            this.scores += addNum;
                            addNum += 100;
                        }
                    };
                    GameService.prototype._checkHowManyActive = function () {
                        var e_4, _a;
                        var count = 0;
                        try {
                            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.arrayOfCells), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var cell = _c.value;
                                if (cell.active) {
                                    count++;
                                }
                            }
                        } catch (e_4_1) {
                            e_4 = {
                                error: e_4_1
                            };
                        } finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            } finally {
                                if (e_4) throw e_4.error;
                            }
                        }
                        this._addScores(count - this.currentActive);
                        this.currentActive = count;
                    };
                    GameService.prototype._checkField = function () {
                        var count = 0;
                        for (var i = 0; i < this.GAME_DIFFICULTY * this.GAME_DIFFICULTY; i++) {
                            if (this.arrayOfCells[i].active) {
                                if (this.arrayOfCells[i + 1]) {
                                    if (this.arrayOfCells[i + 1].color === this.arrayOfCells[i].color &&
                                        Math.floor(i / this.GAME_DIFFICULTY) ===
                                        Math.floor((i + 1) / this.GAME_DIFFICULTY)) {
                                        this.arrayOfCells[i + 1].active = true;
                                        count++;
                                    }
                                }
                                if (this.arrayOfCells[i - 1]) {
                                    if (this.arrayOfCells[i - 1].color === this.arrayOfCells[i].color &&
                                        Math.floor(i / this.GAME_DIFFICULTY) ===
                                        Math.floor((i - 1) / this.GAME_DIFFICULTY)) {
                                        this.arrayOfCells[i - 1].active = true;
                                        count++;
                                    }
                                }
                                if (this.arrayOfCells[i].active) {
                                    if (this.arrayOfCells[i + this.GAME_DIFFICULTY]) {
                                        if (this.arrayOfCells[i + this.GAME_DIFFICULTY].color ===
                                            this.arrayOfCells[i].color) {
                                            this.arrayOfCells[i + this.GAME_DIFFICULTY].active = true;
                                            count++;
                                        }
                                    }
                                }
                                if (this.arrayOfCells[i - this.GAME_DIFFICULTY]) {
                                    if (this.arrayOfCells[i - this.GAME_DIFFICULTY].color ===
                                        this.arrayOfCells[i].color) {
                                        this.arrayOfCells[i - this.GAME_DIFFICULTY].active = true;
                                        count++;
                                    }
                                }
                            }
                        }
                        this._checkHowManyActive();
                        return count;
                    };
                    GameService.ctorParameters = function () {
                        return [{
                            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
                        }];
                    };
                    return GameService;
                }());



                /***/
            }),

        /***/
        "./src/app/shared/login.service.ts":
            /*!*****************************************!*\
              !*** ./src/app/shared/login.service.ts ***!
              \*****************************************/
            /*! exports provided: LoginService */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "LoginService", function () {
                    return LoginService;
                });
                /* harmony import */
                var _chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./chat.service */ "./src/app/shared/chat.service.ts");
                /* harmony import */
                var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


                var LoginService = /** @class */ (function () {
                    function LoginService(ChatService, http) {
                        this.ChatService = ChatService;
                        this.http = http;
                        this.isLogged = false;
                    }
                    LoginService.prototype._login = function (name) {
                        var _this = this;
                        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                            "Content-Type": "application/json"
                        });
                        this.http
                            .post("http://localhost:8080/api/users", JSON.stringify({
                                name: name
                            }), {
                                headers: headers
                            })
                            .toPromise()
                            .then(function (response) {
                                _this.isLogged = true;
                                _this.ChatService.inrevalMessage();
                            }, function (request) {
                                if (!name) {
                                    alert("Введите имя!");
                                } else {
                                    alert("Ошибка входа. Нет соединения с интернетом!");
                                }
                            });
                    };
                    LoginService.prototype._logOut = function () {
                        var _this = this;
                        this.http.delete("http://localhost:8080/api/users").subscribe(function (_) {
                            _this.isLogged = false;
                        });
                    };
                    LoginService.ctorParameters = function () {
                        return [{
                                type: _chat_service__WEBPACK_IMPORTED_MODULE_0__["ChatService"]
                            },
                            {
                                type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
                            }
                        ];
                    };
                    return LoginService;
                }());



                /***/
            }),

        /***/
        "./src/environments/environment.ts":
            /*!*****************************************!*\
              !*** ./src/environments/environment.ts ***!
              \*****************************************/
            /*! exports provided: environment */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "environment", function () {
                    return environment;
                });
                // This file can be replaced during build by using the `fileReplacements` array.
                // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
                // The list of file replacements can be found in `angular.json`.
                var environment = {
                    production: false
                };
                /*
                 * For easier debugging in development mode, you can import the following file
                 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
                 *
                 * This import should be commented out in production mode because it will have a negative impact
                 * on performance if an error is thrown.
                 */
                // import 'zone.js/dist/zone-error';  // Included with Angular CLI.


                /***/
            }),

        /***/
        "./src/main.ts":
            /*!*********************!*\
              !*** ./src/main.ts ***!
              \*********************/
            /*! no exports provided */
            /***/
            (function (module, __webpack_exports__, __webpack_require__) {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */
                var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
                /* harmony import */
                var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
                /* harmony import */
                var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./app/app.module */ "./src/app/app.module.ts");
                /* harmony import */
                var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./environments/environment */ "./src/environments/environment.ts");




                if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
                    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
                }
                Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
                    .catch(function (err) {
                        return console.error(err);
                    });


                /***/
            }),

        /***/
        0:
            /*!***************************!*\
              !*** multi ./src/main.ts ***!
              \***************************/
            /*! no static exports found */
            /***/
            (function (module, exports, __webpack_require__) {

                module.exports = __webpack_require__( /*! /Users/roman/Desktop/tenzor-project/paintTheField/src/main.ts */ "./src/main.ts");


                /***/
            })

    },
    [
        [0, "runtime", "vendor"]
    ]
]);
//# sourceMappingURL=main-es5.js.map