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
var Telefono = /** @class */ (function () {
    function Telefono() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Telefono.prototype, "idTelefono", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Telefono.prototype, "idPersona", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Telefono.prototype, "numero", void 0);
    Telefono = __decorate([
        typeorm_1.Entity()
    ], Telefono);
    return Telefono;
}());
exports.Telefono = Telefono;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmFncmFudC9Fc2NyaXRvcmlvL3BydWViYXMvY2xhc2VfNF9vcm0vUEVJX09STS9zcmMvZW50aXR5L3RlbGVmb25vLnRzIiwic291cmNlcyI6WyIvaG9tZS92YWdyYW50L0VzY3JpdG9yaW8vcHJ1ZWJhcy9jbGFzZV80X29ybS9QRUlfT1JNL3NyYy9lbnRpdHkvdGVsZWZvbm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBK0Q7QUFJL0Q7SUFBQTtJQU9BLENBQUM7SUFMRztRQURDLGdDQUFzQixFQUFFOztnREFDUDtJQUVsQjtRQURBLGdCQUFNLEVBQUU7OytDQUNTO0lBRWpCO1FBREEsZ0JBQU0sRUFBRTs7NENBQ007SUFOTCxRQUFRO1FBRHBCLGdCQUFNLEVBQUU7T0FDSSxRQUFRLENBT3BCO0lBQUQsZUFBQztDQUFBLEFBUEQsSUFPQztBQVBZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbn0gZnJvbSBcInR5cGVvcm1cIjtcblxuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBUZWxlZm9ub3tcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gICAgaWRUZWxlZm9ubzpudW1iZXI7XG4gICBAQ29sdW1uKCkgXG4gICAgaWRQZXJzb25hOm51bWJlcjtcbiAgIEBDb2x1bW4oKSBcbiAgICBudW1lcm86bnVtYmVyO1xufSJdfQ==