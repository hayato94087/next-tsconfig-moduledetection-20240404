import { type FC } from "react";
import { add, money } from "@/lib/arithmetics";

const Home: FC = () => {
  add(1);
  console.log(`money is ${money}`); // money is 1

  add(2);
  console.log(`money is ${money}`); // money is 13

  // 外部からモジュールの変数を変更できないので以下はエラーとなる。
  // money = 10;

  return (
    <div className="">
      <div className="text-lg font-bold">Home</div>
      <div>
        <span className="text-blue-500">Hello</span>
        <span className="text-red-500">World</span>
      </div>
    </div>
  );
};

export default Home;
