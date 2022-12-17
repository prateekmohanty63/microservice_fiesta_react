import React from "react";


const Main = () => {
    return (
        <div>
            <body cz-shortcut-listen="true">

                <main>



                    <div className="album py-5 bg-light">
                        <div className="container">

                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col">
                                    <div className="card shadow-sm">


                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                <footer className="text-muted py-5">
                    <div className="container">
                        <p className="float-end mb-1">
                            <a href="#">Back to top</a>
                        </p>
                        <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
                        <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.2/getting-started/introduction/">getting started guide</a>.</p>
                    </div>
                </footer>





            </body>
        </div>
    )
}

export default Main