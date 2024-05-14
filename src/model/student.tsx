export default class Student{
    id: number
    name: string
    lastName: string
    email: string
    status: string

    constructor(id: number, name: string, lastName: string, email: string, status: string){
        this.id = id
        this.name = name
        this.lastName = lastName
        this.email = email
        this.status = status
    }

    static fromJson(json: any): Student {
        return new Student(
            json.id,
            json.name,
            json.lastName,
            json.email,
            json.status
        )
    }
}