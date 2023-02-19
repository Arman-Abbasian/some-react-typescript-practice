export const TODOS_LOADING = "TODOS_LOADING";
export const TODOS_FAIL = "TODOS_FAIL";
export const TODOS_SUCCESS = "TODOS_SUCCESS";

type TodoType={
    id: number,
    title: string,
    completed: boolean
}
export type TodosType = {
  map: any;
  abilities: TodoType[],
}


export interface TodoLoading {
  type: typeof TODOS_LOADING
}

export interface TodoFail {
  type: typeof TODOS_FAIL
}

export interface TodoSuccess {
  type: typeof TODOS_SUCCESS,
  payload: TodosType
}

export type TodoDispatchTypes = TodoLoading | TodoFail | TodoSuccess