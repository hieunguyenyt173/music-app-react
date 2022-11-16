import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetUserQuery, useRemoveUserMutation } from '../../redux/services/userApi'
import Loader from '../../components/Loader'
function ListUser() {
	const[value,setValue] = useState("")
	const {isFetching} = useGetUserQuery();
	const {listUser} = useSelector((state) => state.user)
	const [removeUser] = useRemoveUserMutation()
	
	 
	 
	if(isFetching) {
		return (
			<Loader title="Loading..." />
		)
	}
	const handleRemoveUser = (id) => {
		removeUser(id)
	}
	const handleFilter = () => {
		let dataFilter = [...listUser]
		if(value) {
			dataFilter = dataFilter?.filter((user) => user.userName.toLowerCase().includes(value.toLowerCase()))
			
		}
		
		return dataFilter;
	}
	const renderList = handleFilter()
  return (
    <div className='lg:container mx-auto px-12 mb-10'>
        <div className=" p-8 rounded-md w-full">
	<div className=" flex items-center justify-between pb-6">
		<div>
			<h2 className="text-3xl font-semibold text-center heading  text-sky-600">Danh sách user</h2>
			<span className="text-xs">Tất cả user</span>
		</div>
		<div className="flex items-center justify-between">
			<div className="flex bg-gray-50 items-center p-2 rounded-md" >
				<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
					fill="currentColor"
					onClick={handleFilter}>
					<path fillRule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clipRule="evenodd" />
				</svg>
				<input 
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className="bg-gray-50 outline-none ml-1 block " 
				type="text" 
				name="" id="" 
				placeholder="Tìm kiếm..."/>
          </div>
				<div className="lg:ml-40 ml-10 space-x-8">
					<Link to="/admin/them-user">
                    <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Tạo user</button>
                    </Link>
				</div>
			</div>
		</div>
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
					<table className="min-w-full leading-normal">
						<thead>
							<tr>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									User
								</th>
                                
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Tài khoản
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Ngày tạo
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									ID
								</th>
								<th
									className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
									Xóa User
								</th>
							</tr>
						</thead>
						<tbody>
							{renderList && renderList.map((user) => (
								<tr key={user.id}>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className="flex items-center">
										<div className="flex-shrink-0 w-10 h-10">
											<img className="w-full h-full rounded-full"
                                                src={user?.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwWMJbZoZ26ZyYB8M-1e7OLBVUWXRLNSO6A&usqp=CAU"}
                                                alt="" />
                                        </div>
											<div className="ml-3">
												<Link to={`/users/${user?.id}`}>

												<p className="text-gray-900 whitespace-no-wrap hover:text-sky-600">
													{user.userName}
												</p>
												
												</Link>
											</div>
										</div>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">{user.account}</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										{user?.createAt}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<p className="text-gray-900 whitespace-no-wrap">
										{user?.id}
									</p>
								</td>
								<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
									<div className='w-7 h-7 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center group hover:bg-red-600 cursor-pointer' onClick={(e) => handleRemoveUser(user?.id)}>
									<i className="ri-close-fill group-hover:text-slate-100"></i>
									</div>
								</td>
							</tr>
							))}
							
						</tbody>
					</table>
					
				</div>
			</div>
		</div>
	</div>
    </div>
  )
}

export default ListUser