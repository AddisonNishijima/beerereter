import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe ({
  name: 'emptiness',
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], filter, sort){
    var output: Keg[] = [];
    var desiredEmptiness = filter;
    var desiredSort = sort;
    console.log(desiredSort);
    console.log(desiredEmptiness);
    input.sort(function(a, b){
      if(a[sort] > b[sort]){
        return 1;
      }
      if(a[sort] > b[sort]){
        return -1;
      }
      return 0;
    });
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
