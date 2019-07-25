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
var TipoDocumento = /** @class */ (function () {
    function TipoDocumento() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], TipoDocumento.prototype, "idTipoDocumento", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], TipoDocumento.prototype, "descripcion", void 0);
    TipoDocumento = __decorate([
        typeorm_1.Entity()
    ], TipoDocumento);
    return TipoDocumento;
}());
exports.TipoDocumento = TipoDocumento;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmFncmFudC9Fc2NyaXRvcmlvL3BydWViYXMvY2xhc2VfNF9vcm0vUEVJX09STS9zcmMvZW50aXR5L3RpcG9Eb2N1bWVudG8udHMiLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvRXNjcml0b3Jpby9wcnVlYmFzL2NsYXNlXzRfb3JtL1BFSV9PUk0vc3JjL2VudGl0eS90aXBvRG9jdW1lbnRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQStEO0FBRy9EO0lBQUE7SUFPQSxDQUFDO0lBSkc7UUFEQSxnQ0FBc0IsRUFBRTs7MERBQ0Q7SUFHdEI7UUFERCxnQkFBTSxFQUFFOztzREFDWTtJQU5YLGFBQWE7UUFEekIsZ0JBQU0sRUFBRTtPQUNJLGFBQWEsQ0FPekI7SUFBRCxvQkFBQztDQUFBLEFBUEQsSUFPQztBQVBZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbn0gZnJvbSBcInR5cGVvcm1cIjtcblxuQEVudGl0eSgpXG5leHBvcnQgY2xhc3MgVGlwb0RvY3VtZW50b3tcblxuICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKSBcbiAgICBpZFRpcG9Eb2N1bWVudG86bnVtYmVyO1xuICAgIFxuICAgQENvbHVtbigpIFxuICAgICBkZXNjcmlwY2lvbjpzdHJpbmc7XG59Il19