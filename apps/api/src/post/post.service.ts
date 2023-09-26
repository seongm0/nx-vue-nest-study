import { Injectable } from '@nestjs/common';

import { UpdatePostInput } from './input/updatePost.input';
import { PostModel } from './post.model';

@Injectable()
export class PostService {
  private readonly posts: PostModel[] = [
    {
      id: 1,
      title: 'Article 1',
      content: 'Content 1',
      authorId: 1,
      isRocked: true,
    },
    {
      id: 2,
      title: 'Article 2',
      content: 'Content 2',
      authorId: 2,
      isRocked: true,
    },
    {
      id: 3,
      title: 'Article 3',
      content: 'Content 3',
      authorId: 3,
      isRocked: false,
    },
  ];

  async findAll(): Promise<PostModel[]> {
    return this.posts;
  }

  async findOne(id: number): Promise<PostModel | undefined> {
    const post = this.posts.find((post) => post.id === id);
    return { ...post };
  }

  async create(post: PostModel): Promise<PostModel> {
    const newPost = {
      id: this.posts.length + 1,
      ...post,
    };

    this.posts.push(newPost);

    return newPost;
  }

  async update(id: number, post: UpdatePostInput): Promise<PostModel> {
    const index = this.posts.findIndex((post) => post.id === id);

    this.posts[index] = {
      ...this.posts[index],
      ...post,
    };

    return this.posts[index];
  }

  async delete(id: number): Promise<PostModel> {
    const index = this.posts.findIndex((post) => post.id === id);

    return this.posts.splice(index, 1)[0];
  }
}
