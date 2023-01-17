import React, {useState} from 'react';
import {Typography, Container, Divider, Button, Input} from "@mui/material";
import {useForm} from "react-hook-form";
import {MUISelect} from "shared/components/MUISelect";

const connectionTypesSelectFields = [
  {
    value: "phone", label: "Телефон"
  },
  {
    value: "sip", label: "SIP"
  },
];


export const GeneralSettingsForm = () => {
  const {control, register, handleSubmit} = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [selectValue, setSelectValue] = useState<string>("phone");

  const placeholder = selectValue === "phone" ? "+7(___)___-__-__" : "sip1@pbx123.mangosip.ru";

  return (
    <Container>
      <Typography component="h1">
        Виджет для сайта telezon.ru
      </Typography>
      <Divider/>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label style={{marginTop: 10, display: "block"}}>Укажите номер телефона для приема звонков от клиентов</label>
        <div style={{marginTop: 10, display: "flex", gap: 10}}>
          <MUISelect control={control} setSelectedValue={setSelectValue} fields={connectionTypesSelectFields} />
          <Input {...register("phoneNumber")} placeholder={placeholder}/>
          <Input {...register("fullName")} placeholder="Иванов Иван"/>
        </div>
        <Button type="submit" variant="outlined" sx={{marginTop: 5}}>
          Дальше
        </Button>
      </form>
    </Container>
  );
};
