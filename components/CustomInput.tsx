import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path } from "react-hook-form";

interface CustomInputProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    type?: 'text' | 'email' | 'password' | 'file';
}

// Ensure the component name is CustomInput to avoid clashing with the FormField tag below
const CustomInput = <T extends FieldValues>({
                                                control,
                                                name,
                                                label,
                                                placeholder,
                                                type = "text"
                                            }: CustomInputProps<T>) => (
    <FormField
        control={control}
        name={name}
        render={({ field }) => ( // This 'render' function is what was missing!
            <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="label">{label}</FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl>
                        <Input
                            placeholder={placeholder}
                            type={type}
                            className="input-class"
                            {...field}
                        />
                    </FormControl>
                    <FormMessage className="form-message mt-2" />
                </div>
            </FormItem>
        )}
    />
);

export default CustomInput;