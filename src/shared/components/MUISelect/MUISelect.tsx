import styles from './Select.module.scss';
import {MenuItem, Select} from "@mui/material";
import {Control, Controller} from "react-hook-form";
import React from "react";

interface Field {
  value: string,
  label?: string
}

interface SelectProps {
  control: Control, // useForm react-hook-form control
  setSelectedValue: (data: string) => void, // data for input placeholder
  fields: Field[]
}

export const MUISelect = ({control, setSelectedValue, fields}: SelectProps) => (
  <div className={styles.select}>
    <Controller
      name="choiceConnectionType"
      render={({field}) => {
        setTimeout(() => setSelectedValue(field.value));

        return (
          <Select
            {...field}
          >
            {
              fields.map(({value, label}, i) => {
                if (i === 0) {
                  return <MenuItem key={value} value={value} selected={true}>{label}</MenuItem>
                }

                return <MenuItem key={value} value={value}>{label}</MenuItem>
              })

            }
          </Select>
        )
      }}
      control={control}
      defaultValue={fields[0].value}
    />
  </div>
);
