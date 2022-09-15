import axios from "axios";
import React from "react";
import { IAPIRequest } from "./types";
import { APIRequestType } from "./enums";

const client = axios.create({
  baseURL: process.env.REACT_APP_APIURL,
  headers: {
    accept: "application/json",
    Authorization: `Token ${process.env.REACT_APP_TOKEN}`,
  },
});

export const APIRequest = async ({ type, endpoint }: IAPIRequest) => {
  if (type === APIRequestType.GET) {
    const result = await client.get(endpoint);

    return result.data;
  }

  if (type === APIRequestType.DELETE) {
    const result = await client.delete(endpoint);

    return result.data;
  }

  if (type === APIRequestType.POST) {
    const result = await client.post(endpoint);

    return result.data;
  }
};
