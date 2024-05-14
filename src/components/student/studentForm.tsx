import { useState } from "react";
import ApiService from "../../service/apiService";
import { Toaster, toast } from "sonner";
import { Button } from "../../ui/button";
import { IClose } from "../../ui/svgs";

interface Props {
    setShowForm: (value: boolean) => void;
    refreshData: () => void;
}

export default function StudentForm({ setShowForm, refreshData }: Props) {

    const apiService = new ApiService();

    const [student, setStudent] = useState({
        name: '',
        lastName: '',
        email: '',
    })

    const handleChange = (event: any) => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });

    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await apiService.postData('student', student);
            refreshData();
            toast.success('Estudiante creado correctamente');
        } catch (error) {
            console.error('Error al crear Student', error);
            toast.error('Error al crear Student');
        }
    }

    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center bg-gray-900/95 backdrop-blur-md ">
            <form onSubmit={handleSubmit}
                className="flex flex-col w-2/6 m-auto  gap-y-4 px-8 py-6 bg-white rounded-3xl shadow-xl">

                <div className="flex justify-between">
                    <span className="text-2xl font-bold text-blue-500/70 ">My Form</span>
                    <button type="button" onClick={() => setShowForm(false)}>
                        <IClose />
                    </button>
                </div>

                <label className="relative block rounded-md border border-gray-200 px-3 pt-3 
                     focus-within:border-blue-600">

                    <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
                        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        placeholder="Nombres"
                        name="name"
                        value={student.name}
                        onChange={handleChange}
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        Nombres
                    </span>
                </label>

                <label className="relative block rounded-md border border-gray-200 px-3 pt-3 
                     focus-within:border-blue-600">

                    <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
                        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        placeholder="Apellidos"
                        name="lastName"
                        value={student.lastName}
                        onChange={handleChange}
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        Apellidos
                    </span>
                </label>


                <label className="relative block rounded-md border border-gray-200 px-3 pt-3 
                     focus-within:border-blue-600">

                    <input className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent 
                        focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={student.email}
                        onChange={handleChange}
                    />

                    <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all 
                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        Email
                    </span>
                </label>

                <div className="flex justify-center mt-2">
                    <Button type="submit">Enviar</Button>
                </div>

            </form>
            <Toaster position="top-right" />
        </div>
    );
}