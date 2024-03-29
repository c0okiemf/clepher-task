import { useState } from "react";
import { Chart } from "../components/Chart";
import { PageWrapper } from "../components/PageWrapper";
import { Currency, useForexData } from "../hooks/useForexData";
import { Tabs } from "../components/Tabs";

export const ForexPage = () => {
    const [currency, setCurrency] = useState(Currency.EUR);

    const data = useForexData({ currency });
    return (
        <PageWrapper>
            <div className="container xl mx-auto shadow-xl border rounded-xl mb-8">
                <div className="border-b">
                    <h1 className="text-xl font-bold tracking-tight text-gray-900 lg:text-4xl text-center py-6">
                        Forex Data
                    </h1>
                </div>
                <div className="p-6">
                    <p className="text-center text-md lg:text-lg">
                        Over the past few years, the forex exchange rates have experienced significant fluctuations, influenced by a myriad of global economic factors. Political events, monetary policies, and market sentiment have all played a role in shaping the trends observed in currency values. For instance, major currencies have seen periods of both strengthening and weakening against each other, reflecting the dynamic and interconnected nature of the global economy12. This period has underscored the importance of staying informed and agile in the forex market, as rates can shift rapidly, presenting both opportunities and risks for traders and businesses alike
                    </p>
                </div>

                <Tabs<Currency>
                    options={Object.values(Currency)}
                    onSelectOption={(opt) => setCurrency(opt)}
                    selectedOption={currency}
                />

                <div className="p-6">
                    <Chart data={data} />
                </div>
            </div>
        </PageWrapper>
    );
}