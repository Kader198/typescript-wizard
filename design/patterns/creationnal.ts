// ! Singleton
// ? Singleton Pattern: This pattern restricts the instantiation of a class to a single instance and provides a global point of access to it.
class Singleton {
    private static instance: Singleton;

    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const s1 = Singleton.getInstance();

// ! Factory
// ? Factory Pattern: This pattern provides a way to delegate the instantiation logic to child classes.
interface IShape {
    draw(): void;
}

class Circle implements IShape {
    draw(): void {
        console.log("Circle::draw()");
    }
}

class Rectangle implements IShape {
    draw(): void {
        console.log("Rectangle::draw()");
    }
}

//! Abstract Factory
//? Abstract Factory Pattern: This pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

abstract class AbstractFactory {
    abstract getShape(shapeType: string): IShape;
}

class ShapeFactory extends AbstractFactory {
    getShape(shapeType: string): IShape {
        if (shapeType === "CIRCLE") {
            return new Circle();
        } else if (shapeType === "RECTANGLE") {
            return new Rectangle();
        }
        //@ts-ignore
        return null;
    }
}

// ! Builder
// ? Builder Pattern: This pattern builds a complex object using simple objects and using a step by step approach.
class Car {
    private wheels: number;
    private color: string;

    constructor() { }

    public setWheels(wheels: number): void {
        this.wheels = wheels;
    }

    public setColor(color: string): void {
        this.color = color;
    }
}

class CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    public build(): Car {
        return this.car;
    }

    public setColor(color: string): CarBuilder {
        this.car.setColor(color);
        return this;
    }

    public setWheels(wheels: number): CarBuilder {
        this.car.setWheels(wheels);
        return this;
    }
}

// ! Prototype
// ? Prototype Pattern: This pattern is used to create a clone of an object.
class Employee {
    private name: string;
    private id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public getId(): number {
        return this.id;
    }

    public clone(): Employee {
        return new Employee(this.name, this.id);
    }
}

