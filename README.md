# NxVueNest

Nx, Vue.js3, NestJS Study

## Start the app

```shell
# API
nx serve api

# WEB
nx serve web

# API And WEB
nx run-many -t serve -p web api
```

## 유저 시나리오

- 게스트(Guest)는 게시판 글들을 읽을 수 있음
- 작성자(Writer)는 게시판 글을 작성하고 수정할 수 있음
- 어드민(Admin)은 게시판 글을 삭제할 수 있음

## API

### 게시판

- 게시판 글 목록 조회 (Query, posts)
- 게시판 글 조회 (Query, post)
- 게시판 글 작성 (Mutation, createPost)
- 게시판 글 수정 (Mutation, updatePost)
- 게시판 글 삭제 (Mutation, deletePost)

### 유저

- 로그인 (Mutation, login)
- 회원가입 (Mutation, register)
- 회원정보 조회 (Query, me)

## WEB

### 게시판

- 게시판 글 목록 조회 (/posts)
- 게시판 글 조회 (/posts/:id)
- 게시판 글 작성 (/posts/create)
- 게시판 글 수정 (/posts/:id/edit)
- 게시판 글 삭제 (/posts/:id/delete)

### 유저

- 로그인 (/login)
- 회원가입 (/register)
- 회원정보 조회 (/me)

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
