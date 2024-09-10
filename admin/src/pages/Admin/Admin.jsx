import React from 'react'
import "./Admin.css"
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../../components/SideBar/SideBar'
import ListProduct from '../../components/ListProduct/ListProduct'
import AddProduct from '../../components/AddProduct/AddProduct'
import Orders from '../../components/Orders/Orders'
import AdminUserList from '../../components/UserList/UserList'

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />

      <Routes>
        <Route path="/" element={<AddProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/products" element={<ListProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/users" element ={<AdminUserList />} />
      </Routes>
    </div>
  )
}

export default Admin