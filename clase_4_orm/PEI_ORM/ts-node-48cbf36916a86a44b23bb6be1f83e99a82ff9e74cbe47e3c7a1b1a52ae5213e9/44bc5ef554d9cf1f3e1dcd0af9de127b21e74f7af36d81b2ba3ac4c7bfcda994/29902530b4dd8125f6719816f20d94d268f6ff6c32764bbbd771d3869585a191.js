"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "firstName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "lastName", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmFncmFudC9Fc2NyaXRvcmlvL3BydWViYXMvY2xhc2VfNF9vcm0vUEVJX09STS9zcmMvZW50aXR5L1VzZXIudHMiLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvRXNjcml0b3Jpby9wcnVlYmFzL2NsYXNlXzRfb3JtL1BFSV9PUk0vc3JjL2VudGl0eS9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStEO0FBRy9EO0lBQUE7SUFjQSxDQUFDO0lBWEc7UUFEQyxnQ0FBc0IsRUFBRTs7b0NBQ2Q7SUFHWDtRQURDLGdCQUFNLEVBQUU7OzJDQUNTO0lBR2xCO1FBREMsZ0JBQU0sRUFBRTs7MENBQ1E7SUFHakI7UUFEQyxnQkFBTSxFQUFFOztxQ0FDRztJQVpILElBQUk7UUFEaEIsZ0JBQU0sRUFBRTtPQUNJLElBQUksQ0FjaEI7SUFBRCxXQUFDO0NBQUEsQUFkRCxJQWNDO0FBZFksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQ29sdW1ufSBmcm9tIFwidHlwZW9ybVwiO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZDogbnVtYmVyO1xuXG4gICAgQENvbHVtbigpXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgICBAQ29sdW1uKClcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gICAgQENvbHVtbigpXG4gICAgYWdlOiBudW1iZXI7XG5cbn1cbiJdfQ==