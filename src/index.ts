import VarChecker from "@shuota/variable-checker";

const test = VarChecker.create();

export function testfn<T> (paramA:T, paramB:boolean = false){
  if(paramB === true) {
    return paramA && typeof paramA
  }
  return paramA
}

const string = "hoge"
testfn(string)