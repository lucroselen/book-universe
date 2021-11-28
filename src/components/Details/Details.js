import "./Details.css";
const Details = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="project-info-box mt-0">
              <h5>Book Summary</h5>
              <p className="mb-0">
                Vivamus pellentesque, felis in aliquam ullamcorper, lorem tortor
                porttitor erat, hendrerit porta nunc tellus eu lectus. Ut vel
                imperdiet est. Pellentesque condimentum, dui et blandit laoreet,
                quam nisi tincidunt tortor.
              </p>
            </div>
            {/* / project-info-box */}
            <div className="project-info-box">
              <p>
                <b>Book:</b> Inferno
              </p>
              <p>
                <b>Author:</b> James Doe
              </p>
              <p>
                <b>Date:</b> 14.02.2020
              </p>
              <p>
                <b>ISBN:</b> 921395123132
              </p>
              <p>
                <b>Genre:</b> Horror
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <img
              src="https://www.book.store.bg/lrgimg/81743/vinata-v-nashite-zvezdi.jpg"
              alt="project-pic"
              height="660"
              width="546"
              className="rounded details-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
