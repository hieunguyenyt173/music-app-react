import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useUpdateUserMutation } from '../../redux/services/userApi'
function Profile() {
  const [updateUser] = useUpdateUserMutation()
    const {listUser} = useSelector((state) => state.user)
    const {userId} = useParams()
    const userProfile = listUser?.find((user) => user.id === +userId)
    const [fullname,setFullName] = useState(userProfile?.info?.fullname)
    const [address,setAddress] = useState(userProfile?.info?.address)
    const [phone,setPhone] = useState(userProfile?.info?.phone)
    const [email,setEmail] = useState(userProfile?.info?.email)
   
  const handleUpdateUser = () => {
      const newUpdate = {...userProfile, info: {
        fullname, address, phone, email
      }}
      updateUser(newUpdate)
      alert("Cập nhật thông tin thành công")
  }
 
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
    <div className=" p-8 rounded-md w-full max-w-3xl mx-auto">
            <div className='w-60 h-60 mx-auto rounded-full overflow-hidden'>
                <img 
                className='w-full h-full object-cover'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU" alt="" />
            </div>
           
            <form className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Họ và Tên
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
            />
            
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
            </div>

            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
           
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="text"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Địa chỉ
              </label>
            </div>

            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            

          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="phone"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Số điện thoại
              </label>
            </div>

            <input
              type="phone"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            

          </div>
          <div className="mt-6 flex justify-center">
            <button 
            type="button"
            className="p-3 rounded-lg hover:bg-sky-700 text-slate-100 bg-sky-600 mx-3"
            onClick={handleUpdateUser}
            >
             Cập nhật thông tin
            </button>
            
          </div>
          </form>
             
    </div>
    </div>
  )
}

export default Profile