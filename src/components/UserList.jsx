import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/16/solid';

const UserList = () => {
  // Sample data
  const users = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    family: i % 2 === 0 ? 'Rutikanga' : 'Muhire',
    status: i % 3 === 0 ? 'Inactive' : 'Active',
    lastLogin: `2024-11-${i + 1}`,
  }));

  // State for pagination
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const currentUsers = users.slice(offset, offset + itemsPerPage);

  // Pagination handler
  const handlePageClick = ({ selected }) => setCurrentPage(selected);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700 font-sans text-sm tracking-wide text-left items-center ">
              <th className="py-2 px-4">User ID</th>
              <th className="py-2 px-4">Full Name</th>
              <th className="py-2 px-4">Family</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody >
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-b font-sans text-sm items-center justify-items-end ">
                <td className="py-2 px-4">{user.id}</td>
                <div className='flex flex-col ' >
                <td className="pt-2 px-4">{user.name}</td>
                <td className="pb-2 px-4">{user.email}</td>
                </div>
                <td className="py-2 px-4">{user.family}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-1 rounded ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="py-2 px-4 flex space-x-2 items-center ">
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <PencilSquareIcon className='w-5 h-5' />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className='w-5 h-5' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={Math.ceil(users.length / itemsPerPage)}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4"
        pageClassName="mx-1"
        activeClassName="text-white bg-blue-500 rounded"
        breakClassName="mx-1"
        previousClassName="text-blue-500"
        nextClassName="text-blue-500"
      />
    </div>
  );
};

export default UserList;

