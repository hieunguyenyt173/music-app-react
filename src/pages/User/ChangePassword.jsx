import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useUpdateUserMutation } from '../../redux/services/userApi'
import isEmpty from 'validator/lib/isEmpty'

function ChangePassword() {
    const [userName, setUsername] = useState("")
    const [password, setPassword] =  useState("")
    const [newPassword, setNewPassword] =  useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [validationMsg, setValidationMsg] = useState({})
    const {user} = useSelector((state) => state.user)
    const [updateUser] = useUpdateUserMutation()
    console.log(user)
    const validate = () => {
      const msg = {}
      if(isEmpty(userName)) {
        msg.userName = "Vui lòng nhập tên đăng nhập"
      }
      if(isEmpty(password)) {
        msg.password = "Vui lòng nhập mật khẩu"
      }
      if(isEmpty(newPassword)) {
        msg.newPassword = "Vui lòng nhập mật khẩu mới"
      }
      if(isEmpty(confirmPassword)) {
        msg.confirmPassword = "Vui lòng nhập mật khẩu mới"
      }
      if(newPassword !== confirmPassword) {
        msg.confirmPassword = "Xác nhận mật khẩu không chính xác"
      }
      setValidationMsg(msg);
      if(Object.keys(msg).length > 0) return false;
      return true;
    }
    const onSubmitChangePassword = () => {
        const isValid = validate()
        if(!isValid) return;
        if(!(userName === user.userName && password === user.password)){
            alert("Tài khoản hoặc mật khẩu không chính xác")
            return;
        }
        const newPassWordUpdate = {...user, password: newPassword}
        updateUser(newPassWordUpdate)
        alert("Đổi mật khẩu thành công")
        setUsername("")
        setConfirmPassword("")
        setNewPassword("")
        setPassword("")
    } 
    return (
    <div className='lg:container mx-auto px-12 mb-10'>
        <div className="bg-white p-8 rounded-md w-full max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-center heading  text-sky-600">Đổi mật khẩu</h1>
        <form className="mt-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Tên tài khoản
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="text-xs text-red-400 italic">{validationMsg.userName}</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Mật khẩu cũ
              </label>
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-red-400 italic">{validationMsg.password}</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Mật khẩu mới
              </label>
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <p className="text-xs text-red-400 italic">{validationMsg.newPassword}</p>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor="newpassword"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Xác nhận mật khẩu
              </label>
            </div>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <p className="text-xs text-red-400 italic">{validationMsg.confirmPassword}</p>

          </div>

          <div className="mt-6">
            <button 
            type="button"
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={onSubmitChangePassword}
            >
             Xác nhận
            </button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default ChangePassword