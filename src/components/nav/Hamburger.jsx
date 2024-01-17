export default function Hamburger({ burgerClass }) {
  return (
    <>
      <div className={`hamburger ${burgerClass}`}>
        <div className="burgerline burger1" />
        <div className="burgerline burger2" />
        <div className="burgerline burger3" />
      </div>
    </>
  );
}
