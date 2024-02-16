import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export function TimerPick() {
  return (
    <>
      <style>{`.MuiInputBase-input{
        height:2.5rem;
        padding:0rem 0.5rem;
      }`}</style>

    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DemoContainer  components={['TimePicker']}>
        <TimePicker  label=''  sx={{height:"auto", backgroundColor:"white", scrollbarHeight:"none"}}   />
      </DemoContainer>
    </LocalizationProvider>
    </>
  );
}