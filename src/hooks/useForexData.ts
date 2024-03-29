import { useCallback, useEffect, useState } from "react";

const API_KEY = "RIBXT3XYLI69PC0Qs";

export enum Currency {
    EUR = 'EUR',
    MDL = 'MDL',
}

interface UseForexDataProps {
    currency: Currency;
}

export interface ForexData {
    series: {
        close: number;
        date: string;
    }[];
}

export const useForexData = ({ currency }: UseForexDataProps): ForexData | null => {
    const url = `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${currency}&to_symbol=USD&apikey=${API_KEY}`;
    const [data, setData] = useState<ForexData | null>(null);

    const fetchData = useCallback(() => {
        const localCopy = localStorage.getItem(currency);
        // use local copy, as free API keys are limited to 25 requests per day
        if (localCopy) {
            setData(JSON.parse(localCopy));
            return;
        }
        // fetch the actual data
        fetch(url, { headers: { 'User-Agent': 'request' } })
            .then((response) => response.json())
            .then((resData) => {
                if (resData?.['Time Series FX (Monthly)']) {
                    const series = Object.entries(resData['Time Series FX (Monthly)']).map(([date, values]: any) => ({
                        date,
                        close: parseFloat(values['4. close']),
                    }));

                    const data = { series };
                    localStorage.setItem(currency, JSON.stringify(data))
                    setData(data);
                }
            });
    }, [currency, url]);

    useEffect(() => {
        fetchData();
    }, [currency, fetchData]);

    return data;
}