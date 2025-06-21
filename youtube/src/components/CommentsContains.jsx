import Comment from "./Comment";

const CommentsContains = ({comments}) => {
    return (
        <div className="space-y-4">
            {comments.map((comment, ind) => {
                return (
                    <div key={ind} className="comment-thread">
                        {/* Main Comment */}
                        <Comment data={comment} />
                        
                        {/* Replies Section */}
                        {comment.replies && comment.replies.length > 0 && (
                            <div className="ml-12 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                                <CommentsContains comments={comment.replies} />
                            </div>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default CommentsContains;