import Home from './components/home/Home';

export const routes = {
	home: {
		view: Home,
		meta: {
			path: "/"
		}
	},
	posts: {
		view: Home,
		meta: {
			path: "/posts"
		}
	},
	// singlePost: {
	// 	view: SinglePost,
	// 	meta: {
	// 		path: "/posts/:id"
	// 	}
	// }
}
