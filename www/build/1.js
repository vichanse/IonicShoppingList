webpackJsonp([1],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditShoppingItemPageModule", function() { return EditShoppingItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_shopping_item__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditShoppingItemPageModule = (function () {
    function EditShoppingItemPageModule() {
    }
    EditShoppingItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_shopping_item__["a" /* EditShoppingItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_shopping_item__["a" /* EditShoppingItemPage */]),
            ],
        })
    ], EditShoppingItemPageModule);
    return EditShoppingItemPageModule;
}());

//# sourceMappingURL=edit-shopping-item.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditShoppingItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditShoppingItemPage = (function () {
    function EditShoppingItemPage(navCtrl, navParams, shoppingListServie, toastService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.shoppingListServie = shoppingListServie;
        this.toastService = toastService;
    }
    EditShoppingItemPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    EditShoppingItemPage.prototype.saveItem = function (item) {
        var _this = this;
        this.shoppingListServie.editItem(item).then(function () {
            _this.toastService.show(item.name + " saved!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditShoppingItemPage.prototype.removeItem = function (item) {
        var _this = this;
        this.shoppingListServie.removeItem(item).then(function () {
            _this.toastService.show(item.name + " deleted!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditShoppingItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-shopping-item',template:/*ion-inline-start:"/Users/vichanse/Documents/training/IONIC/IonicShoppingList/src/pages/edit-shopping-item/edit-shopping-item.html"*/'\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>{{item?.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Name</ion-label>\n    <ion-input [(ngModel)]="item.name" placeholder="iPad Pro"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Quantity</ion-label>\n    <ion-input [(ngModel)]="item.quantity" type="number" placeholder="1"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Price</ion-label>\n    <ion-input [(ngModel)]="item.price" type="number" placeholder="700"></ion-input>\n  </ion-item>\n\n  <button ion-button block clear (click)="saveItem(item)">Save</button>\n  <button ion-button block clear color="danger" (click)="removeItem(item)">Delete</button>\n</ion-content>\n'/*ion-inline-end:"/Users/vichanse/Documents/training/IONIC/IonicShoppingList/src/pages/edit-shopping-item/edit-shopping-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_shopping_list_shopping_list_service__["a" /* ShoppingListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */]])
    ], EditShoppingItemPage);
    return EditShoppingItemPage;
}());

//# sourceMappingURL=edit-shopping-item.js.map

/***/ })

});
//# sourceMappingURL=1.js.map