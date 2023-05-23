import { Stack, TextField } from "@mui/material";
import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
export const MuiDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [time, setTime] = useState<Date | null>(null);
  const [dateTime, setDateTime] = useState<Date | null>(null);
  console.log(dateTime);

  return (
    <Stack spacing={4} sx={{ width: "250px" }}>
      <DatePicker
        label="Date Picker"
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
      <TimePicker
        label="Time Picker"
        value={time}
        onChange={(newValue) => setTime(newValue)}
      />
      <DateTimePicker
        label="Date Time Picker"
        value={dateTime}
        onChange={(newValue) => setDateTime(newValue)}
      />
    </Stack>
  );
};
