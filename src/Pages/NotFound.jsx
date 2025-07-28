import notFound from "../assets/images/NotFound/notfound.jpg";

const NotFound = () => {
  return (
    <div>
      <img
        style={{ height: "700px" }}
        className="w-100"
        src={notFound}
        alt=""
      />
    </div>
  );
};

export default NotFound;
