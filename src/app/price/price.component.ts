import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-price",
  templateUrl: "./price.component.html",
  styleUrls: ["./price.component.css"],
})
export class PriceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  cardDataArray = [
    {
      id: 1,
      price: 4,
      currency: "$",
      period: "month",
      planName: "starter",
      options: [
        {
          name: "Up to 5 users",
        },
        {
          name: "Basic support on Github",
        },
        {
          name: "Monthly updates",
        },
        {
          name: "Free cancelation",
        },
      ],
    },
    {
      id: 2,
      price: 20,
      currency: "$",
      period: "weekly",
      planName: "starter",
      isPopular: true,
      options: [
        {
          name: "Up to 5 users",
        },
        {
          name: "Basic support on Github",
        },
        {
          name: "Monthly updates",
        },
        {
          name: "Free cancelation",
        },
      ],
    },
    {
      id: 3,
      price: 60,
      currency: "$",
      period: "weekly",
      planName: "starter",
      options: [
        {
          name: "Up to 5 users",
        },
        {
          name: "Basic support on Github",
        },
        {
          name: "Monthly updates",
        },
        {
          name: "Free cancelation",
        },
      ],
    },
    {
      id: 4,
      price: 100,
      currency: "$",
      period: "yearly",
      planName: "starter",
      options: [
        {
          name: "Up to 5 users",
        },
        {
          name: "Basic support on Github",
        },
        {
          name: "Monthly updates",
        },
        {
          name: "Free cancelation",
        },
      ],
    },
  ];
}
