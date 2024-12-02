import React, { useState } from "react";
import "./Trade.css";

const Trade = () => {
  const [commentText, setCommentText] = useState("");
  const [commentImage, setCommentImage] = useState(null); // Trạng thái lưu ảnh tải lên
  const [comments, setComments] = useState([]); // Danh sách bình luận

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCommentImage(URL.createObjectURL(file)); // Tạo URL tạm thời cho ảnh
    }
  };

  const handleAddComment = () => {
    if (commentText) {
      const newComment = {
        text: commentText,
        image: commentImage,
      };
      setComments([...comments, newComment]);
      setCommentText("");
      setCommentImage(null); // Reset lại ảnh sau khi thêm bình luận
    }
  };

  return (
    <div className="trade-container">
      <h2>Phần Bình Luận</h2>

      {/* Phần bình luận */}
      <div className="comment-section">
        <textarea
          className="comment-textarea"
          placeholder="Viết bình luận của bạn..."
          value={commentText}
          onChange={handleCommentChange}
        ></textarea>

        {/* Input cho ảnh */}
        <input
          type="file"
          className="comment-image-input"
          onChange={handleImageChange}
        />

        <button className="comment-button" onClick={handleAddComment}>
          Thêm bình luận
        </button>
      </div>

      {/* Hiển thị danh sách bình luận */}
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div className="comment-card" key={index}>
            <p>{comment.text}</p>
            {comment.image && (
              <img
                src={comment.image}
                alt="Comment"
                className="comment-image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
