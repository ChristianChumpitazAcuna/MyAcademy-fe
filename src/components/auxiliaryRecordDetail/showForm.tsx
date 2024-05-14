import { useState } from "react";
import ApiService from "../../service/apiService";
import { toast } from "sonner";
import AuxiliaryRecordDto from "../../dto/auxiliarRecordDto";
import Select from "react-tailwindcss-select";
import { Option, SelectValue } from "react-tailwindcss-select/dist/components/type";
import { Button } from "../../ui/button";

interface Props {
    combo: AuxiliaryRecordDto[];
}

export default function ShowForm({ combo }: Props) {
    const apiService = new ApiService();

    const options: Option[] = combo.map((item) => ({
        value: item.id.toString(),
        label: `${item.student}`
    }));

    const [selectedValues, setSelectedValues] = useState<SelectValue | null>(null);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const selectedIds = Array.isArray(selectedValues) ? selectedValues.map((value: any) => value.value) : [];
            const bulkData = selectedIds.map((id: number) => ({ auxiliaryRecordId: id }));

            const response = await apiService.postBulkData('auxiliaryRecordDetail', bulkData);
            console.log(response);
            toast.success('Registros guardados correctamente');
        } catch (error) {
            console.error(error);
            toast.error('Error al guardar los registros');
        }
    };

    return (
        <div className="w-1/2">
            <form className="w-full flex flex-row px-6 py-4 gap-x-2 text-white dark:text-gray-400 bg-white dark:bg-gray-800 
            shadow-md  rounded-3xl"
                onSubmit={handleSubmit} >

                <Select classNames={{
                    menuButton() {
                        return `flex flex-row bg-slate-50 dark:bg-gray-700 text-gray-400 rounded-lg px-2 text-sm`;
                    },
                    menu: "absolute z-10 w-full bg-white dark:bg-gray-700  shadow-lg rounded-b-lg py-1 mt-1.4 text-sm",
                }}
                    value={selectedValues}
                    onChange={(value: SelectValue) => setSelectedValues(value)}
                    options={options}
                    isMultiple={true}
                    isClearable={true}
                    placeholder="Selecciona registros"
                    primaryColor="blue"
                    isSearchable
                />

                <Button type="submit"
                >
                    Registrar
                </Button>
            </form>
        </div>
    );
}
