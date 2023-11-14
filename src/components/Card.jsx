export function Card ( {title, description, link} ) {

    return (
        <div className="col-sm-6 p-1">
            <div className="card m-1">
                <div className="card-body">
                    <h2 className="card-title fs-5">{title}</h2>
                    <p className="card-text">{description}</p>
                    <a href={link} className="btn btn-primary">Go</a>
                </div>
            </div>
        </div>
    )
}