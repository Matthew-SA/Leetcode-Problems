const { useState } = React;

const App = () => {
  const [searchBody, setSearchBody] = useState("");
  const [mediaList, setMediaList] = useState([]);
  const [details, setDetails] = useState({});

  const fetchMediaList = (searchCriteria) => {
    fetch(`https://www.omdbapi.com/?s=${searchCriteria}&apikey=75a5d7f7`)
      .then((response) => response.json())
      .then((json) => setMediaList(json.Search));
  };

  const fetchDetails = (id) => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=75a5d7f7`)
      .then((response) => response.json())
      .then((json) => setDetails(json));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!searchBody) return;
    fetchMediaList(searchBody);
  };

  clearDetails = () => {
    setDetails({});
  };

  return (
    <div className="app">
      <Modal details={details} clearDetails={clearDetails} />
      <div className="topnav-container">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={searchBody}
            onChange={(e) => setSearchBody(e.target.value)}
            placeholder="Search"
          />
        </form>
      </div>
      <List mediaList={mediaList} fetchDetails={fetchDetails} />
    </div>
  );
};

const List = ({ mediaList, fetchDetails }) => {
  if (!mediaList) return null;
  const processedMediaList = mediaList.map((mediaItem) => {
    return (
      <ListItem
        mediaItem={mediaItem}
        clearDetails={clearDetails}
        fetchDetails={fetchDetails}
      />
    );
  });

  return (
    <div className="list-container">
      <ul>{processedMediaList}</ul>
    </div>
  );
};

const ListItem = ({ mediaItem, fetchDetails }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <li
      className="list-item-container"
      onClick={() => fetchDetails(mediaItem.imdbID)}
    >
      <div className="poster-container">
        <img src={mediaItem.Poster} />
      </div>
      <div className="media-details">
        <div className="large-column">{mediaItem.Title}</div>
        <div className="column">{mediaItem.Type}</div>
        <div className="column">{mediaItem.Year}</div>
      </div>
    </li>
  );
};

const Modal = ({ details, clearDetails }) => {
  if (details?.Title === undefined) return null;

  return (
    <div className="modal-background" onClick={() => clearDetails()}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        <div className="details-poster-container">
          <img src={details.Poster} />
        </div>
        <ul className="media-card-details">
          <li>Title: {details.Title}</li>
          <li>Starring: {details.Actors}</li>
          <li>Plot: {details.Plot}</li>
          <li>Director: {details.Director}</li>
          <li>Metascore: {details.Metascore}</li>
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
