const Button = ({name})=>
    {
        return (
            <button className="bg-gray-400 text-black px-4 py-2 mx-2 my-1 rounded-lg font-semibold shadow hover:bg-gray-800 hover:text-white transition cursor-pointer">{name}</button>
        )
    }

export default Button;