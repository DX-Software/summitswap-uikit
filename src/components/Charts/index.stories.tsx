import { fromUnixTime } from "date-fns";
import { random } from "lodash";
import React, { useMemo, useState } from "react";
import getLocale from "../../util/getLocale";
import Box from "../Box/Box";
import { Text } from "../Text";
import BarChartComponent from "./BarChart";
import CandleChartComponent from "./CandleChart";
import ChartCardComponent from "./ChartCard";
import LineChartComponent from "./LineChart";
import { ChartData, ChartEntry, PriceChartEntry, TokenData } from "./types";

const ONE_DAY_IN_SECONDS = 86400;
const START_TIMESTAMP = 1643932800;

export default {
  title: "Components/Info Charts",
  component: BarChartComponent,
  argTypes: {},
};

export const BarChart: React.FC = () => {
  const minValue = 10;
  const maxValue = 100;
  const endTimestamp = Math.floor(Date.now() / 1000);
  const startTimestamp = endTimestamp - 60 * 60 * 24 * 7;

  const locale = getLocale();
  const endTime = fromUnixTime(endTimestamp).toLocaleString(locale, {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  const chartData: ChartData[] = useMemo(() => {
    return [...Array(30)].map(() => {
      return {
        time: fromUnixTime(random(startTimestamp, endTimestamp, false)),
        value: random(minValue, maxValue, true),
      };
    });
  }, []);

  const [volumeHover, setVolumeHover] = useState<number | undefined>();
  const [volumeDateHover, setVolumeDateHover] = useState<string | undefined>();

  return (
    <Box height="250px">
      <Text>Date: {volumeDateHover ?? endTime}</Text>
      <BarChartComponent
        data={chartData}
        setHoverValue={setVolumeHover}
        setHoverDate={setVolumeDateHover}
      />
      {volumeHover && <Text>Volume: {volumeHover}</Text>}
    </Box>
  );
};

export const LineChart: React.FC = () => {
  const minValue = 10;
  const maxValue = 100;
  const endTimestamp = Math.floor(Date.now() / 1000);
  const startTimestamp = endTimestamp - 60 * 60 * 24 * 7;

  const locale = getLocale();
  const endTime = fromUnixTime(endTimestamp).toLocaleString(locale, {
    year: "numeric",
    day: "numeric",
    month: "short",
  });

  const chartData: ChartData[] = useMemo(() => {
    return [...Array(18)].map(() => {
      return {
        time: fromUnixTime(random(startTimestamp, endTimestamp, false)),
        value: random(minValue, maxValue, true),
      };
    });
  }, []);

  const [volumeHover, setVolumeHover] = useState<number | undefined>();
  const [volumeDateHover, setVolumeDateHover] = useState<string | undefined>();

  return (
    <Box height="250px">
      <Text>Date: {volumeDateHover ?? endTime}</Text>
      <LineChartComponent
        data={chartData}
        setHoverValue={setVolumeHover}
        setHoverDate={setVolumeDateHover}
      />
      {volumeHover && <Text>Volume: {volumeHover}</Text>}
    </Box>
  );
};

export const CandleChart: React.FC = () => {
  const priceData: PriceChartEntry[] = useMemo(() => {
    let previousClose = random(1000, 70000, true);
    return [...Array(100)].map((value, index) => {
      const open = previousClose;
      const close = random(1000, 70000, true);

      previousClose = close;

      return {
        time: START_TIMESTAMP + ONE_DAY_IN_SECONDS * index,
        open: open,
        close: close,
        high: close * random(1, 1.5, true),
        low: open * random(0, 1, true),
      };
    });
  }, []);

  const endTime = fromUnixTime(
    priceData[priceData.length - 1].time
  ).toLocaleString();

  const [value, setValue] = useState<number | undefined>();
  const [label, setLabel] = useState<string | undefined>();

  return (
    <Box height="250px">
      <Text>Label: {label ?? endTime}</Text>
      <CandleChartComponent
        data={priceData}
        setValue={setValue}
        setLabel={setLabel}
      />
      {value && <Text>Value: {value}</Text>}
    </Box>
  );
};

export const ChartCard: React.FC = () => {

  const tokenData: TokenData = {
    address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
    exists: true,
    liquidityToken: 111.42769231655895,
    liquidityUSD: 25027.86699576138,
    liquidityUSDChange: -3.5857606347562667,
    name: "Wrapped BNB",
    priceUSD: 224.61083484219353,
    priceUSDChange: -2.8746629133876134,
    priceUSDChangeWeek: -3.2881935813323686,
    symbol: "WBNB",
    txCount: 13,
    volumeUSD: 6080.632637119386,
    volumeUSDChange: 67.83305395679365,
    volumeUSDWeek: 29619.161739890464,
  };

  const chartEntries: ChartEntry[] = useMemo(() => {
    return [...Array(30)].map((value, index) => {
      return {
        date: START_TIMESTAMP + ONE_DAY_IN_SECONDS * index,
        volumeUSD: random(1000, 70000, true),
        liquidityUSD: random(1000, 70000, true),
      };
    });
  }, []);

  const tokenPriceData: PriceChartEntry[] = useMemo(() => {
    let previousClose = random(1000, 70000, true);
    return [...Array(100)].map((value, index) => {
      const open = previousClose;
      const close = random(1000, 70000, true);

      previousClose = close;

      return {
        time: START_TIMESTAMP + ONE_DAY_IN_SECONDS * index,
        open: open,
        close: close,
        high: close * random(1, 1.5, true),
        low: open * random(0, 1, true),
      };
    });
  }, []);

  return (
    <Box>
      <ChartCardComponent
        variant="token"
        chartData={chartEntries}
        tokenData={tokenData}
        tokenPriceData={tokenPriceData}
      />
    </Box>
  );
};
