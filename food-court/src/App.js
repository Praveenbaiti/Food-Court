import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import Products from './Products';
import img1 from './images/img01.jpg';
import img2 from './images/img02.webp';
import img3 from './images/img03.jpg';
import img4 from './images/img04.jpeg';
import img5 from './images/img05.jpeg';
import img6 from './images/img06.jpeg';
import img7 from './images/img07.jpeg';
import img8 from './images/img08.avif';


function App() {
  const [search,setSearch]=useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = 'a6d543f4';
  const YOUR_APP_KEY = 'ff5fcaedd89d85864f51a7274753e904';

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData (data.hits)
    )
  }
  return (
    <div className='' >
       <center>
         <h1 className='fst-italic'>Food Court</h1><br />
         <form onSubmit={submitHandler}>
           {/* <input type="text" className='p-2' value={search} onChange={(e) => setSearch(e.target.value)} /><br /> */}
           <div className="input-group mb-3 inpt">
            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search bg-light"></i></span>
            <input type="text" className="form-control p-2" placeholder="Search"
             value={search} onChange={(e) => setSearch(e.target.value)}
             aria-label="Username" aria-describedby="basic-addon1" />
            </div>
           <input type="submit" className="btn btn-outline-danger m-3" value="Search" />

         </form>
         {data.length>=1 ? <Products data={data} />:null}
       </center>

       <div className='row text-center p-5 m-5' >
        <img className='col imagess m-3 p-2' src={img1} />
        <img className='col imagess m-3 p-2' src={img2} />
        </div>

        <div className='row text-center p-5 m-5'>
        <img className='col imagess m-3 p-2' src={img3} />
        <img className='col imagess m-3 p-2' src={img4} />
       </div>

       <div className='row text-center p-5 m-5'> 
        <img className='col imagess m-3 p-2' src={img5} />
        <img className='col imagess m-3 p-2' src={img6} />
       </div>

       <div className='row text-center p-5 m-5'> 
        <img className='col imagess m-3 p-2' src={img7} />
        <img className='col imagess m-3 p-2' src={img8} />

   
   
   
      </div>
    </div>
  );
}

export default App;
