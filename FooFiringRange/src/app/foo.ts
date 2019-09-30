export class Foo {
  name: string;
  /**
   *
   */
  constructor(name: string, public age: number = 22) {
    this.name = name;
  }

  //   fire the foo's weapon
  fire() {
    console.log("BANG");
  }
  YEET() {
    console.log("YA YEET");
  }
  fireWeapon(weapon: Foo.Weapons): void {
    console.log(`Fire the ${weapon}!`);
  }
  fireWeaponToString(weapon: Foo.Weapons): string {
    return Foo.Weapons[weapon];
  }
}
export namespace Foo {
  export enum Weapons {
    Cannon,
    RayGun,
    NailGun,
    NerfGun
  }
}

//Console app like c#
let myFirstFoo = new Foo("Tim", 80);
myFirstFoo.fire();

let myLoveFoo = new Foo("Jessica", 12);
myLoveFoo.YEET();

console.log(`My name is ${myFirstFoo.name} and my age is ${myFirstFoo.age}`);
console.log(`My name is ${myLoveFoo.name} and my age is ${myLoveFoo.age}`);

myFirstFoo.fireWeapon(Foo.Weapons.NailGun);
myFirstFoo.fireWeapon(Foo.Weapons.RayGun);

console.log(myFirstFoo.fireWeaponToString(Foo.Weapons.NailGun));
console.log(myFirstFoo.fireWeaponToString(Foo.Weapons.RayGun));
