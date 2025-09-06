import HeroesList from "@/components/HeroesList";
import { IHeroData } from "@/interfaces/heroes";
import heroesData from "./heroes/heroes.json"; 
import styles from './page.module.scss'

export default function Home() {
  const heroes: IHeroData[] = heroesData;

  return (
    <main className={styles.main}>
    <HeroesList heroes={heroes} />
    </main>
  );
}
