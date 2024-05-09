import {useState} from 'react';
import { Form } from 'react-router-dom';
 
export default function  Newrecipe()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
<Form action='/'>
    <div>
	<label>Title:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label><br></br>
    <label>Description:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label><br></br>
    <label>Ingredients:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label><br></br>
    <label>Directions:
	<input  type="text"  value={inputValue} onChange={handleChange} />
	</label><br></br>

    <button type="submit">Submit</button>
	</div>
</Form>


)}