"use client";
import React from "react";
import Dashboard from "../components/Dashboard";
import { useEffect } from "react";
import { userAgent } from "next/server";
import { useInsertionEffect } from "react";
import axios from "axios";

const Dash = () =>
{
    return (
        <Dashboard />
    );
};

export default Dash;