import { useMemo } from "react";
import { ForexData } from "../hooks/useForexData"
import ChartComponent from "react-apexcharts";

const chartConfig = {
    type: "line" as const,
    height: 500,
    series: [
        {
            name: "Close Price",
            data: [] as number[],
        },
    ],
    options: {
        chart: {
            toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 0,
                tools: {
                    download: false,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    customIcons: []
                },
                autoSelected: 'zoom' as const
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#020617"],
        stroke: {
            lineCap: "round" as const,
            curve: "smooth" as const,
        },
        xaxis: {
            categories: [] as string[],
        },
        grid: {
            show: true,
            borderColor: "#dddddd",
            strokeDashArray: 5,
            padding: {
                top: 5,
                right: 20,
            },
        },
        fill: {
            opacity: 0.8,
        },
    },
};

interface Props {
    data: ForexData | null;
}

export const Chart = ({ data }: Props) => {
    const filledConfig = useMemo(() => {
        const reversedData = data?.series?.slice()?.reverse() || [];
        const filledConfig = {
            ...chartConfig,
            series: chartConfig.series.map(
                (serie) => ({
                    ...serie,
                    data: reversedData.map((point) => point.close)
                }),
            ),
            options: {
                ...chartConfig.options, xaxis: {
                    ...chartConfig.options.xaxis,
                    categories: reversedData.map((point) => point.date)
                }
            },
        };
        return filledConfig;
    }, [data]);

    return <div>
        <ChartComponent {...filledConfig} />
    </div>
}