import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { StateContext, ACTIONS } from "./../../state/State";

const Home = () => {
  const { state, dispatch } = useContext(StateContext);
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("Hallo")}</h2>
      <div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({ type: ACTIONS.INCREMENT });
          }}
        >
          INCREMENT
        </button>
      </div>
      <div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({ type: ACTIONS.DECREMENT });
          }}
        >
          DECREMENT
        </button>
      </div>
      <div>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({ type: ACTIONS.RESET_STATE });
          }}
        >
          RESET
        </button>
      </div>
      <div className="text-black text-gray-700 font-sans font-medium text-2xl">
        {state.count}
      </div>
    </div>
  );
};

export default Home;
