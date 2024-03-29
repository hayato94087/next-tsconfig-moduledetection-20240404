export let money = 0; // 外部から参照できるが、変更できない
let message = "hello world"; // 外部から参照できない
export const add = ( value : number) => {
  money += value;
  return money;
}