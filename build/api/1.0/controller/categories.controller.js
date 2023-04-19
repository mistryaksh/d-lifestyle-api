"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
var utils_1 = require("utils");
var model_1 = require("model");
var CategoriesController = /** @class */ (function () {
    function CategoriesController() {
        this.routes = [];
        this.routes.push({
            handler: this.getAllCategories,
            method: "GET",
            path: "/categories",
        });
        this.routes.push({
            handler: this.GetCategoriesById,
            method: "GET",
            path: "/categories/:id",
        });
        this.routes.push({
            handler: this.UpdateCategoriesById,
            method: "PUT",
            path: "/categories/:id",
        });
        this.routes.push({
            handler: this.AddNewCategories,
            method: "POST",
            path: "/categories",
        });
        this.routes.push({
            handler: this.DeleteCategoriesById,
            method: "DELETE",
            path: "/categories/:id",
        });
    }
    CategoriesController.prototype.getAllCategories = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.Category.find()];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, (0, utils_1.Ok)(res, data)];
                    case 2:
                        err_1 = _a.sent();
                        return [2 /*return*/, (0, utils_1.UnAuthorized)(res, err_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesController.prototype.GetCategoriesById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.Category.findById({ _id: req.params.id })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, (0, utils_1.Ok)(res, data)];
                    case 2:
                        err_2 = _a.sent();
                        return [2 /*return*/, (0, utils_1.UnAuthorized)(res, err_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesController.prototype.AddNewCategories = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var name_1, newCategory, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name_1 = req.body.name;
                        return [4 /*yield*/, new model_1.Category({ name: name_1 }).save()];
                    case 1:
                        newCategory = _a.sent();
                        return [2 /*return*/, (0, utils_1.Ok)(res, "".concat(newCategory.name, " is created!"))];
                    case 2:
                        err_3 = _a.sent();
                        return [2 /*return*/, (0, utils_1.UnAuthorized)(res, err_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesController.prototype.UpdateCategoriesById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var updateCategory, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.Category.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })];
                    case 1:
                        updateCategory = _a.sent();
                        return [2 /*return*/, (0, utils_1.Ok)(res, "".concat(updateCategory.name, " is updated!"))];
                    case 2:
                        err_4 = _a.sent();
                        return [2 /*return*/, (0, utils_1.UnAuthorized)(res, err_4)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CategoriesController.prototype.DeleteCategoriesById = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var data, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, model_1.Category.findByIdAndDelete({ _id: req.params.id })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, (0, utils_1.Ok)(res, "".concat(data, " is deleted!"))];
                    case 2:
                        err_5 = _a.sent();
                        return [2 /*return*/, (0, utils_1.UnAuthorized)(res, err_5)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CategoriesController;
}());
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map