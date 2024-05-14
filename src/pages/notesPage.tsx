import { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import ShowTable from "../components/auxiliaryRecordDetail/showTable";
import AuxiliaryRecordDetailDto from "../dto/auxiliarRecordDetailDto";
import HeaderNotesPage from "./headerNotesPage";

export default function NotesPage() {
    const apiService = new ApiService();
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await apiService.getData('auxiliaryRecordDetail/actives');
        const recordNotes = response.map((datos: any) => AuxiliaryRecordDetailDto.fromJson(datos))
        setData(recordNotes);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className="w-5/6 flex flex-col items-center justify-evenly">
            <HeaderNotesPage />
            <ShowTable datos={data} />
        </section>
    );
}