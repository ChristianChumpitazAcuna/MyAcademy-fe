export default class AuxiliarRecordDetail {
    id: number;
    note: number;
    auxiliaryRecordId: number;

    constructor(id: number, note: number, auxiliaryRecordId: number) {
        this.id = id;
        this.note = note;
        this.auxiliaryRecordId = auxiliaryRecordId;
    }

    static fromJson(json: any): AuxiliarRecordDetail {
        return new AuxiliarRecordDetail(
            json.id,
            json.note,
            json.auxiliaryRecordId
        );
    }
}

