import { clientReviews } from "../constants";

function Clients(props) {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Team Feedback</h3>

      <div className="client-container">
        {clientReviews.map(({ id, name, position, img, review }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light">{review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="text-white-800 font-semibold">{name}</p>
                    <p className="text-white-500 md:text-base text-sm">
                      {position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <img
                      key={i}
                      src={"/assets/star.png"}
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients;
