export interface Animal {
  comments: any;
  id: number;
  postDate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  userId: number;
}

export type Animais = Array<Animal>;
