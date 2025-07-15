const Card = ({ data }) => {
  console.log(data);

  const readMore=(url)=>{
    window.open(url);
  }
  //if the news ans no image then do not show else show the news with image

    return (
    <div className="cardContainer">
      {data.map((curItem, index) => {

        // Skip if no image
        if (!curItem.urlToImage) return null;

        return (
          <div className="card">
            <img src={curItem.urlToImage} alt="news" loading="lazy" /> {/* Image */}
            <div className="cardContent">
              <a href={curItem.url} target="_blank" rel="noopener noreferrer">
                {curItem.title}    {/*link to open the news */}
              </a>
              <p>{curItem.description}</p>  {/* to show description*/}
              <button onClick={() => readMore(curItem.url)}>Read More</button>
            </div>
          </div>
        );
      })}
    </div>
  );
  
  
};

export default Card;
