const initialState = {
  features: [
    {
      heading: 'Predictable state managment',
      title: 'Redux',
    },
    {
      heading: 'Multiple and dynamic bundles',
      title: 'Code splitting',
    },
    {
      heading: 'Declarative routing',
      title: 'React Router',
    },
    {
      heading: 'Realtime update',
      title: 'React Hot reload',
    },
  ],
  loading: false,
};

function shuffle(array) {
  const copy = array.slice();

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }

  return copy;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SHUFFLE-REQUESTED':
      return {
        ...state,
        loading: true,
      };
    case 'SHUFFLE-DONE':
      return {
        ...state,
        features: shuffle(state.features),
        loading: false,
      };
    default:
      return state;
  }
}
