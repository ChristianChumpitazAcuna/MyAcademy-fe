export default class AuxiliaryRecordDetailDto {
    id: number;
    student: string;
    notes: number[];

    constructor(id: number, student: string, notes: number[]) {
        this.id = id;
        this.student = student;
        this.notes = notes;
    }

    static fromJson(json: any): AuxiliaryRecordDetailDto {
        return new AuxiliaryRecordDetailDto(
            json.id,
            json.student,
            json.notes
        );
    }

}