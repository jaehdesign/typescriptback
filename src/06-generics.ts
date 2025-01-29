/*eslint-disable */

{
    // Generics

    type User = {
        name: string;
        age: number;
    };

    function identity<T>(value: T): T[] {
        return [value];
    }

    let foo = 'Hola mundo';
    console.log(identity(foo));
    let n = 22;
    let r = identity(n);
    console.log(r);
    identity<User>({ name: 'Pepe', age: 22 });
}
{
    interface UserDTO {
        id: number;
        name: string;
        username: string;
        email: string;
        // address: Address;
        phone: string;
        website: string;
        company: Company;
    }

    interface Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    // interface Address {
    //     street: string;
    //     suite: string;
    //     city: string;
    //     zipcode: string;
    //     geo: Geo;
    // }

    // interface Geo {
    //     lat: string;
    //     lng: string;
    // }
    async function getData(): Promise<UserDTO[]> {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const r = await fetch(url);
        return r.json();
    }

    async function main() {
        const data = await getData();
        console.log(data[0]);
    }
}

{
}

{
    class Box<T> {
        content: T;

        constructor(content: T) {
            this.content = content;
        }

        getContent(): T {
            return this.content;
        }
    }

    const numberBox = new Box<number>(123);
    const stringBox = new Box<string>('Hello');

    console.log(numberBox.getContent()); // 123
    console.log(stringBox.getContent()); // Hello
}

// Generics with 2 types
{
    const makeTuple = <T, U>(a: T, b: U): [T, U] => [a, b];
    const tuple = makeTuple<string, number>('hello', 42);
    // ^? const tuple: [string, number]
    // const tuple: [string, number]
}
{
    type User = {
        name: string;
        age: number;
        job?: string;
    };
    type PartialUser = Partial<User>;
    type RequiredUser = Required<User>;
    type ReadonlyUser = Readonly<User>;
    type PickUser = Pick<User, 'name' | 'age'>;
    type OmitUser = Omit<User, 'job'>;

    const PartialUser: Partial<User> = { name: 'Pepe' };
}
