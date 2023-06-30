import { FormControl, FormLabel, Select } from '@chakra-ui/react'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

export interface ISelectOptions {
    value: string | number;
    title: string;
}

interface ISelectComponentProps {
   options: ISelectOptions[];
   currentValue: string | number | undefined;
   setNewValue: Dispatch<SetStateAction<string>>;
   label?: string;
   size?: 'xs' | 'sm' | 'md' | 'lg';
   placeholder?: string;
   variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
}

const SelectComponent = ({ options, currentValue, setNewValue, label, size, placeholder, variant }: ISelectComponentProps) => {
    const [value, setValue] = useState<string | number | undefined>(currentValue ?? '');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue(event.target.value);
        setNewValue(event.target.value);
    };

    return (
        <FormControl id={`selectComponentFormControl${label}`}>
            { label && <FormLabel id={`selectComponentLabel${label}`}>{label}</FormLabel>}
            <Select 
                value={value}
                onChange={handleChange}
                placeholder={placeholder} 
                size={size ?? 'md'} 
                variant={variant ?? 'outline'} 
                id={`selectComponent${label}`}
            >
                { options.map(({ value, title }) => <option key={value} value={value}>{title}</option>) }
            </Select>
        </FormControl>
    );
}

export default SelectComponent;
