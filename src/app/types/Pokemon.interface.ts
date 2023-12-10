export interface Pokemon {
  name: string;
  id: number;
  type: Type;
  stats: Stats;
  stat: Stats;
  base_stat: number;
}

interface Type {
  name: string;
}

interface Stats {
  base_stat: number;
  stat: Stat;
  name: string;
}

interface Stat {
  name: string;
}
