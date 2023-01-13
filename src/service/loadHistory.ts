import localforage from "localforage";
import { StationHistory } from "../types";

const TODAY = new Date().toISOString().slice(0, 13) + ":00:00";

export async function loadHistory(
  estacio: string,
  contaminant: string = "NO2"
): Promise<StationHistory> {
  const key = `estacio:${estacio}#contaminant:${contaminant}:${TODAY}`;
  let csv = (await localforage.getItem(key)) as string;
  if (!csv) {
    csv = await loadData(estacio, contaminant);
    await localforage.setItem(key, csv);
  }

  const result = parseCsv(csv) as StationHistory;
  result.forEach((x) => {
    const date = new Date(x.data);
    const day = date.getDay();

    x.date = date;
    x.year = date.getFullYear();
    x.month = date.getMonth() + 1;
    x.day = date.getDate();
    x.dayOfTheWeek = day < 1 ? 7 : day;
    x.weekend = day === 0 || day === 6;

    x.h01 = toNumber(x.h01);
    x.h02 = toNumber(x.h02);
    x.h03 = toNumber(x.h03);
    x.h04 = toNumber(x.h04);
    x.h05 = toNumber(x.h05);
    x.h06 = toNumber(x.h06);
    x.h07 = toNumber(x.h07);
    x.h08 = toNumber(x.h08);
    x.h09 = toNumber(x.h09);
    x.h10 = toNumber(x.h10);
    x.h11 = toNumber(x.h11);
    x.h12 = toNumber(x.h12);
    x.h13 = toNumber(x.h13);
    x.h14 = toNumber(x.h14);
    x.h15 = toNumber(x.h15);
    x.h16 = toNumber(x.h16);
    x.h17 = toNumber(x.h17);
    x.h18 = toNumber(x.h18);
    x.h19 = toNumber(x.h19);
    x.h20 = toNumber(x.h20);
    x.h21 = toNumber(x.h21);
    x.h22 = toNumber(x.h22);
    x.h23 = toNumber(x.h23);
    x.h24 = toNumber(x.h24);
  });

  return result.filter((x) => x.nom_estacio);
}

async function loadData(estacio: string, contaminant: string) {
  // const data = escape(
  //   `data between '2010-01-01T00:00:00' and '2021-02-28T00:00:00'AND nom_estacio='${estacio}'AND CONTAMINANT='${contaminant}'`
  // )

  const data =
    `data between '2010-01-01T00:00:00' and '${TODAY}'AND nom_estacio='${estacio}'AND CONTAMINANT='${contaminant}'`
      .replace(/ /g, "%20")
      .replace(/'/g, "%27");
  const url = `https://analisi.transparenciacatalunya.cat/resource/tasf-thgu.csv?$limit=2853004&$offset=0&$where=${data}`;

  const request = await fetch(url);
  return request.text();
}

function toNumber(x: any) {
  if (x === "") return null;
  return +x;
}

function parseCsv(csv: string) {
  const [header, ...lines] = csv
    .replace(/"+/g, "")
    .split("\n")
    .map((x: string) => x.split(","));

  return lines.map((line) => {
    const result: any = {};
    header.forEach((key, index) => {
      result[key] = line[index];
    });
    return result;
  });
}
