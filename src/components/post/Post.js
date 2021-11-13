import "./post.css";

const Post = () => {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://source.unsplash.com/weekly?developer"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quos,
				adipisci tempora veniam nobis, sapiente architecto reprehenderit velit
				soluta ad odit sit obcaecati quasi officia laboriosam perspiciatis
				tempore dicta ut.Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Pariatur quos, adipisci tempora veniam nobis, sapiente architecto
				reprehenderit velit soluta ad odit sit obcaecati quasi officia
				laboriosam perspiciatis tempore dicta ut.
			</p>
		</div>
	);
};

export default Post;
