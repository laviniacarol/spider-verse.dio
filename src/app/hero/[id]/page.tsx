import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";
import heroesData from "@/app/heroes/heroes.json";

interface IProps {
  params: {
    id: string;
  };
}

export default function Hero({ params: { id } }: IProps) {
  const heroes: IHeroData[] = heroesData;
  return <Carousel heroes={heroes} activeId={id} />;
}


