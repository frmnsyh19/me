import { Biodata } from "./components/Biodata";
import { Container } from "./components/Container";

export default function Home() {
  return (
    <div className=" w-full gap-4 flex p-2 lg:p-7 lg:flex-row flex-col h-full">
      <Biodata />
      <Container />
    </div>
  );
}
