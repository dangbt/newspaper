import React, { useMemo, useEffect } from "react";
import Layout from "layouts/main-layout";
import Chart from "chart.js";
import Table from "components/table";
import Select from "components/select";
import { DateInput } from "@blueprintjs/datetime";
import { currencyFormat } from "utils/format";

const jsDateFormatter = {
  // note that the native implementation of Date functions differs between browsers
  formatDate: date => date.toLocaleDateString(),
  parseDate: str => new Date(str),
  placeholder: "DD/MM/YYYY"
};

const data = [
  {
    currency: "DOJI HN",
    buyPriceToday: 200000,
    sellPriceToday: 2300000,
    buyPriceLastday: 2004000,
    sellPriceLastday: 2003000
  },
  {
    currency: "DOJI SG",
    buyPriceToday: 200000,
    sellPriceToday: 2300000,
    buyPriceLastday: 2004000,
    sellPriceLastday: 2003000
  },
  {
    currency: "DOJI HN",
    buyPriceToday: 200000,
    sellPriceToday: 2300000,
    buyPriceLastday: 2004000,
    sellPriceLastday: 2003000
  }
];

export default function GoldPrice() {
  useEffect(() => {
    const ctx = document.getElementById("chart-id").getContext("2d");
    const lineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "Mua vào",
            data: [12, 19, 3, 99, 2, 3],
            backgroundColor: "#48bb78",
            borderColor: "#48bb78",
            borderWidth: 3,
            fill: 0
          },
          {
            label: "Bán ra",
            data: [99, 19, 3, 5, 2, 3],
            backgroundColor: "#f56565",
            borderColor: "#f56565",
            borderWidth: 3,
            fill: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        title: {
          display: true,
          position: "left",
          text: "ahih"
        },
        legend: {
          position: "bottom"
        }
      }
    });
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "_",
        columns: [
          {
            Header: "Đơn vị: đồng/lượng",
            accessor: "currency",
            className: " border-0 border-t border-catalina-blue text-14 italic",
            Cell: ({ value }) => {
              return <p className="text-center">{value}</p>;
            }
          }
        ]
      },
      {
        Header: `Hôm nay ${`(13/10/2020)`}`,
        columns: [
          {
            Header: "Giá mua",
            accessor: "buyPriceToday",
            className: " border-0 border-t border-catalina-blue",
            Cell: ({ value }) => {
              return <p className="text-right">{currencyFormat(value)}</p>;
            }
          },
          {
            Header: "Giá bán",
            accessor: "sellPriceToday",
            className: " border-0 border-t border-catalina-blue",
            Cell: ({ value }) => {
              return <p className="text-right">{currencyFormat(value)}</p>;
            }
          }
        ]
      },
      {
        Header: `Hôm qua ${`(12/10/2020)`}`,
        columns: [
          {
            Header: "Giá mua",
            accessor: "buyPriceLastday",
            className: " border-0 border-t border-catalina-blue",
            Cell: ({ value }) => {
              return <p className="text-right">{currencyFormat(value)}</p>;
            }
          },
          {
            Header: "Giá bán",
            accessor: "sellPriceLastday",
            className: " border-0 border-t border-catalina-blue",
            Cell: ({ value }) => {
              return <p className="text-right">{currencyFormat(value)}</p>;
            }
          }
        ]
      }
    ],
    []
  );
  return (
    <Layout>
      <div className="w-3/4 mb-8 mr-0 md:mr-8">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="my-4 font-bold text-yellow-600 text-24">Giá vàng</h1>
            <div className="relative z-0">
              <DateInput {...jsDateFormatter} locale="vi" value={new Date()} />
            </div>
          </div>
          <div className="w-full overflow-auto">
            <Table columns={columns} data={data} />
          </div>
          <h1 className="mt-2 font-bold text-16">
            Cập nhật 23:26 (13/10/2020)
          </h1>
          <p className="text-14">
            Công ty CP Dịch vụ trực tuyến Rồng Việt VDOS
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="my-4 font-bold text-yellow-600 text-24">
              Biểu đồ giá vàng 30 ngày gần nhất
            </h1>
            <div>
              <span className="mr-2 font-bold text-14">Chọn mã vàng</span>
              <Select>
                <option>SJC HN</option>
                <option>SJC HN</option>
                <option>SJC HN</option>
                <option>SJC HN</option>
                <option>SJC HN</option>
              </Select>
            </div>
          </div>
          <div className="relative">
            <canvas id="chart-id"></canvas>
          </div>
        </div>
      </div>
    </Layout>
  );
}
