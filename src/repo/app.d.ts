type WithId = { id: string };

type Item = WithId & { name: string }; // Equivalente a type Item = {id: string; name: string;}

interface TypeORM<T extends WithId> {
    read: () => T[];
    readById: (id: T['id']) => T; // Errores => throw Error
    create: (data: Omit<T, 'id'>) => T;
    updateById: (id: T['id'], data: Omit<Partial<T>, 'id'>) => T;
    delete: (id: T['id']) => T;
}
