
import axios from 'axios';
import cheerio from 'cheerio';



export default async function Page1() {

  const pageInfo = await getHtml()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <title>プロジェクト</title>
      test
    </div>
  )
}

async function getHtml() {
  axios.get('https://buttercms.com/docs/api/').then((response) => {
    // `response` is an HTTP response object, whose body is contained in it's `data` attribute
    
    const $ = cheerio.load('<h2 class="title">Hello world</h2>');
    $('h2.title').text();
    console.log($('h2.title').text())
    // This will print the HTML source code to the console
    // console.log(response.data)
})
}