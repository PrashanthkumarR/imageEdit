import { Component } from '@angular/core';
declare var Cropper: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imagecropper';
  uploadedPic: any;
  cropper: any;
  rotationAmount = 0;
  onFileSelected(event) {
    let result = document.querySelector('.result');
    let save = document.querySelector('.save');
    let img_w = document.querySelector('.img-w');
    let img_h = document.querySelector('.img-h')
    let options = document.querySelector('.options');
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.uploadedPic = e.target.result;
      let img = document.createElement('img');
      img.id = 'image';
      img.src = e.target.result;
      result.innerHTML = '';
      result.appendChild(img);
    
      save.classList.remove('hide');
      options.classList.remove('hide')
       this.cropper =new Cropper(img);


    }
    reader.readAsDataURL(event.target.files[0])
  }
  
  onSave(event) {
    let imgSrc = this.cropper.getCroppedCanvas({
      width: 5000 // input value
    }).toDataURL();
    let cropped = document.querySelector('.cropped');
    let img_result = document.querySelector('.img-result');
    cropped.classList.remove('hide');
    img_result.classList.remove('hide');
    this.uploadedPic = imgSrc;
    let dwn = document.querySelector('.download')
    dwn.classList.remove('hide');
    dwn.setAttribute('href', imgSrc);
  }
  

  // rotateImage(direction) {
  //   if (direction === 'left') {
  //     this.rotationAmount = this.rotationAmount + -45;
  //   } else if(direction === 'right') {
  //     this.rotationAmount = this.rotationAmount + 45;
  //   }
  //    (document.querySelector('.cropper-canvas') as HTMLElement).style.marginLeft = '19%';
  //    (document.querySelector('.cropper-canvas') as HTMLElement).style.transform = 'rotate(' + this.rotationAmount + 'deg)';
  // }

  // OnUpload() {
  //   console.log(this.uploadedPic);
  // }
}
