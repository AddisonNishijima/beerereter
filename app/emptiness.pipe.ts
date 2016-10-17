import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe ({
  name: 'emptiness',
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], info){
    var output: Keg[] = [];
    console.log(info);
    var desiredEmptiness = info;
    if(desiredEmptiness === "nearlyEmpty"){
      for (var i = 0; i < input.length; i++){
        if(input[i].pintsLeft < 10){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredEmptiness === "notEmpty"){
      for (var i = 0; i < input.length; i++){
        if(input[i].pintsLeft >= 10){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input
    }

  }
}
