import React, {useState} from 'react';
import DatePicker from "react-datepicker";

const CustomDatePicker = () => {
    const RenderDatePicker = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
        );
    };
    return <>
        {RenderDatePicker()}
    </>
}
export default CustomDatePicker;
