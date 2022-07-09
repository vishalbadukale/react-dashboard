import React from 'react'

export default function Setting() {
  return (
    <>
        <section className="mt-5 pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-3">
                        General
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">

                    <h5>School</h5>

                    <p>Adjust basic information about your school here.</p>

                </div>
                <div className="col-md-9 col-sm-12">
                    <div className="card">
                        <div className="card-body">

                            <div>
                                <label>School Name</label>
                                <input type="text" name="to" className="form-control"/>
                            </div>

                            <div className="pt-3">
                                <label>Business Name</label>
                                <input type="text" name="to" className="form-control m-0"/>
                            </div>
                            <div className="pt-3">
                                <label> Email</label>
                                <input type="email" name="to" className="form-control m-0"/>
                            </div>
                            <div className="pt-3">
                                <label> Address</label>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="text" name="to" placeholder="Address 1"className="form-control m-0"/>
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="to" placeholder="location" className="form-control m-0"/>
                                        </div>
                                </div>
                            </div>
                            <div className="pt-3">
                                <label>Contact Number</label>
                                <input type="text" name="to" className="form-control m-0"/>
                            </div>
                            <div className="pt-3">
                                <label>Contact Person </label>
                                <input type="text" name="to" className="form-control m-0"/>
                            </div>

                            <div className="pt-3">
                                <input type="submit" name="submit" className="btn btn-primary" value="Send Email"/>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </div>

    </section>
    </>
  )
}
