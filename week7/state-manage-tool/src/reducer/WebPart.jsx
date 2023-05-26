const initWebPartData = {
  name: "Happhee",
  webPartCount: 0,
};

const WebPartReducer = (state = initWebPartData, action) => {
  switch (action.type) {
    case "RENAME_PART":
      return { ...state, name: action.payload };

    case "ADD_WEB_PART":
      return {
        ...state,
        webPartCount: state.webPartCount + 1,
      };
    default:
      return state;
  }
};

export default WebPartReducer;
