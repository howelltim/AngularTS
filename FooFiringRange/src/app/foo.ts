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
}

//Console app like c#
let myFirstFoo = new Foo("Tim");

myFirstFoo.fire();
