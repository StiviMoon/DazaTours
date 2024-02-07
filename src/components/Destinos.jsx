import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";

export default function HorizontalCard({ imageUrl, title, description, buttonText, buttonUrl }) {
  return (
    <Card className="w-[350px] h-[200px] xl:w-[600px] xl:h-[320px] flex-row bg-verde_o transition-transform transform-gpu hover:scale-105">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={imageUrl}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <a href={buttonUrl} className="inline-block">
          <Button variant="text" className="flex items-center gap-2 text-mostaza font-bold text-[12px] xl:text-lg">
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
        
        <p className="xl:text-[18.5px] xl:pt-4 text-white text-[12px] ">
          {description}
        </p>
      </CardBody>
    </Card>
  );
}
