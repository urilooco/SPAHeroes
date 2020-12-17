import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: string): string {
    if(!images) {
      return 'assets/img/noHero.jpg'
    }else{
      return images;
    }
    console.log(images);
  }
  

}
