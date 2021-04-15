// дз  створти 2 інтупи і кнопку
// перший відповідає за ендпоінт джсон плейсхолдера (перша частина енпоніту) другий- за айдішнік  
// якщо другого ендпоінту нема- тягнемо весь список  потрібно зробити валідацію на 
// перший інпут- чи ендпоінт існуючий на другий- чи це число і чи воно в рамках 1-100  
// зробити версію на функціональній компоненті контрольовану і не контрольовану  
// якщо є час- на класовій компоненті теж таке саме написати
// inputs (for each create 2 versions- class based and functional based)
// create controlled and uncontrolled select component
// create controlled and uncontrolled checkbox
// create controlled and uncontrolled radio
import React, {useState } from 'react';
import {Posts} from './Components/Posts/Posts'
import {Users} from './Components/Users/Users'
import {Comments} from './Components/Commenst/Comments'
import {Photos} from './Components/Photos/Photos'
import {Error} from './Components/Error/Error'
import './App.css'
const url = 'https://jsonplaceholder.typicode.com'
const ValidEndpoints = [
     'posts',
     'comments',
     'photos',
     'users',
]
function App() {
    const [enterData, setEnterData] = useState({ endpoint: '', number: '', })
    const [data, setData] = useState(null)
    const [validData, setValidData] = useState(false)

    const fetchData = async () => {
        const response = await fetch(`${url}/${enterData.endpoint}/${enterData.number}`);
        setValidData(!response.ok);
        const jsonResponse = await response.json()
        response.ok && setData(jsonResponse)
    }
    
    const ShowFetchData = () => {
        ValidEndpoints.includes(enterData.endpoint) ?? (enterData.number>100||enterData.number<0)
        ? setValidData(false)
        : setValidData(true);  
        fetchData()
    }
    const ChangeEnterData = (e) => {
        setData(null)
        const { target: { value, name } } = e;
        setEnterData({ ...enterData, [name]: value })
    }
   
    return (
        <div>
            <div className={validData ? 'header backgroundRed' : 'header'}>
                <input value={enterData.endpoint} onChange={ChangeEnterData} name='endpoint' type='text' placeholder='endpoint' />
                <input value={enterData.number} onChange={ChangeEnterData} name='number' type='number' placeholder='ID' />
                <button onClick={ShowFetchData}>OK</button>
            </div>
            {validData ?<Error/>:''}
            <div>
                {enterData.endpoint === 'posts' && data && <Posts data={data} isNumberOk={enterData.number} />}
                {enterData.endpoint === 'users' && data &&  <Users data={data} isNumberOk={enterData.number}/>}
                {enterData.endpoint === 'comments' && data &&  <Comments data={data} isNumberOk={enterData.number}/>}
                {enterData.endpoint === 'photos' && data &&  <Photos data={data} isNumberOk={enterData.number}/>}
            </div>
        </div>

    )
}
export default App;