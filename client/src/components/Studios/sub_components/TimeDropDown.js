import React, {Component} from 'react';



const TimeDropDown =({col, label})=>(
    <div className={col}>
        <label htmlFor={label}>{label}</label>
<select class="form-control" id="checkIn" name="checkin"><option value="0">12:00 AM</option>
<option value="1800">12:30 AM</option>
<option value="3600">01:00 AM</option><option value="5400">01:30 AM</option>
<option value="7200">02:00 AM</option><option value="9000">02:30 AM</option>
<option value="10800">03:00 AM</option><option value="12600">03:30 AM</option>
<option value="14400">04:00 AM</option><option value="16200">04:30 AM</option>
    <option value="18000">05:00 AM</option><option value="19800">05:30 AM</option>
    <option value="21600">06:00 AM</option><option value="23400">06:30 AM</option>
    <option value="25200">07:00 AM</option><option value="27000">07:30 AM</option>
    <option value="28800">08:00 AM</option><option value="30600">08:30 AM</option>
    <option value="32400">09:00 AM</option><option value="34200">09:30 AM</option>
    <option value="36000">10:00 AM</option><option value="37800">10:30 AM</option>
    <option value="39600">11:00 AM</option><option value="41400">11:30 AM</option>
    <option value="43200">12:00 PM</option><option value="45000">12:30 PM</option>
    <option value="46800">01:00 PM</option><option value="48600">01:30 PM</option>
    <option value="50400">02:00 PM</option><option value="52200">02:30 PM</option>
    <option value="54000">03:00 PM</option>
    <option value="55800">03:30 PM</option>
    <option value="57600">04:00 PM</option>
    <option value="59400">04:30 PM</option>
    <option value="61200">05:00 PM</option><option value="63000">05:30 PM</option><option value="64800">06:00 PM</option>
    <option value="66600">06:30 PM</option><option value="68400">07:00 PM</option><option value="70200">07:30 PM</option>
    <option value="72000">08:00 PM</option><option value="73800">08:30 PM</option><option value="75600">09:00 PM</option>
    <option value="77400">09:30 PM</option><option value="79200">10:00 PM</option><option value="81000">10:30 PM</option>
    <option value="82800">11:00 PM</option><option value="84600">11:30 PM</option>
    </select>
    </div>)

    export default TimeDropDown;