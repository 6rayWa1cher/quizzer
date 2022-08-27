
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Form
 * 
 */
export type Form = {
  id: number
  name: string
  description: string
}

/**
 * Model FormField
 * 
 */
export type FormField = {
  id: number
  form_id: number
  name: string
  description: string
  type: string
}

/**
 * Model FormFieldOption
 * 
 */
export type FormFieldOption = {
  id: number
  form_field_id: number
}

/**
 * Model FormResponse
 * 
 */
export type FormResponse = {
  id: number
  form_id: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Forms
 * const forms = await prisma.form.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Forms
   * const forms = await prisma.form.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<GlobalReject>;

  /**
   * `prisma.formField`: Exposes CRUD operations for the **FormField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormFields
    * const formFields = await prisma.formField.findMany()
    * ```
    */
  get formField(): Prisma.FormFieldDelegate<GlobalReject>;

  /**
   * `prisma.formFieldOption`: Exposes CRUD operations for the **FormFieldOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormFieldOptions
    * const formFieldOptions = await prisma.formFieldOption.findMany()
    * ```
    */
  get formFieldOption(): Prisma.FormFieldOptionDelegate<GlobalReject>;

  /**
   * `prisma.formResponse`: Exposes CRUD operations for the **FormResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormResponses
    * const formResponses = await prisma.formResponse.findMany()
    * ```
    */
  get formResponse(): Prisma.FormResponseDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Form: 'Form',
    FormField: 'FormField',
    FormFieldOption: 'FormFieldOption',
    FormResponse: 'FormResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type FormCountOutputType
   */


  export type FormCountOutputType = {
    fields: number
    responses: number
  }

  export type FormCountOutputTypeSelect = {
    fields?: boolean
    responses?: boolean
  }

  export type FormCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FormCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FormCountOutputType
    : S extends undefined
    ? never
    : S extends FormCountOutputTypeArgs
    ?'include' extends U
    ? FormCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FormCountOutputType ? FormCountOutputType[P] : never
  } 
    : FormCountOutputType
  : FormCountOutputType




  // Custom InputTypes

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     * 
    **/
    select?: FormCountOutputTypeSelect | null
  }



  /**
   * Count Type FormFieldCountOutputType
   */


  export type FormFieldCountOutputType = {
    options: number
  }

  export type FormFieldCountOutputTypeSelect = {
    options?: boolean
  }

  export type FormFieldCountOutputTypeGetPayload<
    S extends boolean | null | undefined | FormFieldCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? FormFieldCountOutputType
    : S extends undefined
    ? never
    : S extends FormFieldCountOutputTypeArgs
    ?'include' extends U
    ? FormFieldCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof FormFieldCountOutputType ? FormFieldCountOutputType[P] : never
  } 
    : FormFieldCountOutputType
  : FormFieldCountOutputType




  // Custom InputTypes

  /**
   * FormFieldCountOutputType without action
   */
  export type FormFieldCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FormFieldCountOutputType
     * 
    **/
    select?: FormFieldCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Form
   */


  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormAvgAggregateOutputType = {
    id: number | null
  }

  export type FormSumAggregateOutputType = {
    id: number | null
  }

  export type FormMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type FormMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type FormAvgAggregateInputType = {
    id?: true
  }

  export type FormSumAggregateInputType = {
    id?: true
  }

  export type FormMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type FormAggregateArgs = {
    /**
     * Filter which Form to aggregate.
     * 
    **/
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     * 
    **/
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs = {
    where?: FormWhereInput
    orderBy?: Enumerable<FormOrderByWithAggregationInput>
    by: Array<FormScalarFieldEnum>
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _avg?: FormAvgAggregateInputType
    _sum?: FormSumAggregateInputType
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }


  export type FormGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: FormCountAggregateOutputType | null
    _avg: FormAvgAggregateOutputType | null
    _sum: FormSumAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    fields?: boolean | FormFieldFindManyArgs
    responses?: boolean | FormResponseFindManyArgs
    _count?: boolean | FormCountOutputTypeArgs
  }

  export type FormInclude = {
    fields?: boolean | FormFieldFindManyArgs
    responses?: boolean | FormResponseFindManyArgs
    _count?: boolean | FormCountOutputTypeArgs
  }

  export type FormGetPayload<
    S extends boolean | null | undefined | FormArgs,
    U = keyof S
      > = S extends true
        ? Form
    : S extends undefined
    ? never
    : S extends FormArgs | FormFindManyArgs
    ?'include' extends U
    ? Form  & {
    [P in TrueKeys<S['include']>]:
        P extends 'fields' ? Array < FormFieldGetPayload<S['include'][P]>>  :
        P extends 'responses' ? Array < FormResponseGetPayload<S['include'][P]>>  :
        P extends '_count' ? FormCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'fields' ? Array < FormFieldGetPayload<S['select'][P]>>  :
        P extends 'responses' ? Array < FormResponseGetPayload<S['select'][P]>>  :
        P extends '_count' ? FormCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Form ? Form[P] : never
  } 
    : Form
  : Form


  type FormCountArgs = Merge<
    Omit<FormFindManyArgs, 'select' | 'include'> & {
      select?: FormCountAggregateInputType | true
    }
  >

  export interface FormDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Form'> extends True ? CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>> : CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Form'> extends True ? CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>> : CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFindManyArgs>(
      args?: SelectSubset<T, FormFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Form>>, PrismaPromise<Array<FormGetPayload<T>>>>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
    **/
    create<T extends FormCreateArgs>(
      args: SelectSubset<T, FormCreateArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Create many Forms.
     *     @param {FormCreateManyArgs} args - Arguments to create many Forms.
     *     @example
     *     // Create many Forms
     *     const form = await prisma.form.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormCreateManyArgs>(
      args?: SelectSubset<T, FormCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
    **/
    delete<T extends FormDeleteArgs>(
      args: SelectSubset<T, FormDeleteArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormUpdateArgs>(
      args: SelectSubset<T, FormUpdateArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormDeleteManyArgs>(
      args?: SelectSubset<T, FormDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormUpdateManyArgs>(
      args: SelectSubset<T, FormUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
    **/
    upsert<T extends FormUpsertArgs>(
      args: SelectSubset<T, FormUpsertArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Find one Form that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FormFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Find the first Form that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FormFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FormClient<Form>, Prisma__FormClient<FormGetPayload<T>>>

    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    fields<T extends FormFieldFindManyArgs = {}>(args?: Subset<T, FormFieldFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FormField>>, PrismaPromise<Array<FormFieldGetPayload<T>>>>;

    responses<T extends FormResponseFindManyArgs = {}>(args?: Subset<T, FormResponseFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FormResponse>>, PrismaPromise<Array<FormResponseGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Form base type for findUnique actions
   */
  export type FormFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Filter, which Form to fetch.
     * 
    **/
    where: FormWhereUniqueInput
  }

  /**
   * Form: findUnique
   */
  export interface FormFindUniqueArgs extends FormFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Form base type for findFirst actions
   */
  export type FormFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Filter, which Form to fetch.
     * 
    **/
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     * 
    **/
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     * 
    **/
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     * 
    **/
    distinct?: Enumerable<FormScalarFieldEnum>
  }

  /**
   * Form: findFirst
   */
  export interface FormFindFirstArgs extends FormFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Form findMany
   */
  export type FormFindManyArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Filter, which Forms to fetch.
     * 
    **/
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     * 
    **/
    orderBy?: Enumerable<FormOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     * 
    **/
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FormScalarFieldEnum>
  }


  /**
   * Form create
   */
  export type FormCreateArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * The data needed to create a Form.
     * 
    **/
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }


  /**
   * Form createMany
   */
  export type FormCreateManyArgs = {
    /**
     * The data used to create many Forms.
     * 
    **/
    data: Enumerable<FormCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Form update
   */
  export type FormUpdateArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * The data needed to update a Form.
     * 
    **/
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     * 
    **/
    where: FormWhereUniqueInput
  }


  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs = {
    /**
     * The data used to update Forms.
     * 
    **/
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     * 
    **/
    where?: FormWhereInput
  }


  /**
   * Form upsert
   */
  export type FormUpsertArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * The filter to search for the Form to update in case it exists.
     * 
    **/
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     * 
    **/
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }


  /**
   * Form delete
   */
  export type FormDeleteArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
    /**
     * Filter which Form to delete.
     * 
    **/
    where: FormWhereUniqueInput
  }


  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs = {
    /**
     * Filter which Forms to delete
     * 
    **/
    where?: FormWhereInput
  }


  /**
   * Form: findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs = FormFindUniqueArgsBase
      

  /**
   * Form: findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs = FormFindFirstArgsBase
      

  /**
   * Form without action
   */
  export type FormArgs = {
    /**
     * Select specific fields to fetch from the Form
     * 
    **/
    select?: FormSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormInclude | null
  }



  /**
   * Model FormField
   */


  export type AggregateFormField = {
    _count: FormFieldCountAggregateOutputType | null
    _avg: FormFieldAvgAggregateOutputType | null
    _sum: FormFieldSumAggregateOutputType | null
    _min: FormFieldMinAggregateOutputType | null
    _max: FormFieldMaxAggregateOutputType | null
  }

  export type FormFieldAvgAggregateOutputType = {
    id: number | null
    form_id: number | null
  }

  export type FormFieldSumAggregateOutputType = {
    id: number | null
    form_id: number | null
  }

  export type FormFieldMinAggregateOutputType = {
    id: number | null
    form_id: number | null
    name: string | null
    description: string | null
    type: string | null
  }

  export type FormFieldMaxAggregateOutputType = {
    id: number | null
    form_id: number | null
    name: string | null
    description: string | null
    type: string | null
  }

  export type FormFieldCountAggregateOutputType = {
    id: number
    form_id: number
    name: number
    description: number
    type: number
    _all: number
  }


  export type FormFieldAvgAggregateInputType = {
    id?: true
    form_id?: true
  }

  export type FormFieldSumAggregateInputType = {
    id?: true
    form_id?: true
  }

  export type FormFieldMinAggregateInputType = {
    id?: true
    form_id?: true
    name?: true
    description?: true
    type?: true
  }

  export type FormFieldMaxAggregateInputType = {
    id?: true
    form_id?: true
    name?: true
    description?: true
    type?: true
  }

  export type FormFieldCountAggregateInputType = {
    id?: true
    form_id?: true
    name?: true
    description?: true
    type?: true
    _all?: true
  }

  export type FormFieldAggregateArgs = {
    /**
     * Filter which FormField to aggregate.
     * 
    **/
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     * 
    **/
    orderBy?: Enumerable<FormFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormFields
    **/
    _count?: true | FormFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormFieldMaxAggregateInputType
  }

  export type GetFormFieldAggregateType<T extends FormFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateFormField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormField[P]>
      : GetScalarType<T[P], AggregateFormField[P]>
  }




  export type FormFieldGroupByArgs = {
    where?: FormFieldWhereInput
    orderBy?: Enumerable<FormFieldOrderByWithAggregationInput>
    by: Array<FormFieldScalarFieldEnum>
    having?: FormFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormFieldCountAggregateInputType | true
    _avg?: FormFieldAvgAggregateInputType
    _sum?: FormFieldSumAggregateInputType
    _min?: FormFieldMinAggregateInputType
    _max?: FormFieldMaxAggregateInputType
  }


  export type FormFieldGroupByOutputType = {
    id: number
    form_id: number
    name: string
    description: string
    type: string
    _count: FormFieldCountAggregateOutputType | null
    _avg: FormFieldAvgAggregateOutputType | null
    _sum: FormFieldSumAggregateOutputType | null
    _min: FormFieldMinAggregateOutputType | null
    _max: FormFieldMaxAggregateOutputType | null
  }

  type GetFormFieldGroupByPayload<T extends FormFieldGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormFieldGroupByOutputType[P]>
            : GetScalarType<T[P], FormFieldGroupByOutputType[P]>
        }
      >
    >


  export type FormFieldSelect = {
    id?: boolean
    form?: boolean | FormArgs
    form_id?: boolean
    name?: boolean
    description?: boolean
    type?: boolean
    options?: boolean | FormFieldOptionFindManyArgs
    _count?: boolean | FormFieldCountOutputTypeArgs
  }

  export type FormFieldInclude = {
    form?: boolean | FormArgs
    options?: boolean | FormFieldOptionFindManyArgs
    _count?: boolean | FormFieldCountOutputTypeArgs
  }

  export type FormFieldGetPayload<
    S extends boolean | null | undefined | FormFieldArgs,
    U = keyof S
      > = S extends true
        ? FormField
    : S extends undefined
    ? never
    : S extends FormFieldArgs | FormFieldFindManyArgs
    ?'include' extends U
    ? FormField  & {
    [P in TrueKeys<S['include']>]:
        P extends 'form' ? FormGetPayload<S['include'][P]> :
        P extends 'options' ? Array < FormFieldOptionGetPayload<S['include'][P]>>  :
        P extends '_count' ? FormFieldCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'form' ? FormGetPayload<S['select'][P]> :
        P extends 'options' ? Array < FormFieldOptionGetPayload<S['select'][P]>>  :
        P extends '_count' ? FormFieldCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FormField ? FormField[P] : never
  } 
    : FormField
  : FormField


  type FormFieldCountArgs = Merge<
    Omit<FormFieldFindManyArgs, 'select' | 'include'> & {
      select?: FormFieldCountAggregateInputType | true
    }
  >

  export interface FormFieldDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FormField that matches the filter.
     * @param {FormFieldFindUniqueArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFieldFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormFieldFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FormField'> extends True ? CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>> : CheckSelect<T, Prisma__FormFieldClient<FormField | null >, Prisma__FormFieldClient<FormFieldGetPayload<T> | null >>

    /**
     * Find the first FormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindFirstArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFieldFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormFieldFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FormField'> extends True ? CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>> : CheckSelect<T, Prisma__FormFieldClient<FormField | null >, Prisma__FormFieldClient<FormFieldGetPayload<T> | null >>

    /**
     * Find zero or more FormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormFields
     * const formFields = await prisma.formField.findMany()
     * 
     * // Get first 10 FormFields
     * const formFields = await prisma.formField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formFieldWithIdOnly = await prisma.formField.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFieldFindManyArgs>(
      args?: SelectSubset<T, FormFieldFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FormField>>, PrismaPromise<Array<FormFieldGetPayload<T>>>>

    /**
     * Create a FormField.
     * @param {FormFieldCreateArgs} args - Arguments to create a FormField.
     * @example
     * // Create one FormField
     * const FormField = await prisma.formField.create({
     *   data: {
     *     // ... data to create a FormField
     *   }
     * })
     * 
    **/
    create<T extends FormFieldCreateArgs>(
      args: SelectSubset<T, FormFieldCreateArgs>
    ): CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>>

    /**
     * Create many FormFields.
     *     @param {FormFieldCreateManyArgs} args - Arguments to create many FormFields.
     *     @example
     *     // Create many FormFields
     *     const formField = await prisma.formField.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormFieldCreateManyArgs>(
      args?: SelectSubset<T, FormFieldCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FormField.
     * @param {FormFieldDeleteArgs} args - Arguments to delete one FormField.
     * @example
     * // Delete one FormField
     * const FormField = await prisma.formField.delete({
     *   where: {
     *     // ... filter to delete one FormField
     *   }
     * })
     * 
    **/
    delete<T extends FormFieldDeleteArgs>(
      args: SelectSubset<T, FormFieldDeleteArgs>
    ): CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>>

    /**
     * Update one FormField.
     * @param {FormFieldUpdateArgs} args - Arguments to update one FormField.
     * @example
     * // Update one FormField
     * const formField = await prisma.formField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormFieldUpdateArgs>(
      args: SelectSubset<T, FormFieldUpdateArgs>
    ): CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>>

    /**
     * Delete zero or more FormFields.
     * @param {FormFieldDeleteManyArgs} args - Arguments to filter FormFields to delete.
     * @example
     * // Delete a few FormFields
     * const { count } = await prisma.formField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormFieldDeleteManyArgs>(
      args?: SelectSubset<T, FormFieldDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormFields
     * const formField = await prisma.formField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormFieldUpdateManyArgs>(
      args: SelectSubset<T, FormFieldUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FormField.
     * @param {FormFieldUpsertArgs} args - Arguments to update or create a FormField.
     * @example
     * // Update or create a FormField
     * const formField = await prisma.formField.upsert({
     *   create: {
     *     // ... data to create a FormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormField we want to update
     *   }
     * })
    **/
    upsert<T extends FormFieldUpsertArgs>(
      args: SelectSubset<T, FormFieldUpsertArgs>
    ): CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>>

    /**
     * Find one FormField that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FormFieldFindUniqueOrThrowArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormFieldFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FormFieldFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>>

    /**
     * Find the first FormField that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindFirstOrThrowArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormFieldFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FormFieldFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FormFieldClient<FormField>, Prisma__FormFieldClient<FormFieldGetPayload<T>>>

    /**
     * Count the number of FormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldCountArgs} args - Arguments to filter FormFields to count.
     * @example
     * // Count the number of FormFields
     * const count = await prisma.formField.count({
     *   where: {
     *     // ... the filter for the FormFields we want to count
     *   }
     * })
    **/
    count<T extends FormFieldCountArgs>(
      args?: Subset<T, FormFieldCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormFieldAggregateArgs>(args: Subset<T, FormFieldAggregateArgs>): PrismaPromise<GetFormFieldAggregateType<T>>

    /**
     * Group by FormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormFieldGroupByArgs['orderBy'] }
        : { orderBy?: FormFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormFieldGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormFieldClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    form<T extends FormArgs = {}>(args?: Subset<T, FormArgs>): CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>;

    options<T extends FormFieldOptionFindManyArgs = {}>(args?: Subset<T, FormFieldOptionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<FormFieldOption>>, PrismaPromise<Array<FormFieldOptionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FormField base type for findUnique actions
   */
  export type FormFieldFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * Filter, which FormField to fetch.
     * 
    **/
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField: findUnique
   */
  export interface FormFieldFindUniqueArgs extends FormFieldFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FormField base type for findFirst actions
   */
  export type FormFieldFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * Filter, which FormField to fetch.
     * 
    **/
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     * 
    **/
    orderBy?: Enumerable<FormFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormFields.
     * 
    **/
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormFields.
     * 
    **/
    distinct?: Enumerable<FormFieldScalarFieldEnum>
  }

  /**
   * FormField: findFirst
   */
  export interface FormFieldFindFirstArgs extends FormFieldFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FormField findMany
   */
  export type FormFieldFindManyArgs = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * Filter, which FormFields to fetch.
     * 
    **/
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     * 
    **/
    orderBy?: Enumerable<FormFieldOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormFields.
     * 
    **/
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FormFieldScalarFieldEnum>
  }


  /**
   * FormField create
   */
  export type FormFieldCreateArgs = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * The data needed to create a FormField.
     * 
    **/
    data: XOR<FormFieldCreateInput, FormFieldUncheckedCreateInput>
  }


  /**
   * FormField createMany
   */
  export type FormFieldCreateManyArgs = {
    /**
     * The data used to create many FormFields.
     * 
    **/
    data: Enumerable<FormFieldCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FormField update
   */
  export type FormFieldUpdateArgs = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * The data needed to update a FormField.
     * 
    **/
    data: XOR<FormFieldUpdateInput, FormFieldUncheckedUpdateInput>
    /**
     * Choose, which FormField to update.
     * 
    **/
    where: FormFieldWhereUniqueInput
  }


  /**
   * FormField updateMany
   */
  export type FormFieldUpdateManyArgs = {
    /**
     * The data used to update FormFields.
     * 
    **/
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyInput>
    /**
     * Filter which FormFields to update
     * 
    **/
    where?: FormFieldWhereInput
  }


  /**
   * FormField upsert
   */
  export type FormFieldUpsertArgs = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * The filter to search for the FormField to update in case it exists.
     * 
    **/
    where: FormFieldWhereUniqueInput
    /**
     * In case the FormField found by the `where` argument doesn't exist, create a new FormField with this data.
     * 
    **/
    create: XOR<FormFieldCreateInput, FormFieldUncheckedCreateInput>
    /**
     * In case the FormField was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FormFieldUpdateInput, FormFieldUncheckedUpdateInput>
  }


  /**
   * FormField delete
   */
  export type FormFieldDeleteArgs = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
    /**
     * Filter which FormField to delete.
     * 
    **/
    where: FormFieldWhereUniqueInput
  }


  /**
   * FormField deleteMany
   */
  export type FormFieldDeleteManyArgs = {
    /**
     * Filter which FormFields to delete
     * 
    **/
    where?: FormFieldWhereInput
  }


  /**
   * FormField: findUniqueOrThrow
   */
  export type FormFieldFindUniqueOrThrowArgs = FormFieldFindUniqueArgsBase
      

  /**
   * FormField: findFirstOrThrow
   */
  export type FormFieldFindFirstOrThrowArgs = FormFieldFindFirstArgsBase
      

  /**
   * FormField without action
   */
  export type FormFieldArgs = {
    /**
     * Select specific fields to fetch from the FormField
     * 
    **/
    select?: FormFieldSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldInclude | null
  }



  /**
   * Model FormFieldOption
   */


  export type AggregateFormFieldOption = {
    _count: FormFieldOptionCountAggregateOutputType | null
    _avg: FormFieldOptionAvgAggregateOutputType | null
    _sum: FormFieldOptionSumAggregateOutputType | null
    _min: FormFieldOptionMinAggregateOutputType | null
    _max: FormFieldOptionMaxAggregateOutputType | null
  }

  export type FormFieldOptionAvgAggregateOutputType = {
    id: number | null
    form_field_id: number | null
  }

  export type FormFieldOptionSumAggregateOutputType = {
    id: number | null
    form_field_id: number | null
  }

  export type FormFieldOptionMinAggregateOutputType = {
    id: number | null
    form_field_id: number | null
  }

  export type FormFieldOptionMaxAggregateOutputType = {
    id: number | null
    form_field_id: number | null
  }

  export type FormFieldOptionCountAggregateOutputType = {
    id: number
    form_field_id: number
    _all: number
  }


  export type FormFieldOptionAvgAggregateInputType = {
    id?: true
    form_field_id?: true
  }

  export type FormFieldOptionSumAggregateInputType = {
    id?: true
    form_field_id?: true
  }

  export type FormFieldOptionMinAggregateInputType = {
    id?: true
    form_field_id?: true
  }

  export type FormFieldOptionMaxAggregateInputType = {
    id?: true
    form_field_id?: true
  }

  export type FormFieldOptionCountAggregateInputType = {
    id?: true
    form_field_id?: true
    _all?: true
  }

  export type FormFieldOptionAggregateArgs = {
    /**
     * Filter which FormFieldOption to aggregate.
     * 
    **/
    where?: FormFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFieldOptions to fetch.
     * 
    **/
    orderBy?: Enumerable<FormFieldOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FormFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFieldOptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFieldOptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormFieldOptions
    **/
    _count?: true | FormFieldOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormFieldOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormFieldOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormFieldOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormFieldOptionMaxAggregateInputType
  }

  export type GetFormFieldOptionAggregateType<T extends FormFieldOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateFormFieldOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormFieldOption[P]>
      : GetScalarType<T[P], AggregateFormFieldOption[P]>
  }




  export type FormFieldOptionGroupByArgs = {
    where?: FormFieldOptionWhereInput
    orderBy?: Enumerable<FormFieldOptionOrderByWithAggregationInput>
    by: Array<FormFieldOptionScalarFieldEnum>
    having?: FormFieldOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormFieldOptionCountAggregateInputType | true
    _avg?: FormFieldOptionAvgAggregateInputType
    _sum?: FormFieldOptionSumAggregateInputType
    _min?: FormFieldOptionMinAggregateInputType
    _max?: FormFieldOptionMaxAggregateInputType
  }


  export type FormFieldOptionGroupByOutputType = {
    id: number
    form_field_id: number
    _count: FormFieldOptionCountAggregateOutputType | null
    _avg: FormFieldOptionAvgAggregateOutputType | null
    _sum: FormFieldOptionSumAggregateOutputType | null
    _min: FormFieldOptionMinAggregateOutputType | null
    _max: FormFieldOptionMaxAggregateOutputType | null
  }

  type GetFormFieldOptionGroupByPayload<T extends FormFieldOptionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormFieldOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormFieldOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormFieldOptionGroupByOutputType[P]>
            : GetScalarType<T[P], FormFieldOptionGroupByOutputType[P]>
        }
      >
    >


  export type FormFieldOptionSelect = {
    id?: boolean
    form_field?: boolean | FormFieldArgs
    form_field_id?: boolean
  }

  export type FormFieldOptionInclude = {
    form_field?: boolean | FormFieldArgs
  }

  export type FormFieldOptionGetPayload<
    S extends boolean | null | undefined | FormFieldOptionArgs,
    U = keyof S
      > = S extends true
        ? FormFieldOption
    : S extends undefined
    ? never
    : S extends FormFieldOptionArgs | FormFieldOptionFindManyArgs
    ?'include' extends U
    ? FormFieldOption  & {
    [P in TrueKeys<S['include']>]:
        P extends 'form_field' ? FormFieldGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'form_field' ? FormFieldGetPayload<S['select'][P]> :  P extends keyof FormFieldOption ? FormFieldOption[P] : never
  } 
    : FormFieldOption
  : FormFieldOption


  type FormFieldOptionCountArgs = Merge<
    Omit<FormFieldOptionFindManyArgs, 'select' | 'include'> & {
      select?: FormFieldOptionCountAggregateInputType | true
    }
  >

  export interface FormFieldOptionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FormFieldOption that matches the filter.
     * @param {FormFieldOptionFindUniqueArgs} args - Arguments to find a FormFieldOption
     * @example
     * // Get one FormFieldOption
     * const formFieldOption = await prisma.formFieldOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormFieldOptionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormFieldOptionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FormFieldOption'> extends True ? CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>> : CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption | null >, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T> | null >>

    /**
     * Find the first FormFieldOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionFindFirstArgs} args - Arguments to find a FormFieldOption
     * @example
     * // Get one FormFieldOption
     * const formFieldOption = await prisma.formFieldOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormFieldOptionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormFieldOptionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FormFieldOption'> extends True ? CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>> : CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption | null >, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T> | null >>

    /**
     * Find zero or more FormFieldOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormFieldOptions
     * const formFieldOptions = await prisma.formFieldOption.findMany()
     * 
     * // Get first 10 FormFieldOptions
     * const formFieldOptions = await prisma.formFieldOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formFieldOptionWithIdOnly = await prisma.formFieldOption.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormFieldOptionFindManyArgs>(
      args?: SelectSubset<T, FormFieldOptionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FormFieldOption>>, PrismaPromise<Array<FormFieldOptionGetPayload<T>>>>

    /**
     * Create a FormFieldOption.
     * @param {FormFieldOptionCreateArgs} args - Arguments to create a FormFieldOption.
     * @example
     * // Create one FormFieldOption
     * const FormFieldOption = await prisma.formFieldOption.create({
     *   data: {
     *     // ... data to create a FormFieldOption
     *   }
     * })
     * 
    **/
    create<T extends FormFieldOptionCreateArgs>(
      args: SelectSubset<T, FormFieldOptionCreateArgs>
    ): CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>>

    /**
     * Create many FormFieldOptions.
     *     @param {FormFieldOptionCreateManyArgs} args - Arguments to create many FormFieldOptions.
     *     @example
     *     // Create many FormFieldOptions
     *     const formFieldOption = await prisma.formFieldOption.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormFieldOptionCreateManyArgs>(
      args?: SelectSubset<T, FormFieldOptionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FormFieldOption.
     * @param {FormFieldOptionDeleteArgs} args - Arguments to delete one FormFieldOption.
     * @example
     * // Delete one FormFieldOption
     * const FormFieldOption = await prisma.formFieldOption.delete({
     *   where: {
     *     // ... filter to delete one FormFieldOption
     *   }
     * })
     * 
    **/
    delete<T extends FormFieldOptionDeleteArgs>(
      args: SelectSubset<T, FormFieldOptionDeleteArgs>
    ): CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>>

    /**
     * Update one FormFieldOption.
     * @param {FormFieldOptionUpdateArgs} args - Arguments to update one FormFieldOption.
     * @example
     * // Update one FormFieldOption
     * const formFieldOption = await prisma.formFieldOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormFieldOptionUpdateArgs>(
      args: SelectSubset<T, FormFieldOptionUpdateArgs>
    ): CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>>

    /**
     * Delete zero or more FormFieldOptions.
     * @param {FormFieldOptionDeleteManyArgs} args - Arguments to filter FormFieldOptions to delete.
     * @example
     * // Delete a few FormFieldOptions
     * const { count } = await prisma.formFieldOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormFieldOptionDeleteManyArgs>(
      args?: SelectSubset<T, FormFieldOptionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormFieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormFieldOptions
     * const formFieldOption = await prisma.formFieldOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormFieldOptionUpdateManyArgs>(
      args: SelectSubset<T, FormFieldOptionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FormFieldOption.
     * @param {FormFieldOptionUpsertArgs} args - Arguments to update or create a FormFieldOption.
     * @example
     * // Update or create a FormFieldOption
     * const formFieldOption = await prisma.formFieldOption.upsert({
     *   create: {
     *     // ... data to create a FormFieldOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormFieldOption we want to update
     *   }
     * })
    **/
    upsert<T extends FormFieldOptionUpsertArgs>(
      args: SelectSubset<T, FormFieldOptionUpsertArgs>
    ): CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>>

    /**
     * Find one FormFieldOption that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FormFieldOptionFindUniqueOrThrowArgs} args - Arguments to find a FormFieldOption
     * @example
     * // Get one FormFieldOption
     * const formFieldOption = await prisma.formFieldOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormFieldOptionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FormFieldOptionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>>

    /**
     * Find the first FormFieldOption that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionFindFirstOrThrowArgs} args - Arguments to find a FormFieldOption
     * @example
     * // Get one FormFieldOption
     * const formFieldOption = await prisma.formFieldOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormFieldOptionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FormFieldOptionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FormFieldOptionClient<FormFieldOption>, Prisma__FormFieldOptionClient<FormFieldOptionGetPayload<T>>>

    /**
     * Count the number of FormFieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionCountArgs} args - Arguments to filter FormFieldOptions to count.
     * @example
     * // Count the number of FormFieldOptions
     * const count = await prisma.formFieldOption.count({
     *   where: {
     *     // ... the filter for the FormFieldOptions we want to count
     *   }
     * })
    **/
    count<T extends FormFieldOptionCountArgs>(
      args?: Subset<T, FormFieldOptionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormFieldOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormFieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormFieldOptionAggregateArgs>(args: Subset<T, FormFieldOptionAggregateArgs>): PrismaPromise<GetFormFieldOptionAggregateType<T>>

    /**
     * Group by FormFieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormFieldOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormFieldOptionGroupByArgs['orderBy'] }
        : { orderBy?: FormFieldOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormFieldOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormFieldOptionGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormFieldOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormFieldOptionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    form_field<T extends FormFieldArgs = {}>(args?: Subset<T, FormFieldArgs>): CheckSelect<T, Prisma__FormFieldClient<FormField | null >, Prisma__FormFieldClient<FormFieldGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FormFieldOption base type for findUnique actions
   */
  export type FormFieldOptionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * Filter, which FormFieldOption to fetch.
     * 
    **/
    where: FormFieldOptionWhereUniqueInput
  }

  /**
   * FormFieldOption: findUnique
   */
  export interface FormFieldOptionFindUniqueArgs extends FormFieldOptionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FormFieldOption base type for findFirst actions
   */
  export type FormFieldOptionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * Filter, which FormFieldOption to fetch.
     * 
    **/
    where?: FormFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFieldOptions to fetch.
     * 
    **/
    orderBy?: Enumerable<FormFieldOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormFieldOptions.
     * 
    **/
    cursor?: FormFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFieldOptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFieldOptions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormFieldOptions.
     * 
    **/
    distinct?: Enumerable<FormFieldOptionScalarFieldEnum>
  }

  /**
   * FormFieldOption: findFirst
   */
  export interface FormFieldOptionFindFirstArgs extends FormFieldOptionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FormFieldOption findMany
   */
  export type FormFieldOptionFindManyArgs = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * Filter, which FormFieldOptions to fetch.
     * 
    **/
    where?: FormFieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFieldOptions to fetch.
     * 
    **/
    orderBy?: Enumerable<FormFieldOptionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormFieldOptions.
     * 
    **/
    cursor?: FormFieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFieldOptions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFieldOptions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FormFieldOptionScalarFieldEnum>
  }


  /**
   * FormFieldOption create
   */
  export type FormFieldOptionCreateArgs = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * The data needed to create a FormFieldOption.
     * 
    **/
    data: XOR<FormFieldOptionCreateInput, FormFieldOptionUncheckedCreateInput>
  }


  /**
   * FormFieldOption createMany
   */
  export type FormFieldOptionCreateManyArgs = {
    /**
     * The data used to create many FormFieldOptions.
     * 
    **/
    data: Enumerable<FormFieldOptionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FormFieldOption update
   */
  export type FormFieldOptionUpdateArgs = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * The data needed to update a FormFieldOption.
     * 
    **/
    data: XOR<FormFieldOptionUpdateInput, FormFieldOptionUncheckedUpdateInput>
    /**
     * Choose, which FormFieldOption to update.
     * 
    **/
    where: FormFieldOptionWhereUniqueInput
  }


  /**
   * FormFieldOption updateMany
   */
  export type FormFieldOptionUpdateManyArgs = {
    /**
     * The data used to update FormFieldOptions.
     * 
    **/
    data: XOR<FormFieldOptionUpdateManyMutationInput, FormFieldOptionUncheckedUpdateManyInput>
    /**
     * Filter which FormFieldOptions to update
     * 
    **/
    where?: FormFieldOptionWhereInput
  }


  /**
   * FormFieldOption upsert
   */
  export type FormFieldOptionUpsertArgs = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * The filter to search for the FormFieldOption to update in case it exists.
     * 
    **/
    where: FormFieldOptionWhereUniqueInput
    /**
     * In case the FormFieldOption found by the `where` argument doesn't exist, create a new FormFieldOption with this data.
     * 
    **/
    create: XOR<FormFieldOptionCreateInput, FormFieldOptionUncheckedCreateInput>
    /**
     * In case the FormFieldOption was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FormFieldOptionUpdateInput, FormFieldOptionUncheckedUpdateInput>
  }


  /**
   * FormFieldOption delete
   */
  export type FormFieldOptionDeleteArgs = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
    /**
     * Filter which FormFieldOption to delete.
     * 
    **/
    where: FormFieldOptionWhereUniqueInput
  }


  /**
   * FormFieldOption deleteMany
   */
  export type FormFieldOptionDeleteManyArgs = {
    /**
     * Filter which FormFieldOptions to delete
     * 
    **/
    where?: FormFieldOptionWhereInput
  }


  /**
   * FormFieldOption: findUniqueOrThrow
   */
  export type FormFieldOptionFindUniqueOrThrowArgs = FormFieldOptionFindUniqueArgsBase
      

  /**
   * FormFieldOption: findFirstOrThrow
   */
  export type FormFieldOptionFindFirstOrThrowArgs = FormFieldOptionFindFirstArgsBase
      

  /**
   * FormFieldOption without action
   */
  export type FormFieldOptionArgs = {
    /**
     * Select specific fields to fetch from the FormFieldOption
     * 
    **/
    select?: FormFieldOptionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormFieldOptionInclude | null
  }



  /**
   * Model FormResponse
   */


  export type AggregateFormResponse = {
    _count: FormResponseCountAggregateOutputType | null
    _avg: FormResponseAvgAggregateOutputType | null
    _sum: FormResponseSumAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  export type FormResponseAvgAggregateOutputType = {
    id: number | null
    form_id: number | null
  }

  export type FormResponseSumAggregateOutputType = {
    id: number | null
    form_id: number | null
  }

  export type FormResponseMinAggregateOutputType = {
    id: number | null
    form_id: number | null
  }

  export type FormResponseMaxAggregateOutputType = {
    id: number | null
    form_id: number | null
  }

  export type FormResponseCountAggregateOutputType = {
    id: number
    form_id: number
    _all: number
  }


  export type FormResponseAvgAggregateInputType = {
    id?: true
    form_id?: true
  }

  export type FormResponseSumAggregateInputType = {
    id?: true
    form_id?: true
  }

  export type FormResponseMinAggregateInputType = {
    id?: true
    form_id?: true
  }

  export type FormResponseMaxAggregateInputType = {
    id?: true
    form_id?: true
  }

  export type FormResponseCountAggregateInputType = {
    id?: true
    form_id?: true
    _all?: true
  }

  export type FormResponseAggregateArgs = {
    /**
     * Filter which FormResponse to aggregate.
     * 
    **/
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     * 
    **/
    orderBy?: Enumerable<FormResponseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormResponses
    **/
    _count?: true | FormResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormResponseMaxAggregateInputType
  }

  export type GetFormResponseAggregateType<T extends FormResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFormResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormResponse[P]>
      : GetScalarType<T[P], AggregateFormResponse[P]>
  }




  export type FormResponseGroupByArgs = {
    where?: FormResponseWhereInput
    orderBy?: Enumerable<FormResponseOrderByWithAggregationInput>
    by: Array<FormResponseScalarFieldEnum>
    having?: FormResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormResponseCountAggregateInputType | true
    _avg?: FormResponseAvgAggregateInputType
    _sum?: FormResponseSumAggregateInputType
    _min?: FormResponseMinAggregateInputType
    _max?: FormResponseMaxAggregateInputType
  }


  export type FormResponseGroupByOutputType = {
    id: number
    form_id: number
    _count: FormResponseCountAggregateOutputType | null
    _avg: FormResponseAvgAggregateOutputType | null
    _sum: FormResponseSumAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  type GetFormResponseGroupByPayload<T extends FormResponseGroupByArgs> = PrismaPromise<
    Array<
      PickArray<FormResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
        }
      >
    >


  export type FormResponseSelect = {
    id?: boolean
    form?: boolean | FormArgs
    form_id?: boolean
  }

  export type FormResponseInclude = {
    form?: boolean | FormArgs
  }

  export type FormResponseGetPayload<
    S extends boolean | null | undefined | FormResponseArgs,
    U = keyof S
      > = S extends true
        ? FormResponse
    : S extends undefined
    ? never
    : S extends FormResponseArgs | FormResponseFindManyArgs
    ?'include' extends U
    ? FormResponse  & {
    [P in TrueKeys<S['include']>]:
        P extends 'form' ? FormGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'form' ? FormGetPayload<S['select'][P]> :  P extends keyof FormResponse ? FormResponse[P] : never
  } 
    : FormResponse
  : FormResponse


  type FormResponseCountArgs = Merge<
    Omit<FormResponseFindManyArgs, 'select' | 'include'> & {
      select?: FormResponseCountAggregateInputType | true
    }
  >

  export interface FormResponseDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one FormResponse that matches the filter.
     * @param {FormResponseFindUniqueArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormResponseFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormResponseFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FormResponse'> extends True ? CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>> : CheckSelect<T, Prisma__FormResponseClient<FormResponse | null >, Prisma__FormResponseClient<FormResponseGetPayload<T> | null >>

    /**
     * Find the first FormResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormResponseFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormResponseFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FormResponse'> extends True ? CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>> : CheckSelect<T, Prisma__FormResponseClient<FormResponse | null >, Prisma__FormResponseClient<FormResponseGetPayload<T> | null >>

    /**
     * Find zero or more FormResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormResponses
     * const formResponses = await prisma.formResponse.findMany()
     * 
     * // Get first 10 FormResponses
     * const formResponses = await prisma.formResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formResponseWithIdOnly = await prisma.formResponse.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormResponseFindManyArgs>(
      args?: SelectSubset<T, FormResponseFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<FormResponse>>, PrismaPromise<Array<FormResponseGetPayload<T>>>>

    /**
     * Create a FormResponse.
     * @param {FormResponseCreateArgs} args - Arguments to create a FormResponse.
     * @example
     * // Create one FormResponse
     * const FormResponse = await prisma.formResponse.create({
     *   data: {
     *     // ... data to create a FormResponse
     *   }
     * })
     * 
    **/
    create<T extends FormResponseCreateArgs>(
      args: SelectSubset<T, FormResponseCreateArgs>
    ): CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>>

    /**
     * Create many FormResponses.
     *     @param {FormResponseCreateManyArgs} args - Arguments to create many FormResponses.
     *     @example
     *     // Create many FormResponses
     *     const formResponse = await prisma.formResponse.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormResponseCreateManyArgs>(
      args?: SelectSubset<T, FormResponseCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a FormResponse.
     * @param {FormResponseDeleteArgs} args - Arguments to delete one FormResponse.
     * @example
     * // Delete one FormResponse
     * const FormResponse = await prisma.formResponse.delete({
     *   where: {
     *     // ... filter to delete one FormResponse
     *   }
     * })
     * 
    **/
    delete<T extends FormResponseDeleteArgs>(
      args: SelectSubset<T, FormResponseDeleteArgs>
    ): CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>>

    /**
     * Update one FormResponse.
     * @param {FormResponseUpdateArgs} args - Arguments to update one FormResponse.
     * @example
     * // Update one FormResponse
     * const formResponse = await prisma.formResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormResponseUpdateArgs>(
      args: SelectSubset<T, FormResponseUpdateArgs>
    ): CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>>

    /**
     * Delete zero or more FormResponses.
     * @param {FormResponseDeleteManyArgs} args - Arguments to filter FormResponses to delete.
     * @example
     * // Delete a few FormResponses
     * const { count } = await prisma.formResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormResponseDeleteManyArgs>(
      args?: SelectSubset<T, FormResponseDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormResponses
     * const formResponse = await prisma.formResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormResponseUpdateManyArgs>(
      args: SelectSubset<T, FormResponseUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one FormResponse.
     * @param {FormResponseUpsertArgs} args - Arguments to update or create a FormResponse.
     * @example
     * // Update or create a FormResponse
     * const formResponse = await prisma.formResponse.upsert({
     *   create: {
     *     // ... data to create a FormResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormResponse we want to update
     *   }
     * })
    **/
    upsert<T extends FormResponseUpsertArgs>(
      args: SelectSubset<T, FormResponseUpsertArgs>
    ): CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>>

    /**
     * Find one FormResponse that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {FormResponseFindUniqueOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormResponseFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FormResponseFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>>

    /**
     * Find the first FormResponse that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormResponseFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FormResponseFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__FormResponseClient<FormResponse>, Prisma__FormResponseClient<FormResponseGetPayload<T>>>

    /**
     * Count the number of FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseCountArgs} args - Arguments to filter FormResponses to count.
     * @example
     * // Count the number of FormResponses
     * const count = await prisma.formResponse.count({
     *   where: {
     *     // ... the filter for the FormResponses we want to count
     *   }
     * })
    **/
    count<T extends FormResponseCountArgs>(
      args?: Subset<T, FormResponseCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormResponseAggregateArgs>(args: Subset<T, FormResponseAggregateArgs>): PrismaPromise<GetFormResponseAggregateType<T>>

    /**
     * Group by FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormResponseGroupByArgs['orderBy'] }
        : { orderBy?: FormResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormResponseGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormResponseClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    form<T extends FormArgs = {}>(args?: Subset<T, FormArgs>): CheckSelect<T, Prisma__FormClient<Form | null >, Prisma__FormClient<FormGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * FormResponse base type for findUnique actions
   */
  export type FormResponseFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * Filter, which FormResponse to fetch.
     * 
    **/
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse: findUnique
   */
  export interface FormResponseFindUniqueArgs extends FormResponseFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FormResponse base type for findFirst actions
   */
  export type FormResponseFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * Filter, which FormResponse to fetch.
     * 
    **/
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     * 
    **/
    orderBy?: Enumerable<FormResponseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     * 
    **/
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     * 
    **/
    distinct?: Enumerable<FormResponseScalarFieldEnum>
  }

  /**
   * FormResponse: findFirst
   */
  export interface FormResponseFindFirstArgs extends FormResponseFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FormResponse findMany
   */
  export type FormResponseFindManyArgs = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * Filter, which FormResponses to fetch.
     * 
    **/
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     * 
    **/
    orderBy?: Enumerable<FormResponseOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormResponses.
     * 
    **/
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FormResponseScalarFieldEnum>
  }


  /**
   * FormResponse create
   */
  export type FormResponseCreateArgs = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * The data needed to create a FormResponse.
     * 
    **/
    data: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
  }


  /**
   * FormResponse createMany
   */
  export type FormResponseCreateManyArgs = {
    /**
     * The data used to create many FormResponses.
     * 
    **/
    data: Enumerable<FormResponseCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FormResponse update
   */
  export type FormResponseUpdateArgs = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * The data needed to update a FormResponse.
     * 
    **/
    data: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
    /**
     * Choose, which FormResponse to update.
     * 
    **/
    where: FormResponseWhereUniqueInput
  }


  /**
   * FormResponse updateMany
   */
  export type FormResponseUpdateManyArgs = {
    /**
     * The data used to update FormResponses.
     * 
    **/
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormResponses to update
     * 
    **/
    where?: FormResponseWhereInput
  }


  /**
   * FormResponse upsert
   */
  export type FormResponseUpsertArgs = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * The filter to search for the FormResponse to update in case it exists.
     * 
    **/
    where: FormResponseWhereUniqueInput
    /**
     * In case the FormResponse found by the `where` argument doesn't exist, create a new FormResponse with this data.
     * 
    **/
    create: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
    /**
     * In case the FormResponse was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
  }


  /**
   * FormResponse delete
   */
  export type FormResponseDeleteArgs = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
    /**
     * Filter which FormResponse to delete.
     * 
    **/
    where: FormResponseWhereUniqueInput
  }


  /**
   * FormResponse deleteMany
   */
  export type FormResponseDeleteManyArgs = {
    /**
     * Filter which FormResponses to delete
     * 
    **/
    where?: FormResponseWhereInput
  }


  /**
   * FormResponse: findUniqueOrThrow
   */
  export type FormResponseFindUniqueOrThrowArgs = FormResponseFindUniqueArgsBase
      

  /**
   * FormResponse: findFirstOrThrow
   */
  export type FormResponseFindFirstOrThrowArgs = FormResponseFindFirstArgsBase
      

  /**
   * FormResponse without action
   */
  export type FormResponseArgs = {
    /**
     * Select specific fields to fetch from the FormResponse
     * 
    **/
    select?: FormResponseSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FormResponseInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const FormFieldOptionScalarFieldEnum: {
    id: 'id',
    form_field_id: 'form_field_id'
  };

  export type FormFieldOptionScalarFieldEnum = (typeof FormFieldOptionScalarFieldEnum)[keyof typeof FormFieldOptionScalarFieldEnum]


  export const FormFieldScalarFieldEnum: {
    id: 'id',
    form_id: 'form_id',
    name: 'name',
    description: 'description',
    type: 'type'
  };

  export type FormFieldScalarFieldEnum = (typeof FormFieldScalarFieldEnum)[keyof typeof FormFieldScalarFieldEnum]


  export const FormResponseScalarFieldEnum: {
    id: 'id',
    form_id: 'form_id'
  };

  export type FormResponseScalarFieldEnum = (typeof FormResponseScalarFieldEnum)[keyof typeof FormResponseScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type FormWhereInput = {
    AND?: Enumerable<FormWhereInput>
    OR?: Enumerable<FormWhereInput>
    NOT?: Enumerable<FormWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    fields?: FormFieldListRelationFilter
    responses?: FormResponseListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    fields?: FormFieldOrderByRelationAggregateInput
    responses?: FormResponseOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = {
    id?: number
  }

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _avg?: FormAvgOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
    _sum?: FormSumOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
  }

  export type FormFieldWhereInput = {
    AND?: Enumerable<FormFieldWhereInput>
    OR?: Enumerable<FormFieldWhereInput>
    NOT?: Enumerable<FormFieldWhereInput>
    id?: IntFilter | number
    form?: XOR<FormRelationFilter, FormWhereInput>
    form_id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    type?: StringFilter | string
    options?: FormFieldOptionListRelationFilter
  }

  export type FormFieldOrderByWithRelationInput = {
    id?: SortOrder
    form?: FormOrderByWithRelationInput
    form_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    options?: FormFieldOptionOrderByRelationAggregateInput
  }

  export type FormFieldWhereUniqueInput = {
    id?: number
  }

  export type FormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    form_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
    _count?: FormFieldCountOrderByAggregateInput
    _avg?: FormFieldAvgOrderByAggregateInput
    _max?: FormFieldMaxOrderByAggregateInput
    _min?: FormFieldMinOrderByAggregateInput
    _sum?: FormFieldSumOrderByAggregateInput
  }

  export type FormFieldScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormFieldScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormFieldScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormFieldScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    form_id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
  }

  export type FormFieldOptionWhereInput = {
    AND?: Enumerable<FormFieldOptionWhereInput>
    OR?: Enumerable<FormFieldOptionWhereInput>
    NOT?: Enumerable<FormFieldOptionWhereInput>
    id?: IntFilter | number
    form_field?: XOR<FormFieldRelationFilter, FormFieldWhereInput>
    form_field_id?: IntFilter | number
  }

  export type FormFieldOptionOrderByWithRelationInput = {
    id?: SortOrder
    form_field?: FormFieldOrderByWithRelationInput
    form_field_id?: SortOrder
  }

  export type FormFieldOptionWhereUniqueInput = {
    id?: number
  }

  export type FormFieldOptionOrderByWithAggregationInput = {
    id?: SortOrder
    form_field_id?: SortOrder
    _count?: FormFieldOptionCountOrderByAggregateInput
    _avg?: FormFieldOptionAvgOrderByAggregateInput
    _max?: FormFieldOptionMaxOrderByAggregateInput
    _min?: FormFieldOptionMinOrderByAggregateInput
    _sum?: FormFieldOptionSumOrderByAggregateInput
  }

  export type FormFieldOptionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormFieldOptionScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormFieldOptionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormFieldOptionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    form_field_id?: IntWithAggregatesFilter | number
  }

  export type FormResponseWhereInput = {
    AND?: Enumerable<FormResponseWhereInput>
    OR?: Enumerable<FormResponseWhereInput>
    NOT?: Enumerable<FormResponseWhereInput>
    id?: IntFilter | number
    form?: XOR<FormRelationFilter, FormWhereInput>
    form_id?: IntFilter | number
  }

  export type FormResponseOrderByWithRelationInput = {
    id?: SortOrder
    form?: FormOrderByWithRelationInput
    form_id?: SortOrder
  }

  export type FormResponseWhereUniqueInput = {
    id?: number
  }

  export type FormResponseOrderByWithAggregationInput = {
    id?: SortOrder
    form_id?: SortOrder
    _count?: FormResponseCountOrderByAggregateInput
    _avg?: FormResponseAvgOrderByAggregateInput
    _max?: FormResponseMaxOrderByAggregateInput
    _min?: FormResponseMinOrderByAggregateInput
    _sum?: FormResponseSumOrderByAggregateInput
  }

  export type FormResponseScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormResponseScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormResponseScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormResponseScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    form_id?: IntWithAggregatesFilter | number
  }

  export type FormCreateInput = {
    name?: string
    description?: string
    fields?: FormFieldCreateNestedManyWithoutFormInput
    responses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: number
    name?: string
    description?: string
    fields?: FormFieldUncheckedCreateNestedManyWithoutFormInput
    responses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fields?: FormFieldUpdateManyWithoutFormNestedInput
    responses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fields?: FormFieldUncheckedUpdateManyWithoutFormNestedInput
    responses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: number
    name?: string
    description?: string
  }

  export type FormUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type FormFieldCreateInput = {
    form: FormCreateNestedOneWithoutFieldsInput
    name?: string
    description?: string
    type: string
    options?: FormFieldOptionCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldUncheckedCreateInput = {
    id?: number
    form_id: number
    name?: string
    description?: string
    type: string
    options?: FormFieldOptionUncheckedCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldUpdateInput = {
    form?: FormUpdateOneRequiredWithoutFieldsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: FormFieldOptionUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: FormFieldOptionUncheckedUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldCreateManyInput = {
    id?: number
    form_id: number
    name?: string
    description?: string
    type: string
  }

  export type FormFieldUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FormFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FormFieldOptionCreateInput = {
    form_field: FormFieldCreateNestedOneWithoutOptionsInput
  }

  export type FormFieldOptionUncheckedCreateInput = {
    id?: number
    form_field_id: number
  }

  export type FormFieldOptionUpdateInput = {
    form_field?: FormFieldUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type FormFieldOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_field_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormFieldOptionCreateManyInput = {
    id?: number
    form_field_id: number
  }

  export type FormFieldOptionUpdateManyMutationInput = {

  }

  export type FormFieldOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_field_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormResponseCreateInput = {
    form: FormCreateNestedOneWithoutResponsesInput
  }

  export type FormResponseUncheckedCreateInput = {
    id?: number
    form_id: number
  }

  export type FormResponseUpdateInput = {
    form?: FormUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_id?: IntFieldUpdateOperationsInput | number
  }

  export type FormResponseCreateManyInput = {
    id?: number
    form_id: number
  }

  export type FormResponseUpdateManyMutationInput = {

  }

  export type FormResponseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type FormFieldListRelationFilter = {
    every?: FormFieldWhereInput
    some?: FormFieldWhereInput
    none?: FormFieldWhereInput
  }

  export type FormResponseListRelationFilter = {
    every?: FormResponseWhereInput
    some?: FormResponseWhereInput
    none?: FormResponseWhereInput
  }

  export type FormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FormAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type FormSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FormRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type FormFieldOptionListRelationFilter = {
    every?: FormFieldOptionWhereInput
    some?: FormFieldOptionWhereInput
    none?: FormFieldOptionWhereInput
  }

  export type FormFieldOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type FormFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type FormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    type?: SortOrder
  }

  export type FormFieldSumOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormFieldRelationFilter = {
    is?: FormFieldWhereInput
    isNot?: FormFieldWhereInput
  }

  export type FormFieldOptionCountOrderByAggregateInput = {
    id?: SortOrder
    form_field_id?: SortOrder
  }

  export type FormFieldOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    form_field_id?: SortOrder
  }

  export type FormFieldOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    form_field_id?: SortOrder
  }

  export type FormFieldOptionMinOrderByAggregateInput = {
    id?: SortOrder
    form_field_id?: SortOrder
  }

  export type FormFieldOptionSumOrderByAggregateInput = {
    id?: SortOrder
    form_field_id?: SortOrder
  }

  export type FormResponseCountOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormResponseAvgOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormResponseMinOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormResponseSumOrderByAggregateInput = {
    id?: SortOrder
    form_id?: SortOrder
  }

  export type FormFieldCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<FormFieldCreateWithoutFormInput>, Enumerable<FormFieldUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormFieldCreateOrConnectWithoutFormInput>
    createMany?: FormFieldCreateManyFormInputEnvelope
    connect?: Enumerable<FormFieldWhereUniqueInput>
  }

  export type FormResponseCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<FormResponseCreateWithoutFormInput>, Enumerable<FormResponseUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormResponseCreateOrConnectWithoutFormInput>
    createMany?: FormResponseCreateManyFormInputEnvelope
    connect?: Enumerable<FormResponseWhereUniqueInput>
  }

  export type FormFieldUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<FormFieldCreateWithoutFormInput>, Enumerable<FormFieldUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormFieldCreateOrConnectWithoutFormInput>
    createMany?: FormFieldCreateManyFormInputEnvelope
    connect?: Enumerable<FormFieldWhereUniqueInput>
  }

  export type FormResponseUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<Enumerable<FormResponseCreateWithoutFormInput>, Enumerable<FormResponseUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormResponseCreateOrConnectWithoutFormInput>
    createMany?: FormResponseCreateManyFormInputEnvelope
    connect?: Enumerable<FormResponseWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FormFieldUpdateManyWithoutFormNestedInput = {
    create?: XOR<Enumerable<FormFieldCreateWithoutFormInput>, Enumerable<FormFieldUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormFieldCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<FormFieldUpsertWithWhereUniqueWithoutFormInput>
    createMany?: FormFieldCreateManyFormInputEnvelope
    set?: Enumerable<FormFieldWhereUniqueInput>
    disconnect?: Enumerable<FormFieldWhereUniqueInput>
    delete?: Enumerable<FormFieldWhereUniqueInput>
    connect?: Enumerable<FormFieldWhereUniqueInput>
    update?: Enumerable<FormFieldUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<FormFieldUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<FormFieldScalarWhereInput>
  }

  export type FormResponseUpdateManyWithoutFormNestedInput = {
    create?: XOR<Enumerable<FormResponseCreateWithoutFormInput>, Enumerable<FormResponseUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormResponseCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<FormResponseUpsertWithWhereUniqueWithoutFormInput>
    createMany?: FormResponseCreateManyFormInputEnvelope
    set?: Enumerable<FormResponseWhereUniqueInput>
    disconnect?: Enumerable<FormResponseWhereUniqueInput>
    delete?: Enumerable<FormResponseWhereUniqueInput>
    connect?: Enumerable<FormResponseWhereUniqueInput>
    update?: Enumerable<FormResponseUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<FormResponseUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<FormResponseScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormFieldUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<Enumerable<FormFieldCreateWithoutFormInput>, Enumerable<FormFieldUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormFieldCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<FormFieldUpsertWithWhereUniqueWithoutFormInput>
    createMany?: FormFieldCreateManyFormInputEnvelope
    set?: Enumerable<FormFieldWhereUniqueInput>
    disconnect?: Enumerable<FormFieldWhereUniqueInput>
    delete?: Enumerable<FormFieldWhereUniqueInput>
    connect?: Enumerable<FormFieldWhereUniqueInput>
    update?: Enumerable<FormFieldUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<FormFieldUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<FormFieldScalarWhereInput>
  }

  export type FormResponseUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<Enumerable<FormResponseCreateWithoutFormInput>, Enumerable<FormResponseUncheckedCreateWithoutFormInput>>
    connectOrCreate?: Enumerable<FormResponseCreateOrConnectWithoutFormInput>
    upsert?: Enumerable<FormResponseUpsertWithWhereUniqueWithoutFormInput>
    createMany?: FormResponseCreateManyFormInputEnvelope
    set?: Enumerable<FormResponseWhereUniqueInput>
    disconnect?: Enumerable<FormResponseWhereUniqueInput>
    delete?: Enumerable<FormResponseWhereUniqueInput>
    connect?: Enumerable<FormResponseWhereUniqueInput>
    update?: Enumerable<FormResponseUpdateWithWhereUniqueWithoutFormInput>
    updateMany?: Enumerable<FormResponseUpdateManyWithWhereWithoutFormInput>
    deleteMany?: Enumerable<FormResponseScalarWhereInput>
  }

  export type FormCreateNestedOneWithoutFieldsInput = {
    create?: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: FormCreateOrConnectWithoutFieldsInput
    connect?: FormWhereUniqueInput
  }

  export type FormFieldOptionCreateNestedManyWithoutForm_fieldInput = {
    create?: XOR<Enumerable<FormFieldOptionCreateWithoutForm_fieldInput>, Enumerable<FormFieldOptionUncheckedCreateWithoutForm_fieldInput>>
    connectOrCreate?: Enumerable<FormFieldOptionCreateOrConnectWithoutForm_fieldInput>
    createMany?: FormFieldOptionCreateManyForm_fieldInputEnvelope
    connect?: Enumerable<FormFieldOptionWhereUniqueInput>
  }

  export type FormFieldOptionUncheckedCreateNestedManyWithoutForm_fieldInput = {
    create?: XOR<Enumerable<FormFieldOptionCreateWithoutForm_fieldInput>, Enumerable<FormFieldOptionUncheckedCreateWithoutForm_fieldInput>>
    connectOrCreate?: Enumerable<FormFieldOptionCreateOrConnectWithoutForm_fieldInput>
    createMany?: FormFieldOptionCreateManyForm_fieldInputEnvelope
    connect?: Enumerable<FormFieldOptionWhereUniqueInput>
  }

  export type FormUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: FormCreateOrConnectWithoutFieldsInput
    upsert?: FormUpsertWithoutFieldsInput
    connect?: FormWhereUniqueInput
    update?: XOR<FormUpdateWithoutFieldsInput, FormUncheckedUpdateWithoutFieldsInput>
  }

  export type FormFieldOptionUpdateManyWithoutForm_fieldNestedInput = {
    create?: XOR<Enumerable<FormFieldOptionCreateWithoutForm_fieldInput>, Enumerable<FormFieldOptionUncheckedCreateWithoutForm_fieldInput>>
    connectOrCreate?: Enumerable<FormFieldOptionCreateOrConnectWithoutForm_fieldInput>
    upsert?: Enumerable<FormFieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput>
    createMany?: FormFieldOptionCreateManyForm_fieldInputEnvelope
    set?: Enumerable<FormFieldOptionWhereUniqueInput>
    disconnect?: Enumerable<FormFieldOptionWhereUniqueInput>
    delete?: Enumerable<FormFieldOptionWhereUniqueInput>
    connect?: Enumerable<FormFieldOptionWhereUniqueInput>
    update?: Enumerable<FormFieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput>
    updateMany?: Enumerable<FormFieldOptionUpdateManyWithWhereWithoutForm_fieldInput>
    deleteMany?: Enumerable<FormFieldOptionScalarWhereInput>
  }

  export type FormFieldOptionUncheckedUpdateManyWithoutForm_fieldNestedInput = {
    create?: XOR<Enumerable<FormFieldOptionCreateWithoutForm_fieldInput>, Enumerable<FormFieldOptionUncheckedCreateWithoutForm_fieldInput>>
    connectOrCreate?: Enumerable<FormFieldOptionCreateOrConnectWithoutForm_fieldInput>
    upsert?: Enumerable<FormFieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput>
    createMany?: FormFieldOptionCreateManyForm_fieldInputEnvelope
    set?: Enumerable<FormFieldOptionWhereUniqueInput>
    disconnect?: Enumerable<FormFieldOptionWhereUniqueInput>
    delete?: Enumerable<FormFieldOptionWhereUniqueInput>
    connect?: Enumerable<FormFieldOptionWhereUniqueInput>
    update?: Enumerable<FormFieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput>
    updateMany?: Enumerable<FormFieldOptionUpdateManyWithWhereWithoutForm_fieldInput>
    deleteMany?: Enumerable<FormFieldOptionScalarWhereInput>
  }

  export type FormFieldCreateNestedOneWithoutOptionsInput = {
    create?: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutOptionsInput
    connect?: FormFieldWhereUniqueInput
  }

  export type FormFieldUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutOptionsInput
    upsert?: FormFieldUpsertWithoutOptionsInput
    connect?: FormFieldWhereUniqueInput
    update?: XOR<FormFieldUpdateWithoutOptionsInput, FormFieldUncheckedUpdateWithoutOptionsInput>
  }

  export type FormCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormCreateOrConnectWithoutResponsesInput
    connect?: FormWhereUniqueInput
  }

  export type FormUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormCreateOrConnectWithoutResponsesInput
    upsert?: FormUpsertWithoutResponsesInput
    connect?: FormWhereUniqueInput
    update?: XOR<FormUpdateWithoutResponsesInput, FormUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type FormFieldCreateWithoutFormInput = {
    name?: string
    description?: string
    type: string
    options?: FormFieldOptionCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldUncheckedCreateWithoutFormInput = {
    id?: number
    name?: string
    description?: string
    type: string
    options?: FormFieldOptionUncheckedCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldCreateOrConnectWithoutFormInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput>
  }

  export type FormFieldCreateManyFormInputEnvelope = {
    data: Enumerable<FormFieldCreateManyFormInput>
    skipDuplicates?: boolean
  }

  export type FormResponseCreateWithoutFormInput = {

  }

  export type FormResponseUncheckedCreateWithoutFormInput = {
    id?: number
  }

  export type FormResponseCreateOrConnectWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput>
  }

  export type FormResponseCreateManyFormInputEnvelope = {
    data: Enumerable<FormResponseCreateManyFormInput>
    skipDuplicates?: boolean
  }

  export type FormFieldUpsertWithWhereUniqueWithoutFormInput = {
    where: FormFieldWhereUniqueInput
    update: XOR<FormFieldUpdateWithoutFormInput, FormFieldUncheckedUpdateWithoutFormInput>
    create: XOR<FormFieldCreateWithoutFormInput, FormFieldUncheckedCreateWithoutFormInput>
  }

  export type FormFieldUpdateWithWhereUniqueWithoutFormInput = {
    where: FormFieldWhereUniqueInput
    data: XOR<FormFieldUpdateWithoutFormInput, FormFieldUncheckedUpdateWithoutFormInput>
  }

  export type FormFieldUpdateManyWithWhereWithoutFormInput = {
    where: FormFieldScalarWhereInput
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyWithoutFieldsInput>
  }

  export type FormFieldScalarWhereInput = {
    AND?: Enumerable<FormFieldScalarWhereInput>
    OR?: Enumerable<FormFieldScalarWhereInput>
    NOT?: Enumerable<FormFieldScalarWhereInput>
    id?: IntFilter | number
    form_id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    type?: StringFilter | string
  }

  export type FormResponseUpsertWithWhereUniqueWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutFormInput, FormResponseUncheckedUpdateWithoutFormInput>
    create: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutFormInput, FormResponseUncheckedUpdateWithoutFormInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutFormInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutResponsesInput>
  }

  export type FormResponseScalarWhereInput = {
    AND?: Enumerable<FormResponseScalarWhereInput>
    OR?: Enumerable<FormResponseScalarWhereInput>
    NOT?: Enumerable<FormResponseScalarWhereInput>
    id?: IntFilter | number
    form_id?: IntFilter | number
  }

  export type FormCreateWithoutFieldsInput = {
    name?: string
    description?: string
    responses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutFieldsInput = {
    id?: number
    name?: string
    description?: string
    responses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutFieldsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
  }

  export type FormFieldOptionCreateWithoutForm_fieldInput = {

  }

  export type FormFieldOptionUncheckedCreateWithoutForm_fieldInput = {
    id?: number
  }

  export type FormFieldOptionCreateOrConnectWithoutForm_fieldInput = {
    where: FormFieldOptionWhereUniqueInput
    create: XOR<FormFieldOptionCreateWithoutForm_fieldInput, FormFieldOptionUncheckedCreateWithoutForm_fieldInput>
  }

  export type FormFieldOptionCreateManyForm_fieldInputEnvelope = {
    data: Enumerable<FormFieldOptionCreateManyForm_fieldInput>
    skipDuplicates?: boolean
  }

  export type FormUpsertWithoutFieldsInput = {
    update: XOR<FormUpdateWithoutFieldsInput, FormUncheckedUpdateWithoutFieldsInput>
    create: XOR<FormCreateWithoutFieldsInput, FormUncheckedCreateWithoutFieldsInput>
  }

  export type FormUpdateWithoutFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    responses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    responses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormFieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput = {
    where: FormFieldOptionWhereUniqueInput
    update: XOR<FormFieldOptionUpdateWithoutForm_fieldInput, FormFieldOptionUncheckedUpdateWithoutForm_fieldInput>
    create: XOR<FormFieldOptionCreateWithoutForm_fieldInput, FormFieldOptionUncheckedCreateWithoutForm_fieldInput>
  }

  export type FormFieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput = {
    where: FormFieldOptionWhereUniqueInput
    data: XOR<FormFieldOptionUpdateWithoutForm_fieldInput, FormFieldOptionUncheckedUpdateWithoutForm_fieldInput>
  }

  export type FormFieldOptionUpdateManyWithWhereWithoutForm_fieldInput = {
    where: FormFieldOptionScalarWhereInput
    data: XOR<FormFieldOptionUpdateManyMutationInput, FormFieldOptionUncheckedUpdateManyWithoutOptionsInput>
  }

  export type FormFieldOptionScalarWhereInput = {
    AND?: Enumerable<FormFieldOptionScalarWhereInput>
    OR?: Enumerable<FormFieldOptionScalarWhereInput>
    NOT?: Enumerable<FormFieldOptionScalarWhereInput>
    id?: IntFilter | number
    form_field_id?: IntFilter | number
  }

  export type FormFieldCreateWithoutOptionsInput = {
    form: FormCreateNestedOneWithoutFieldsInput
    name?: string
    description?: string
    type: string
  }

  export type FormFieldUncheckedCreateWithoutOptionsInput = {
    id?: number
    form_id: number
    name?: string
    description?: string
    type: string
  }

  export type FormFieldCreateOrConnectWithoutOptionsInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
  }

  export type FormFieldUpsertWithoutOptionsInput = {
    update: XOR<FormFieldUpdateWithoutOptionsInput, FormFieldUncheckedUpdateWithoutOptionsInput>
    create: XOR<FormFieldCreateWithoutOptionsInput, FormFieldUncheckedCreateWithoutOptionsInput>
  }

  export type FormFieldUpdateWithoutOptionsInput = {
    form?: FormUpdateOneRequiredWithoutFieldsNestedInput
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FormFieldUncheckedUpdateWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FormCreateWithoutResponsesInput = {
    name?: string
    description?: string
    fields?: FormFieldCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutResponsesInput = {
    id?: number
    name?: string
    description?: string
    fields?: FormFieldUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutResponsesInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
  }

  export type FormUpsertWithoutResponsesInput = {
    update: XOR<FormUpdateWithoutResponsesInput, FormUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormCreateWithoutResponsesInput, FormUncheckedCreateWithoutResponsesInput>
  }

  export type FormUpdateWithoutResponsesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fields?: FormFieldUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    fields?: FormFieldUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormFieldCreateManyFormInput = {
    id?: number
    name?: string
    description?: string
    type: string
  }

  export type FormResponseCreateManyFormInput = {
    id?: number
  }

  export type FormFieldUpdateWithoutFormInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: FormFieldOptionUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    options?: FormFieldOptionUncheckedUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldUncheckedUpdateManyWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type FormResponseUpdateWithoutFormInput = {

  }

  export type FormResponseUncheckedUpdateWithoutFormInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FormResponseUncheckedUpdateManyWithoutResponsesInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FormFieldOptionCreateManyForm_fieldInput = {
    id?: number
  }

  export type FormFieldOptionUpdateWithoutForm_fieldInput = {

  }

  export type FormFieldOptionUncheckedUpdateWithoutForm_fieldInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type FormFieldOptionUncheckedUpdateManyWithoutOptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}