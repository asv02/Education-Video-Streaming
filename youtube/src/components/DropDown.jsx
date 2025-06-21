const DropDown = ({ list }) => {
    return (
        <div className="absolute bg-white shadow-lg rounded-3xl py-2 z-50 mt-2 min-w-[150px] border border-gray-200">
            <ul>
                {list.map((res, idx) => (
                    <li
                        key={idx}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${idx !== list.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                        {res}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropDown;