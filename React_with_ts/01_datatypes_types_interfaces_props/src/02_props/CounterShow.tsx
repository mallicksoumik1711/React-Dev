function CounterShow({counter} : {counter: number}) {
  return (
    <>
      <div className="text-8xl font-bold">
        <h1>Value : {counter}</h1>
      </div>
    </>
  );
}

export default CounterShow;
