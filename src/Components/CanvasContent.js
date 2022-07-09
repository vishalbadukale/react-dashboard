import React from 'react'
import './CanvasContent.css'

export default function CanvasContent() {
  return (
    <>
        <section className="mt-5 pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <p className="mb-3">
                        <b>Today</b>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                        <div className="card-body today">
                            <div>
                                <p>59</p>
                                <p>New SignUp</p>
                            </div>
                            <div>
                                <p>
                                    <i className="bi bi-graph-up"></i>99.9%</p>
                                <p>Yeserday</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                        <div className="card-body today">
                            <div>
                                <p>34</p>
                                <p>Active Student</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                        <div className="card-body today">
                            <div>
                                <p>21</p>
                                <p>Lecture Completions</p>
                            </div>
                            <div>
                                <p>
                                    <i className="bi bi-graph-up"></i>99.9%</p>
                                <p>Yeserday</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                        <div className="card-body today">
                            <div>
                                <p>60%</p>
                                <p>Completions</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>    

                <div className="row">
                    <div className="col-md-12">
                        <p className="mb-3">
                            <b>This Month</b>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                            <div className="card-body today">
                                <div>
                                    <p>59</p>
                                    <p>New SignUp</p>
                                </div>
                                <div>
                                    <p>
                                        <i className="bi bi-graph-up"></i>99.9%</p>
                                    <p>Yeserday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                            <div className="card-body today">
                                <div>
                                    <p>34</p>
                                    <p>Active Student</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                            <div className="card-body today">
                                <div>
                                    <p>21</p>
                                    <p>Lecture Completions</p>
                                </div>
                                <div>
                                    <p>
                                        <i className="bi bi-graph-up"></i>99.9%</p>
                                    <p>Yeserday</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="card text-dark bg-light mb-3" style={{width:"100%"}}>

                            <div className="card-body today">
                                <div>
                                    <p>60%</p>
                                    <p>Completions</p>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card" style={{width:"100%"}}>
                            <div className="card-header">
                                Live Feed
                            </div>
                            <div className="card-body">

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
    </>
  )
}
