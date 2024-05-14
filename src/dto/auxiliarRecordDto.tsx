export default class AuxiliaryRecordDto {
    id: number;
    course: string;
    competence: string;
    student: string;

    constructor(id: number, course: string, competence: string, student: string) {
        this.id = id;
        this.course = course;
        this.competence = competence;
        this.student = student;
    }

    static fromJson(json: any): AuxiliaryRecordDto {
        return new AuxiliaryRecordDto(
            json.id,
            json.course,
            json.competence,
            json.student
        );
    }
}