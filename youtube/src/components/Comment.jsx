const Comment = ({data}) => {
    return (
        <div className="flex gap-3 p-4 hover:bg-gray-50 transition-colors">
            {/* Avatar */}
            <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-sm">
                        {data.name?.charAt(0)?.toUpperCase() || 'U'}
                    </span>
                </div>
            </div>
            
            {/* Comment Content */}
            <div className="flex-1 min-w-0">
                {/* Author and Timestamp */}
                <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-gray-900">
                        {data.name || 'Anonymous'}
                    </span>
                    <span className="text-xs text-gray-500">
                        {data.date ? new Date(data.date).toLocaleDateString() : 'Just now'}
                    </span>
                </div>
                
                {/* Comment Text */}
                <div className="text-sm text-gray-800 leading-relaxed">
                    {data.content || 'No content available'}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-4 mt-2">
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        Like
                    </button>
                    <button className="flex items-center gap-1 text-gray-500 hover:text-gray-700 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Dislike
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 text-sm">
                        Reply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comment;