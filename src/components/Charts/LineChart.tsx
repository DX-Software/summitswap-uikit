import React, { Dispatch, SetStateAction, useEffect } from "react";
import {
  Area, AreaChart, ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from "recharts";
import { useTheme } from "styled-components";
import { formatAmount } from "../../util/formatInfoNumbers";
import getLocale from "../../util/getLocale";
import { LineChartLoader } from "../ChartLoaders";
import { HoverUpdaterProps } from "./types";

export type LineChartProps = {
  data: any[];
  setHoverValue: Dispatch<SetStateAction<number | undefined>>; // used for value on hover
  setHoverDate: Dispatch<SetStateAction<string | undefined>>; // used for label of value
} & React.HTMLAttributes<HTMLDivElement>;

// Calls setHoverValue and setHoverDate when part of chart is hovered
// Note: this NEEDs to be wrapped inside component and useEffect, if you plug it as is it will create big render problems (try and see console)
const HoverUpdater = ({
  locale,
  payload,
  setHoverValue,
  setHoverDate,
}: HoverUpdaterProps) => {
  useEffect(() => {
    setHoverValue(payload.value);
    setHoverDate(
      payload.time.toLocaleString(locale, {
        year: "numeric",
        day: "numeric",
        month: "short",
      })
    );
  }, [locale, payload.value, payload.time, setHoverValue, setHoverDate]);

  return null;
};

/**
 * Note: remember that it needs to be mounted inside the container with fixed height
 */
const LineChart = ({ data, setHoverValue, setHoverDate }: LineChartProps) => {
  const theme = useTheme();
  if (!data || data.length === 0) {
    return <LineChartLoader />;
  }
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        width={300}
        height={308}
        margin={{
          top: 5,
          right: 15,
          left: 0,
          bottom: 5,
        }}
        onMouseLeave={() => {
          if (setHoverDate) setHoverDate(undefined);
          if (setHoverValue) setHoverValue(undefined);
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.colors.inputSecondary}
              stopOpacity={0.5}
            />
            <stop
              offset="100%"
              stopColor={theme.colors.primary}
              stopOpacity={0}
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="time"
          axisLine={false}
          tickLine={false}
          tickFormatter={(time) =>
            time.toLocaleDateString(undefined, { day: "2-digit" })
          }
          minTickGap={10}
        />
        <YAxis
          dataKey="value"
          tickCount={6}
          scale="linear"
          axisLine={false}
          tickLine={false}
          fontSize="12px"
          tickFormatter={(val) => `$${formatAmount(val)}`}
          orientation="right"
          tick={{ dx: 10, fill: theme.colors.textSubtle }}
        />
        <Tooltip
          cursor={{ stroke: theme.colors.primary }}
          contentStyle={{ display: "none" }}
          formatter={(tooltipValue: any, name: any, props: any) => (
            <HoverUpdater
              locale={getLocale()}
              payload={props.payload}
              setHoverValue={setHoverValue}
              setHoverDate={setHoverDate}
            />
          )}
        />
        <Area
          dataKey="value"
          type="monotone"
          stroke={theme.colors.primary}
          fill="url(#gradient)"
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
