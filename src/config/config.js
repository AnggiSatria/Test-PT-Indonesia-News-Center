"use client";

const token2 = window.localStorage.getItem("token");

export const Config = {
  headers: {
    Authorization: `Bearer ${token2}`,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const Config2 = {
  headers: {
    Authorization: `Bearer ${token2}`,
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};

export const Config3 = {
  headers: {
    Authorization: `Bearer ${token2}`,
    "content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
};
