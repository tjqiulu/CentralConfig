export class Parameter {

  public key: string;
  public value: string;
  public ifEdit:boolean = false;
  

  constructor() { }

  static createOne(textData: string): Parameter {
    // console.log(jsonData);
    let parameter: Parameter = new Parameter();
    // textData.replace(textData.indexOf(':'), "")
    // let textDataArr = textData.split(':');
    // for (let prop in textDataArr) {
    //   parameter[prop] = textData[prop];
    // }
    let splitIndex:number = textData.indexOf(":");
    parameter.key = textData.substring(0, splitIndex);
    parameter.value = textData.substring(splitIndex + 1);
    
    return parameter;
  }

  static createMany(textDatas: string): Parameter[] {
    let result: Parameter[] = new Array<Parameter>();
    console.log(textDatas);
    let textDatasArr = textDatas.split('\n');
    for (let item of textDatasArr) {
      result.push(Parameter.createOne(item));
    }
    return result;
  }

}

export class Parameters {

  public parameters:Parameter[];
  // public parametersAdd:Parameter[];
}



