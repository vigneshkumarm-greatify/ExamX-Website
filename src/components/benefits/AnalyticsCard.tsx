import { ArrowDownIcon, ArrowDownTrayIcon, ArrowUpIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function AnalyticsCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[20px] lg:h-[500px] flex flex-col"
      style={{
        background:
          "linear-gradient(-70.52deg, #9b85dc 23.43%, #ffffff 59.9%)",
      }}
    >
      {/* Title block — absolute on lg */}
      <div className="relative z-10 flex max-w-[516px] flex-col gap-2 px-6 pt-6 lg:pt-9 lg:px-9">
        <h3 className="text-[23.04px] font-semibold leading-[1.2] tracking-[-0.46px] text-chalk-green-500">
          See everything. In real time
        </h3>
        <p className="max-w-[411px] text-base font-medium leading-[1.5] tracking-[-0.16px] text-[#71717a]">
          Live exam dashboards, item-level analysis, difficulty index,
          discrimination index, and performance trends. Export to PDF, Excel, or
          CSV in one click.
        </p>
      </div>

      {/* Purple pie chart container — absolute centered on lg */}
      <div
        className="relative mx-auto -mb-6 mt-12 flex h-auto  flex-col rounded-[12px] bg-purple-50 p-5 "
      >
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col  gap-1 bg">
            <p className="text-[16px] font-semibold text-chalk-green-500">
              Live Exam Dashboard
            </p>
            <div className="h-[6px] w-[43px] rounded-[8px] bg-purple-100 opacity-30" />
          </div>
          <button className="flex items-center gap-1.5 rounded-[8px] border border-[#e4e4e7] bg-white px-3 py-1.5 text-[11px] font-medium text-[#71717a]">
      <ArrowDownTrayIcon className="h-4 w-4 text-purple-400" />
            Export
          </button>
        </div>

        {/* Legend */}
        <div className="mt-3 flex gap-4">
          <LegendDot color="#4e33a0" label="Above average" />
          <LegendDot color="#9b85dc" label="Average" />
          <LegendDot color="#d3caf0" label="Poor" />
        </div>

        {/* Pie chart — single SVG image */}
        <div className="relative mx-auto mt-3 w-full h-auto px-4">
          <Image
            src="/images/illustrations/analytics-piechart.svg"
            alt="Exam analytics pie chart"
            width={227}
            height={218}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Export format buttons — stacked right of pie */}
      <div className="hidden lg:flex absolute left-[481px] top-[200.67px] w-[58px] flex-col gap-[9px]">
        {["PDF", "Excel", "CVS"].map((fmt) => (
          <span
            key={fmt}
            className="rounded-[8px] border-[0.864px] border-[#e4e4e7] bg-white px-4 py-2 text-center text-[11.11px] font-semibold text-[#71717a]"
          >
            {fmt}
          </span>
        ))}
      </div>

      {/* Item Analysis floating badge */}
      <div
        className="flex md:hidden lg:flex absolute items-center gap-2 rounded-[8px] border border-purple-100 bg-purple-50 px-3 py-2"
        style={{
          left: "calc(50% + 13px - 162px - 120.5px)",
          top: "calc(180.67px + 164px)",
          boxShadow: "0px 4px 50px rgba(0,0,0,0.1)",
        }}
      >
        <span className="w-[72px] text-[11px] font-semibold text-chalk-green-500">
          Item Analysis
        </span>
        <Image
          src="/images/illustrations/analytics-sparkline-item.svg"
          alt=""
          width={49}
          height={24}
        />
        <div className="flex size-[24px] items-center justify-center rounded-full bg-purple-100">
          <ArrowDownIcon className="h-4 w-4 text-purple-500" />
        </div>
        <span className="text-[11px] font-semibold text-purple-500">5%</span>
      </div>

      {/* Performance Trends floating badge */}
      <div
        className="lg:flex md:hidden flex absolute left-[307px] top-[415.67px] items-center gap-2 rounded-[8px] border border-purple-100 bg-purple-50 px-3 py-2"
        style={{ boxShadow: "0px 4px 50px rgba(0,0,0,0.1)" }}
      >
        <span className="w-[133px] text-[11px] font-semibold text-chalk-green-500">
          Performance Trends
        </span>
        <Image
          src="/images/illustrations/analytics-sparkline-trends.svg"
          alt=""
          width={48}
          height={24}
        />
        <span className="text-[11px] font-semibold text-chalk-green-500">
          Good
        </span>
      </div>

    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="size-[10px] rounded-[2px]"
        style={{ backgroundColor: color }}
      />
      <span className="text-[11.11px] font-medium text-chalk-green-500">
        {label}
      </span>
    </div>
  );
}
