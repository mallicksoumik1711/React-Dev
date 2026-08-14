import { useState } from "react";

function ObjectManipulation() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Batman",
      description: "Knight",
      liked: false,
    },
    {
      id: 2,
      title: "Superman",
      description: "Man of Steel",
      liked: false,
    },
    {
      id: 3,
      title: "Spider-Man",
      description: "Friendly Neighborhood Hero",
      liked: false,
    },
    {
      id: 4,
      title: "Iron Man",
      description: "Genius Billionaire",
      liked: false,
    },
    {
      id: 5,
      title: "Thor",
      description: "God of Thunder",
      liked: false,
    },
    {
      id: 6,
      title: "Hulk",
      description: "Green Giant",
      liked: false,
    },
    {
      id: 7,
      title: "Captain America",
      description: "Super Soldier",
      liked: false,
    },
    {
      id: 8,
      title: "Flash",
      description: "Fastest Man Alive",
      liked: false,
    },
    {
      id: 9,
      title: "Aquaman",
      description: "King of Atlantis",
      liked: false,
    },
    {
      id: 10,
      title: "Wonder Woman",
      description: "Amazon Warrior",
      liked: false,
    },
  ]);

  const likeHandler = (id) => {
    // console.log(id);
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        id === post.id ? { ...post, liked: !post.liked } : post,
      ),
    );
  };
  return (
    <>
      <div className="flex flex-wrap gap-10 p-10">
        {posts.map((post) => (
          <div
            key={post.id}
            className={`w-fit px-6 py-3 rounded-md ${post.liked ? "bg-green-900" : "bg-zinc-900"}`}
          >
            <h1 className="text-4xl mb-2">{post.title}</h1>
            <p className="mb-6">{post.description}</p>
            <button onClick={() => likeHandler(post.id)} className="pr-6">
              Like
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ObjectManipulation;
