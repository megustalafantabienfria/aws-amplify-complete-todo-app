/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateTodoInput = {
  id?: string | null;
  title?: string | null;
  content?: string | null;
  todoUserId?: string | null;
};

export type UpdateTodoInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  todoUserId?: string | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type CreateUserInput = {
  id?: string | null;
  email: string;
};

export type UpdateUserInput = {
  id: string;
  email?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type ModelTodoFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  and?: Array<ModelTodoFilterInput | null> | null;
  or?: Array<ModelTodoFilterInput | null> | null;
  not?: ModelTodoFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  email?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type CreateTodoMutation = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type UpdateTodoMutation = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type DeleteTodoMutation = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  email: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  email: string;
};

export type GetTodoQuery = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type ListTodosQuery = {
  __typename: "ModelTodoConnection";
  items: Array<{
    __typename: "Todo";
    id: string;
    user: {
      __typename: "User";
      id: string;
      email: string;
    } | null;
    title: string | null;
    content: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  email: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    email: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTodoSubscription = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type OnUpdateTodoSubscription = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type OnDeleteTodoSubscription = {
  __typename: "Todo";
  id: string;
  user: {
    __typename: "User";
    id: string;
    email: string;
  } | null;
  title: string | null;
  content: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  email: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTodo(input: CreateTodoInput): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(input: UpdateTodoInput): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!) {
        updateTodo(input: $input) {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(input: DeleteTodoInput): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!) {
        deleteTodo(input: $input) {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTodoMutation>response.data.deleteTodo;
  }

  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModelTodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModelTodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            user {
              __typename
              id
              email
            }
            title
            content
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTodosQuery>response.data.listTodos;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          email
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            email
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateTodoListener: Observable<OnCreateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`
    )
  ) as Observable<OnCreateTodoSubscription>;

  OnUpdateTodoListener: Observable<OnUpdateTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`
    )
  ) as Observable<OnUpdateTodoSubscription>;

  OnDeleteTodoListener: Observable<OnDeleteTodoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          user {
            __typename
            id
            email
          }
          title
          content
        }
      }`
    )
  ) as Observable<OnDeleteTodoSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          email
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          email
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          email
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;
}
