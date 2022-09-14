const uid: number = 5;
const username: string = "John";
const isOnline: boolean = true;

let anyValue: any = "Aboba";
let notAnyValue = "Aboba";
anyValue = 123; // No error because of "any"
// Will cause an error
// notAnyValue = 123;

let ids: number[] = [1, 2, 3];
let usernames: string[] = ["Paul", "Max", "Victor"];
let anyData: any[] = [true, {}, 10, "Hello"];

ids.push(4);
console.log(ids); // [1, 2, 3, 4]

// Tuple
let person: [number, string, boolean] = [uid, username, isOnline];
// Order is important
// let person: [number, string, boolean] = [uid, isOnline, username];

// Tuple array
let workers: [number, string][];

workers = [
  [1, "John"],
  [2, "Paul"],
  [3, "Max"],
  [4, "Victor"]
];

// Union
let numOrString: string | number = 22;
numOrString = "22";

// Enums

enum Cities {
  Moscow = "Moscow",
  SaintPetersburg = "SaintPetersburg",
  Yaroslavl = "Yaroslavl",
  Krasnodar = "Krasnodar",
  Ufa = "Ufa"
}

let worker2City: [string, Cities][] = [
  ["Max", Cities.Krasnodar],
  ["Mark", Cities.Yaroslavl],
  ["Artem", Cities.SaintPetersburg],
  ["Kirill", Cities.Moscow]
];

console.log(worker2City[0], worker2City[3]);

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Alex"
};

// Type Assertion
let cId: any = 1;
// the same
let customerId1 = <number>cId;
let customerId2 = cId as number;

// Functions
function sum(x: number, y: number) {
  return x + y;
}

console.log(sum(11, 22)); // 33

function log(message: string | number): void {
  console.log(message);
  // Can't return any value because of void-type
  // return 1;
}

log("Hello void!");

// Interfaces

interface IUser {
  id: number;
  name: string;
}

interface IEmptyUser {}

const user1: IUser = {
  id: 2,
  name: "Alex"
};

// Empty interface also valid
const user2: IEmptyUser = {
  id: 3,
  name: "Brad"
};

// interface vs type

// Only type usage
type Point = number | string;
const p1: Point = 1;

interface IAdvancedUser {
  readonly id: number;
  name: string;
  age?: number;
}

const user4: IAdvancedUser = {
  id: 4,
  name: "Gregor"
};

// Can't change readonly properties
// user4.id = 5

interface NumFunc {
  // Specify args and return value
  (x: number, y: number): number;
}

const arrowAdd: NumFunc = (x: number, y: number): number => x + y;
const arrowSub: NumFunc = (x: number, y: number): number => x - y;

interface INums {
  x: number;
  y: number;
}

function doSum(nums: INums): number {
  return nums.x + nums.y;
}

console.log(doSum({ x: 100, y: 1 })); // 101

// Classes

class Customer {
  private id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}

const customerBrad = new Customer(1, "Brad");
console.log(customerBrad);
console.log(customerBrad.getId(), customerBrad.getName());

// Class + Interface

interface IPlayerClass {
  id: number;
  playerName: string;
  onConnect(): string;
}

class Player implements IPlayerClass {
  id: number;
  playerName: string;

  constructor(id: number, playerName: string) {
    this.id = id;
    this.playerName = playerName;
  }

  onConnect() {
    return `${this.playerName} has been connected!`;
  }
}

// Extending class

class ClassifiedPlayer extends Player {
  classified: string;

  constructor(id: number, playerName: string, classified: string) {
    super(id, playerName);
    this.classified = classified;
  }
}

const classifiedPlayer1 = new ClassifiedPlayer(12, "Aboba", "Warrior");
console.log(classifiedPlayer1);
console.log(classifiedPlayer1.onConnect());

// Generics

function getArray(items: any[]): any[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["a", "b", "c", "d"]);

function getTypedArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let typedNumArray = getTypedArray<number>([1, 2, 3, 4]);
let typedStringArray = getTypedArray<string>(["aa", "bb", "cc", "qq"]);
// let erroredTypedArray = getTypedArray<number>(["1", 2, 3, false]);
