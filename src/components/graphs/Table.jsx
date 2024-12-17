




const data = [
  { rank: 1, name: "John Doe", scores: "$5,000" },
  { rank: 2, name: "Jane Smith", scores: "$3,200" },
  { rank: 3, name: "Alice Johnson", scores: "$1,500" },
  { rank: 4, name: "Bob Brown", scores: "$4,800" },
];

export default function Table() {
  return (
    <div className="p-6 font-sans ">
      <h2 className="text-xl font-semibold mb-4">Rankings</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Rank</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Scores</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.rank} className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 text-center">
                {item.rank}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2 text-right">
                {item.scores}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
