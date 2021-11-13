import "./singlePost.css";

const SinglePost = () => {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src="https://source.unsplash.com/1600x900/?it
"
					alt=""
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet consectetur.
					<div className="singlePostEdit">
						<i className="singlePostIcon far fa-edit" />
						<i className="singlePostIcon far fa-trash-alt" />
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Ahror</b>
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
				<p className="singlePostDesc">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
					nesciunt necessitatibus, perspiciatis amet veniam pariatur deserunt!
					Molestias, repudiandae ipsum ipsa vel cumque error quidem? Incidunt
					voluptatem libero possimus sunt facere? Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Ipsum nesciunt necessitatibus,
					perspiciatis amet veniam pariatur deserunt! Molestias, repudiandae
					ipsum ipsa vel cumque error quidem? Incidunt voluptatem libero
					possimus sunt facere? Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Ipsum nesciunt necessitatibus, perspiciatis amet
					veniam pariatur deserunt! Molestias, repudiandae ipsum ipsa vel cumque
					error quidem? Incidunt voluptatem libero possimus sunt facere? Lorem
					ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nesciunt
					necessitatibus, perspiciatis amet veniam pariatur deserunt! Molestias,
					repudiandae ipsum ipsa vel cumque error quidem? Incidunt voluptatem
					libero possimus sunt facere?
				</p>
			</div>
		</div>
	);
};

export default SinglePost;
