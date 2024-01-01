

//! explain easy typescript keywords like exntends, implements, readonly, private, public, protected, static, keyof , typeof, in ,

//* 1. extends / example

class Parent {
    // ...
}

class Child extends Parent {
    // ...
}


//* 2. implements / example

interface IParent {
    // ...
}

class ParentImpl implements IParent {
    // ...
}

//* 3. readonly / example

class ParentReadOnly {
    public readonly name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//* 4. private / example

class ParentPrivate {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//* 5. public / example

class ParentPublic {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//* 6. protected / example

class ParentProtected {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
}

//* 7. static / example

class ParentStatic {
    //@ts-ignore
    static name: string;
    constructor(name: string) {
        ParentStatic.name = name;
    }
}

//* 8. keyof / example

interface IParentKeyOf {
    name: string;
    age: number;
}

type ParentKeyOf = keyof IParentKeyOf; // 'name' | 'age'

const nom: ParentKeyOf = 'name';


//* 9. typeof / example

const nom2: typeof nom = 'name';


//* 10. in / example

type ParentIn = 'name' | 'age';

const nom3: ParentIn = 'name';