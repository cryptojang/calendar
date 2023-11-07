const DataCard = ({ date, todos }) => {
  return (
    <li className="bg-gray-50 w-32 shadow-xl h-32 flex flex-col rounded-lg">
      <div
        className={`bg-blue-300 ${date % 7 === 4 && "bg-orange-300"} ${
          date % 7 === 5 && "bg-red-300"
        } p-2 rounded-t-lg`}
      >
        {date}
      </div>
      <div className=" grow p-2">
        {todos.map((v, i) => {
          return <div key={i}>{v}</div>;
        })}
      </div>
    </li>
  );
};

export default DataCard;
