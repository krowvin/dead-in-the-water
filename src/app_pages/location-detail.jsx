import useAPI from "../app_hooks/useAPI";
import Loader from "../app_components/loader";

const displayAttributes = [
  {
    label: "Name",
    key: "public-name",
  },
  {
    label: "Desc.",
    key: "description",
  },
  {
    label: "Time Zone",
    key: "timezone-name",
  },
  {
    label: "Vertical Datum",
    key: "vertical-datum",
  },
];

function LocationDetail({ params }) {
  const name = params.name;

  const location = useAPI(`locations/${name}`, {
    office: "MVK",
  });

  if (Array.isArray(location)) return <Loader />;

  return (
    <div className="container pb-4">
      <div className="row">
        <div className="col">
          <div className="card text-white bg-dark mt-3 mb-3">
            <div className="card-body">
              {displayAttributes.map((attr) => {
                return (
                  <div key={attr.label} className="row">
                    <div className="col-4">{attr.label}</div>
                    <div className="col-8">{location[attr.key]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default LocationDetail;
