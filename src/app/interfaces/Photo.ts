
export interface Photo {
    _id?: string;
    title: string;
    description: string;
    imagePath: string;
    tecnologia:string;
    fecha:string;
    vacuna : {
        type: String,
        ref: 'Vacuna'
         }

    
}