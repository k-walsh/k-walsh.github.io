function PageHeader(props) {
  return (
    <div>
      <div className="banner">
        <img src={props.img} alt={`${props.id} banner`} id={props.id} />
      </div>
      <div className="workpage">
        <div>
          <h3>{props.category}</h3>
          {props.partners ? (
            <div>
              <h1 style={{ marginBottom: 0 }}>{props.title}</h1>
              <h4>{props.partners}</h4>
            </div>
          ) : (
            <h1>{props.title}</h1>
          )}
        </div>
        <div className="info">
          {/* <p className="workdescription">{props.description}</p> */}
          <div className="col2">
            <h2>Technologies</h2>
            <p>{props.technologies}</p>
            {props.link && (
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="underlinelink"
              >
                <h2>Open Project &rarr;</h2>
              </a>
            )}
            {props.comingSoon && <h2>Coming Soon</h2>}
          </div>
          <p className="workdescription">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
