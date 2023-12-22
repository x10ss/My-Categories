"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ConverterPipe = /** @class */ (function () {
    function ConverterPipe() {
    }
    ConverterPipe.prototype.transform = function (array, id, parentId, rootValue) {
        if (id === void 0) { id = "id"; }
        if (parentId === void 0) { parentId = "parentId"; }
        if (rootValue === void 0) { rootValue = "r"; }
        return this.filterNodes(array, id, parentId, rootValue);
    };
    ConverterPipe.prototype.filterNodes = function (array, id, parentId, parentValue) {
        var _this = this;
        return array.filter(function (node) {
            return node[parentId] === parentValue;
        }).map(function (node) {
            node["items"] = _this.filterNodes(array, id, parentId, node[id]);
            return node;
        });
    };
    ConverterPipe = __decorate([
        core_1.Pipe({ name: 'converter' })
    ], ConverterPipe);
    return ConverterPipe;
}());
exports.ConverterPipe = ConverterPipe;
//# sourceMappingURL=converter.pipe.js.map