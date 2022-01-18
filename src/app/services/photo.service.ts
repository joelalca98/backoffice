import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Photo} from '../interfaces/Photo'

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  URI = 'http://localhost:4000/api/photos'

  constructor(private http: HttpClient) { }

  createPhoto (title: string, description: string, photo: File, tecnologia:string, fecha:string, vacuna:string) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    fd.append('tecnologia', tecnologia);
    fd.append('fecha', fecha);
    fd.append('vacuna', vacuna);
    return this.http.post(this.URI, fd);
  }

  getPhotos () {
    return this.http.get<Photo[]>(this.URI);
  }

  getPhoto (id: string) {
    return this.http.get<Photo>(this.URI + '/' + id); //Concatenamos para pasarle al backend esa id con /photos/id
  }

  deletePhoto (id: string){
    return this.http.delete(this.URI + '/' + id)
  }

  updatePhoto(id:string, title:string, description:string, tecnologia:string, fecha:string, vacuna:string){
    return this.http.put(`${this.URI}/${id}`, {title, description, tecnologia, fecha, vacuna})
  }
}
