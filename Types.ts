const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42345
const float: number = 2.4456
const num: number = 3e10e

const message: string = 'HelloTypescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['Hello', 'Typescript']

//Tuple
const contact: [string, number] = ['Nata', 1234567]

//Any
let variable: any = 42
//..
variable = 'new string'



function sayMyName(name: string): void {
    console.log(name)
}
sayMyName( name: 'Хайзенберг')

//Never

function throwError(message: string): never {

    throw new Error(message)

}

//Type
type Login = string

const login Login = 'admin' 

type ID = string | number

const id1: ID = 1234
const id2: ID = '1233'


type SomeType = string | null | undefined 

