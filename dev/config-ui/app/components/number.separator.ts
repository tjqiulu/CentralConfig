import { Pipe,PipeTransform } from "@angular/core";

@Pipe({name: 'commaSeparatedNumber'})
export class CommaSeparatedNumberPipe implements PipeTransform {
  transform(value:number, mode:string, outputWithUnit:boolean) : any {
      let result:string = "";
      let count:number = 0;

      if(value != null && !isNaN(value)) {
      let numberString = value.toString();
          //######
        //   if(numberString.indexOf(".") == -1){
              for(let i= numberString.length - 1 ; i >= 0; i--){
                  if(count % 3 == 0 && count > 0){
                      result = numberString.charAt(i) + "," + result;
                  }else{
                      result = numberString.charAt(i) + result;
                  }
                  count ++;
              }
        //   }
      }
    return result;
  }
}