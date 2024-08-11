/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { userService } from "../../services";
import { useDispatch } from "react-redux";
import Layout from "../../layout";
import { useToast } from "@chakra-ui/react";
import { changeLoaderState } from "../../store/loaderReducer";


type PrivateRouteProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

const RequireAuth = ({ children }: PrivateRouteProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  // const user = useSelector(selectUser);

  const fetchUser = async () => {
    try {
      dispatch(changeLoaderState(true));
      // const response = await userService.getUser();
      // dispatch(
      //   fetch({
      //     ...response.user,
      //   })
      // );
      // fetchUserFriends(response.user.ownPromoCode);
      dispatch(changeLoaderState(false));
      // fetchBalance(response.minedCoins);
    } catch (error) {
      console.log(error);
      if (userService.initData) {
        toast({
          title: "Error",
          position: "top-right",
          description: ' "Ooops, not found"',
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
      dispatch(changeLoaderState(false));
      navigate("/");
      throw error;
    }
  };

  // const fetchUserFriends = async (promoCode: string) => {
  //   try {
  //     const response = await userService.getUserFriends(
  //       promoCode,
  //       0,
  //       10,
  //       "ASC"
  //     );
  //     dispatch(setUserFriends(response.data));
  //     dispatch(setTotalFriends(+response.totalRows));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    setInterval(async () => {
      // fetchBalance();
    }, 30000);
  }, []);


  // const fetchBalance = async (currentMinedCoins: number) => {
  //   try {
  //     const response = await userService.getBalance();
  //     dispatch(fetch({...response, balance: response.balance - currentMinedCoins}));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return <Layout>{children}</Layout>;
};

export default RequireAuth;
