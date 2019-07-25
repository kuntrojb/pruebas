"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var telefono_1 = require("./entity/telefono");
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var telefono;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Inserting a new user into the database...");
                telefono = new telefono_1.Telefono();
                telefono.idPersona = 4;
                telefono.numero = 1123;
                return [4 /*yield*/, connection.manager.save(telefono)];
            case 1:
                _a.sent();
                console.log("Saved a new user with id: " + telefono.idTelefono);
                return [2 /*return*/];
        }
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmFncmFudC9Fc2NyaXRvcmlvL3BydWViYXMvY2xhc2VfNF9vcm0vUEVJX09STS9zcmMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvRXNjcml0b3Jpby9wcnVlYmFzL2NsYXNlXzRfb3JtL1BFSV9PUk0vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXNCc0M7O0FBdEJ0Qyw0QkFBMEI7QUFDMUIsbUNBQTJDO0FBRTNDLDhDQUE2QztBQUs3QywwQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFNLFVBQVU7Ozs7O2dCQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7Z0JBRW5ELFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztnQkFFaEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUd2QixxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQTs7Z0JBQXZDLFNBQXVDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7O0tBR25FLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcInR5cGVvcm1cIjtcblxuaW1wb3J0IHsgVGVsZWZvbm8gfSBmcm9tIFwiLi9lbnRpdHkvdGVsZWZvbm9cIjtcblxuXG5cblxuY3JlYXRlQ29ubmVjdGlvbigpLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7XG5cbiAgICBjb25zb2xlLmxvZyhcIkluc2VydGluZyBhIG5ldyB1c2VyIGludG8gdGhlIGRhdGFiYXNlLi4uXCIpO1xuICAgIFxuICAgIGNvbnN0IHRlbGVmb25vID0gbmV3IFRlbGVmb25vKCk7XG5cbiAgICB0ZWxlZm9uby5pZFBlcnNvbmEgPSA0O1xuICAgIHRlbGVmb25vLm51bWVybyA9IDExMjM7XG5cblxuICAgIGF3YWl0IGNvbm5lY3Rpb24ubWFuYWdlci5zYXZlKHRlbGVmb25vKTtcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIGEgbmV3IHVzZXIgd2l0aCBpZDogXCIgKyB0ZWxlZm9uby5pZFRlbGVmb25vKTtcblxuXG59KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpOyJdfQ==