import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
function Profile() {
    const {listUser} = useSelector((state) => state.user)
   const {userId} = useParams()
   const userProfile = listUser?.find((user) => user.id === +userId)
  const handleUpdateUser = () => {

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
              value={userProfile?.info?.fullname}
              // onChange={(e) => setUsername(e.target.value)}
            />
            {/* <p className="text-xs text-red-400 italic">{validationMsg.userName}</p> */}
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
              value={userProfile?.info?.email}
              // onChange={(e) => setPassword(e.target.value)}
            />
            {/* <p className="text-xs text-red-400 italic">{validationMsg.password}</p> */}
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
              value={userProfile?.info?.address}
              // onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <p className="text-xs text-red-400 italic">{validationMsg.confirmPassword}</p> */}

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
              value={userProfile?.info?.phone}
              // onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {/* <p className="text-xs text-red-400 italic">{validationMsg.confirmPassword}</p> */}

          </div>
          <div className="mt-6">
            <button 
            type="button"
            className="p-3 rounded-lg hover:bg-sky-700 text-slate-100 bg-sky-600"
            // onClick={onSubmit}
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