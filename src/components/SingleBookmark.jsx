import { useEffect } from "react";
import { useBookmark } from "../context/BookmarkProvider";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import ReactCountryFlag from "react-country-flag";

function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, singleBookmark, isLoadingBookmark } = useBookmark();
  const navigate = useNavigate();
  useEffect(() => {
    getBookmark(id);
  }, [id]);
  if (isLoadingBookmark) return <Loader />;
  return (
    <div>
      <button className="btn btn--back" onClick={() => navigate(-1)}>
        &larr; back
      </button>
      <h2>{singleBookmark?.cityName}</h2>
      <span>
        <ReactCountryFlag svg countryCode={singleBookmark.countryCode} />
        {singleBookmark?.cityName} - {singleBookmark?.country}
      </span>
      <br />
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ad.
        Iste beatae ut quas explicabo, magnam mollitia ea nam repudiandae
        nostrum vel, labore eius minus perspiciatis consequuntur perferendis,
        cum temporibus? Distinctio molestiae corporis cumque natus voluptatum
        recusandae ex saepe impedit sunt maxime veniam praesentium temporibus
        architecto earum, quaerat dolores quo aut, at quas cupiditate? Debitis
        aspernatur dolore corporis soluta rem? Quidem vo
      </p>
    </div>
  );
}

export default SingleBookmark;
