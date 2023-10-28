import React from "react";
import InfoCards from "./InfoCard";
import SunButton from "./SunButton";

const SolarInfo = () => {
  return (
      <div className="flex flex-col gap-18">
          <div className="pt-16 text-4xl mx-auto mt-8 text-purple-700 font-bold">
              Why Solar Energy?
          </div>
      
      <div className="pb-20 flex mx-2">
        <InfoCards
          name="Reduction in Greenhouse Gas Emissions"
          desc="Solar energy is a crucial tool in the fight against climate change. Traditional electricity generation, particularly from fossil fuels like coal, natural gas, and oil, releases greenhouse gases Solar power, on the other hand, produces electricity without emitting these harmful gases, helping to mitigate global warming and reduce air pollution.By replacing fossil fuels with solar power, we can significantly reduce carbon emissions, mitigating climate change."
        />

        <InfoCards
          name="Diversification of Energy Sources"
          desc=" Solar energy contributes to energy diversification. Relying on a single energy source, like fossil fuels, can make an energy system vulnerable to price fluctuations and supply disruptions. By incorporating solar power into the energy mix, a region can enhance its energy resilience and reduce its exposure to energy market volatility."
        />

        <InfoCards
          name="Energy Independence"
          desc="Solar energy contributes to energy independence by diversifying the energy sources in a region. Countries that rely on imported fossil fuels can reduce their dependence on foreign energy supplies, increasing their energy security. "
        />
        <InfoCards
          name="Job Creation"
          desc=" The solar industry has created numerous jobs in manufacturing, installation, and maintenance of solar panels."
        />

        <InfoCards
          name="Economic Benefits"
          desc="It can lead to cost savings over time,as it reduces electricity bills."
        />
      </div>
    </div>
  );
};

export default SolarInfo;
