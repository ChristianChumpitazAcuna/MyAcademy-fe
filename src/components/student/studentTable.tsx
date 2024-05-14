import Student from "../../model/student";

interface Props {
    students: Student[];
}

export default function StudentTable({ students }: Props) {
    return (
        <div className="max-w-fit h-auto p-4 rounded-3xl shadow-2xl bg-white dark:bg-gray-800">

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-6 py-3">
                            Name
                        </th>
                        <th className="px-6 py-3">
                            Last Name
                        </th>
                        <th className="px-6 py-3">
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                            <td className="px-6 py-4 dark:text-white">
                                {student.name}
                            </td>
                            <td className="px-6 py-4 dark:text-white">
                                {student.lastName}
                            </td>
                            <td className="px-6 py-4 dark:text-white">
                                {student.email}
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    );
}