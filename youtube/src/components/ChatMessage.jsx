const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer flex-col-reverse">
            {/* Profile Photo */}
            <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">
                        {name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                </div>
            </div>

            {/* Username and Message */}
            <div className="flex items-baseline gap-2">
                <span className="font-semibold text-sm text-gray-500">
                    {name || 'Anonymous'}
                </span>
                <span className="text-sm text-gray-800">
                    {message || '...'}
                </span>
            </div>
        </div>
    );
}

export default ChatMessage;