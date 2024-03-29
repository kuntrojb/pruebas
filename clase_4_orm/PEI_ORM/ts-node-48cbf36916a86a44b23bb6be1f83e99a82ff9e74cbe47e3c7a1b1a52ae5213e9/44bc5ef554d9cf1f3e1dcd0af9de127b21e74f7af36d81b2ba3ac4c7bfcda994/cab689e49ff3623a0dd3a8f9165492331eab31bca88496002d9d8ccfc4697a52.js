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
// createConnection().then(async connection => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);
//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);
//     console.log("Here you can setup and run express/koa/any other framework.");
// }).catch(error => console.log(error));
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var telefono;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Inserting a new user into the database...");
                telefono = new telefono_1.Telefono();
                telefono.idPersona = 4;
                telefono.numero = 123123;
                return [4 /*yield*/, connection.manager.save(telefono)];
            case 1:
                _a.sent();
                console.log("Saved a new user with id: " + telefono.idTelefono);
                return [2 /*return*/];
        }
    });
}); }).catch(function (error) { return console.log(error); });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvdmFncmFudC9Fc2NyaXRvcmlvL3BydWViYXMvY2xhc2VfNF9vcm0vUEVJX09STS9zcmMvaW5kZXgudHMiLCJzb3VyY2VzIjpbIi9ob21lL3ZhZ3JhbnQvRXNjcml0b3Jpby9wcnVlYmFzL2NsYXNlXzRfb3JtL1BFSV9PUk0vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQXFDc0M7O0FBckN0Qyw0QkFBMEI7QUFDMUIsbUNBQXlDO0FBRXpDLDhDQUEyQztBQUUzQyxnREFBZ0Q7QUFFaEQsZ0VBQWdFO0FBQ2hFLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLHFCQUFxQjtBQUNyQiwyQ0FBMkM7QUFDM0MsMkRBQTJEO0FBRTNELHlEQUF5RDtBQUN6RCx5REFBeUQ7QUFDekQsNENBQTRDO0FBRTVDLGtGQUFrRjtBQUVsRix5Q0FBeUM7QUFHekMsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBTSxVQUFVOzs7OztnQkFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO2dCQUNuRCxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7Z0JBRWhDLFFBQVEsQ0FBQyxTQUFTLEdBQUMsQ0FBQyxDQUFDO2dCQUNyQixRQUFRLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQztnQkFHdkIscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7O2dCQUF2QyxTQUF1QyxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7OztLQUduRSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHtjcmVhdGVDb25uZWN0aW9ufSBmcm9tIFwidHlwZW9ybVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi9lbnRpdHkvVXNlclwiO1xuaW1wb3J0IHtUZWxlZm9ub30gZnJvbSBcIi4vZW50aXR5L3RlbGVmb25vXCI7XG5cbi8vIGNyZWF0ZUNvbm5lY3Rpb24oKS50aGVuKGFzeW5jIGNvbm5lY3Rpb24gPT4ge1xuXG4vLyAgICAgY29uc29sZS5sb2coXCJJbnNlcnRpbmcgYSBuZXcgdXNlciBpbnRvIHRoZSBkYXRhYmFzZS4uLlwiKTtcbi8vICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoKTtcbi8vICAgICB1c2VyLmZpcnN0TmFtZSA9IFwiVGltYmVyXCI7XG4vLyAgICAgdXNlci5sYXN0TmFtZSA9IFwiU2F3XCI7XG4vLyAgICAgdXNlci5hZ2UgPSAyNTtcbi8vICAgICBhd2FpdCBjb25uZWN0aW9uLm1hbmFnZXIuc2F2ZSh1c2VyKTtcbi8vICAgICBjb25zb2xlLmxvZyhcIlNhdmVkIGEgbmV3IHVzZXIgd2l0aCBpZDogXCIgKyB1c2VyLmlkKTtcblxuLy8gICAgIGNvbnNvbGUubG9nKFwiTG9hZGluZyB1c2VycyBmcm9tIHRoZSBkYXRhYmFzZS4uLlwiKTtcbi8vICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGNvbm5lY3Rpb24ubWFuYWdlci5maW5kKFVzZXIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHVzZXJzOiBcIiwgdXNlcnMpO1xuXG4vLyAgICAgY29uc29sZS5sb2coXCJIZXJlIHlvdSBjYW4gc2V0dXAgYW5kIHJ1biBleHByZXNzL2tvYS9hbnkgb3RoZXIgZnJhbWV3b3JrLlwiKTtcblxuLy8gfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcblxuXG5jcmVhdGVDb25uZWN0aW9uKCkudGhlbihhc3luYyBjb25uZWN0aW9uID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwiSW5zZXJ0aW5nIGEgbmV3IHVzZXIgaW50byB0aGUgZGF0YWJhc2UuLi5cIik7XG4gICAgY29uc3QgdGVsZWZvbm8gPSBuZXcgVGVsZWZvbm8oKTtcblxuICAgIHRlbGVmb25vLmlkUGVyc29uYT00O1xuICAgIHRlbGVmb25vLm51bWVybz0xMjMxMjM7XG5cbiAgICBcbiAgICBhd2FpdCBjb25uZWN0aW9uLm1hbmFnZXIuc2F2ZSh0ZWxlZm9ubyk7XG4gICAgY29uc29sZS5sb2coXCJTYXZlZCBhIG5ldyB1c2VyIHdpdGggaWQ6IFwiICsgdGVsZWZvbm8uaWRUZWxlZm9ubyk7XG5cblxufSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTsiXX0=