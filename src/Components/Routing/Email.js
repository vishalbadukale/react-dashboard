import React from 'react'

export default function Email() {
   
  return (
    <>
        <section className="mt-5 pt-5">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h4 className="mb-3">
                        Compose
                    </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-12">

                    <h5>New Email</h5>

                    <p>Send an email to individual users, users enrolled in a specific course, or everyone in your school.</p>

                </div>
                <div className="col-md-9 col-sm-12">
                    <div className="card">
                        <div className="card-body">

                            <div>
                                <label>To</label>
                                <input type="text" name="to" className="form-control"/>
                            </div>

                            <div className="pt-3">
                                <label>Subject</label>
                                <input type="text" name="to" className="form-control m-0"/>
                            </div>
                            <div className="pt-3">
                                <label>Message</label>


                                <textarea id="text_editor" name="text_editor"></textarea>
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
