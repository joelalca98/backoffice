import { Component, OnInit } from '@angular/core';
//import {file} from '@angular/cli'
import {Router} from '@angular/router'
import { Photo } from 'src/app/interfaces/Photo';
import {PhotoService} from '../../services/photo.service'

interface HtmlInputEvent extends Event {
target: HTMLInputElement & EventTarget | null;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoSelected: string | ArrayBuffer | null;
  file: File;

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(){
  }

onPhotoSelected(event: HtmlInputEvent | any): void {

  if(event.target.files && event.target.files[0]){
    this.file = <File> event.target.files[0];
    //Image preview
    const reader = new FileReader();
    reader.onload = e => this.photoSelected = reader.result;
    reader.readAsDataURL(this.file);
  }
}

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement, tecnologia: HTMLTextAreaElement, fecha: HTMLTextAreaElement, vacuna: HTMLTextAreaElement): boolean {

    this.photoService.createPhoto(title.value, description.value, this.file, tecnologia.value, fecha.value, vacuna.value )
     .subscribe(res => {
       this.router.navigate(['/photos']);
     }, err => console.log(err)) 
    return false;
  }

}
