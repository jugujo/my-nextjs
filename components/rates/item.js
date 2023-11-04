import axios from 'axios';
import {load} from 'cheerio';

export default async function RateItem() {

  const rateInfos = await getHtmlInfo()

  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
        <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">通貨</th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">レート</th>
        </tr>
        </thead>
        <tbody>
            {rateInfos.map((item, index) => (
                <tr>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{item.rate}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

async function getHtmlInfo() {
  const rateInfoss = axios.get('https://finance.yahoo.co.jp/fx/convert?bid=1&base=USD&counter=JPY').then((response) => {
    const $ = load(response.data);
    const rateInfos = [];
    

    $('._CurrencyRateList__rateItem_dld71_46').each(function (i, elem) {
        if(i == 59 || i == 67 || i == 67  || i == 71 ){
            const name = $(elem).find('._CurrencyRateItem__currencyName_1ana0_13').text();
            const rate = $(elem).find('._StyledNumber__value_x0ii7_10').text();
            rateInfos.push({name, rate});
        }

    })
    return rateInfos;
})

return rateInfoss;
}