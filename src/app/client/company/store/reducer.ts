const initialState = {
  companies: [],
};

type InitialStateType = typeof initialState;

export default (state = initialState, { type, payload }: any): InitialStateType => {
  switch (type) {
    default:
      return state;
  }
};
