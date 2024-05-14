import { useEffect, useState } from "react";
import ApiService from "../service/apiService";
import Student from "../model/student";
import StudentTable from "../components/student/studentTable";
import StudentForm from "../components/student/studentForm";
import { Button } from "../ui/button";

export default function StudentPage() {
    const apiService = new ApiService();
    const [data, setData] = useState<Student[]>([]);
    const [showForm, setShowForm] = useState(false);


    const fetchData = async () => {
        const response = await apiService.getData('student/actives');
        const students = response.map((student: any) => Student.fromJson(student));
        setData(students);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className="w-5/6 flex flex-col items-baseline gap-y-2 mt-4">
            <Button onClick={() => setShowForm(true)}
                className="text-white">
                Formulario
            </Button>

            {showForm &&
                <StudentForm setShowForm={setShowForm}  refreshData={fetchData} />
            }
            <StudentTable students={data}/>
        </section>
    );

}