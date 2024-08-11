/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosInstance } from "axios";
import axios from "axios";
import { User } from "../types/types";

export class UserService {
  protected readonly instance: AxiosInstance;

  initData =
    import.meta.env.VITE_PRODUCTION === "true"
      ? (window as any)?.Telegram?.WebApp?.initData
      : "query_id=AAHalq4eAAAAANqWrh5WuVdm&user=%7B%22id%22%3A514758362%2C%22first_name%22%3A%22Aliaksandr%22%2C%22last_name%22%3A%22Nemirau%22%2C%22username%22%3A%22lowstonbouch%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720601738&hash=9427bc49e503f3c7177091294051cd48da550915dd976bd8e7af55099da7ce0a";
  public constructor(url: string) {
    this.instance = axios.create({
      baseURL: url,
      timeout: 30000,
      timeoutErrorMessage: "Time out!",
    });
  }
  //6033819201 514758362
  getUser = (): Promise<{
    user: User;
    minedCoins: number;
    firstLevelTotallyEarned: number;
    recentlyEarned: number;
    secondLevelTotallyEarned: number;
    recentlyEarnedSecondLevel: number;
    isFirstLogin: boolean;
  }> => {
    return this.instance
      .get(`users`, {
        headers: {
          Authorization: `tma ${this.initData}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  };

  getUserFriends = (
    refCode: string,
    skip: number = 0,
    limit: number = 100,
    sort: string = "ASC"
  ): Promise<{ data: User[]; totalRows: number }> => {
    return this.instance
      .get(
        `users/${refCode}/friends?skip=${skip}&limit=${limit}&sort=${sort}`,
        {
          headers: {
            Authorization: `tma ${this.initData}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  };

  getUserFrensFriends = (
    refCode: string,
    skip: number = 0,
    limit: number = 100,
    sort: string = "ASC"
  ): Promise<{ data: User[]; totalRows: number }> => {
    return this.instance
      .get(
        `users/${refCode}/frens-friends?skip=${skip}&limit=${limit}&sort=${sort}`,
        {
          headers: {
            Authorization: `tma ${this.initData}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  };

  updateUser = (body: any) => {
    return this.instance
      .patch(`users`, body, {
        headers: {
          Authorization: `tma ${this.initData}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  };

  deleteUser = () => {
    return this.instance
      .delete(`users`, {
        headers: {
          Authorization: `tma ${this.initData}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  };

  getLeaderboard = (catId: number) => {
    return this.instance
      .get(`users/leaderboard?catId=${catId}`, {
        headers: {
          Authorization: `tma ${this.initData}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  };

  getLeaderboardUserPosition = (catId: number, user_id?: string) => {
    return this.instance
      .get(`users/leaderboard/user-position?catId=${catId}&userId=${user_id}`, {
        headers: {
          Authorization: `tma ${this.initData}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  };

  getSocialTasks = () => {
    return this.instance
      .get(`users/social-tasks`, {
        headers: {
          Authorization: `tma ${this.initData}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  };

  claimDailyTask = () => {
    return this.instance
      .post(
        `users/claim-daily-task`,
        {},
        {
          headers: {
            Authorization: `tma ${this.initData}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  };

  claimSocialTask = (taskId: number) => {
    return this.instance
      .post(
        `users/claim-social-task`,
        { taskId },
        {
          headers: {
            Authorization: `tma ${this.initData}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  };
}
