export interface activity {
  _id?: string;
  distance: number;
  start: Date;
  finish: Date;
  time?: number;
  avgSpeed: number;
  kcalBurned: number;
}

export interface deletedActivity {
  deletedId: string;
}
