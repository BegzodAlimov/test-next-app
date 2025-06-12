import BigHorizontalCard from "../components/bigHorizontalCard/bigHorizontalCard";
import CardHorizontal from "../components/cardHorizontal/cardHorizontal";
import VerticalCard from "../components/verticalCard/verticalCard";
import VerticalCard2 from "../components/verticalCard2/verticalCard2";
import VerticalCard3 from "../components/verticalCard3/verticalCard3";

export default function Home() {
  return (
    <div className="p-20 flex gap-10 flex-col">
      <CardHorizontal/>
      <BigHorizontalCard/>
      <VerticalCard/>
      <VerticalCard2/>
      <VerticalCard3/>
    </div>
  );
}
