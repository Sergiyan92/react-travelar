import StaticMap from "../../assets/img/static-map.png";

const BaseLayout = ({ children }) => {
  return (
    <main className="flex h-screen">
      <section className="flex-1 flex justify-center items-center px-5 bg-primary">
        <div className="text-white max-w-[500px] w-full">{children}</div>
      </section>
      <section className="flex-1">
        <img
          className="h-full w-full object-cover"
          src={StaticMap}
          alt="StaticMap"
        />
      </section>
    </main>
  );
};

export default BaseLayout;
