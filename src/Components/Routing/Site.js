import React from "react";
import './Site.css'


export default function Site() {

let file;
const modelBody =document.getElementById('model-body')
function dragOver(event){
    const modelBody =document.getElementById('model-body')
    event.preventDefault();
    modelBody.classList.add('active');

}

function dragLeave(){
    const modelBody =document.getElementById('model-body')
    modelBody.classList.remove('active');

}

function fileDrop(e){
    e.preventDefault()
 file = e.dataTransfer.files[0];
    console.log(file)
    displayFile();

}

function imgUpload(url)
{
   const uploadArea = document.querySelector('.card-img')
    let imgTag = `<img class="card-img-top"  src="${url}" alt="">`;
    uploadArea.innerHTML =imgTag
 document.querySelector('.card-body i').remove()

   
}

function displayFile() {
    let fileType = file.type;
    // console.log(fileType);

    let validExtensions = ['image/jpeg', 'image/jpg', 'image/png'];

    if (validExtensions.includes(fileType)) {
        // console.log('This is an image file');
        let fileReader = new FileReader();
 
        fileReader.onload = () => {
            
            let fileURL = fileReader.result;
            // console.log(fileURL);
            imgUpload(fileURL)
            let imgTag = `<img src="${fileURL}" alt="">`;
            
            modelBody.innerHTML = imgTag;
        };
        fileReader.readAsDataURL(file); 
    } else {
        alert('This is not an Image File');
        modelBody.classList.remove('active');
    }
}

	return (
		<>
			<section className="mt-5 pt-3">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<h1>Theme</h1>
							<h4 className="mt-5">Logo &amp; Branding</h4>
							<p>
								Add a custom logo and/or favicon, and adjust your school
								thumbnail.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="card text-dark bg-light mb-3 " style={{width:"100%"}}>
								<div className="card-header">Logo &amp; Branding</div>
								<div className="card-img pt-3"></div>
								<div className="card-body text-center">
									<div>
										<p>
											<i className="bi bi-card-image"></i>
										</p>
										<h6>Upload your thumbnail</h6>
										<p>Recommended format: 960 x 540 pixels (PNG or JPG)</p>
										<button onChange={imgUpload}
											type="submit"
											className="btn btn-primary"
											data-bs-toggle="modal"
											data-bs-target="#modalCenter"
										>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="card text-dark bg-light mb-3" style={{width:"100%"}}>
								<div className="card-header">School Thumbnail</div>
								<div className="card-img pt-3"></div>
								<div className="card-body text-center">
									<div>
										<p>
											<i className="bi bi-card-image"></i>
										</p>
										<h6>Upload your thumbnail</h6>
										<p>Recommended format: 960 x 540 pixels (PNG or JPG)</p>
										<button
											type="submit"
											className="btn btn-primary"
											data-bs-toggle="modal"
											data-bs-target="#modalCenter"
										>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card text-dark bg-light mb-3" style={{width:"100%"}}>
								<div className="card-header">Favicon</div>
								<div className="card-img pt-3"></div>
								<div className="card-body text-center">
									<div>
										<p>
											<i className="bi bi-card-image"></i>
										</p>
										<h6>Upload your thumbnail</h6>
										<p>Recommended format: 960 x 540 pixels (PNG or JPG)</p>
										<button
											type="submit"
											className="btn btn-primary"
											data-bs-toggle="modal"
											data-bs-target="#modalCenter"
										>
											Upload
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div id="modalCenter" className="modal fade">
						<div className="modal-dialog modal-dialog-centered">
							<div className="modal-content">
								<div className="modal-header" >
									<h5 className="modal-title">Upload File</h5>
									<button
										type="button"
										className="btn-close"
										data-bs-dismiss="modal"
									></button>
								</div>
								<div className="modal-body text-center py-5 px-5" id="model-body" onDragOver={dragOver} onDragLeave={dragLeave} onDrop={fileDrop}>
									<p className="header">
										<i className="bi bi-cloud-arrow-up-fill"></i>
									</p>
									<h4 className="header">Drag and Drop To Upload File</h4>
								</div>
								<div className="modal-footer text-center">
									<button
										type="button"
										className="btn btn-primary    "
										data-bs-dismiss="modal"
									>
										Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
           
		</>
	);
}
