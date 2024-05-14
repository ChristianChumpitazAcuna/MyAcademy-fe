import { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import AuxiliaryRecordDto from "../dto/auxiliarRecordDto";
import ShowForm from "../components/auxiliaryRecordDetail/showForm";

export default function HeaderNotesPage() {
    const apiService = new ApiService();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await apiService.getData('auxiliaryRecord/actives');
        const recordNotes = response.map((datos: any) => AuxiliaryRecordDto.fromJson(datos))
        setData(recordNotes);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <ShowForm combo={data} />
    );
}