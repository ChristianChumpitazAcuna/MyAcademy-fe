import AuxiliaryRecordDetailDto from '../../dto/auxiliarRecordDetailDto';

interface Props {
    datos: AuxiliaryRecordDetailDto[];
}

export default function ShowTable({ datos }: Props) {

    const maxNotes = Math.max(...datos.map(student => Object.keys(student.notes).length));

    return (
        <div className="max-w-fit h-auto p-4 rounded-3xl shadow-2xl bg-white dark:bg-gray-800">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">ID</th>
                        <th className="px-6 py-3">Estudiante</th>

                        {Array.from({ length: maxNotes }, (_, index) => (
                            <th key={index} className="px-6 py-3">Nota</th>
                        ))}

                    </tr>
                </thead>

                <tbody>

                    {datos.map((student, index) => (
                        <tr key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td className="px-6 py-4 dark:text-white">{student.id}</td>
                            <td className="px-6 py-4 dark:text-white">{student.student}</td>

                            {Object.values(student.notes).map((note, index) => (
                                <td key={index} className="px-6 py-4 dark:text-white">{note}</td>
                            ))}

                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    );
}