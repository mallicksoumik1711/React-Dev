interface ObjectType {
  name: string;
  age: number;
  address: string;
  isLoggedin?: boolean;
}

type CarModel = number | string;

function DatatypeAndInterfaces() {
  const name: string = "Soumik";

  const age: number = 22;

  const isLoggedin: boolean = true;

  const nums: number[] = [10, 20, 39, 40, 50];

  const user: ObjectType = {
    name: "soumik",
    age: 30,
    address: "India",
  };

  const mitsubshi: CarModel = 'XE#$'

  return (
    <>
      <h1>
        Hello {name.toUpperCase()}
        <span>, </span>
        age: {age}
        <span>, </span>
        {isLoggedin ? "Ha logged in" : "Nopes"}
      </h1>

      {nums.map((num, idx) => (
        <div key={idx}>{num}</div>
      ))}

      <div>
        {user.name} {user.age} {user.address}
      </div>

      <h2>{mitsubshi}</h2>
    </>
  );
}

export default DatatypeAndInterfaces;
