/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ADD_NEW_CATEGORY } from '../../../redux/constants/categories.constant'
const CatergoryAddEdit = () => {
  const initState={
    name:"",
    status:'0',
    image:""
  }
  const dispatch=useDispatch();
  const [data,setData]=useState(initState);
  // const {name,state,image}=data;
  const handleInputChange=(event)=>{
    console.log(event.target.name)
    setData((prevState)=>({
     ...prevState,
     [event.target.name]:event.target.value
    }))
  }
  const submit=(event)=>{
    event.preventDefault();
    console.log(data)
    dispatch({
      type: ADD_NEW_CATEGORY,
      payload: data,
    });
    setData(initState)
  }
  return (
    <div>
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Category add</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">admin</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Category</a>
          </li>
          <li className="breadcrumb-item active text-white">Category Add</li>
        </ol>
      </div>


      <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="mb-0">Category List</h2>
                <Link to="/admin/category">
                  <button className="btn btn-primary">Back</button>
                </Link>
              </div>
      <form onSubmit={submit}>
        {/* Category Name */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={data.name}
            onChange={handleInputChange} 
            required
          />
        </div>

        {/* Status Select */}
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            name="status"

            value={data.status}
            defaultValue={'0'}
            onChange={handleInputChange} 
            required
          >
            <option value='1'>Active</option>
            <option value='0'>Inactive</option>
          </select>
        </div>

        {/* Image Upload */}
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Upload Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            accept="image/*"
           
        
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>

    </div>
  )
}

export default CatergoryAddEdit
