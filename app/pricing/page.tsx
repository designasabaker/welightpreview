'use client';

import React from "react";
import {Box, Button, Stack} from "@mui/material";


const pricingInfo = [
    {
        title: "FREE",
        cost: 0,
        freq: "Life time",
        link: "www.FREE.com",
        highlighted: false
    },{
        title: "PREMIUM",
        cost: 40,
        freq: "Per month",
        link: "www.PREMIUM.com",
        highlighted: true
    },{
        title: "ENTERPRISE",
        cost: 100,
        freq: "Life time",
        link: "www.ENTERPRISE.com",
        highlighted: false
    }
]


export default function Pricing() {


    const handleSubscriptionClick = (event: any) => {
        let pricingIndex = event.target.id
        console.log(pricingInfo[pricingIndex].link)
    }

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Pricing Plan</h1>

                <p className="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas magni libero consequuntur voluptatum velit amet id repudiandae ea, deleniti laborum in neque eveniet.
                </p>

                <Stack className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3" direction="row" spacing={2}>
                    {
                        pricingInfo.map((p, index) => {
                            return (
                                <Box
                                    className={
                                        !p.highlighted ?
                                            "w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700"
                                            : "w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg"
                                    }
                                    key={index}
                                >
                                    <p className="font-medium text-gray-500 uppercase dark:text-gray-300">
                                        {p.title.toUpperCase()}
                                    </p>

                                    <h2 className="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                                        ${p.cost}
                                    </h2>

                                    <p className="font-medium text-gray-500 dark:text-gray-300">
                                        {p.freq}
                                    </p>
                                    <Button
                                        id={index.toString()}
                                        className={
                                            !p.highlighted ?
                                                "w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                                : "w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
                                        }
                                        onClick={handleSubscriptionClick}
                                    >
                                        Start Now
                                    </Button>
                                </Box>
                            )
                        })
                    }

                </Stack>
            </div>
        </div>
    );
}