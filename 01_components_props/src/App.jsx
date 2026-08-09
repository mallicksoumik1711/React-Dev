import "./App.css";
import Card from "./components/Card";

function App() {
  const objects = [
    {
      img: "https://images.unsplash.com/photo-1588860939994-ce4f7a537f03?w=600&auto=format&fit=crop&q=60",
      status: "online",
      dotColor: "green",
      name: "Mr. Bruce Wayne",
      title: "The Dark Knight",
      rating: 4.85,
      distance: 16.8,
      location: "Gotham, Dallas, United States",
      skills: [
        { date: "05 Dec", kills: 112 },
        { date: "06 Dec", kills: 102 },
        { date: "15 Dec", kills: 11 },
        { date: "25 Dec", kills: "None" },
        { date: "5 Jan", kills: "None" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60",
      status: "online",
      dotColor: "green",
      name: "Mr. Peter Parker",
      title: "Spider-Man",
      rating: 4.92,
      distance: 8.4,
      location: "Queens, New York, United States",
      skills: [
        { date: "05 Dec", kills: 86 },
        { date: "07 Dec", kills: 94 },
        { date: "12 Dec", kills: 76 },
        { date: "20 Dec", kills: 51 },
        { date: "5 Jan", kills: "None" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=600&auto=format&fit=crop&q=60",
      status: "busy",
      dotColor: "orange",
      name: "Mr. Clark Kent",
      title: "Superman",
      rating: 4.99,
      distance: 24.6,
      location: "Metropolis, Kansas, United States",
      skills: [
        { date: "05 Dec", kills: 145 },
        { date: "06 Dec", kills: 132 },
        { date: "15 Dec", kills: 118 },
        { date: "25 Dec", kills: 97 },
        { date: "5 Jan", kills: 84 },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&auto=format&fit=crop&q=60",
      status: "online",
      dotColor: "green",
      name: "Ms. Diana Prince",
      title: "Wonder Woman",
      rating: 4.97,
      distance: 12.3,
      location: "Themyscira, Greece",
      skills: [
        { date: "05 Dec", kills: 103 },
        { date: "06 Dec", kills: 91 },
        { date: "15 Dec", kills: 87 },
        { date: "25 Dec", kills: 64 },
        { date: "5 Jan", kills: "None" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=600&auto=format&fit=crop&q=60",
      status: "offline",
      dotColor: "red",
      name: "Mr. Steve Rogers",
      title: "Captain America",
      rating: 4.88,
      distance: 31.2,
      location: "Brooklyn, New York, United States",
      skills: [
        { date: "05 Dec", kills: 78 },
        { date: "06 Dec", kills: 85 },
        { date: "15 Dec", kills: 62 },
        { date: "25 Dec", kills: "None" },
        { date: "5 Jan", kills: "None" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?w=600&auto=format&fit=crop&q=60",
      status: "online",
      dotColor: "green",
      name: "Dr. Bruce Banner",
      title: "The Hulk",
      rating: 4.76,
      distance: 42.7,
      location: "Dayton, Ohio, United States",
      skills: [
        { date: "05 Dec", kills: 126 },
        { date: "06 Dec", kills: 114 },
        { date: "15 Dec", kills: 92 },
        { date: "25 Dec", kills: 71 },
        { date: "5 Jan", kills: 58 },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&auto=format&fit=crop&q=60",
      status: "busy",
      dotColor: "orange",
      name: "Mr. Tony Stark",
      title: "Iron Man",
      rating: 4.91,
      distance: 19.5,
      location: "Malibu, California, United States",
      skills: [
        { date: "05 Dec", kills: 98 },
        { date: "06 Dec", kills: 88 },
        { date: "15 Dec", kills: 73 },
        { date: "25 Dec", kills: 61 },
        { date: "5 Jan", kills: "None" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=600&auto=format&fit=crop&q=60",
      status: "online",
      dotColor: "green",
      name: "Mr. Thor Odinson",
      title: "God of Thunder",
      rating: 4.94,
      distance: 55.1,
      location: "Asgard, Norway",
      skills: [
        { date: "05 Dec", kills: 154 },
        { date: "06 Dec", kills: 143 },
        { date: "15 Dec", kills: 121 },
        { date: "25 Dec", kills: 105 },
        { date: "5 Jan", kills: 89 },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=600&auto=format&fit=crop&q=60",
      status: "offline",
      dotColor: "red",
      name: "Mr. Logan",
      title: "Wolverine",
      rating: 4.81,
      distance: 28.9,
      location: "Alberta, Canada",
      skills: [
        { date: "05 Dec", kills: 67 },
        { date: "06 Dec", kills: 59 },
        { date: "15 Dec", kills: 48 },
        { date: "25 Dec", kills: "None" },
        { date: "5 Jan", kills: "None" },
      ],
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60",
      status: "online",
      dotColor: "green",
      name: "Mr. Matt Murdock",
      title: "Daredevil",
      rating: 4.89,
      distance: 11.7,
      location: "Hell's Kitchen, New York, United States",
      skills: [
        { date: "05 Dec", kills: 72 },
        { date: "06 Dec", kills: 68 },
        { date: "15 Dec", kills: 55 },
        { date: "25 Dec", kills: 43 },
        { date: "5 Jan", kills: "None" },
      ],
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold mb-5">All Users</h1>
      <div className="flex flex-wrap gap-5">
        {/* <Card /> */}
        {objects.map((obj) => (
          <Card
            img={obj.img}
            status={obj.status}
            dotColor={obj.dotColor}
            name={obj.name}
            title={obj.title}
            rating={obj.rating}
            distance={obj.distance}
            location={obj.location}
            skills={obj.skills}
          />
        ))}
      </div>
    </>
  );
}

export default App;
