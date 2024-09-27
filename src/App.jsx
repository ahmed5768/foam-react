import { useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState(
    {
    name: "",
    fName: "",
    email: "",
    password: "",
    gender: "",
  },
)
const [tableData, setTableData] = useState([])
  const user = (e) => {
    const {name, value} = e.target;
    setData((prev) => {
      return{...prev, [name]: value}
    })
    
  
  }
  function submit(e){
    e.preventDefault();
    setTableData([...tableData, data])
  }
  return (
    <>
    <form action="">
     <h2>Name</h2><input type="text" name='name' onChange={user}/>
     <h2>Father Name</h2><input type="text" name='fName' onChange={user} />
     <h2>Email</h2><input type="email " name='email' onChange={user} />
     <h2>Password</h2><input type="password" name='password' onChange={user} />
     <h2>male</h2>
     <input type="radio" value="Male" name="gender" id="" onChange={user} />
     <h2>female</h2>
     <input type="radio" value="Female" name="gender" id="" onChange={user} />
     <br />
     <button onClick={submit}>Submit</button>
     </form>
     <div className="container">

  <ul className="responsive-table">
    <li className="table-header">
      <div className="col col-1">Name</div>
      <div className="col col-2">Father Name</div>
      <div className="col col-3">Email</div>
      <div className="col col-4">Password</div>
      <div className="col col-4">Gender</div>
    </li>
 

{tableData.map((item, index) => (
      <li key={index} className="table-row">
        <div className="col col-1" data-label="Job Id">
          {item.name}
        </div>
        <div className="col col-2" data-label="Customer Name">
          {item.fName}
        </div>
        <div className="col col-3" data-label="Amount">
          {item.email}
        </div>
        <div className="col col-4" data-label="Payment Status">
          {item.password}
        </div>
        <div className="col col-4" data-label="Payment Status">
          {item.gender}
        </div>
      </li>
    ))}
   
  </ul>
</div>

    </>
  )
}

export default App
