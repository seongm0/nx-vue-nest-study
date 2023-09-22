import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ArticleModel {
  id: number;
  title: string;
  content: string;
  isRocked: boolean;
  authorId: number;

  constructor(data: ArticleModel) {
    Object.assign(this, data);
  }
}
