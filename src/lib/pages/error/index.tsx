/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userReducer";
import { selectLoader } from "../../store/loaderReducer";

const Error = React.memo(() => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectLoader);

  const isConnected = () => {
    return !!(window as any)?.Telegram?.WebApp?.initDataUnsafe?.user?.id;
  };

  return (
    <div className="c-error">
      <span className="c-error__text">
        {" "}
        {!user && isConnected() && !isLoading
          ? "Something went wrong, please try again later or contact support team."
          : ""}
      </span>
      {!isConnected() && (
        <>
          <Link
            className="c-error__link"
            target="blank"
            to="https://t.me/crypto_landing_bot"
          >
            Go to Telegram
          </Link>
        </>
      )}
    </div>
  );
});

export default Error;
