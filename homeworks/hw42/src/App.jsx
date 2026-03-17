import { useEffect, useState } from "react";
import Post from "./components/Post.jsx";

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await res.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="posts">
            <ul className="posts__list">
                {posts.map(post => (
                    <Post key={post.id} data={post} />
                ))}
            </ul>
        </div>
    );
}

export default App;