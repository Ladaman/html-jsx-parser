import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

import { PROMO_API_ROUTE, ENV } from "../../../environment";
import promoConfig from "../../../promoConfig";

import "./LeaderboardComponent.scss";

import useLeaderboardStore from "../../../store/leaderboardStore";
import LeaderboardTable from "./LeaderboardTable";
import PlaceholderComponent from "../placeholder/PlaceholderComponent";

const axiosGET = (reqURL) => {
  return Axios.get(reqURL, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "content-type": "application/json; charset=utf-8",
    },
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

const LeaderboardComponent = ({ cutId = 0, resultId = 0 }) => {
  const currPeriod = useLeaderboardStore((state) => state.periodStore);

  let reqURL;
  if (ENV === "dev" && !promoConfig.forceConfigFromCache) {
    reqURL = `${PROMO_API_ROUTE}/leaderboard/${cutId}/${resultId}/${currPeriod}?env=${ENV}&domain=com&promoID=${promoConfig.promoID}&forceConfigFromCache=false`;
  } else {
    reqURL = `cache/leaderboards/leaderboard.${cutId}.${resultId}.${currPeriod}.json`;
  }
  // console.log(reqURL);

  const {
    data: leaderboardData,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery(
    ["leaderboardData"],
    () => {
      return axiosGET(reqURL);
    },
    {
      refetchOnWindowFocus: false,
      cacheTime: 10000,
      select: (leaderboardData) => {
        return leaderboardData.data;
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [currPeriod]);

  if (isError) return <h3>There was a problem with the leaderboard</h3>;
  if (isLoading || isFetching)
    return <PlaceholderComponent className={"leaderboard__placeholder"} />;
  return <LeaderboardTable leaderboardData={leaderboardData} />;
};

export default LeaderboardComponent;
