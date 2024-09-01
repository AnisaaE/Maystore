import React from 'react'
import "./Admin.css"
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/SideBar/SideBar'
import ListProduct from '../../components/ListProduct/ListProduct'
import AddProduct from '../../components/AddProduct/AddProduct'

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />

      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/allproducts" element={<ListProduct />} />
      </Routes>
    </div>
  )
}

export default Admin