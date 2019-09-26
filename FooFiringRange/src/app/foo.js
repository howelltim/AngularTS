"use strict";
exports.__esModule = true;
var Foo = /** @class */ (function () {
    /**
     *
     */
    function Foo(name, age) {
        if (age === void 0) { age = 22; }
        this.age = age;
        this.name = name;
    }
    //   fire the foo's weapon
    Foo.prototype.fire = function () {
        console.log("BANG");
    };
    Foo.prototype.YEET = function () {
        console.log("YA YEET");
    };
    Foo.prototype.fireWeapon = function (weapon) {
        console.log("Fire the " + weapon + "!");
    };
    Foo.prototype.fireWeaponToString = function (weapon) {
        return Foo.Weapons[weapon];
    };
    return Foo;
}());
exports.Foo = Foo;
(function (Foo) {
    var Weapons;
    (function (Weapons) {
        Weapons[Weapons["Cannon"] = 0] = "Cannon";
        Weapons[Weapons["RayGun"] = 1] = "RayGun";
        Weapons[Weapons["NailGun"] = 2] = "NailGun";
        Weapons[Weapons["NerfGun"] = 3] = "NerfGun";
    })(Weapons = Foo.Weapons || (Foo.Weapons = {}));
})(Foo = exports.Foo || (exports.Foo = {}));
exports.Foo = Foo;
//Console app like c#
var myFirstFoo = new Foo("Tim", 80);
myFirstFoo.fire();
var myHoeFoo = new Foo("Jessica", 12);
myHoeFoo.YEET();
console.log("My name is " + myFirstFoo.name + " and my age is " + myFirstFoo.age);
console.log("My name is " + myHoeFoo.name + " and my age is " + myHoeFoo.age);
myFirstFoo.fireWeapon(Foo.Weapons.NailGun);
myFirstFoo.fireWeapon(Foo.Weapons.RayGun);
console.log(myFirstFoo.fireWeaponToString(Foo.Weapons.NailGun));
console.log(myFirstFoo.fireWeaponToString(Foo.Weapons.RayGun));
