import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { MessageResponse } from "../types/api-types";
import { SerializedError } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

type ResType =
  | {
      data: MessageResponse;
    }
  | {
      error: FetchBaseQueryError | SerializedError;
    };

export const responseToast = (
  res: ResType,
  navigate: NavigateFunction | null,
  url: string
) => {

    if("data" in res){
        toast.success(res.data.message);
        if(navigate) navigate(url);
    }else{
        const error = res.error as FetchBaseQueryError;
        const messageResponse = error.data as MessageResponse;
        toast.error(messageResponse.message);
    }

};

const getMonthsArray = (numMonths: number): string[] => {
  const currentDate = moment().date(1);
  const monthsArray: string[] = [];

  for (let i = 0; i < numMonths; i++) {
    const monthDate = currentDate.clone().subtract(i, "months");
    const monthName = monthDate.format("MMMM");
    monthsArray.unshift(monthName);
  }

  return monthsArray;
};

export const getLastMonths = () => {
  const lastSixMonths = getMonthsArray(6);
  const lastTwelveMonths = getMonthsArray(12);

  return {
    lastSixMonths,
    lastTwelveMonths,
  };
};