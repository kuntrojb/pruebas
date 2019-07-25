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
    ], User.prototype, "idPersona", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "nombre", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "apellido", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "age", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "idTipoDocumento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], User.prototype, "numeroDocumento", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmFncmFudC9Fc2NyaXRvcmlvL3BydWViYXMvY2xhc2VfNF9vcm0vUEVJX09STS9zcmMvZW50aXR5L3BlcnNvbmEudHMiLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvRXNjcml0b3Jpby9wcnVlYmFzL2NsYXNlXzRfb3JtL1BFSV9PUk0vc3JjL2VudGl0eS9wZXJzb25hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStEO0FBSS9EO0lBQUE7SUFvQkEsQ0FBQztJQWpCRztRQURDLGdDQUFzQixFQUFFOzsyQ0FDUDtJQUdsQjtRQURDLGdCQUFNLEVBQUU7O3dDQUNNO0lBR2xCO1FBREksZ0JBQU0sRUFBRTs7MENBQ0s7SUFJZDtRQURDLGdCQUFNLEVBQUU7O3FDQUNHO0lBR1o7UUFEQyxnQkFBTSxFQUFFOztpREFDZTtJQUd4QjtRQURDLGdCQUFNLEVBQUU7O2lEQUNlO0lBbkJmLElBQUk7UUFEaEIsZ0JBQU0sRUFBRTtPQUNJLElBQUksQ0FvQmhCO0lBQUQsV0FBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbn0gZnJvbSBcInR5cGVvcm1cIjtcblxuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBVc2VyIHtcblxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgICBpZFBlcnNvbmE6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIG5vbWJyZTogc3RyaW5nO1xuXG4gICAgQENvbHVtbigpXG5cdGFwZWxsaWRvOiBzdHJpbmc7XG4gICAgXG5cbiAgICBAQ29sdW1uKClcbiAgICBhZ2U6IG51bWJlcjtcblxuICAgIEBDb2x1bW4oKVxuICAgIGlkVGlwb0RvY3VtZW50bzogbnVtYmVyO1xuXG4gICAgQENvbHVtbigpXG4gICAgbnVtZXJvRG9jdW1lbnRvOiBudW1iZXI7XG59XG4iXX0=