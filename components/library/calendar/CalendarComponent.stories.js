import React from "react";
import CalendarComponent from "./CalendarComponent";
import { withDesign } from "storybook-addon-designs";

let calendarConfig = {
  cuts: {
    1: {
      ID: 1,
      PeriodLength: "30",
      StartDate: "2022-11-25 00:00:00",
      EndDate: "2023-02-25 23:59:00",
      Results: {
        1: {
          ID: 1,
          DBType: "individual",
          DBTable: 'promo_config."Promo_Leaderboards"',
          ColPeriod: "Period_id",
          ColUserID: "User_id",
          ColUserName: "User_Name",
          ColPosition: "Position",
          ColPoints: "Points",
          ColProgress: null,
          ColPrize: "Prize_amount",
          Prizes: [],
          Links: [],
          Components: {
            Leaderboard: {
              Rownum: "3",
              HashUser: "1",
              FixMe: "1",
              OnCal: "1",
              AfLogin: "0",
            },
          },
        },
      },
      Components: {
        Calendar: {
          Type: "normal",
          TextType: "default",
          ViewItems: "7",
          AfLogin: "0",
        },
      },
    },
  },
  componentData: {
    1: {
      ID: 1,
      PeriodLength: "30",
      StartDate: "2022-11-25 00:00:00",
      EndDate: "2023-02-25 23:59:00",
      Results: {
        1: {
          ID: 1,
          DBType: "individual",
          DBTable: 'promo_config."Promo_Leaderboards"',
          ColPeriod: "Period_id",
          ColUserID: "User_id",
          ColUserName: "User_Name",
          ColPosition: "Position",
          ColPoints: "Points",
          ColProgress: null,
          ColPrize: "Prize_amount",
          Prizes: [],
          Links: [],
          Components: {
            Leaderboard: {
              Rownum: "3",
              HashUser: "1",
              FixMe: "1",
              OnCal: "1",
              AfLogin: "0",
            },
          },
        },
      },
      Components: {
        Calendar: {
          Type: "normal",
          TextType: "default",
          ViewItems: "7",
          AfLogin: "0",
        },
      },
    },
  },
};
export default {
  title: "CalendarComponent",
  component: CalendarComponent,
  decorators: [withDesign],
};

const Template = (args) => (
  <CalendarComponent calendarConfig={calendarConfig} cutId={1} {...args} />
);
export const Main = Template.bind({});
Main.args = {
  daysPerView: 7,
  textColor: "white",
  backgroundColor: "dodgerblue",
  lockedDays: true,
};
Main.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/4qFfujblJzwTx8PKosVAPz/Apollo-Blend-Design-System?node-id=575%3A4192&t=U0YSqDbREMAhY29q-1",
    // url: "https://www.figma.com/file/4qFfujblJzwTx8PKosVAPz/Apollo-Blend-Design-System?node-id=575%3A4192&t=285bY4XpeZ4BedK8-1",
  },
};
