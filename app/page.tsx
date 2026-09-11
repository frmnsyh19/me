import { Biodata } from "./components/Container";
import { Container } from "./components/Kontak";

export default function Home() {
  return (
    <div className=" w-full gap-4 flex p-2 lg:p-7 lg:flex-row flex-col h-full">
      <Biodata />
      <Container />
    </div>
  );
}
