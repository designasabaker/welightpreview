'use client';

import React,{useState} from "react";
import {Box, Button, Stack} from "@mui/material";


const pricingInfo = [
    {
        title: "FREE",
        cost: 0,
        freq: "Life time",
        link: "www.FREE.com",
        // highlighted: false
    },{
        title: "PREMIUM",
        cost: 40,
        freq: "Per month",
        link: "www.PREMIUM.com",
        // highlighted: true
    },{
        title: "ENTERPRISE",
        cost: 100,
        freq: "Life time",
        link: "www.ENTERPRISE.com",
        // highlighted: false
    }
]



export default function Pricing() {
    const [selected, setSelected] = React.useState(null);

    const handleSubscriptionClick = (event: any) => {
        event.stopPropagation(); // prevent the click from bubbling up to the parent, which would reset the state to null
        setSelected(event.target.id);
        let pricingIndex = event.target.id;
        console.log(pricingInfo[pricingInfo.findIndex(p => p.title === event.target.id)].link);
    }

    return (
        <div
            className="bg-none"
            onClick={() => setSelected(null)}
        >
            <div className="px-6 py-8 mx-auto">
                <h1 className="text-3xl font-semibold text-center text-black capitalize lg:text-4xl">Pricing Plan</h1>

                <p className="max-w-2xl mx-auto mt-4 text-black xl:mt-6">
                    At WeLight Tech, we are thrilled to offer three diverse and flexible plans tailored to meet your unique needs. We have carefully designed these packages to ensure maximum value and satisfaction for you. Let's take a closer look at each of the plans:
                </p>

                <Stack className="bg-none grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3" direction="row" spacing={2}>
                    {
                        pricingInfo.map((p, index) => {
                            return (
                                <Box
                                    className={
                                        !(selected === p.title )?
                                            "w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg hover:border-b-8"
                                            : "w-full p-8 space-y-8 text-center hover:border-b-8 bg-brandDeepBlue text-white rounded-lg"
                                    }
                                    key={p.title}
                                >
                                    <p className="font-medium uppercase text-inherit">
                                        {p.title.toUpperCase()}
                                    </p>

                                    <h2 className="text-5xl font-bold uppercase text-inherit">
                                        ${p.cost}
                                    </h2>

                                    <p className="font-medium text-inherit">
                                        {p.freq}
                                    </p>
                                    <Button
                                        id={p.title}
                                        className={
                                            !(selected === p.title) ?
                                                "z-50 w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-brandBlue rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                                                : "z-50 w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80"
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