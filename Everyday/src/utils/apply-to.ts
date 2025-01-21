type MethodParams<
    Class extends abstract new (...args: any) => any,
    Instance = InstanceType<Class>,
> = {
    [K in keyof Instance]: Instance[K] extends (...args: any[]) => any
        ? Parameters<Instance[K]>
        : never;
}[keyof Instance];

type MethodReturns<
    Class extends abstract new (...args: any) => any,
    Instance = InstanceType<Class>,
> = {
    [K in keyof Instance]: Instance[K] extends (...args: any[]) => any
        ? ReturnType<Instance[K]>
        : never;
}[keyof Instance];

/**
 * @example
 * ```ts
 * applyTo<"MinStack", typeof MinStack>(
 *     MinStack,
 *     ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"],
 *     [[], [-2], [0], [-3], [], [], [], []],
 * ),
 * ```
 */
export function applyTo<ClassName extends string, Class extends new (...args: any) => any>(
    ConstructClass: Class,
    actions: (keyof InstanceType<Class> | ClassName)[],
    paramsList: (MethodParams<Class> | [])[],
): (MethodReturns<Class> | [])[] {
    const instance: InstanceType<Class> = new ConstructClass();

    const results: (MethodReturns<Class> | [])[] = [];
    actions.forEach((action, index) => {
        if (action === (ConstructClass.name as ClassName)) {
            results.push([]);
        } else {
            const result: MethodReturns<Class> = instance[action](...paramsList[index]);
            results.push(result);
        }
    });

    return results;
}
